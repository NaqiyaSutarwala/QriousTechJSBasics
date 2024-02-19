'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const firstKey = Object.keys(data.currencies)[0];

  const html = ` 
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        Number(data.population) / 100000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.keys(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${firstKey}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// AJAX HTTP
// const getCountryAndNeighbor = function (countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();
//   request.addEventListener('load', function () {
//     console.log(request.responseText);
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     renderCountry(data);

//     // Get neighbor country
//     const [neighbor] = data.borders;

//     // AJAX Call 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `
//     https://restcountries.com/v3.1/alpha/${neighbor}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('canada');
// getCountryAndNeighbor('germany');

// Fetching Using promises

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country Not Found ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data[1]);
      renderCountry(data[1]);
      const neighbour = data[1].borders[0];
      console.log(neighbour);

      return fetch(` https://restcountries.com/v3.1/alpha/${neighbour}`);
      //   return 23;
    })
    .then(response => response.json())
    .then(data => {
      //   console.log(data[]);
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => console.error(`${err}`));
};

btn.addEventListener('click', function () {
  getCountryData('Indgfgdfia');
});

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);

// console.log('Test Start');
// setTimeout(() => {
//   console.log('after 0');
// }, 0);
// Promise.resolve(console.log('ncjdcn')).then(res => {
//   setTimeout(() => {
//     console.log('I ran First');
//   }, 0);
//   console.log(res);
// });
// console.log('Test End');

// Building Promises from Scratch

const lottery = new Promise(function (resolve, reject) {})


(function (a) {
  console.log(a);
})(5);
