let timer;
let textTitleSite = document.querySelector('head title').innerText;


function changeTitle(icon, text) {
  document.querySelector('head title').innerHTML = text;
  document.querySelector('link[rel="shortcut icon"]').setAttribute('href', icon);
}
window.onblur = () => {
  timer = setTimeout(() => {
    changeTitle('./heart.ico', 'Возвращайся! 🤚');
  }, 5000);
}
window.onfocus = () => {
  clearTimeout(timer);
  changeTitle('./favicon.ico', textTitleSite);
}


