```js
Date; //doc: Creates JavaScript Date instances which let you work with dates and times.
new Date; //doc: Creates JavaScript Date instances which let you work with dates and times.

var myalias = Date;

myalias; //doc: Creates JavaScript Date instances which let you work with dates and times.

// This is variable foo.
var foo = 10;

foo; //doc: This is variable foo.

// This function returns a monkey.
function makeMonkey() { return "monkey"; }

makeMonkey; //doc: This function returns a monkey.

var monkeyAlias = makeMonkey;

monkeyAlias; //doc: This function returns a monkey.

// This is an irrelevant comment.


// This describes abc.
var abc = 20;

abc; //doc: This describes abc.

// Quux is a thing. And here are a bunch more sentences that would
// make the docstring too long, and are thus wisely stripped by Tern's
// brain-dead heuristics. Ayay.
function Quux() {}

Quux; //doc: Quux is a thing.

/*  Extra bogus 
 *  	whitespace is also stripped.
 */
var baz = "hi";

baz; //doc: Extra bogus whitespace is also stripped.

var o = {
  // Get the name.
  getName: function() { return this.name; },
  // The name
  name: "Harold"
};

// The string "foo".
o.foo = "foo";

o.getName; //doc: Get the name.
o.name; //doc: The name
o.foo; //doc: The string "foo".
```
```json
[
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js"
  },
  {
    "name": "makeMonkey",
    "addr": "/makeMonkey/",
    "kind": "f",
    "type": "string function()",
    "lineno": 14,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js"
  },
  {
    "name": "abc",
    "addr": "/abc/",
    "kind": "v",
    "type": "number",
    "lineno": 26,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js"
  },
  {
    "name": "Quux",
    "addr": "/Quux/",
    "kind": "f",
    "type": "void function()",
    "lineno": 33,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js"
  },
  {
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "type": "string",
    "lineno": 40,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js"
  },
  {
    "name": "getName",
    "addr": "/getName/",
    "kind": "f",
    "type": "!this.name function()",
    "lineno": 46,
    "namespace": "o",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js"
  },
  {
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "type": "string",
    "lineno": 48,
    "namespace": "o",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js"
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 52,
    "namespace": "o",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js"
  }
]
```
```ctags
Quux	/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js	/Quux/;"	f	lineno:33	type:void function()
abc	/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js	/abc/;"	v	lineno:26	type:number
baz	/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js	/baz/;"	v	lineno:40	type:string
foo	/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js	/foo/;"	v	lineno:52	namespace:o	type:string
foo	/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js	/foo/;"	v	lineno:9	type:number
getName	/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js	/getName/;"	f	lineno:46	namespace:o	type:!this.name function()
makeMonkey	/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js	/makeMonkey/;"	f	lineno:14	type:string function()
name	/usr/local/lib/node_modules/jsctags/test/cases/docstrings.js	/name/;"	v	lineno:48	namespace:o	type:string
```
