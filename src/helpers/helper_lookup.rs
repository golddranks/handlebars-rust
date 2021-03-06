use std::num::ToPrimitive;

use serialize::json::Json;

use helpers::{HelperDef};
use template::{Helper};
use registry::{Registry};
use context::{Context, JsonRender};
use render::{Renderable, RenderContext, RenderError, render_error, EMPTY};

#[derive(Copy)]
pub struct LookupHelper;

impl HelperDef for LookupHelper {
    fn call(&self, c: &Context, h: &Helper, _: &Registry, rc: &mut RenderContext) -> Result<String, RenderError> {
        let value_param = h.params().get(0);
        let index_param = h.params().get(1);

        if value_param.is_none() {
            return Err(render_error("Param not found for helper \"lookup\""));
        }
        if index_param.is_none() {
            return Err(render_error("Insuffitient params for helper \"lookup\""));
        }

        let value = c.navigate(rc.get_path(), value_param.unwrap());
        match *value {
            Json::Array (ref l) => {
                let index_param_name = index_param.unwrap();
                let index = rc.get_local_var(index_param_name);
                match *index {
                    Json::U64(i) => {
                        match l.get(i.to_uint().unwrap()) {
                            Some(v) => Ok(v.render()),
                            None => Ok(EMPTY.to_string())
                        }
                    }
                    _ => {
                        Err(render_error("Invalid index name in \"lookup\""))
                    }
                }
            },

            _ => {
                Err(render_error("Cannot lookup value that is not an array"))
            }
        }
    }
}

pub static LOOKUP_HELPER: LookupHelper = LookupHelper;

#[cfg(test)]
mod test {
    use template::{Template};
    use registry::{Registry};

    use std::collections::BTreeMap;

    #[test]
    fn test_lookup() {
        let t0 = Template::compile("{{#each v1}}{{lookup ../v2 @index}}{{/each}}".to_string()).ok().unwrap();

        let mut handlebars = Registry::new();
        handlebars.register_template("t0", t0);

        let mut m :BTreeMap<String, Vec<u16>> = BTreeMap::new();
        m.insert("v1".to_string(), vec![1u16, 2u16, 3u16]);
        m.insert("v2".to_string(), vec![9u16, 8u16, 7u16]);

        let r0 = handlebars.render("t0", &m);
        assert_eq!(r0.ok().unwrap(), "987".to_string());
    }
}
