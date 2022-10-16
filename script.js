// Work Out Nr. 1 :

let input1 = document.querySelector('.input');
let btn1 = document.querySelector('.btn');

function saveName() {
   let inputText = input1.value;
   //console.log(inputText);
   localStorage.setItem('inputName', inputText);
   document.getElementsByName('myinput').innerHTML = localStorage.getItem('inputName')
}

btn1.addEventListener('click', saveName);


let inputStorage = localStorage.getItem('inputName');
//console.log(inputStorage)
document.getElementById('inputid').value = localStorage.getItem('inputName')


// Work Out Nr. 2 :

let sec = document.getElementById('sekunde')

let timer1 = 0;
sec.innerHTML = timer1;

setInterval(() => {
   timer1++
   sec.innerHTML = timer1;
   localStorage.setItem('Taimer', timer1);
}, 1000)


console.log(localStorage)
let result = localStorage.getItem('Taimer')
console.log(result)
document.getElementById('sekunde').innerHTML = localStorage.getItem('Taimer')



//setInterval(() => {
   
//   timer1++
//   sec.innerHTML = new Date;

//}, 1000)

//localStorage.setItem('Data', timer1);
////document.getElementById('timer1') = localStorage.getItem('timer1')
//console.log(localStorage)

// Varijant s cifroj -----> Ne poluchajetsa 

//let timer = document.querySelector('timer');
//let sec = document.getElementById('sekunde')

//let timer1 = 0;

//setInterval(() => {
//   timer1++
//   sec.innerHTML = timer1;
//   localStorage.setItem('Data', timer1);
//}, 1000)


//document.getElementById('sekunde').innerHTML = localStorage.getItem('Data')
//console.log(localStorage)








