
const carouselItems = document.querySelectorAll('.carousel__item');

if (carouselItems.length > 0) {
	for (let i = 1; i < carouselItems.length; i += 1) {
		let carouselItem = carouselItems[i];

		carouselItem.addEventListener('click', showPic)

		function showPic() {
			let firstCardContent = carouselItems[0].innerHTML;
			carouselItems[0].innerHTML = carouselItem.innerHTML;
			carouselItem.innerHTML = firstCardContent;
		}
	}
}
