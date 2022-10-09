
let arr = [
   {
      imgSrc: "../img/flower1.webp",
      flowerName: "Rose & Lily",
      description: "With classic floral colors including red roses and pink lilies.",
      flowerClass: "Rose",
      price: "$35.99"
   },
   {
      imgSrc: "../img/flower2.webp",
      flowerName: "Sunflower Surprise",
      description: "Green poms, green hypericum berries and green trachelium surround the sunflowers.",
      flowerClass: "Mason Jar",
      price: "$35.99"
   },
   {
      imgSrc: "../img/flower3.webp",
      flowerName: "Harvest Pumpkin",
      description: "Nothing says Fall like pumpkins, so brighten someone's day.",
      flowerClass: "Mason Jar",
      price: "$40.99"
   },
   {
      imgSrc: "../img/flower4.webp",
      flowerName: "Purple Melody",
      description: "Purple and perfect, these sophisticated flowers will speak.",
      flowerClass: "Purple Roses",
      price: "$35.99"
   },
   {
      imgSrc: "../img/flower5.webp",
      flowerName: "Daisy & Rose",
      description: "Delight someone special in your life, or treat yourself.",
      flowerClass: "White Daisies",
      price: "$39.99"
   },
   {
      imgSrc: "../img/flower6.webp",
      flowerName: "Perfect Love Bouquet",
      description: "Love is in the air and this Valentine's Day flower delivery.",
      flowerClass: "Red Carnations",
      price: "$69.99"
   },
   {
      imgSrc: "../img/flower7.webp",
      flowerName: "The Sunrise Bouquet",
      description: "Gushing with vibrant colors, this unique flower arrangement.",
      flowerClass: "Red Carnations",
      price: "$55.99"
   },
   {
      imgSrc: "../img/flower8.webp",
      flowerName: "Fiery Autumn Glow",
      description: "Send them festive fall wishes with this stunning fresh bouquet of roses.",
      flowerClass: "Red Carnations",
      price: "$51.99"
   },
   {
      imgSrc: "../img/flower9.webp",
      flowerName: "Rose & Lily",
      description: "With classic floral colors including red roses and pink lilies.",
      flowerClass: "Rose",
      price: "$35.99"
   }
];


let card_wrapper = document.querySelector('.card_wrapper');

function createCard(parent, cardObject) {
   let card = document.createElement('div');
   card.classList.add('card');
   card.innerHTML = `
      <div class="card_item">
      <div class="card_img">
         <img src= '${cardObject.imgSrc}'  alt="Flower picture">
      </div>
      <div class="card_name">
         <p> Name:</p>
         <span>${cardObject.flowerName}</span>
      </div>
      <div class="card_description">
         <p>Description:</p>
         <span>${cardObject.description}</span>
      </div>  
      <div class="card_class">
         <p>Flower class:</p>
         <span>${cardObject.flowerClass}</span>
      </div>
      <div class="card_price">
         <p>Price:</p>
         <p>${cardObject.price}</p>
      </div>

      <div class="button">
         <div class="btn_buy">Buy Now</div>
      </div>
      </div>
   `;

   parent.append(card)
}

arr.forEach(function(card) {
   
   createCard(card_wrapper, card)
})
