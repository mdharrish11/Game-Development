let dataOne = document.getElementById("data1");
let dataThree = document.getElementById("data3");

const bgm = new Audio("./Media/theme.mp3");
bgm.loop = true;
bgm.play();

dataOne.innerText = localStorage.getItem('playerName');
dataThree.innerText = localStorage.getItem("score");


const gobackBtn = document.getElementById("goback-btn").addEventListener("click",()=>{
    window.location.href="main.html";
});