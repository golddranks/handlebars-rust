var searchIndex = {};
searchIndex['handlebars'] = {"items":[[0,"","handlebars","# Handlebars\nHandlebars is a modern and extensible templating solution originally created in the JavaScript world. It's used by many popular frameworks like [Ember.js](http://emberjs.com) and Chaplin. It's also ported to some other platforms such as [Java](https://github.com/jknack/handlebars.java)."],[3,"Template","",""],[12,"elements","","",0],[3,"Helper","",""],[3,"Handlebars","",""],[3,"RenderError","",""],[12,"desc","","",1],[3,"RenderContext","",""],[3,"Context","",""],[11,"clone","","",0],[11,"eq","","",0],[11,"ne","","",0],[11,"clone","","",2],[11,"eq","","",2],[11,"ne","","",2],[11,"name","","",2],[11,"params","","",2],[11,"hash","","",2],[11,"template","","",2],[11,"inverse","","",2],[11,"is_block","","",2],[11,"to_string","","",2],[11,"compile","","",0],[11,"to_string","","",0],[11,"new","","",3],[11,"register_template","","",3],[11,"register_template_string","","",3],[11,"register_helper","","",3],[11,"get_template","","",3],[11,"get_helper","","",3],[11,"get_templates","","",3],[11,"render","","",3],[11,"fmt","","",1],[11,"new","","",4],[11,"get_partial","","",4],[11,"set_partial","","",4],[11,"get_path","","",4],[11,"set_path","","",4],[11,"set_local_var","","",4],[11,"clear_local_vars","","",4],[11,"promote_local_vars","","",4],[11,"demote_local_vars","","",4],[11,"get_local_var","","",4],[11,"render","","",0],[11,"null","","",5],[11,"wraps","","",5],[11,"navigate","","",5],[11,"render","rustc-serialize::json","",6],[11,"is_truthy","","",6],[8,"Renderable","handlebars",""],[10,"render","","",7],[8,"HelperDef","","# Helper Definitions"],[10,"call","","",8],[8,"JsonRender","",""],[10,"render","","",9],[8,"JsonTruthy","",""],[10,"is_truthy","","",10]],"paths":[[3,"Template"],[3,"RenderError"],[3,"Helper"],[3,"Handlebars"],[3,"RenderContext"],[3,"Context"],[4,"Json"],[8,"Renderable"],[8,"HelperDef"],[8,"JsonRender"],[8,"JsonTruthy"]]};
searchIndex['regex_macros'] = {"items":[[0,"","regex_macros","This crate provides the `regex!` macro. Its use is documented in the\n`regex` crate."]],"paths":[]};

searchIndex['rustc-serialize'] = {"items":[[0,"","rustc-serialize","Support code for encoding and decoding types."],[11,"encode","collections::string","",0],[11,"decode","","",0],[11,"encode","alloc::boxed","",1],[11,"decode","","",1],[11,"decode","","",1],[11,"encode","alloc::rc","",2],[11,"decode","","",2],[11,"encode","collections::vec","",3],[11,"decode","","",3],[11,"encode","core::option","",4],[11,"decode","","",4],[11,"encode","std::old_path::posix","",5],[11,"decode","","",5],[11,"encode","std::old_path::windows","",6],[11,"decode","","",6],[11,"encode","std::path","",7],[11,"encode","","",8],[11,"decode","","",8],[11,"encode","core::cell","",9],[11,"decode","","",9],[11,"encode","","",10],[11,"decode","","",10],[11,"encode","alloc::arc","",11],[11,"decode","","",11],[11,"encode","collections::dlist","",12],[11,"decode","","",12],[11,"encode","collections::ring_buf","",13],[11,"decode","","",13],[11,"encode","collections::btree::map","",14],[11,"decode","","",14],[11,"encode","collections::btree::set","",15],[11,"decode","","",15],[11,"encode","std::collections::hash::map","",16],[11,"decode","","",16],[11,"encode","std::collections::hash::set","",17],[11,"decode","","",17],[11,"encode","collections::vec_map","",18],[11,"decode","","",18],[0,"base64","rustc-serialize","Base64 binary-to-text encoding"],[3,"Config","rustc-serialize::base64","Contains configuration parameters for `to_base64`."],[12,"char_set","","Character set to use",19],[12,"newline","","Newline to use",19],[12,"pad","","True to pad output with `=` characters",19],[12,"line_length","","`Some(len)` to wrap lines at `len`, `None` to disable line wrapping",19],[4,"CharacterSet","","Available encoding character sets"],[13,"Standard","","The standard character set (uses `+` and `/`)",20],[13,"UrlSafe","","The URL safe character set (uses `-` and `_`)",20],[4,"Newline","","Available newline types"],[13,"LF","","A linefeed (i.e. Unix-style newline)",21],[13,"CRLF","","A carriage return and a linefeed (i.e. Windows-style newline)",21],[4,"FromBase64Error","","Errors that can occur when decoding a base64 encoded string"],[13,"InvalidBase64Byte","","The input contained a character not part of the base64 format",22],[13,"InvalidBase64Length","","The input had an invalid length",22],[7,"STANDARD","","Configuration for RFC 4648 standard base64 encoding"],[7,"URL_SAFE","","Configuration for RFC 4648 base64url encoding"],[7,"MIME","","Configuration for RFC 2045 MIME base64 encoding"],[8,"ToBase64","","A trait for converting a value to base64 encoding."],[10,"to_base64","","Converts the value of `self` to a base64 value following the specified\nformat configuration, returning the owned string.",23],[8,"FromBase64","","A trait for converting from base64 encoded values."],[10,"from_base64","","Converts the value of `self`, interpreted as base64 encoded data, into\nan owned vector of bytes, returning the vector.",24],[11,"fmt","","",22],[11,"description","","",22],[11,"fmt","","",22],[0,"hex","rustc-serialize","Hex binary-to-text encoding"],[4,"FromHexError","rustc-serialize::hex","Errors that can occur when decoding a hex encoded string"],[13,"InvalidHexCharacter","","The input contained a character not part of the hex format",25],[13,"InvalidHexLength","","The input had an invalid length",25],[8,"ToHex","","A trait for converting a value to hexadecimal encoding"],[10,"to_hex","","Converts the value of `self` to a hex value, returning the owned\nstring.",26],[8,"FromHex","","A trait for converting hexadecimal encoded values"],[10,"from_hex","","Converts the value of `self`, interpreted as hexadecimal encoded data,\ninto an owned vector of bytes, returning the vector.",27],[11,"fmt","","",25],[11,"description","","",25],[11,"fmt","","",25],[0,"json","rustc-serialize","JSON parsing and serialization"],[3,"PrettyJson","rustc-serialize::json",""],[3,"AsJson","",""],[3,"AsPrettyJson","",""],[3,"Encoder","","A structure for implementing serialization to JSON."],[3,"Stack","","A Stack represents the current position of the parser in the logical\nstructure of the JSON stream.\nFor example foo.bar[3].x"],[3,"Parser","","A streaming JSON parser implemented as an iterator of JsonEvent, consuming\nan iterator of char."],[3,"Builder","","A Builder consumes a json::Parser to create a generic Json structure."],[3,"Decoder","","A structure to decode JSON to values in rust."],[4,"Json","","Represents a json value"],[13,"I64","","",28],[13,"U64","","",28],[13,"F64","","",28],[13,"String","","",28],[13,"Boolean","","",28],[13,"Array","","",28],[13,"Object","","",28],[13,"Null","","",28],[4,"ErrorCode","","The errors that can arise while parsing a JSON stream."],[13,"InvalidSyntax","","",29],[13,"InvalidNumber","","",29],[13,"EOFWhileParsingObject","","",29],[13,"EOFWhileParsingArray","","",29],[13,"EOFWhileParsingValue","","",29],[13,"EOFWhileParsingString","","",29],[13,"KeyMustBeAString","","",29],[13,"ExpectedColon","","",29],[13,"TrailingCharacters","","",29],[13,"TrailingComma","","",29],[13,"InvalidEscape","","",29],[13,"InvalidUnicodeCodePoint","","",29],[13,"LoneLeadingSurrogateInHexEscape","","",29],[13,"UnexpectedEndOfHexEscape","","",29],[13,"UnrecognizedHex","","",29],[13,"NotFourDigit","","",29],[13,"NotUtf8","","",29],[4,"ParserError","",""],[13,"SyntaxError","","msg, line, col",30],[13,"IoError","","",30],[4,"DecoderError","",""],[13,"ParseError","","",31],[13,"ExpectedError","","",31],[13,"MissingFieldError","","",31],[13,"UnknownVariantError","","",31],[13,"ApplicationError","","",31],[4,"EncoderError","",""],[13,"FmtError","","",32],[13,"BadHashmapKey","","",32],[4,"JsonEvent","","The output of the streaming parser."],[13,"ObjectStart","","",33],[13,"ObjectEnd","","",33],[13,"ArrayStart","","",33],[13,"ArrayEnd","","",33],[13,"BooleanValue","","",33],[13,"I64Value","","",33],[13,"U64Value","","",33],[13,"F64Value","","",33],[13,"StringValue","","",33],[13,"NullValue","","",33],[13,"Error","","",33],[4,"StackElement","","StackElements compose a Stack.\nFor example, Key(\"foo\"), Key(\"bar\"), Index(3) and Key(\"x\") are the\nStackElements compositing the stack that represents foo.bar[3].x"],[13,"Index","","",34],[13,"Key","","",34],[5,"error_str","","Returns a readable error string for a given error code."],[5,"decode","","Shortcut function to decode a JSON `&str` into an object"],[5,"encode","","Shortcut function to encode a `T` into a JSON `String`"],[5,"as_json","","Create an `AsJson` wrapper which can be used to print a value as JSON\non-the-fly via `write!`"],[5,"as_pretty_json","","Create an `AsPrettyJson` wrapper which can be used to print a value as JSON\non-the-fly via `write!`"],[6,"Array","",""],[6,"Object","",""],[6,"BuilderError","",""],[6,"EncodeResult","",""],[6,"DecodeResult","",""],[8,"ToJson","","A trait for converting values to JSON"],[10,"to_json","","Converts the value of `self` to an instance of JSON",35],[11,"fmt","","",28],[11,"partial_cmp","","",28],[11,"lt","","",28],[11,"le","","",28],[11,"gt","","",28],[11,"ge","","",28],[11,"eq","","",28],[11,"ne","","",28],[11,"clone","","",28],[11,"eq","","",29],[11,"ne","","",29],[11,"clone","","",29],[11,"fmt","","",30],[11,"eq","","",30],[11,"ne","","",30],[11,"clone","","",30],[11,"fmt","","",31],[11,"eq","","",31],[11,"ne","","",31],[11,"clone","","",31],[11,"fmt","","",32],[11,"fmt","","",29],[11,"description","","",31],[11,"cause","","",31],[11,"fmt","","",31],[11,"description","","",30],[11,"fmt","","",30],[11,"description","","",32],[11,"fmt","","",32],[11,"from_error","","",32],[11,"new_pretty","","Creates a new encoder whose output will be written in human-readable\nJSON to the specified writer",36],[11,"new","","Creates a new encoder whose output will be written in compact\nJSON to the specified writer",36],[11,"set_indent","","Set the number of spaces to indent for each level.\nThis is safe to set during encoding.",36],[6,"Error","",""],[11,"emit_nil","","",36],[11,"emit_usize","","",36],[11,"emit_u64","","",36],[11,"emit_u32","","",36],[11,"emit_u16","","",36],[11,"emit_u8","","",36],[11,"emit_isize","","",36],[11,"emit_i64","","",36],[11,"emit_i32","","",36],[11,"emit_i16","","",36],[11,"emit_i8","","",36],[11,"emit_bool","","",36],[11,"emit_f64","","",36],[11,"emit_f32","","",36],[11,"emit_char","","",36],[11,"emit_str","","",36],[11,"emit_enum","","",36],[11,"emit_enum_variant","","",36],[11,"emit_enum_variant_arg","","",36],[11,"emit_enum_struct_variant","","",36],[11,"emit_enum_struct_variant_field","","",36],[11,"emit_struct","","",36],[11,"emit_struct_field","","",36],[11,"emit_tuple","","",36],[11,"emit_tuple_arg","","",36],[11,"emit_tuple_struct","","",36],[11,"emit_tuple_struct_arg","","",36],[11,"emit_option","","",36],[11,"emit_option_none","","",36],[11,"emit_option_some","","",36],[11,"emit_seq","","",36],[11,"emit_seq_elt","","",36],[11,"emit_map","","",36],[11,"emit_map_elt_key","","",36],[11,"emit_map_elt_val","","",36],[11,"encode","","",28],[11,"from_reader","","Decodes a json value from an `&mut old_io::Reader`",28],[11,"from_str","","Decodes a json value from a string",28],[11,"pretty","","Borrow this json object as a pretty object to generate a pretty\nrepresentation for it via `Display`.",28],[11,"find","","If the Json value is an Object, returns the value associated with the provided key.\nOtherwise, returns None.",28],[11,"find_path","","Attempts to get a nested Json Object for each key in `keys`.\nIf any key is found not to exist, find_path will return None.\nOtherwise, it will return the Json value associated with the final key.",28],[11,"search","","If the Json value is an Object, performs a depth-first search until\na value associated with the provided key is found. If no value is found\nor the Json value is not an Object, returns None.",28],[11,"is_object","","Returns true if the Json value is an Object. Returns false otherwise.",28],[11,"as_object","","If the Json value is an Object, returns the associated BTreeMap.\nReturns None otherwise.",28],[11,"as_object_mut","","If the Json value is an Object, returns the associated mutable BTreeMap.\nReturns None otherwise.",28],[11,"is_array","","Returns true if the Json value is an Array. Returns false otherwise.",28],[11,"as_array","","If the Json value is an Array, returns the associated vector.\nReturns None otherwise.",28],[11,"as_array_mut","","If the Json value is an Array, returns the associated mutable vector.\nReturns None otherwise.",28],[11,"is_string","","Returns true if the Json value is a String. Returns false otherwise.",28],[11,"as_string","","If the Json value is a String, returns the associated str.\nReturns None otherwise.",28],[11,"is_number","","Returns true if the Json value is a Number. Returns false otherwise.",28],[11,"is_i64","","Returns true if the Json value is a i64. Returns false otherwise.",28],[11,"is_u64","","Returns true if the Json value is a u64. Returns false otherwise.",28],[11,"is_f64","","Returns true if the Json value is a f64. Returns false otherwise.",28],[11,"as_i64","","If the Json value is a number, return or cast it to a i64.\nReturns None otherwise.",28],[11,"as_u64","","If the Json value is a number, return or cast it to a u64.\nReturns None otherwise.",28],[11,"as_f64","","If the Json value is a number, return or cast it to a f64.\nReturns None otherwise.",28],[11,"is_boolean","","Returns true if the Json value is a Boolean. Returns false otherwise.",28],[11,"as_boolean","","If the Json value is a Boolean, returns the associated bool.\nReturns None otherwise.",28],[11,"is_null","","Returns true if the Json value is a Null. Returns false otherwise.",28],[11,"as_null","","If the Json value is a Null, returns ().\nReturns None otherwise.",28],[6,"Output","",""],[11,"index","","",28],[6,"Output","",""],[11,"index","","",28],[11,"fmt","","",33],[11,"clone","","",33],[11,"eq","","",33],[11,"ne","","",33],[11,"fmt","","",34],[11,"clone","","",34],[11,"eq","","",34],[11,"ne","","",34],[11,"new","","",37],[11,"len","","Returns The number of elements in the Stack.",37],[11,"is_empty","","Returns true if the stack is empty.",37],[11,"get","","Provides access to the StackElement at a given index.\nlower indices are at the bottom of the stack while higher indices are\nat the top.",37],[11,"is_equal_to","","Compares this stack with an array of StackElements.",37],[11,"starts_with","","Returns true if the bottom-most elements of this stack are the same as\nthe ones passed as parameter.",37],[11,"ends_with","","Returns true if the top-most elements of this stack are the same as\nthe ones passed as parameter.",37],[11,"top","","Returns the top-most element (if any).",37],[6,"Item","",""],[11,"next","","",38],[11,"new","","Creates the JSON parser.",38],[11,"stack","","Provides access to the current position in the logical structure of the\nJSON stream.",38],[11,"new","","Create a JSON Builder.",39],[11,"build","","",39],[11,"new","","Creates a new decoder instance for decoding the specified JSON value.",40],[6,"Error","",""],[11,"read_nil","","",40],[11,"read_usize","","",40],[11,"read_u8","","",40],[11,"read_u16","","",40],[11,"read_u32","","",40],[11,"read_u64","","",40],[11,"read_isize","","",40],[11,"read_i8","","",40],[11,"read_i16","","",40],[11,"read_i32","","",40],[11,"read_i64","","",40],[11,"read_f32","","",40],[11,"read_f64","","",40],[11,"read_bool","","",40],[11,"read_char","","",40],[11,"read_str","","",40],[11,"read_enum","","",40],[11,"read_enum_variant","","",40],[11,"read_enum_variant_arg","","",40],[11,"read_enum_struct_variant","","",40],[11,"read_enum_struct_variant_field","","",40],[11,"read_struct","","",40],[11,"read_struct_field","","",40],[11,"read_tuple","","",40],[11,"read_tuple_arg","","",40],[11,"read_tuple_struct","","",40],[11,"read_tuple_struct_arg","","",40],[11,"read_option","","",40],[11,"read_seq","","",40],[11,"read_seq_elt","","",40],[11,"read_map","","",40],[11,"read_map_elt_key","","",40],[11,"read_map_elt_val","","",40],[11,"error","","",40],[11,"to_json","","",28],[11,"to_json","collections::string","",0],[11,"to_json","collections::vec","",3],[11,"to_json","collections::btree::map","",14],[11,"to_json","std::collections::hash::map","",16],[11,"to_json","core::option","",4],[11,"fmt","rustc-serialize::json","Encodes a json value into a string",28],[11,"fmt","","Encodes a json value into a string",41],[11,"fmt","","Encodes a json value into a string",42],[11,"indent","","Set the indentation level for the emitted JSON",43],[11,"fmt","","Encodes a json value into a string",43],[6,"Err","",""],[11,"from_str","","",28],[11,"encode","collections::string","",0],[11,"decode","","",0],[11,"encode","alloc::boxed","",1],[11,"decode","","",1],[11,"decode","","",1],[11,"encode","alloc::rc","",2],[11,"decode","","",2],[11,"encode","collections::vec","",3],[11,"decode","","",3],[11,"encode","core::option","",4],[11,"decode","","",4],[11,"encode","std::old_path::posix","",5],[11,"decode","","",5],[11,"encode","std::old_path::windows","",6],[11,"decode","","",6],[11,"encode","std::path","",7],[11,"encode","","",8],[11,"decode","","",8],[11,"encode","core::cell","",9],[11,"decode","","",9],[11,"encode","","",10],[11,"decode","","",10],[11,"encode","alloc::arc","",11],[11,"decode","","",11],[8,"Decoder","rustc-serialize",""],[16,"Error","rustc-serialize::Decoder",""],[10,"read_nil","rustc-serialize","",44],[10,"read_usize","","",44],[10,"read_u64","","",44],[10,"read_u32","","",44],[10,"read_u16","","",44],[10,"read_u8","","",44],[10,"read_isize","","",44],[10,"read_i64","","",44],[10,"read_i32","","",44],[10,"read_i16","","",44],[10,"read_i8","","",44],[10,"read_bool","","",44],[10,"read_f64","","",44],[10,"read_f32","","",44],[10,"read_char","","",44],[10,"read_str","","",44],[10,"read_enum","","",44],[10,"read_enum_variant","","",44],[10,"read_enum_variant_arg","","",44],[10,"read_enum_struct_variant","","",44],[10,"read_enum_struct_variant_field","","",44],[10,"read_struct","","",44],[10,"read_struct_field","","",44],[10,"read_tuple","","",44],[10,"read_tuple_arg","","",44],[10,"read_tuple_struct","","",44],[10,"read_tuple_struct_arg","","",44],[10,"read_option","","",44],[10,"read_seq","","",44],[10,"read_seq_elt","","",44],[10,"read_map","","",44],[10,"read_map_elt_key","","",44],[10,"read_map_elt_val","","",44],[10,"error","","",44],[8,"Encoder","",""],[16,"Error","rustc-serialize::Encoder",""],[10,"emit_nil","rustc-serialize","",45],[10,"emit_usize","","",45],[10,"emit_u64","","",45],[10,"emit_u32","","",45],[10,"emit_u16","","",45],[10,"emit_u8","","",45],[10,"emit_isize","","",45],[10,"emit_i64","","",45],[10,"emit_i32","","",45],[10,"emit_i16","","",45],[10,"emit_i8","","",45],[10,"emit_bool","","",45],[10,"emit_f64","","",45],[10,"emit_f32","","",45],[10,"emit_char","","",45],[10,"emit_str","","",45],[10,"emit_enum","","",45],[10,"emit_enum_variant","","",45],[10,"emit_enum_variant_arg","","",45],[10,"emit_enum_struct_variant","","",45],[10,"emit_enum_struct_variant_field","","",45],[10,"emit_struct","","",45],[10,"emit_struct_field","","",45],[10,"emit_tuple","","",45],[10,"emit_tuple_arg","","",45],[10,"emit_tuple_struct","","",45],[10,"emit_tuple_struct_arg","","",45],[10,"emit_option","","",45],[10,"emit_option_none","","",45],[10,"emit_option_some","","",45],[10,"emit_seq","","",45],[10,"emit_seq_elt","","",45],[10,"emit_map","","",45],[10,"emit_map_elt_key","","",45],[10,"emit_map_elt_val","","",45],[8,"Decodable","",""],[10,"decode","","",46],[8,"Encodable","",""],[10,"encode","","",47],[8,"DecoderHelpers","",""],[10,"read_to_vec","","",48],[8,"EncoderHelpers","",""],[10,"emit_from_vec","","",49]],"paths":[[3,"String"],[3,"Box"],[3,"Rc"],[3,"Vec"],[4,"Option"],[3,"Path"],[3,"Path"],[3,"Path"],[3,"PathBuf"],[3,"Cell"],[3,"RefCell"],[3,"Arc"],[3,"DList"],[3,"RingBuf"],[3,"BTreeMap"],[3,"BTreeSet"],[3,"HashMap"],[3,"HashSet"],[3,"VecMap"],[3,"Config"],[4,"CharacterSet"],[4,"Newline"],[4,"FromBase64Error"],[8,"ToBase64"],[8,"FromBase64"],[4,"FromHexError"],[8,"ToHex"],[8,"FromHex"],[4,"Json"],[4,"ErrorCode"],[4,"ParserError"],[4,"DecoderError"],[4,"EncoderError"],[4,"JsonEvent"],[4,"StackElement"],[8,"ToJson"],[3,"Encoder"],[3,"Stack"],[3,"Parser"],[3,"Builder"],[3,"Decoder"],[3,"PrettyJson"],[3,"AsJson"],[3,"AsPrettyJson"],[8,"Decoder"],[8,"Encoder"],[8,"Decodable"],[8,"Encodable"],[8,"DecoderHelpers"],[8,"EncoderHelpers"]]};

searchIndex['regex'] = {"items":[[0,"","regex","This crate provides a native implementation of regular expressions that is\nheavily based on RE2 both in syntax and in implementation. Notably,\nbackreferences and arbitrary lookahead/lookbehind assertions are not\nprovided. In return, regular expression searching provided by this package\nhas excellent worst case performance. The specific syntax supported is\ndocumented further down."],[3,"Error","","Error corresponds to something that can go wrong while parsing\na regular expression."],[12,"pos","","The *approximate* character index of where the error occurred.",0],[12,"msg","","A message describing the error.",0],[3,"Captures","","Captures represents a group of captured strings for a single match."],[3,"SubCaptures","","An iterator over capture groups for a particular match of a regular\nexpression."],[3,"SubCapturesPos","","An iterator over capture group positions for a particular match of a\nregular expression."],[3,"FindCaptures","","An iterator that yields all non-overlapping capture groups matching a\nparticular regular expression."],[3,"FindMatches","","An iterator over all non-overlapping matches for a particular string."],[3,"NoExpand","","NoExpand indicates literal string replacement."],[3,"RegexSplits","","Yields all substrings delimited by a regular expression match."],[3,"RegexSplitsN","","Yields at most `N` substrings delimited by a regular expression match."],[4,"Regex","","A compiled regular expression"],[5,"quote","","Escapes all regular expression meta characters in `text`."],[5,"is_match","","Tests if the given regular expression matches somewhere in the text given."],[11,"fmt","","",0],[11,"fmt","","",0],[11,"clone","","",1],[11,"fmt","","Shows the original regular expression.",1],[11,"fmt","","Shows the original regular expression.",1],[11,"new","","Compiles a dynamic regular expression. Once compiled, it can be\nused repeatedly to search, split or replace text in a string.",1],[11,"is_match","","Returns true if and only if the regex matches the string given.",1],[11,"find","","Returns the start and end byte range of the leftmost-first match in\n`text`. If no match exists, then `None` is returned.",1],[11,"find_iter","","Returns an iterator for each successive non-overlapping match in\n`text`, returning the start and end byte indices with respect to\n`text`.",1],[11,"captures","","Returns the capture groups corresponding to the leftmost-first\nmatch in `text`. Capture group `0` always corresponds to the entire\nmatch. If no match is found, then `None` is returned.",1],[11,"captures_iter","","Returns an iterator over all the non-overlapping capture groups matched\nin `text`. This is operationally the same as `find_iter` (except it\nyields information about submatches).",1],[11,"split","","Returns an iterator of substrings of `text` delimited by a match\nof the regular expression.\nNamely, each element of the iterator corresponds to text that *isn't*\nmatched by the regular expression.",1],[11,"splitn","","Returns an iterator of at most `limit` substrings of `text` delimited\nby a match of the regular expression. (A `limit` of `0` will return no\nsubstrings.)\nNamely, each element of the iterator corresponds to text that *isn't*\nmatched by the regular expression.\nThe remainder of the string that is not split will be the last element\nin the iterator.",1],[11,"replace","","Replaces the leftmost-first match with the replacement provided.\nThe replacement can be a regular string (where `$N` and `$name` are\nexpanded to match capture groups) or a function that takes the matches'\n`Captures` and returns the replaced string.",1],[11,"replace_all","","Replaces all non-overlapping matches in `text` with the\nreplacement provided. This is the same as calling `replacen` with\n`limit` set to `0`.",1],[11,"replacen","","Replaces at most `limit` non-overlapping matches in `text` with the\nreplacement provided. If `limit` is 0, then all non-overlapping matches\nare replaced.",1],[11,"as_str","","Returns the original string of this regex.",1],[11,"reg_replace","","",2],[11,"next","","",3],[11,"next","","",4],[11,"pos","","Returns the start and end positions of the Nth capture group.\nReturns `None` if `i` is not a valid capture group or if the capture\ngroup did not match anything.\nThe positions returned are *always* byte indices with respect to the\noriginal string matched.",5],[11,"at","","Returns the matched string for the capture group `i`.  If `i` isn't\na valid capture group or didn't match anything, then `None` is\nreturned.",5],[11,"name","","Returns the matched string for the capture group named `name`.  If\n`name` isn't a valid capture group or didn't match anything, then\n`None` is returned.",5],[11,"iter","","Creates an iterator of all the capture groups in order of appearance\nin the regular expression.",5],[11,"iter_pos","","Creates an iterator of all the capture group positions in order of\nappearance in the regular expression. Positions are byte indices\nin terms of the original string matched.",5],[11,"expand","","Expands all instances of `$name` in `text` to the corresponding capture\ngroup `name`.",5],[11,"len","","Returns the number of captured groups.",5],[11,"is_empty","","Returns if there are no captured groups.",5],[11,"next","","",6],[11,"next","","",7],[11,"next","","",8],[11,"next","","",9],[8,"Replacer","","Replacer describes types that can be used to replace matches in a string."],[10,"reg_replace","","Returns a possibly owned string that is used to replace the match\ncorresponding to the `caps` capture group.",10]],"paths":[[3,"Error"],[4,"Regex"],[3,"NoExpand"],[3,"RegexSplits"],[3,"RegexSplitsN"],[3,"Captures"],[3,"SubCaptures"],[3,"SubCapturesPos"],[3,"FindCaptures"],[3,"FindMatches"],[8,"Replacer"]]};

searchIndex['log'] = {"items":[[0,"","log","A lightweight logging facade."],[3,"LogRecord","","The \"payload\" of a log message."],[3,"LogLocation","","The location of a log message."],[12,"module_path","","The module path of the message.",0],[12,"file","","The source file containing the message.",0],[12,"line","","The line containing the message.",0],[3,"MaxLogLevelFilter","","A token providing read and write access to the global maximum log level\nfilter."],[3,"SetLoggerError","","The type returned by `set_logger` if `set_logger` has already been called."],[4,"LogLevel","","An enum representing the available verbosity levels of the logging framework"],[13,"Error","","The \"error\" level.",1],[13,"Warn","","The \"warn\" level.",1],[13,"Info","","The \"info\" level.",1],[13,"Debug","","The \"debug\" level.",1],[13,"Trace","","The \"trace\" level.",1],[4,"LogLevelFilter","","An enum representing the available verbosity level filters of the logging\nframework."],[13,"Off","","A level lower than all log levels.",2],[13,"Error","","Corresponds to the `Error` log level.",2],[13,"Warn","","Corresponds to the `Warn` log level.",2],[13,"Info","","Corresponds to the `Trace` log level.",2],[13,"Debug","","Corresponds to the `Debug` log level.",2],[13,"Trace","","Corresponds to the `Trace` log level.",2],[5,"max_log_level","","Returns the current maximum log level."],[5,"set_logger","","Sets the global logger."],[5,"enabled","","Determines if the current logger will ignore a log message at the specified\nlevel from the specified module."],[5,"log","","Logs a message."],[8,"Log","","A trait encapsulating the operations required of a logger"],[10,"enabled","","Determines if a log message sent at the specified level from the\nspecified module would be logged.",3],[10,"log","","Logs the `LogRecord`.",3],[11,"fmt","","",1],[11,"clone","","",1],[11,"eq","","",1],[11,"eq","","",1],[11,"partial_cmp","","",1],[11,"partial_cmp","","",1],[11,"cmp","","",1],[6,"Err","",""],[11,"from_str","","",1],[11,"fmt","","",1],[11,"max","","Returns the most verbose logging level.",1],[11,"to_log_level_filter","","Converts the `LogLevel` to the equivalent `LogLevelFilter`.",1],[11,"fmt","","",2],[11,"clone","","",2],[11,"eq","","",2],[11,"eq","","",2],[11,"partial_cmp","","",2],[11,"partial_cmp","","",2],[11,"cmp","","",2],[6,"Err","",""],[11,"from_str","","",2],[11,"fmt","","",2],[11,"max","","Returns the most verbose logging level filter.",2],[11,"to_log_level","","Converts `self` to the equivalent `LogLevel`.",2],[11,"new","","Creates a new `LogRecord`.",4],[11,"args","","The message body.",4],[11,"location","","The location of the log directive.",4],[11,"level","","The verbosity level of the message.",4],[11,"fmt","","",0],[11,"clone","","",0],[11,"fmt","","",5],[11,"get","","Gets the current maximum log level filter.",5],[11,"set","","Sets the maximum log level.",5],[11,"fmt","","",6],[11,"fmt","","",6],[14,"log!","","The standard logging macro."],[14,"error!","","Logs a message at the error level."],[14,"warn!","","Logs a message at the warn level."],[14,"info!","","Logs a message at the info level."],[14,"debug!","","Logs a message at the debug level."],[14,"trace!","","Logs a message at the trace level."],[14,"log_enabled!","","Determines if a message logged at the specified level in that module will\nbe logged."]],"paths":[[3,"LogLocation"],[4,"LogLevel"],[4,"LogLevelFilter"],[8,"Log"],[3,"LogRecord"],[3,"MaxLogLevelFilter"],[3,"SetLoggerError"]]};

initSearch(searchIndex);
