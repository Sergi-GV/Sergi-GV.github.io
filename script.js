document.addEventListener('DOMContentLoaded', () => {

  const btnPortal = document.getElementById('btn-portal');
  if (btnPortal) {
    btnPortal.addEventListener('click', () => {
      alert('Acceso a la Zona de Clientes de Multicines Zamora');
    });
  }

  const btnSubmit = document.getElementById('btn-submit-form');
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (btnSubmit && newsletterForm) {
    btnSubmit.addEventListener('click', () => {
      alert('¡Reserva realizada correctamente!');
    });
  }

  const fakeLinks = [
    { id: 'link-ai', hash: '#miercoles' },
    { id: 'link-energy', hash: '#seniors' },
    { id: 'link-biotech', hash: '#matinales' }
  ];

  fakeLinks.forEach(item => {
    const elem = document.getElementById(item.id);
    if (elem) {
      elem.addEventListener('click', () => {
        location.href = item.hash;
      });
    }
  });

});