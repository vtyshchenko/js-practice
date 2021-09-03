// let myName = "111";
// console.log(myName);

// function rename(value) {
//   return (myName = value);
// }

// rename("vvv");
// console.log(myName);

// function test() {
//   return "one";
//   return "two";
//   return "three";
// }

// console.log(test());

// ------------------------------------------------------------------
// Учитывая математическое уравнение, которое имеет *,+,-,/, переверните его так, как указано в примере.
// Примеры кода:
//   solve("100*b/y") => "y/b*100"
//   solve("a+b-c/d*30") => "30*d/c-b+a"
// solve("a*b/c+50") => "50+c/b*a"

// function solve(params) {
//   const length = params.length;
//   let data = "";
//   res = [];
//   for (let i = 0; i < length; i++) {
//     const el = params[i];
//     if (el === "*" || el === "/" || el === "-" || el === "+") {
//       if (data !== "") {
//         res.push(data);
//         data = "";
//       }
//       res.push(el);
//     } else {
//       data += el;
//     }
//   }
//   if (data !== "") {
//     res.push(data);
//     data = "";
//   }
//   return res.reverse().join("");
// }

// console.log(solve("100*b/y"));
// console.log(solve("a+b-c/d*30"));
// console.log(solve("a*b/c+50"));

// const solve1 = (string) => {
//   console.log(string.split(/([\.\d,]*)/));
//   return string
//     .split(/([\.\d,]*)/)
//     .reverse()
//     .join("");
// };

// console.log(solve1("100*b/y"));
// console.log(solve1("a+b-c/d*30"));
// console.log(solve1("a*b/c+50"));

let regexp = /[0-9a-f]{2}(:[0-9a-f]{2}){5}/i;

console.log(regexp.test("01:32:54:67:89:AB")); // true

console.log(regexp.test("0132546789AB")); // false (нет двоеточий)

console.log(regexp.test("01:32:54:67:89")); // false (5 чисел, должно быть 6)

console.log(regexp.test("01:32:54:67:89:ZZ")); // false (ZZ в конце строки)
