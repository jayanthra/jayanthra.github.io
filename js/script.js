
document.addEventListener("mousemove", parallax);
const elem = document.querySelector(".parallax");
const expander = document.querySelector('.expander')
const header = document.querySelector('.header')
const internalLink = document.querySelectorAll('.inner-link')
let isMenuOpen = false

function parallax(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
  let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
  let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
  let x = `${_depth3}, ${_depth2}, ${_depth1}`;
  console.log(x);
  elem.style.backgroundPosition = x;
}


const toggleMenu = () => {
  if (isMenuOpen) {
    expander.classList.add('expanded')
    header.classList.add('full-height')
  } else {
    expander.classList.remove('expanded')
    header.classList.remove('full-height')
  }
}

expander.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen
  toggleMenu()
})

internalLink.forEach(ele => {
  ele.addEventListener('click', () => {
    isMenuOpen = false
    toggleMenu()
  })
})
