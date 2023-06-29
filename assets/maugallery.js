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

function openModal() {
    document.getElementById("myModal").style.display = "flex";
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

//Filtrage
let currentBtns = 0

displayAll.addEventListener('click', showAll)
function showAll(e) {
    btns.forEach(btn  => {
        btn.classList.remove('active')
        e.target.classList.add('active')
    })
    arrayPhotoFiltree.forEach(div=>{
        div.classList.remove('remove')
        div.classList.add('show')
    })
}

displayConcert.addEventListener('click', showConcert)
function showConcert(e) {
    btns.forEach(btn  => {
        btn.classList.remove('active')
        e.target.classList.add('active')
    })
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')
        
        if(!div.dataset.concert) {
            div.classList.add ('remove')
        }
    })
}

displayEntreprise.addEventListener('click', showEntreprise)
function showEntreprise(e) {
    btns.forEach(btn  => {
        btn.classList.remove('active')
        e.target.classList.add('active')
    })
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')

        if(!div.dataset.entreprise) {
            div.classList.add ('remove')
        }
    })
}

displayMariage.addEventListener('click', showMariage)
function showMariage(e) {
    btns.forEach(btn  => {
        btn.classList.remove('active')
        e.target.classList.add('active')
    })
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')

        if(!div.dataset.mariage) {
            div.classList.add ('remove')
        }
    })
}

displayPortrait.addEventListener('click', showPortrait)
function showPortrait(e) {
    btns.forEach(btn  => {
        btn.classList.remove('active')
        e.target.classList.add('active')
    })
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')

        if(!div.dataset.portrait) {
            div.classList.add ('remove')
        }
    })
}



