// The bindgen crate export a macro for handling the action of exporting a function to JS.
// The actual macro is defined at the eol.  
use wasm_bindgen::prelude::wasm_bindgen;

// The websystem crate defines several logging functions.
// The number in log_* refers to how many values can be logged.
use web_sys::console::log_1 as log;

use base64::decode;



#[wasm_bindgen]

pub fn grayscale(encoded_file: &str) {
    // Borrowing the str because we are not going to update the string directly.
    // log(&encoded_file.into()); // Type conversion str to JS.

    log(&"Grayscale called".into());

    let base64_to_vector = decode(encoded_file).unwrap();
    log(&"Image decoded".into());


}