let a = '2';
let b = '2';
let c = '2';
//console.log(typeof a) // sostojanyje peremeny
function myFn(a, b, c) {
   a = Number(a);
   b = Number(b);
   c = Number(c);
   //console.log(typeof a) // preobrazovanyje stroki v number
   return a * b * c
}


let total = myFn(a, b, c)
console.log(total)
//console.log(typeof total) // proverka rezultata v chislo

