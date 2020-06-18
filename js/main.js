// SCROLL EFFECT
document.querySelectorAll('a[href^="#"]').forEach(anchor => { //Vyberie vsetky hrefy ktore maju # s sebe
    anchor.addEventListener('click', function (e) { //Prida na nich eventlistener
        e.preventDefault(); //Zabrani defalut(aby sa to na to hned prepolo)
  
        //Urobi samotny scroll
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth'
        });
    });
  });


// Display more
const cards = document.querySelectorAll('.myCard');

cards.forEach(card => {
    const dots = card.querySelector('.dots');
    const readMore = card.querySelector('.readMore');
    const more = card.querySelector('.more');
    const readLess = card.querySelector('.readLess')


    readMore.addEventListener('click', ()=> {
        readMore.classList.add('none');
        more.classList.remove('none');
        readLess.classList.remove('none');
        dots.classList.add('none');
    })

    readLess.addEventListener('click', ()=> {
        readMore.classList.remove('none');
        more.classList.add('none');
        readLess.classList.add('none');
        dots.classList.remove('none');
    })

})
