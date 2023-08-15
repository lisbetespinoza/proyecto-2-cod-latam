const menuItems = document.querySelectorAll('.menu-item')

const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click',function(){
    document.body.classList.toggle('mobile-menu-active')
})


const modoOscuro = document.querySelector('#modo-oscuro')


modoOscuro.addEventListener('click', function () { 
    document.body.classList.toggle('modo-oscuro')
})