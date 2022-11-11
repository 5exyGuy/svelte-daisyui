
#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi(object)]
pub struct MarkupInput {
    pub content: String,
    pub filename: String,
}

#[napi(object)]
pub struct MarkupResult {
    pub code: Option<String>,
    pub dependencies: Option<Vec<String>>,
}

#[napi]
pub fn markup(input: MarkupInput) -> MarkupResult  {
    MarkupResult {
        code: Some(input.content),
        dependencies: None,
    }
}
