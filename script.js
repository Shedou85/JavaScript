
const dollarInEuro = 0.99;
const rublesInDollar = 60;

function exchangeRate(euro, rubles) {
 
  let euroResult = euro * dollarInEuro;
  let rublesResult = rubles * rublesInDollar;
  console.log(euroResult > rublesResult);   
  return `${euroResult} Euro\n${rublesResult} Rubles`;
}
console.log(exchangeRate(100, 100))
