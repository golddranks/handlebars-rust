//! # Handlebars
//! Handlebars is a modern and extensible templating solution originally created in the JavaScript world. It's used by many popular frameworks like [Ember.js](http://emberjs.com) and Chaplin. It's also ported to some other platforms such as [Java](https://github.com/jknack/handlebars.java).
//!
//! And this is handlebars Rust implementation, designed for server-side page generation. It's a general-purpose library so you use it for any kind of text generation.
//!
//! ## Handlebars spec
//!
//! ### Base
//!
//! You can go to [Handlebars.js](http://handlebarsjs.com/) website for its syntax. This implementation should be compatible with most parts of the spec, except:
//!
//! * raw helper syntax `{{{raw-helper}}}...{{{/raw-helper}}}` is implemented as block helper raw.
//! * configurable logging (hard-coded to rust native logging, with fixed level `INFO`)
//!
//! ### Extensions
//!
//! We have template reuse facilities supported via built-in helpers `>`, `partial` and `block`.
//!
//! There are two ways to reuse a template:
//!
//! * include (using `>`)
//! * inheritance (using `>` together with `block` and `partial`)
//!
//! Consult [Handlebar.java document about template inheritance](http://jknack.github.io/handlebars.java/reuse.html).
//!
//! ## Usage
//!
//! ### Template Creation and Registration
//!
//! Templates are created from String and registered to `Handlebars` with a name.
//!
//! ```
//!
//! extern crate handlebars;
//!
//! use handlebars::Handlebars;
//!
//! fn main() {
//!   let mut handlebars = Handlebars::new();
//!   let source = "hello {{world}}";
//!
//!   //compile returns an Option, we use unwrap() to deref it directly here
//!   handlebars.register_template_string("helloworld", source.to_string())
//!           .ok().expect("template created");
//! }
//! ```
//!
//! ### Rendering Something
//!
//! I should say that rendering is a little tricky. Since handlebars is originally a JavaScript templating framework. It supports dynamic features like duck-typing, truthy/falsy values. But for a static language like Rust, this is a little difficult. As a solution, I'm using the `serialize::json::Json` internally for data rendering, which seems good by far.
//!
//! That means, if you want to render something, you have to ensure that it implements the `serialize::json::ToJson` trait. Luckily, most built-in types already have trait. However, if you want to render your custom struct, you need to implement this trait manually. (Rust has a deriving facility, but it's just for selected types. Maybe I will add some syntax extensions or macros to simplify this process.)
//!
//! ```
//! #![feature(custom_derive, plugin)]
//! #![plugin(tojson_macros)]
//!
//! extern crate rustc_serialize;
//! extern crate handlebars;
//!
//! use rustc_serialize::json::{Json, ToJson};
//! use std::collections::BTreeMap;
//!
//! use handlebars::Handlebars;
//!
//! #[derive(ToJson)]
//! struct Person {
//!   name: String,
//!   age: i16,
//! }
//!
//! fn main() {
//!   let source = "hello {{world}}";
//!
//!   let mut handlebars = Handlebars::new();
//!   handlebars.register_template_string("helloworld", source.to_string())
//!           .ok().expect("template creation failed");
//!
//!   let mut data = Person {
//!       name: "Ning Sun".to_string(),
//!       age: 27
//!   };
//!   let result = handlebars.render("helloworld", &data);
//! }
//! ```
//!
//! ### Custom Helper
//!
//! Handlebars is nothing without helpers. You can also create your own helpers with rust. Helpers in handlebars-rust are custom struct implements the `HelperDef` trait, concretely, the `call` function. For your convenience, most of stateless helpers can be implemented as bare functions.
//!
//! ```
//!
//! extern crate handlebars;
//!
//! use handlebars::{Handlebars, HelperDef, RenderError, RenderContext, Helper, Context};
//!
//! // implement by a structure impls HelperDef
//! #[derive(Clone, Copy)]
//! struct SimpleHelper;
//!
//! impl HelperDef for SimpleHelper {
//!   fn call(&self, c: &Context, h: &Helper, _: &Handlebars, rc: &mut RenderContext) -> Result<String, RenderError> {
//!     let param = h.params().get(0).unwrap();
//!
//!     // get value from context data
//!     // rc.get_path() is current json parent path, you should always use it like this
//!     // param is the key of value you want to display
//!     let value = c.navigate(rc.get_path(), param);
//!     Ok(format!("My helper dumps: {} ", value))
//!   }
//! }
//!
//! // implement via bare function
//! fn another_simple_helper (c: &Context, h: &Helper, _: &Handlebars, rc: &mut RenderContext) -> Result<String, RenderError> {
//!     let param = h.params().get(0).unwrap();
//!
//!     // get value from context data
//!     // rc.get_path() is current json parent path, you should always use it like this
//!     // param is the key of value you want to display
//!     let value = c.navigate(rc.get_path(), param);
//!     Ok(format!("My second helper dumps: {} ", value))
//! }
//!
//!
//! fn main() {
//!   let mut handlebars = Handlebars::new();
//!   handlebars.register_helper("simple-helper", Box::new(SimpleHelper));
//!   handlebars.register_helper("another-simple-helper", Box::new(another_simple_helper));
//!
//!   //...
//! }
//! ```
//!
//! #### Arguments of HelpDef
//!
//! You can get data from the `Helper` argument about the template information:
//!
//! * `name()` for the helper name. This is known to you for most situation but if you are defining `helperMissing` or `blockHelperMissing`, this is important.
//! * `params()` is a vector of String as params in helper, like `{{#somehelper param1 param2 param3}}`.
//! * `hash()` is a map of String key and Json value, defined in helper as `{{@somehelper a=1 b="2" c=true}}`.
//! * `template()` gives you the nested template of block helper.
//! * `inverse()` gives you the inversed template of it, inversed template is the template behind `{{else}}`.
//!
//! You can learn more about helpers by looking into source code of built-in helpers.
//!
//! #### Built-in Helpers
//!
//! * `{{#raw}} ... {{/raw}}` escape handlebars expression within the block
//! * `{{#if ...}} ... {{else}} ... {{/if}}` if-else block
//! * `{{#unless ...}} ... {{else}} .. {{/unless}}` if-not-else block
//! * `{{#each ...}} ... {{/each}}` iterates over an array or object. Handlebar-rust doesn't support mustach iteration syntax so use this instead.
//! * `{{#with ...}} ... {{/with}}` change current context. Similar to {{#each}}, used for replace corresponding mustach syntax.
//! * `{{lookup ... ...}}` get value from array by `@index` or `@key`
//! * `{{#partial ...}} ... {{/partial}}` template reuse, used to replace block with same name
//! * `{{#block ...}} ... {{/block}}` template reuse, used to be replaced by partial with same name, with default content if partial not found.
//! * `{{> ...}}` include template with name
//! * `{{log ...}}` log value with rust logger, default level: INFO. Currently you cannot change the level.
//!

#[macro_use]
extern crate log;

extern crate rustc_serialize as serialize;
extern crate regex;
extern crate num;

#[macro_use]
extern crate lazy_static;

pub use self::template::{Template, TemplateError, Helper};
pub use self::registry::Registry as Handlebars;
pub use self::render::{Renderable, RenderError, RenderContext};
pub use self::helpers::{HelperDef};
pub use self::context::{Context, JsonRender, JsonTruthy};

mod template;
mod registry;
mod render;
mod helpers;
mod context;
