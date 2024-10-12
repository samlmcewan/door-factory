// Set height of hero triangle to fit content 

const element1 = document.querySelector('.hero-text-container');
const element2 = document.querySelector('.hero-text');
const element2Height = element2.offsetHeight;
const newHeight = element2Height * 2 + 24;
element1.style.height = newHeight + 'px';

// CTAs homepage  
// const element12 = document.querySelectorAll('.orange-triangle');
// const element22 = document.querySelector('.cta-text');

// const element12Height = element22.offsetHeight;
// const newHeight2 = element12Height * 1.25 + 24;

// element12.forEach(el => {
//     el.style.height = newHeight2 + 'px';
// });
