let duckID = 0;
let manID = 0;
let randomDuck = randomNumber(2000, 4000);
let randomMan = randomNumber(2000, 3000);
let score = 0;
let lives = 2



function randomNumber(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function createDuck() {
    
  let duck = document.createElement("img");
  duckID++
  duck.src = "./Media/duck.gif";
  duck.classList = "duck";
  duck.setAttribute("id", duckID);
  document.querySelector("body").appendChild(duck);
  duck.onclick = function () {
    destroyDuck(duck);
    score++
  };

}

let interval = setInterval(function () {
  
  
  randomDuck = randomNumber(300, 3000);
  console.log(randomDuck)
  createDuck();

}, randomDuck);


function destroyDuck(duck) {
    duck.style.display = "none";
    console.log("Destroyed: "+ duckID)
    duck.remove();
    
  }
  
function touchedRight(duck) {

  if (duck.getBoundingClientRect().right >= 1280) {
    return true
  }
}


setInterval(function (){
    console.log(duckID)
        for(let i = 1; i <= duckID; i++) {
            let duck = document.getElementById(i.toString()) || null
            if (duck && touchedRight(duck)) {
                destroyDuck(duck);
            }
        }
    }, 500)
    











    function createMan() {
    
      let man = document.createElement("img");
      manID++
      man.src = "./Media/man.gif";
      man.classList = "man";
      man.setAttribute("id", manID);
      document.querySelector("body").appendChild(man);
      man.onclick = function () {
        destroyMan(man);
        lives--
        if(lives==0){
        
       

        }
      };
    
    }
    
    let intervall = setInterval(function () {
      createMan();
      
      randomDuck = randomNumber(500, 4000);
    
    
    }, randomMan);
    
    
    function destroyMan(man) {
        man.style.display = "none";
       
        man.remove();
        
      }
      
    function touchedRight2(man) {
    
      if (man.getBoundingClientRect().right >= 1280) {
        return true
      }
    }
    
    
    setInterval(function (){
        console.log(manID)
            for(let i = 1; i <= manID; i++) {
                let man = document.getElementById(i.toString()) || null
                if (man && touchedRight2(man)) {
                    destroyMan(man);
                }
            }
        }, 500)

