const openTextBtns = document.querySelectorAll('.show-more');

const limitedBlocks = document.querySelectorAll('.limited');

if (openTextBtns.length > 0 && limitedBlocks.length > 0) {
	for (let i = 0; i < openTextBtns.length; i += 1) {
		let openTextBtn = openTextBtns[i];
		openTextBtn.addEventListener('click', function (e) {
			e.preventDefault();
			limitedBlocks[i].classList.toggle('limited--visible');
			openTextBtn.classList.toggle('link-hide');
		})
	}
}


