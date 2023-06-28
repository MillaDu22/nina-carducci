const modal = document.querySelector('.fond-modal');
const slide=document.querySelectorAll('.img-modal')
const slides=document.querySelector('.lightboxImage')
const nbSlide = slide.length;

function open() {
    const openModal = document.querySelectorAll('.desk');
    openModal.forEach (open => {
        open.addEventListener('click', function(e) {
            e.preventDefault()
            modal.style.display="flex";
        })
    })
}
open()

const sideClickCloseModale = document.querySelector('.fond-modal');
function sideCloseModale() {
    sideClickCloseModale.addEventListener('click', function(e) {
        e.preventDefault()
        modal.style.display="none";
        window.location=('./index.html');
    });
}
sideCloseModale();

const modalBody = document.querySelector('.modal-body');
modalBody.addEventListener('click', stop )

function stop(e) {
    e.stopPropagation()
}


function Slider () {
    const btnPrev = document.querySelector('.arrow-left');
    const btnNext = document.querySelector('.arrow-right');
    let currentSlide = 0;

    const ChangeSlide = function(){
    slide.forEach((slider, index) => (
        slider.style.transform= "translateX"))
    }
    ChangeSlide(currentSlide);

    function slideSuivante() {
        slide[currentSlide].classList.remove('active')
        if(currentSlide < nbSlide -1) {
            currentSlide++;
        } else {
            currentSlide= 0;
        }
        slide[currentSlide].classList.add('active')
        console.log(currentSlide)
    }
    btnNext.addEventListener('click', slideSuivante)
    ChangeSlide(currentSlide)


    function slidePrecedente() {
        slide[currentSlide].classList.remove('active')
        if(currentSlide > 0) {
            currentSlide --;
        } else {
            currentSlide= nbSlide - 1;
        }
        slide[currentSlide].classList.add('active')
        console.log(currentSlide)
    }
    btnPrev.addEventListener('click', slidePrecedente)
    ChangeSlide(currentSlide)
}
Slider();