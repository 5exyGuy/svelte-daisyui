#![deny(clippy::all)]

mod parser;
mod markup;

#[macro_use]
extern crate napi_derive;

use napi::{Env, Error, JsBuffer, Result, Status};

#[napi(object)]
pub struct PreprocessorOptions {
    pub screen_sizes: std::collections::HashMap<String, String>,
    pub include_defaults: bool,
    pub include_as_global: bool,
}

#[napi(object)]
pub struct MarkupPreprocessorInput {
    pub content: String,
    pub filename: Option<String>,
}

#[napi(object)]
pub struct PreprocessorInput {
    pub content: String,
    pub attributes: std::collections::HashMap<String, String>,
    pub markup: String,
    pub filename: Option<String>,
}

#[napi(object)]
pub struct Processed {
    pub code: String,
    pub map: Option<String>,
    pub dependencies: Option<Vec<String>>,
}

#[napi]
pub struct PreprocessorGroup {
    options: PreprocessorOptions,
    current_dir: String,
}

#[napi]
impl PreprocessorGroup {
    #[napi(constructor)]
    pub fn new(options: Option<PreprocessorOptions>) -> Self {
        Self {
            options: options.unwrap_or(PreprocessorOptions {
                screen_sizes: std::collections::HashMap::new(),
                include_defaults: true,
                include_as_global: false,
            }),
            current_dir: std::env::current_dir()
                .unwrap()
                .to_str()
                .unwrap()
                .to_string(),
        }
    }

    #[napi]
    pub fn markup(&mut self, input: MarkupPreprocessorInput) -> Result<Processed> {
        let content = input.content;
        let re = regex::Regex::new(r"<style([\S\s]*?)>([\S\s]*?)</style>").unwrap();
        let caps = re.captures(content.as_str());

        match caps {
            Some(x) => {
                let attributes_str = x.get(1).map_or("", |m| m.as_str()).trim();
                let attributes = attributes_str
                    .split(' ')
                    .map(|s| s.split('=').collect::<Vec<&str>>())
                    .map(|v|
                        if v.len() == 2 {
                            (v[0], v[1].trim_matches(|char| char == '"' || char == '{' || char == '}'))
                        } else {
                            (v[0], "true")
                        }
                    )
                    .collect::<std::collections::HashMap<&str, &str>>();
            }
            None => {
                // if file ends with root.svelte
                let file_name = input.filename.unwrap();
                if !file_name.ends_with("root.svelte") && !file_name.ends_with("layout.svelte") && !file_name.ends_with("error.svelte") {
                    println!("{}", content);

                    // content.insert_str(0, "<style global>.test { color: red; }</style>");
                }
            }
        }


        // Processed {
        //     code: content + "<style global>.test { color: red; }</style>",
        //     map: None,
        //     dependencies: None,
        // }
        Ok(Processed {
            code:  Env::create_string(content + "<style global>.test { color: red; }</style>"),
            map: None,
            dependencies: None,
        })
    }

    #[napi]
    pub fn script(&mut self, input: PreprocessorInput) -> Result<Processed> {
        println!("Script -> {}", input.filename.unwrap());

        Ok(Processed {
            code: input.content,
            map: None,
            dependencies: None,
        })
    }

    #[napi]
    pub fn style(&mut self, input: PreprocessorInput) -> Result<Processed> {
        println!("Style -> {}", input.filename.unwrap());

        Ok(Processed {
            code: input.content,
            map: None,
            dependencies: None,
        })
    }
}
