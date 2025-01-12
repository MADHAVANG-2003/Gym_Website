const navbar = document.querySelector('.navbar');
const menu =document.querySelector('.navbar-toggler-icon')

window.addEventListener('scroll',()=>{
  navbar.classList.toggle('up',window.scrollY > 100);
})
menu.addEventListener('click',()=>{
  navbar.classList.add('up');
})