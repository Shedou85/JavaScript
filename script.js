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
timer1 = localStorage.getItem('Taimer')

document.getElementById('sekunde').innerHTML = localStorage.getItem('Taimer')


// Work Out Nr. 3 :


let minutes = document.getElementById('min2');
let sekundes = document.getElementById('sec2')

let timerMin = 0;
let timerSec = 0;

setInterval(() => {
   timerMin++
   minutes.innerHTML = timerMin;
}, 60000)
document.getElementById('min2').innerHTML = timerMin;

setInterval(() => {
   timerSec++
   sekundes.innerHTML = timerSec;
}, 1000)
document.getElementById('sec2').innerHTML = timerSec;



