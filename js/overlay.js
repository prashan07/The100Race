
const openModal = document.querySelectorAll('[data-modal-target]');
const closeModal = document.querySelectorAll('[data-modal-close]');
const overlay = document.getElementById('overlay');
const closebutton = document.querySelector('.btn__close');

console.log('hello');

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.turnon')
    modals.forEach(modal => {
      closeModalButton(modal);
    })
})

closebutton.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.turnon')
    modals.forEach(modal => {
      closeModalButton(modal);
    })
})




openModal.forEach(button=>{
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModalButton(modal);
    })
});

closeModal.forEach(button=>{
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModalButton(modal);
    })
});

function openModalButton(modal){
    if(modal == null){
        return 
    }else{
        modal.classList.add('turnon');
        overlay.classList.add('turnon');
    }
}

function closeModalButton(modal){
    if(modal == null){
        return 
    }else{
        modal.classList.remove('turnon');
        overlay.classList.remove('turnon');
    }
}

