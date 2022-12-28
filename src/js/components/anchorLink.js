

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", (e) => {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
        // переместим в пункт страницы
        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth'
        });
        e.preventDefault();
      }
    })
  })
}

