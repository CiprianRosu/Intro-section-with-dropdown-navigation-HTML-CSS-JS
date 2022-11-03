var button = document.getElementById('button');
var dropdown = document.getElementById('dropdown');
var menu = document.querySelector('.menu');

button.addEventListener('click', function(){
    dropdown.classList.toggle('hide');
    menu.classList.toggle('active');
})

var button2 = document.getElementById('button2');
var dropdown2 = document.getElementById('dropdown2');
var menu2 = document.querySelector('.menu2');

button2.addEventListener('click', function(){
    dropdown2.classList.toggle('hide2');
    menu2.classList.toggle('active2');
})
