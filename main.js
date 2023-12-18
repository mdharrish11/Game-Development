
//intializing intial variables 
let duckID = 0;
let manID = 0;
let randomDuck = randomNumber(2000, 3000);
let randomMan = randomNumber(2000, 3000);
let score = 0;
let lives = 2
// get the element by id
let game_body = document.getElementById('game-body')

// Two Audios been stored in a const for later use 
const clickSound=new Audio('./Media/mansound.mp3')
const clickSound2=new Audio('./Media/quack.mp3')

//Audio const created by been looped 
const bgm = new Audio("./Media/theme.mp3");
bgm.loop = true;
bgm.play();




// Here are the funcyions for updating life and score. Also for generate random numbers 

function updateLive(){
     let currLivesDiv = document.getElementById('lives');
    currLivesDiv.innerText = "|"+ "Current Lives" + " " + lives + "|"
 }
 updateLive()

 function updateScore(){
  let currScoreDiv = document.getElementById('score');
 currScoreDiv.innerText = "|"+ "Score" + " " + score + "|"
}
updateScore()



function randomNumber(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}



// function for creating duck
function createDuck() {
    
  let duck = document.createElement("img"); //creating img every time function called
  duckID++ 
  duck.src = "./Media/duck.gif";
  duck.classList = "duck"; //create duck class for styling
  duck.setAttribute("id", duckID); //creating a unique for each duck img created
  game_body.appendChild(duck); // appending to body
  duck.onclick = function () {
    destroyDuck(duck); //duck destroyed everytime we click duck
    score++  //score increase everytime we click on duck
    updateScore() //update the score in the screen
    clickSound2.pause();
    clickSound2.currentTime=0; //click sound been used and current time set 0 so everytime been clicked it will start again
    clickSound2.play();
  };

}

// setting an interval for creating duck with randomduck
let interval = setInterval(function () {
  
  
  randomDuck = randomNumber(2000, 4000);
  console.log(randomDuck)
  createDuck();

}, randomDuck);


// destory the duck function used in below
function destroyDuck(duck) {
    duck.style.display = "none";
    console.log("Destroyed: "+ duckID)
    duck.remove();
    
  }
  
  // this and destory is used when the duck touches the right side of the screen to prevent repetation of same duck
function touchedRight(duck) {

  if (duck.getBoundingClientRect().right >= window.innerWidth) {
    return true
  }
}

//set interval function in loop using duck id so that it check every 0.5 sec the duck touches the rigth screen also null
// null condition used so that the checking start from when there is no duck present at start.
setInterval(function (){
    console.log(duckID)
        for(let i = 1; i <= duckID; i++) {
            let duck = document.getElementById(i.toString()) || null
            if (duck && touchedRight(duck)) {
                destroyDuck(duck);
            }
        }
    }, 500)
    









// create man function

    function createMan() {
    
      let man = document.createElement("img");
      manID++ //id incremented every time man created
      man.src = "./Media/man.gif";
      man.classList = "man";
      man.setAttribute("id", manID);
      game_body.appendChild(man);
      man.onclick = function () {
        destroyMan(man);  // destroy the man when clicked
        lives--   // lives reduced
        updateLive() //lives updated to get displayed in the screen
        clickSound.pause();
    clickSound.currentTime=0.3;
    clickSound.play();
        if(lives==0){
          
          localStorage.setItem("score",score); // score been stored in local storage so that we can use in another js page
          window.location.href = "gameover.html"; //When life became 0 the window will redirect to game over page

        }
      };
    
    }
    
    //setting interval for creating man
    let intervall = setInterval(function () {
      createMan();
      
      randomDuck = randomNumber(500, 4000);
    
    
    }, randomMan);
    
    // function destroy man
    function destroyMan(man) {
        man.style.display = "none";
        console.log("Destroyed: "+ manID)
        man.remove();
        
      }

    // function touched right
    function touchedRight2(man) {
    
      if (man.getBoundingClientRect().right >= window.innerWidth) {
        return true
      }
    }
    
    //set interval function in loop using man id so that it check every 0.5 sec the man touches the rigth screen also null
// null condition used so that the checking start from when there is no duck present at start.
//And destory the man with the id when touches right side of screen
    setInterval(function (){
        console.log(manID)
            for(let i = 1; i <= manID; i++) {
                let man = document.getElementById(i.toString()) || null
                if (man && touchedRight2(man)) {
                    destroyMan(man);
                }
            }
        }, 500)

