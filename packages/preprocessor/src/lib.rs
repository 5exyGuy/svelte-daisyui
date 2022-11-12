
#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi(object)]
pub struct PreprocessorOptions {
    pub screen_sizes: std::collections::HashMap<String, String>,
    pub include_defaults: bool,
    pub include_as_global: bool,
}

#[napi(object)]
pub struct MarkupInput {
    pub content: String,
    pub filename: String,
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
}

#[napi]
impl PreprocessorGroup {
    #[napi(constructor)]
    pub fn new(options: Option<PreprocessorOptions>) -> Self {
        Self { options: options.unwrap_or(PreprocessorOptions { screen_sizes: std::collections::HashMap::new(), include_defaults: true, include_as_global: false }) }
    }

    #[napi]
    pub fn markup(&mut self, input: MarkupInput) -> Processed {
        println!("{}", input.content);

        Processed {
            code: Some(input.content),
            map: None,
            dependencies: None,
        }
    }
}
