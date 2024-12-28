import MicroModal from 'micromodal';

MicroModal.init();

window.MicroModal = MicroModal;

window.openModal = function(position) {
  [...document.getElementsByClassName('job-details')].forEach(element => {
    element.classList.add('hidden')
  });
  document.getElementById(`${position}-modal-content`).classList.remove('hidden'); 
  MicroModal.show('career-modal');
}