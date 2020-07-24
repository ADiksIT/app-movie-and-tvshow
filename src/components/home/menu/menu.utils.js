export function clickedMenu(event) {
  const dropdown = event.target.closest('.dropdown');
  const target = event.target.closest('.left-menu');
  if (dropdown) {
    dropdown.classList.toggle('active');
  } else {
    target.classList.toggle(target.dataset.classes);
    const hamburger = target.firstChild.nextSibling;
    hamburger.classList.toggle(hamburger.dataset.classes);
  }
}
