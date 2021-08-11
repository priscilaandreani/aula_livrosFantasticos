import outsideClick from "./outsideClick.js";

export default function initDropdown(){

  const dropdowns = document.querySelectorAll('[data-dropdown');
  const events = ['touchstart', 'click', 'mouseover'];

  dropdowns.forEach(drop => {

    events.forEach(userEvent => {
      drop.addEventListener(userEvent, handleClick);
    })
  })
  
  function handleClick(event) {
   event.preventDefault();
   this.classList.add('active');

    outsideClick(this, events, () => {
      this.classList.remove('active')
    })

  }

}
