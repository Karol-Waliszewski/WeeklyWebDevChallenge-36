const expandElement = function (ev) {
  console.log(ev)
  ev.target.parentNode.classList.toggle('expand');
}

document.querySelector('#categories>.sidebar__heading').addEventListener('click',expandElement);
document.querySelector('#filter>.sidebar__heading').addEventListener('click',expandElement);
