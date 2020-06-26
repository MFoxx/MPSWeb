// SCROLL EFFECT
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	//Vyberie vsetky hrefy ktore maju # s sebe
	anchor.addEventListener('click', function(e) {
		//Prida na nich eventlistener
		e.preventDefault(); //Zabrani defalut(aby sa to na to hned prepolo)

		//Urobi samotny scroll
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Display more
const cards = document.querySelectorAll('.myCard'); // Getting all cards

// Setting forEach of that cards
cards.forEach((card) => {
	// Gettin all needen elements
	const dots = card.querySelector('.dots');
	const readMore = card.querySelector('.readMore');
	const more = card.querySelector('.more');
	const readLess = card.querySelector('.readLess');

	// Eventlistner on readMore click, adding and removing classes with display: none;
	readMore.addEventListener('click', () => {
		readMore.classList.add('none');
		more.classList.remove('none');
		readLess.classList.remove('none');
		dots.classList.add('none');
	});

	// EventListener on readLess click, adding and removing classes with display: none;
	readLess.addEventListener('click', () => {
		readMore.classList.remove('none');
		more.classList.add('none');
		readLess.classList.add('none');
		dots.classList.remove('none');
	});
});

// Initialize Animations
AOS.init();
