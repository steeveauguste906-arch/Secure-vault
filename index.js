let code1 = 7 + 3;
console.log(code1);

let code2 = 100 / 2 - 10;
console.log(code2);

let code3 = 39;
console.log(code3);

let message = " the vault has been secured. The combination is:";

let codeA = code1 + "-" + code2 + "-" + code3;
let codeB = `${code1}-${code2}-${code3}`;
console.log(message, codeA, codeB);
