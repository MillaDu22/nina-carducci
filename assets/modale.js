const modal = document.querySelector('.fond-modal');
const openModal = document.querySelectorAll('.desk');

openModal.addEventListener('click', openModale) 
function openModale() {
    modal.style.display="flex";
}
openModale()