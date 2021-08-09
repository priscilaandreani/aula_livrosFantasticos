export default function initiAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  if (accordionList.length) {
    const activeClass = 'ativo';
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      console.log(this);
      const proximoItem = this.nextElementSibling;
      proximoItem.classList.toggle(activeClass);
      console.log(proximoItem);
    }

    accordionList.forEach((item) => item.addEventListener('click', activeAccordion));
  }
}