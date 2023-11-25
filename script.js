// let menuToggle = document.querySelector('.menu-toggle input');
// let navList = document.querySelector('.nav-list ul');

// menuToggle.onClick = () => {
//     menuToggle.classList.toggle('.menu-toggle input');
//     navbar.classList.toggle('slide');
// }

const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function() {
  this.classList.toggle('change')
  sidebar.classList.toggle('change')
  bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function() {
  this.classList.remove('change')
  sidebar.classList.remove('change')
  burger.classList.remove('change')
})
