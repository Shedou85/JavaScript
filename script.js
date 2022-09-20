


function myFn(dollar, rubles) {
  return dollar >= rubles;
}
console.log(myFn(10, 10))

function myFn2() {
  let a = 100;
  let b = 52;
  return a + b
}
console.log(myFn2())


function dollarConvert(dollar, euro) {
  
  return dollar * euro;
}
let result = dollarConvert(10, 5)
console.log(result + ' Dollar')




//const dollarInEuro = 0.99;
//const rublesInDollar = 60;

//function exchangeRate(euro, rubles) {
 
//  let euroResult = euro * dollarInEuro;
//  let rublesResult = rubles * rublesInDollar;
//  console.log(euroResult > rublesResult);   
//  return `${euroResult} Euro\n${rublesResult} Rubles`;
//}
//console.log(exchangeRate(100, 100))