```js
function last(arr) { return arr[arr.length - 1]; }

last([1, 2, 3]); //: number
last(["a", "b", "c"]); //: string

function map(arr, f) {
  var res = [];
  for (var i = 0; i < arr.length; ++i) res.push(f(arr[i]));
  return res;
}

map([1, 2, 3], function() { return "X"; }); //: [string]
map([1, 2, 3], function() { return true; }); //: [bool]
```
```json
[
  {
    "name": "last",
    "addr": "/last/",
    "kind": "f",
    "type": "!0.<i> function(Array[number]|[string])",
    "lineno": 1,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/simple_generic.js"
  },
  {
    "name": "map",
    "addr": "/map/",
    "kind": "f",
    "type": "string|fn() -> bool) -> [?] function(Array[number], fn()",
    "lineno": 6,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/simple_generic.js"
  }
]
```
```ctags
last	/usr/local/lib/node_modules/jsctags/test/cases/simple_generic.js	/last/;"	f	lineno:1	type:!0.<i> function(Array[number]|[string])
map	/usr/local/lib/node_modules/jsctags/test/cases/simple_generic.js	/map/;"	f	lineno:6	type:string|fn() -> bool) -> [?] function(Array[number], fn()
```
