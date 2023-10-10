const btnMenu = document.querySelector('[data-btn-menu]');
const btnClose = document.querySelector('[data-btn-close]');
const menu = document.querySelector('#menu');
const imageBox = menu.querySelector('.menu__image-box');
const contentBox = menu.querySelector('.menu__content-box');
const menuList = document.querySelector('#menu-list');
const links = Array.from(menuList.querySelectorAll('a'));

btnMenu.addEventListener('click', e => {
   e.preventDefault();

   const showMenu = () => {
      menu.style.display = 'block';
   };

   let tl = gsap.timeline({onStart: showMenu});

   if(window.innerWidth > 864) {

      tl.fromTo(imageBox, {y: '-101%'}, {y: 0, duration: 0.8, ease: 'power2.in'})
         .fromTo(contentBox, {y: '-100%'}, {y: 0, ease: 'power2.in', duration: 0.8}, '-=0.7');
         
   } else {
      tl.fromTo(contentBox, {y: '-100%'}, {y: 0, ease: 'power2.in', duration: 0.8});
   }
   
   tl.fromTo(links, {y: 40, opacity: 0}, {y: 0, opacity: 1, ease: 'power4.out', stagger: 0.05}, '+=0.2');
});

btnClose.addEventListener('click', e => {
   e.preventDefault();

   const hideMenu = () => {
      menu.style.display = 'none';
   };

   let tl = gsap.timeline({onComplete: hideMenu});
   
   tl.fromTo(links, {y: 0, opacity: 1}, {y: 40, opacity: 0, ease: 'power4.out', stagger: 0.05});

   if(window.innerWidth > 864) {
      tl.fromTo(imageBox, {y: 0}, {y: '-101%', ease: 'power2.in', duration: 0.8}, '-=0.8');
   }
   
   tl.fromTo(contentBox, {y: 0}, {y: '-101%', ease: 'power2.in', duration: 0.8}, '-=0.7');
});