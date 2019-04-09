/*eslint comma-dangle: ["error", "always-multiline"]*/

var foo = {
  bar: 'baz',
  qux: 'quux',
};

var foo = {bar: 'baz', qux: 'quux'};
var arr = [1,2];

var arr = [1,
  2];

var arr = [
  1,
  2,
];

foo({
  bar: 'baz',
  qux: 'quux',
});
