const placeholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const targets = document.querySelectorAll('[data-src]');

targets.forEach(target => {
	target.src = placeholder;
});

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.05
};

function loadImage(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting && entry.target.parentNode.classList.contains('loading')) {
			entry.target.src = entry.target.getAttribute('data-src');
			entry.target.onload = () => {
				entry.target.parentNode.classList.remove('loading');
				entry.target.removeAttribute('data-src');
			}
		}
	})
}

const observer = new IntersectionObserver(loadImage, options);

targets.forEach(target => {
	observer.observe(target)
})

