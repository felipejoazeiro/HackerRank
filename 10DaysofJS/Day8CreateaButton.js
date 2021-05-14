let buttonHtml = document.createElement('button');

buttonHtml.innerHTML = '0';
buttonHtml.id = 'btn';
buttonHtml.className = 'button-test';

document.body.appendChild(buttonHtml)

let button = document.getElementById('btn')

button.addEventListener('click', (e)=>{
    btn.innerHTML++
})