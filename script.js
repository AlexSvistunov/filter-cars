const cars = [
  {
    brand: "HYUNDAI",
    model: "SOLARIS",
    price: 817200,
    img:  "https://www.saloncentr.ru/uploads/new_car/2757/colors/card_1-belyy-crystal-white_1642263356.png",
    offroad: false,
  },
  {
    brand: "HYUNDAI",
    model: "CRETA",
    price: 1223100,
    img:  "https://www.saloncentr.ru/uploads/new_car/2839/colors/card_1-belyy-atlas-white_1642263596.png",
    offroad: true,
  },

  {
    brand: "HYUNDAI",
    model: "ELANTRA",
    price: 1223100,
    img:  "https://www.saloncentr.ru/uploads/new_car/2820/colors/card_1-belyy-polar-white_1642264193.png",
    offroad: false,
  },

  {
    brand: "VOLKSWAGEN",
    model: "PASSAT",
    price: 1891800,
    img:  "https://www.saloncentr.ru/uploads/new_car/2756/colors/card_7-belyy-oryx-premium-perlamutr_1642330352.png",
    offroad: false,
  },

  {
    brand: "VOLKSWAGEN",
    model: "POLO",
    price: 817200,
    img:  "https://www.saloncentr.ru/uploads/new_car/2779/colors/card_3-belyy-pure-white_1642329952.png",
    offroad: false,
  },

  {
    brand: "VOLKSWAGEN",
    model: "TIGUAN",
    price: 1891800,
    img:  "https://www.saloncentr.ru/uploads/new_car/2813/colors/card_1-belyy-pure_1642331860.png",
    offroad: true,
  },

  {
    brand: "LADA",
    model: "VESTA",
    price: 10000000,
    img:  "https://www.saloncentr.ru/uploads/new_car/155/colors/card_1-belyy-lednikovyy_1642267032.png",
    offroad: false,
  },

  {
    brand: "LADA",
    model: "NIVA TRAVEL",
    price: 1500000,
    img:  "https://www.saloncentr.ru/uploads/new_car/2821/colors/card_8-yarko-belyy-aysberg_1642270007.png",
    offroad: true,
  },


];

const carList = document.querySelector('.car__list');


function render(cars){
 for (let i = 0; i < cars.length; i++) {
  carList.insertAdjacentHTML('beforeend',  `
  <li class="car__item">
    <img src="${cars[i].img}" alt="${cars[i].brand} ${cars[i].model}">
    <h3 class="car__item-title">${cars[i].brand}</h3>
    <span class="car__item-price">${cars[i].price}$</span>
  </li>
  `)
}


}

render(cars);


function sort(){
  const carsObj = Object.assign(cars);

  // const sortedBrand = carsObj.filter(el => {
  //   if(el.brand === "LADA") {
  //     return el;
  //   }
  // });
  
  // carList.innerHTML = "";
  // for (let i = 0; i < sortedBrand.length; i++) {
  //   carList.insertAdjacentHTML('beforeend', `
  //   <li class="car__item">
  //     <img src="${sortedBrand[i].img}" alt="${sortedBrand[i].brand} ${sortedBrand[i].model}">
  //     <h3 class="car__item-title">${sortedBrand[i].brand}</h3>
  //     <span class="car__item-price">${sortedBrand[i].price}$</span>  
  //   </li>
  //   `)
  // }

  // const sortedOffroad = sortedBrand.filter(el => {
  //   if(el.offroad === false) {
  //     return el;
  //   }
  // });

  // carList.innerHTML = "";
  // for (let i = 0; i < sortedOffroad.length; i++) {
  //   carList.insertAdjacentHTML('beforeend', `
  //   <li class="car__item">
  //     <img src="${sortedOffroad[i].img}" alt="${sortedOffroad[i].brand} ${sortedOffroad[i].model}">
  //     <h3 class="car__item-title">${sortedOffroad[i].brand}</h3>
  //     <span class="car__item-price">${sortedOffroad[i].price}$</span>  
  //   </li>
  //   `)
  // }



 // с каким объектом работать
 // возможно функцию в функции
 
}

sort()






