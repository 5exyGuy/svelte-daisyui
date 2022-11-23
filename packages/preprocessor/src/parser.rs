// pub fn parse_component(component_name: &str, code: &str) {
    // let regex_str = format!("{}(\\s[^]*?)?><\\/{}>", component_name, component_name).as_str();
    // let re = regex::Regex::new(regex_str).unwrap();

    // re.captures_iter(code)
    //     .map(|cap| {
    //         let attributes_str = cap.get(1).map_or("", |m| m.as_str()).trim();
    //         let attributes = attributes_str
    //             .split(" ")
    //             .map(|attr| {
    //                 let mut split = attr.split("=");
    //                 let key = split.next().unwrap();
    //                 let value = split.next().unwrap();
    //                 (key, value)
    //             })
    //             .collect();
    //         attributes
    //     })
// }
