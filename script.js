
// Url for Fetching data
let url = 'https://635d0154cb6cf98e56aa96bd.mockapi.io/productCards'
let originalData;
//Render card
const wrapper  = document.querySelector(".cards-list");
//filters Options
const producerList = ["TOSHIBA", "APPLE", "HP", "ACER", "ASUS", "LENOVO", "DELL"];
const processorList = ["AMD", "Intel", "AppleM1", "AppleM2"];
const screenSizeList = [13, 13.3, 14, 15.6, 16, 17.3];
const ramSizeList = [4, 8, 16, 32, 64];
const ssdSizeList = ["128GB", "256GB", "512GB", "1TB", "2TB", "4TB"];
const priceList = ["448,00", "530,00", "575,00", "644,00", "702,00", "1019,00", "1192,00", "1402,00", "1502,00"]
const priceRange = [];
let priceListRange = [];

//Products Api Fetch
async function cardApi() {
  let res = await fetch(url);
  let dataResp = await res.json()
  let data = dataResp[0].data
  console.log(data);
  
  originalData = data;
  render(data, wrapper);
  
  
  filterByProducerName(producerList, originalData);
  filterByProcessorName(processorList, originalData);
  filterByScreenSize(screenSizeList, originalData);
  filterByRamSize(ramSizeList, originalData);
  filterBySsdSize(ssdSizeList, originalData);
  priceCounter();
  //console.log(priceRange);
  //filterByPrice(priceList, priceRange)
  countSamePriceValues(priceRange)
}
cardApi();  


function priceCounter () {
  originalData.forEach(item => {
    let price = Number(item.price.replace(",", "."));
    priceRange.push(price);
  })
  }

//count same price values in priceRange
function countSamePriceValues(priceRange) {
  let count = 0;
  priceRange.forEach(price => {
    if (price < 600) count++
    //console.log(count);
    let el = document.querySelector(`[data-priceRange="below600"]`)
    el.innerHTML = `(${count})`;
  })
  let count2 = 0;
  priceRange.forEach(price => {
    if (price > 600 && price < 750) count2++
    //console.log(count2);
    let el1 = document.querySelector(`[data-priceRange="below750"]`)
    el1.innerHTML = `(${count2})`;
  })
  let count3 = 0;
  priceRange.forEach(price => {
    if (price >= 750 && price <= 900) count3++
    //console.log(count3);
    let el2 = document.querySelector(`[data-priceRange="below900"]`)
    el2.innerHTML = `(${count3})`;
  })
  let count4 = 0;
  priceRange.forEach(price => {
    if (price > 900 && price < 1100) count4++
    //console.log(count4);
    let el3 = document.querySelector(`[data-priceRange="below1100"]`)
    el3.innerHTML = `(${count4})`;
  })
  let count5 = 0;
  priceRange.forEach(price => {
    if (price >= 1100 && price <= 1220) count5++
    //console.log(count5);
    let el4 = document.querySelector(`[data-priceRange="below1220"]`)
    el4.innerHTML = `(${count5})`;
  })
  let count6 = 0;
  priceRange.forEach(price => {
    if (price > 1220 && price < 1500) count6++
    //console.log(count6);
    let el5 = document.querySelector(`[data-priceRange="below1500"]`)
    el5.innerHTML = `(${count6})`;
  })
  let count7 = 0;
  priceRange.forEach(price => {
    if (price >= 1500 && price <= 1800) count7++
    //console.log(count7);
    let el6 = document.querySelector(`[data-priceRange="below1800"]`)
    el6.innerHTML = `(${count7})`;
  })
  let count8 = 0;
  priceRange.forEach(price => {
    if (price > 1800 && price < 2200) count8++
    //console.log(count8);
    let el7 = document.querySelector(`[data-priceRange="below2200"]`)
    el7.innerHTML = `(${count8})`;
  })
  let count9 = 0;
  priceRange.forEach(price => {
    if (price >= 2200 && price <= 3000) count9++
    //console.log(count9);
    let el8 = document.querySelector(`[data-priceRange="below3000"]`)
    el8.innerHTML = `(${count9})`;
  })
  let count10 = 0;
  priceRange.forEach(price => {
    if (price > 3000) count10++
    //console.log(count10);
    let el9 = document.querySelector(`[data-priceRange="above3000"]`)
    el9.innerHTML = `(${count10})`;
  })
}

//Render Function 
function render(data, wrapper) { 
  data.forEach(card => { 
    let cardElement = document.createElement("div"); 
    cardElement.classList.add("product-card"); 
    cardElement.innerHTML = ` 
     
      <div class="product-image"> 
        <img src="${card.image}" alt="img"> 
      </div> 
      <div class="card__info"> 
        <div class="product-name"> 
          ${card.description} 
        </div> 
        <div class="product-specs"> 
          <div class="spec-line"> 
            <div class="label">Atmintinė: </div> 
            <div class="value">${card.specs.ram}GB</div> 
          </div> 
          <div class="spec-line"> 
            <div class="label">Ekrano įstrižainė: </div> 
            <div class="value">${card.specs.screenSizeText}</div> 
          </div> 
          <div class="spec-line"> 
            <div class="label">SSD: </div> 
            <span> </span> 
            <div class="value"> ${card.specs.ssd}</div> 
          </div> 
        </div> 
        <div class="product-price"> 
          <p>${card.price} €</p> 
        </div> 
        <div class="product-action-block"> 
          <div class="to-cart-button"> 
          <img src="https://www.topocentras.lt/140fe2aeea6055f5fc2782fbc940be96.svg" alt="cart"> 
          <span>Į krepšelį</span> 
        </div> 
        <div class="favourite-button"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>                   
        </div> 
        </div> 
      </div> 
      <div class="product-tax"> 
        + 7,01 € Laikmenos mokestis 
      </div> 
   
      <div class="delivery-footer ${card.availableInShop ? 'show' : ''}"> 
        <img src="https://www.topocentras.lt/assets/icons/shipping.svg" alt="Delivery car"> 
        <span>Turime! Atsiimkite per 30min.</span> 
      </div> 
   
      <div class="discount-code ${card.discount ? 'show' : ''}"> 
        <img src="https://www.topocentras.lt/media/amasty/amlabel/1112184x84px-ikona-B.png" alt="discount"> 
      </div> 
   
      <div class="e-price ${card.ePrice ? 'show' : ''}">E-kaina</div> 
      <div class="shop-price">Tik Topocentras.lt</div> 
    `; 
    wrapper.append(cardElement); 
  }); 
}

//Count by amount of brands name
function filterByProducerName(filterList, originalData) {
  filterList.forEach(prod => {
    let amount = 0;

    originalData.forEach(product => {
      if (product.producer === prod) amount++
    })
    
    let el = document.querySelector(`.${prod}.result-amount`)
    
    el.innerHTML = `(${amount})`;
  })
};
//Count by amount of processor's name
function filterByProcessorName(processors, originalData) {
  processors.forEach(proc => {
    let amount = 0;
    
    originalData.forEach(product => {
      if (product.processor === proc) amount++
    })
    
    let el = document.querySelector(`.${proc}.result-amount`)
    
    el.innerHTML = `(${amount})`;
  })
}
//count amount by screen size
function filterByScreenSize(screenSize, originalData) {
  screenSize.forEach(size => {
    let amount = 0;

    originalData.forEach(product => {
      if (product.specs.screenSizeValue === size) amount++
      
    })
    let el = document.querySelector(`[data-screenSize="${size}"]`)
    
    el.innerHTML = `(${amount})`;
  })
}
//count amount by ram size
function filterByRamSize(ramSize, originalData) {
  ramSize.forEach(size => {
    let amount = 0;

    originalData.forEach(product => {
      if (product.specs.ram === size) amount++
    })
    let el = document.querySelector(`[data-ramSize="${size}"]`)

    el.innerHTML = `(${amount})`;
  })
}
//count amount by ssd size
function filterBySsdSize(ssdSize, originalData) {
  ssdSize.forEach(size => {
    let amount = 0;
    originalData.forEach(product => {
      if (product.specs.ssd === size) amount++

    })
    let el = document.querySelector(`[data-ssdSize="${size}"]`)
    
    el.innerHTML = `(${amount})`;
  })
}



//sorting products by price and name
let input = document.querySelector(".sort-select");
input.addEventListener("input", (e) => {

  //sort price  by lover to higher
  if (e.target.value === "price_asc") {
    let sortedData = originalData.sort((a, b) => {
      return  parseFloat(a.price) < parseFloat(b.price) ? -1 : 1;
    });
    wrapper.innerHTML = "";
    render(sortedData, wrapper);
  }
  if (e.target.value === "price_desc") {
    let sortedData = originalData.sort((a, b) => {
      return  parseFloat(a.price) > parseFloat(b.price) ? -1 : 1;
    });
    wrapper.innerHTML = "";
    render(sortedData, wrapper);
  }
  //sort by name
  if (e.target.value === "name") {
    let sortedData = originalData.sort((description) => {
      return  description
    });
    wrapper.innerHTML = "";
    render(sortedData, wrapper);
  }
});
//sorting products by quantity on the page
let input2 = document.querySelector(".sort-select2");
input2.addEventListener("input", (e) => {
  if (e.target.value === "5") {
    let sortedData = originalData.slice(0, 5);
    wrapper.innerHTML = "";
    render(sortedData, wrapper);
  }
  if (e.target.value === "10") {
    let sortedData = originalData.slice(0, 10);
    wrapper.innerHTML = "";
    render(sortedData, wrapper);
  }
  if (e.target.value === "15") {
    let sortedData = originalData.slice(0, 15);
    wrapper.innerHTML = "";
    render(sortedData, wrapper);
  }
  if (e.target.value === "20") {
    let sortedData = originalData.slice(0, 20);
    wrapper.innerHTML = "";
    render(sortedData, wrapper);
  }
  if (e.target.value === "30") {
    let sortedData = originalData.slice(0, 30);
    wrapper.innerHTML = "";
    render(sortedData, wrapper);
  }
  console.log(e.target.value);
});
//Check boxes for Price filter
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("price-check")) {
    let elPrice = e.target.dataset.price

    switch (elPrice) {
      case '600/':
        console.log('Less than 600')
        break;
      case'600/750':
        console.log('More then 600 and less then 750')
        break;
      case'750/900':
        console.log('More then 750 and less then 900')
        break;
      case'900/1100':
        console.log('More then 900 and less then 1100')
        break;
      case'1100/1220':
        console.log('More then 1100 and less then 1220')
        break;
      case'1220/1500':  
        console.log('More then 1220 and less then 1500')
        break;
      case'1500/1800':
        console.log('More than 1500 and les then 1800')
        break;
      case'1800/2200':
        console.log('More than 1800 and les than 2200')
        break;
      case'2200/3000':
        console.log('More than 2200 and les than 3000')
        break;
      case'3000/':
        console.log('More than 3000')
        break;
    }
    
    let checkboxes = document.querySelectorAll(".price-check");
    checkboxes.forEach((checkbox) => {
      if (checkbox !== e.target) checkbox.checked = false;
    });

  }
})




































