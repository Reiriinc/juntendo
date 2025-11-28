// window.addEventListener("DOMContentLoaded", () => {
// 	let currentIndex = 0;
// 	const filterItem  = document.getElementsByClassName('p-shopinfo-filter-list-item');
// 	const detailItem  = document.getElementsByClassName('detail-list-item');
// 	const flyerSlider = document.getElementsByClassName('p-shopinfo-flyer-slider');
// 	const infoItem    = document.getElementsByClassName('info-list-item');

// 	for (let i = 0; i < filterItem.length; i++) {
// 		filterItem[i].addEventListener('click', () => {
// 			if(currentIndex != i) {
// 				filterItem[currentIndex].classList.remove('active');
// 				detailItem[currentIndex].classList.remove('active');
// 				flyerSlider[currentIndex].classList.remove('active');
// 				infoItem[currentIndex].classList.remove('active');
// 			}

// 			filterItem[i].classList.add('active');
// 			detailItem[i].classList.add('active');
// 			flyerSlider[i].classList.add('active');
// 			infoItem[i].classList.add('active');

// 			currentIndex = i;
// 		});
// 	}
// });
