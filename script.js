let a = '12.4';
let b = 36;
let c = '90';

function myFn (a, b, c,) {
   if (a == Number,
      b == Number,
      c == Number
      );
      
       else  ( 
         a == String,
         b == String,
         c == String);
        {
         a = +a;
         b = +b;
         c = +c;
         //console.log( typeof b + ' Proverka preobrazovanyje tipov')
        };
   let sum = a * b * c;
   return  sum;
    
}
console.log(myFn(a, b, c));

let sum = myFn(a, b, c);
console.log(typeof sum);
console.log('Suma vycheslenyje ' + sum)
