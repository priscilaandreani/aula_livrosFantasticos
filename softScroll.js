const menuInterno = document.querySelectorAll('.js-menu ul li a[href^="#"]');

function softScroll(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView;
  ({
    behavior: 'smooth',
    block: 'start',
  });
}

menuInterno.forEach((link) => link.addEventListener('click', softScroll));
