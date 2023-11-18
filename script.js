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


const selectBrand = document.querySelector('.car__select-brand');
const selectType = document.querySelector('.car__select-type');
const selectSort = document.querySelector('.car__select-sort');
const carList = document.querySelector('.car__list');

function sortBy(array) {
  if(selectSort.value === "Убывание") {
    const newArray = array.sort((a, b) => {
        if(a.price > b.price) {
          return -1;
        }
    });
    carList.innerHTML = "";
    insertElements(newArray)
    
  } else {
    const newArray = array.sort((a, b) => {
      if(a.price < b.price) {
        return -1;
      }
    });
    carList.innerHTML = "";
    insertElements(newArray)
  }

}


function render(array) {
  insertElements(array);
  
}


function getPattern(brand, model, price, img) {
  return `<li class="car__item">
    <img src="${img}" alt="${brand} ${model}">
    <h3 class="car__item-title">${brand} ${model}</h3>
    <span class="car__item-price">${price}$</span>
  </li>`
}


render(cars);

function sortBrand(array) {
    if(selectBrand.value === "ALL") {
      render(cars)
    } else {
      const newArray = array.filter(el => el.brand === selectBrand.value);
       carList.innerHTML = "";
       insertElements(newArray);
    }
 

}

function sortType(array) {
  if(selectType.value === "ВНЕДОРОЖНИК") {
    const newArray = array.filter(el => el.offroad === true);
    carList.innerHTML = "";
    insertElements(newArray);
  } else {
    const newArray = array.filter(el => el.offroad === false);
    carList.innerHTML = "";
    insertElements(newArray);
  }
}
function insertElements(array) {
  for (let i = 0; i < array.length; i++) {
    carList.insertAdjacentHTML('beforeend', getPattern(array[i].brand, array[i].model, array[i].price, array[i].img))   
  }
}


selectBrand.addEventListener('change', function(e){
  sortBrand(cars);
});


selectType.addEventListener('change', function(e){
  sortType(cars);
})

selectSort.addEventListener('change', function(e){
  sortBy(cars)
})


// Функция для отображения списка автомобилей
// function displayCars(cars) {
//   carList.innerHTML = ''; // Очищаем текущий список

//   cars.forEach(car => {
//     const carItem = document.createElement('li');
//     carItem.classList.add('car__item');

//     carItem.innerHTML = `
//       <div class="car__info">
//         <img src="${car.img}" alt="${car.brand} ${car.model}" class="car__image">
//         <div class="car__details">
//           <h3>${car.brand} ${car.model}</h3>
//           <p>Цена: ${car.price.toLocaleString()} руб.</p>
//           <p>${car.offroad ? 'Внедорожник' : 'Седан'}</p>
//         </div>
//       </div>
//     `;

//     carList.appendChild(carItem);
//   });
// }

// // Функция для фильтрации и сортировки списка автомобилей
// function filterAndSortCars() {
//   let filteredCars = cars.slice(); // Создаем копию массива

//   const selectedBrand = selectBrand.value;
//   const selectedType = selectType.value;
//   const selectedSort = selectSort.value;

//   // Фильтрация по бренду
//   if (selectedBrand !== 'ALL') {
//     filteredCars = filteredCars.filter(car => car.brand === selectedBrand);
//   }

//   // Фильтрация по типу
//   if (selectedType !== 'ALL') {
//     filteredCars = filteredCars.filter(car => (selectedType === 'ВНЕДОРОЖНИК' ? car.offroad : !car.offroad));
//   }

//   // Сортировка
//   if (selectedSort === 'Убывание') {
//     filteredCars.sort((a, b) => b.price - a.price);
//   } else if (selectedSort === 'Возрастание') {
//     filteredCars.sort((a, b) => a.price - b.price);
//   }

//   // Отображение отфильтрованного и отсортированного списка
//   displayCars(filteredCars);
// }

// // Обработчики событий для выпадающих списков
// selectBrand.addEventListener('change', filterAndSortCars);
// selectType.addEventListener('change', filterAndSortCars);
// selectSort.addEventListener('change', filterAndSortCars);

// // Инициализация списка при загрузке страницы
// displayCars(cars);






