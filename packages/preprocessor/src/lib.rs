#![deny(clippy::all)]

mod parser;
mod markup;

#[macro_use]
extern crate napi_derive;

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
    pub code: Option<String>,
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
    pub fn markup(&mut self, input: MarkupPreprocessorInput) -> Processed {
        let mut content = input.content;
        let re = regex::Regex::new(r#"<style([^]*?)?>([^]*?)<\/style>"#).unwrap();
        let caps = re.captures(content.as_str()).unwrap();

        let attributes_str = caps.get(1).map_or("", |m| m.as_str()).trim();
        let attributes = attributes_str
            .split(' ')
            .map(|s| s.split('=').collect::<Vec<&str>>())
            .filter(|v| v.len() == 2)
            .map(|v| (v[0].to_string(), v[1].to_string()))
            .collect::<std::collections::HashMap<String, String>>();

        Processed {
            code: Some(String::from("")),
            map: None,
            dependencies: None,
        }
    }

    #[napi]
    pub fn script(&mut self, input: PreprocessorInput) -> Processed {
        println!("Script -> {}", input.filename.unwrap());

        Processed {
            code: Some(input.content),
            map: None,
            dependencies: None,
        }
    }

    #[napi]
    pub fn style(&mut self, input: PreprocessorInput) -> Processed {
        println!("Style -> {}", input.filename.unwrap());



        Processed {
            code: Some(input.content),
            map: None,
            dependencies: None,
        }
    }
}
