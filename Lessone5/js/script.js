var menu = document.getElementsByClassName('menu-item');
var ulMenu = document.querySelector('.menu');
var divTitle = document.getElementById('title');
var advertising = document.getElementsByClassName('adv');
var divPrompt = document.getElementById('prompt');
ulMenu.insertBefore(menu[2], menu[1]);

var fiveMenu = document.createElement("li");
fiveMenu.textContent = "Пятый пункт";
fiveMenu.classList.add('menu-item');
ulMenu.appendChild(fiveMenu);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

divTitle.textContent = "Мы продаем только подлинную технику Apple";

advertising[0].remove();

var responseUser = prompt("Какое у вас отношение к техники Apple","");

divPrompt.textContent = responseUser;
