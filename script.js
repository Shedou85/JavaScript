

let meniulink = document.querySelector('.meniu').children;

for (let i = 0; i < meniulink.length; i++) {
   meniulink[i].addEventListener('click', function() {
      if (meniulink[i].classList.contains('active')) {
         return
      } else {
         for (let i = 0; i < meniulink.length; i++) {
            meniulink[i].classList.remove('active')
         }
         meniulink[i].classList.add('active')
      }
   }) 
}

