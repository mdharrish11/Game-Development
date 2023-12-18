const userInput = document.getElementById("user-input");
const userInput2 = document.getElementById("user-input2");


const bgm = new Audio("./Media/theme.mp3");
bgm.loop = true;
bgm.play();






document.getElementById("instruction-icon").addEventListener("click",()=>{
    document.getElementById('instruction-page').style.display = "inherit ";
});

document.getElementById("exit").addEventListener("click",()=>{
    document.getElementById('instruction-page').style.display = "none "
});
//instruction page wont be diplayed when the exit logo clicked

document.getElementById("play-btn").addEventListener("click",()=>{
    if(userInput.value == ""){
        alert("Enter your name");
    }else{
        localStorage.setItem('playerName',userInput.value); // storing the user input in local storage
        window.location.href = "main.html";
    }
});

document.getElementById("play-btn").addEventListener("click",()=>{
    if(userInput2.value == ""){
        alert("Enter your Nick name");}})