const colors = ['red', 'green', 'rgba(133,122,200', 'grey'];

const btn = document.getElementById('btn');

const color = document.querySelector(".color");

btn.addEventListener("click",function (){
    const randomColor = Math.floor(Math.random()*4);
    console.log(randomColor);
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
});
