//reverse string
// input: hello world
// output: dlrow olleh
function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("hello world"));
