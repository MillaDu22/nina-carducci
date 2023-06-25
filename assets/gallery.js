const displayAll = document.querySelector('.tous');
const displayConcert = document.querySelector('.concert');
const displayEntreprise = document.querySelector ('.entreprise');
const displayMariage = document.querySelector('.mariage');
const displayPortrait = document.querySelector('.portrait');
const photosFiltree = document.querySelectorAll('.box-photo');
const arrayPhotoFiltree= Array.from(photosFiltree);
const gallery =document.querySelector('gallery');
const btns =document.querySelectorAll('.btn')
let currentBtns = 0


displayAll.addEventListener('click', showAll)
function showAll() {
    btns[currentBtns].classList.remove('active')
    arrayPhotoFiltree.forEach(div=>{
        div.classList.remove('remove')
        div.classList.add('show')
    })
}
btns[currentBtns].classList.add('active')

displayConcert.addEventListener('click', showConcert)
function showConcert() {
    btns[currentBtns].classList.remove('active')
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')
        
        if(!div.dataset.concert) {
            div.classList.add ('remove')
        }
    })
}
btns[currentBtns].classList.add('active')

displayEntreprise.addEventListener('click', showEntreprise)
function showEntreprise() {
    btns[currentBtns].classList.remove('active')
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')

        if(!div.dataset.entreprise) {
            div.classList.add ('remove')
        }
    })
}
btns[currentBtns].classList.add('active')

displayMariage.addEventListener('click', showMariage)
function showMariage() {
    btns[currentBtns].classList.remove('active')
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')

        if(!div.dataset.mariage) {
            div.classList.add ('remove')
        }
    })
}
btns[currentBtns].classList.add('active')


displayPortrait.addEventListener('click', showPortrait)
function showPortrait() {
    btns[currentBtns].classList.remove('active')
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')

        if(!div.dataset.portrait) {
            div.classList.add ('remove')
        }
    })
}
btns[currentBtns].classList.add('active')


