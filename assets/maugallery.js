const displayAll = document.querySelector('.tous');
const displayConcert = document.querySelector('.concert');
const displayEntreprise = document.querySelector ('.entreprise');
const displayMariage = document.querySelector('.mariage');
const displayPortrait = document.querySelector('.portrait');
const photosFiltree = document.querySelectorAll('.box-photo');
const arrayPhotoFiltree= Array.from(photosFiltree);
const btns =document.querySelectorAll('.btn')
const modal = document.querySelector('.fond-modal');
const slides = document.querySelector('.lightboxImage');
const body = document.querySelector('body')

function openModal() {
    document.getElementById("myModal").style.display = "flex";
    body.style.position = 'fixed';
}

let slideIndex = 1;
showSlides(slideIndex);
/*Précédent et suivant*/
function prevNext(n) {
    showSlides(slideIndex += n);
}
/*actualisation*/
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("img-modal");
    var dots = document.getElementsByClassName("dots");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

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
window.onload =() => {
    let filters= document.querySelectorAll (".btn")
    for( let filter of filters) {
        filter.addEventListener("click", function (e) {
            btns.forEach(btn  => {
                btn.classList.remove('active')
                e.target.classList.add('active')
            })
            let tag = this.id;
            let images =document.querySelectorAll(".box-photo")
            for (let image of images) {
                image.classList.replace ("active", "remove")
                if(tag in image.dataset  || tag === "tous") {
                    image.classList.replace ("remove", "active")
                }
            }
        })
    }
}




