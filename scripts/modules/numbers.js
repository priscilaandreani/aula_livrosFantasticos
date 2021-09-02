export default function initNumbers() {

  function animateNumbers() {
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach((number, idx) => {
      const total = +number.innerText;
      const increase = 2;
      let start = 0;

      const timer = setInterval(() => {
        start = start + increase;
        number.innerText = start;

        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }

      }, 50 * idx);
    });
  };

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animateNumbers();
    }

  }

  const target = document.querySelector('.number');
  const observer = new MutationObserver(handleMutation);
  observer.observe(target, { attributes: true })

}

