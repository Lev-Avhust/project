function openModal(modalSelecor, modalTimerId) {
  const modal = document.querySelector(modalSelecor);

  modal.classList.add('show');
  modal.classList.remove('hide');
  // modal.classList.toggle('sh
  document.body.style.overflow = 'hidden';

  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function closeModal(modalSelecor) {
  const modal = document.querySelector(modalSelecor);

  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelecor, modalTimerId) {
  
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelecor);
  
  modalTrigger.forEach(e => {
    e.addEventListener('click', () => openModal(modalSelecor, modalTimerId));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelecor);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal(modalSelecor);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelecor, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};