const head = document.getElementById('title');
head.textContent = "Hello Adebanjo, Welcome to Dom";

const new_image = document.getElementById('image-clip');
new_image.setAttribute("src", "crystal.jpg" );

const greeting = document.getElementById('greetings');
greeting.style.color = "green";

const page = document.getElementById('dom_page');
page.classList.add("bold");

const Pageme = document.getElementById('pageme');
const clickButton = document.getElementById('btn-click');

clickButton.addEventListener( 'click', ()=>{
    const newPage = document.createElement('p');
    newPage.textContent ="let share some love with you";
    Pageme.appendChild(newPage);
});