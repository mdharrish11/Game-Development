let dataOne = document.getElementById("data1");
let dataThree = document.getElementById("data3");

const bgm = new Audio("./Media/theme.mp3");
bgm.loop = true;
bgm.play();

dataOne.innerText = localStorage.getItem('playerName'); // user input stored value been got here and initialized in data 1 

dataThree.innerText = localStorage.getItem("score"); //score stored value been got here and initialized in data 3 


const gobackBtn = document.getElementById("goback-btn").addEventListener("click",()=>{
    window.location.href="main.html"; // redirecting to game page when clicked
});