// const data = require('../DATA.json');

// // document.querySelector('.menu-toggle').addEventListener('click', (event) => {
// //     document.querySelector('.nav').classList.toggle('mobile-nav')
// //     document.querySelector('.menu-toggle').classList.toggle('is-active')
// //     event.stopPropagation()
// // })
// // document.querySelector('.menu-toggle').addEventListener('keypress', (event) => {
// //     if (event.key === 'Enter') {
// //         document.querySelector('.nav').classList.toggle('mobile-nav')
// //         document.querySelector('.menu-toggle').classList.toggle('is-active')
// //         event.stopPropagation()
// //     }
// // })

// // document.querySelector('.nav-item a').addEventListener('click', (event) => {
// //     document.querySelector('.menu-toggle').classList.remove('is-active')
// //     document.querySelector('.nav').classList.remove('mobile-nav')
// //     event.stopPropagation()
// // })
// // document.querySelector('main').addEventListener('click', (event) => {
// //     document.querySelector('.menu-toggle').classList.remove('is-active')
// //     document.querySelector('.nav').classList.remove('mobile-nav')
// //     event.stopPropagation()
// // })

// // document.removeEventListener('mousedown', (event) => {
// //     document.body.classList.add('using-mouse')
// //     document.body.classList.remove('using-keyboard')
// //     event.stopPropagation()
// // })

// // document.addEventListener('keydown', (event) => {
// //     document.body.classList.add('using-keyboard')
// //     document.body.classList.remove('using-mouse')
// //     event.stopPropagation()
// // })

// // Catalog List

// const rating = [];
// data.restaurants.forEach((restoran) => {
//     const mainContent = document.getElementById('restoList');
//     mainContent.innerHTML += `

//   <li class="cards_item">
//   <div class="card">
//     <div class="card_tag">
//       <div class="6c7bqjgi84kcowlqdz" id='${restoran.id}'>
//         <div class="stars-outer">
//           <div class="stars-inner"></div>
//         </div>
//         <div class="rate"><span>${restoran.rating}</span></div>
//       </div>
//     </div>
//     <div class="card_image">
//       <img
//         src="${restoran.pictureId}" alt="${
//         restoran.name
//     }" width="100%" height="230px"
//       />
//       <div class="overlay">
//         <a href="/place/${restoran.id}" class="icon" title="Lihat lebih lanjut">
//           <i class="fa fa-eye"></i>
//         </a>
//       </div>
//     </div>
//     <div class="card_content">
//       <h3 class="card_title">${restoran.name}</h3>
//       <h4 class="city">${restoran.city}</h4>
//       <p class="card_text">
//         ${restoran.description.split(' ', 20).join(' ')}
//         <span id="dots">... <a href="/place/${restoran.id}">Baca</a></span>
//       </p>
//     </div>
//   </div>
// </li>

//   `;

//     // Rating

//     rating.push({
//         id: restoran.id,
//         rate: restoran.rating,
//     });
//     const starTotal = 5;
//     for (let i = 0; i < rating.length; i++) {
//         const starPercentage = (rating[i].rate / starTotal) * 100;
//         const starPercentageRounded = `${
//             Math.round(starPercentage / 10) * 10
//         }%`;
//         document
//             .querySelector(`#${CSS.escape(rating[i].id)}`)
//             .querySelector('.stars-inner').style.width = starPercentageRounded;
//     }
// });
