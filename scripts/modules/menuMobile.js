import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const userEvent = ['click', 'touchstart'];

  if (menuButton) {
    function handleMenu() {
      menuButton.classList.add('active');
      menuList.classList.add('active');
      outsideClick(menuList, userEvent, () => {
        menuButton.classList.remove('active');
        menuList.classList.remove('active');
      })
    }

    userEvent.forEach(event =>
      menuButton.addEventListener(event, handleMenu)
    )
  }
}
