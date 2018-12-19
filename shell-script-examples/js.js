

// this is a comment

let variable = 'hello'
let condition = false

console.log(variable);

console.log(`${variable}! this is like a template literal`);

console.log('single quotes work the same as double in JS ${variable}');

if (condition) {
  //do some stuff
  console.log('first if statement');
}


if (!condition) {
  // do another
  console.log('if statement');
} else if (condition) {
  //statements
  console.log('else if statement');
}

switch ('hello') {
  case 'hello':
  console.log('matches this');
  break;
  default:
  console.log('and this');
  console.log('and without a break runs this as well');

}

while (condition) {
  console.log('this won\'t run');
}
