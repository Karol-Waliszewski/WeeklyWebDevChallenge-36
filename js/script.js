const expandElement = function(ev) {

  ev.target.parentNode.classList.toggle('expand');
}

document.querySelector('#categories>.sidebar__heading').addEventListener('click', expandElement);
document.querySelector('#filter>.sidebar__heading').addEventListener('click', expandElement);
document.querySelector('.navigation__hamburger').addEventListener('click', function(ev) {
  ev.target.parentNode.parentNode.classList.toggle('expand');
});
