let timer;
let textTitleSite = document.querySelector('head title').innerText;
console.dir(textTitleSite);

function changeTitle(icon, text) {
  document.querySelector('head title').innerHTML = text;
  document.querySelector('link[rel="shortcut icon"]').setAttribute('href', icon);
}
window.onblur = () => {
  timer = setTimeout(() => {
    changeTitle('./heart.ico', '✋Вернитесь😢🤚');
  }, 500);
}
window.onfocus = () => {
  clearTimeout(timer);
  changeTitle('./favicon.ico', textTitleSite);
}


