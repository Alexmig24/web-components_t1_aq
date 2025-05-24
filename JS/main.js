import './tarjetaAQ.js';
import './formularioContactoAQ.js';
import './modalInfAQ.js';

document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('formulario-aq');
  const modal = document.querySelector('modal-info-aq');

  formulario.addEventListener('formulario-enviado', (e) => {
    console.log(e.detail.mensaje); // debug
    modal.open();
  });

  modal.addEventListener('modal-abierto', (e) => {
    console.log('Evento personalizado:', e.detail.mensaje);
  });

  modal.addEventListener('modal-cerrado', (e) => {
    console.log('Evento personalizado:', e.detail.mensaje);
  });
});
