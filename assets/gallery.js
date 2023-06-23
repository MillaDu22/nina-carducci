const displayAll = document.querySelector('.tous');
const displayConcert = document.querySelector('.concert');
const displayEntreprise = document.querySelector ('.entreprise');
const displayMariage = document.querySelector('.mariage');
const displayPortrait = document.querySelector('.portrait');
const photosFiltree = document.querySelectorAll('.box-photo');
const arrayPhotoFiltree= Array.from(photosFiltree);
const gallery =document.querySelector('gallery');

displayAll.addEventListener('click', showAll)
function showAll() {
    arrayPhotoFiltree.forEach(div=>{
        div.classList.remove('remove')
        div.classList.add('show')
    })
}
activebtn(displayAll)

displayConcert.addEventListener('click', showConcert)
function showConcert() {
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')
        
        if(!div.dataset.concert) {
            div.classList.add ('remove')
        }
    })
}
activebtn(displayConcert)


displayEntreprise.addEventListener('click', showEntreprise)
function showEntreprise() {
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')

        if(!div.dataset.entreprise) {
            div.classList.add ('remove')
        }
    })
}

displayMariage.addEventListener('click', showMariage)
function showMariage() {
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')

        if(!div.dataset.mariage) {
            div.classList.add ('remove')
        }
    })
}

displayPortrait.addEventListener('click', showPortrait)
function showPortrait() {
    arrayPhotoFiltree.forEach (div => {
        div.classList.remove('remove')

        if(!div.dataset.portrait) {
            div.classList.add ('remove')
        }
    })
}

