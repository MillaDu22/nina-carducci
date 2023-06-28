const displayAll = document.querySelector('.tous');
const displayConcert = document.querySelector('.concert');
const displayEntreprise = document.querySelector ('.entreprise');
const displayMariage = document.querySelector('.mariage');
const displayPortrait = document.querySelector('.portrait');
const photosFiltree = document.querySelectorAll('.box-photo');
const arrayPhotoFiltree= Array.from(photosFiltree);
const btns =document.querySelectorAll('.btn')
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



