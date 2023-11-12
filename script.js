// let carList = document.querySelector('.car__list');
// let carItems = document.querySelectorAll('.car__item');
// const carPrices = carList.querySelectorAll('.car__item-price');
// const array = Array.from(carItems).map((el, index) => {
//   return parseInt(el.querySelector('.car__item-price').textContent.replace(/\s/g, ''));
// });
// const filteredArray = array.sort((a, b) => a - b);


// carList.innerHTML = "";

// filteredArray.forEach((carItem) => {
//   carList.appendChild(carItem);
// });

const carList = document.querySelector('.car__list');
const carItems = carList.querySelectorAll('.car__item');

const selectSort = document.querySelector('.car__select-sort');
selectSort.addEventListener('change', function() {
  if(selectSort.value == "Убывание"){
    const sortedCarItems = Array.from(carItems)
    .sort((a, b) => {
      const priceA = parseInt(a.querySelector('.car__item-price').textContent.replace(/\s/g, ''));
      const priceB = parseInt(b.querySelector('.car__item-price').textContent.replace(/\s/g, ''));
      return priceB - priceA;
    });
  
    console.log(sortedCarItems); 
  
  
    while (carList.firstChild) { 
      carList.removeChild(carList.firstChild);
    }
  
  
    sortedCarItems.forEach((carItem) => {
      carList.appendChild(carItem);
    });
  }

  else if(selectSort.value == "Возрастание"){
    const sortedCarItems = Array.from(carItems)
    .sort((a, b) => {
      const priceA = parseInt(a.querySelector('.car__item-price').textContent.replace(/\s/g, ''));
      const priceB = parseInt(b.querySelector('.car__item-price').textContent.replace(/\s/g, ''));
      return priceA -  priceB;
    });
  
    console.log(sortedCarItems); 
  
  
    while (carList.firstChild) { 
      carList.removeChild(carList.firstChild);
    }
  
  
    sortedCarItems.forEach((carItem) => {
      carList.appendChild(carItem);
    });
    
  }


});










