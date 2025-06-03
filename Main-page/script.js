const el = document.getElementById("headline");
const text = el.getAttribute("data-text");
let i = 0;
function type() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(type, 75);
  }
}
type();

window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  });