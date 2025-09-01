let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];
let started=false; //started tells whether game started or not 
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){

    if(started==false){
        console.log("Game started");
        started=true;
        //need to start game once only so if any key is preesed once on docuemnt the game starts  don't press key in console
        levelUp();
    }
});

function btnFlash(btn){

    btn.classList.add("flash");

    setTimeout(function(){

        btn.classList.remove("flash");
    },250);

    //button would flash for 1/4sec
}


function userFlash(btn){

    btn.classList.add("userflash");

    setTimeout(function(){

        btn.classList.remove("userflash");
    },250);

    //button would flash for 1/4sec
}

function levelUp(){
    userseq=[]; //as soon as level gets up userseq becomes empty so that user starts from initial only again on new level
    level++;

    h2.innerText=`Level ${level}`;
    // changed press any key to stART THE game text to the text showing us the current level
    //making a random button choose

    let randIdx=Math.floor(Math.random()*3); // game flashing any random color through accesing the color index from btns array 
    let randColor=btns[randIdx];//choosing rnadom color using index
    let randBtn=document.querySelector(`.${randColor}`);  //selecting that random button through its class .randColor and then flashing it by passing in function

   // console.log(randIdx);
   // console.log(randColor);
   // console.log(randBtn);

    gameseq.push(randColor); //as soon as random color is flashed by game add it in gamemseq
    console.log(gameseq);//to simply print game seq on console
    btnFlash(randBtn);

    
}


function btnPress(){

    //console.log(this); //to detect which button was pressed
    let btn=this;
    userFlash(btn); //firstly btn will anyways gets flashed only when pressed by user

    userColor=btn.getAttribute("id"); //bringing out which color button user pressed using id given to buttons
    //console.log(userColor);
    userseq.push(userColor); //adding color pressed by user in userseq array
    checkAns(userseq.length-1);  //called checkAns function to see whether color pressed by user matches with game seq or not
    //passing the last index in userseq to check whether it matches with game seq or not
}

let allBtns=document.querySelectorAll(".btn"); //selecting all buttons with class btn
for(btn of allBtns){

    btn.addEventListener("click",btnPress);//as soon as any button is clicked function btnPress which is passed as callback will execute
}


function checkAns(idx){ //at each level game generating a new color so we pass the current level in this function

   // console.log("curr level:",level);  //prinitng current level and currlevel value will be same as gameseq and userseq (there length)
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){  //this means user had entered all color in correct order as game seq so simply call level up fn 
            //to generate next random color by the game itself
            setTimeout(levelUp(),1000);  //added one sec delay to go from one level to another
        }
    }
    else{
       h2.innerHTML=`Game Over! Your score was <b>${level}<b> <br/> Press any key to start`;  //current level will tells us the score
       document.querySelector("body").style.backgroundColor="red"; //just for few time color of body will become red to show game over
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"; 
       },150)
       reset();//once the game gets over need to restrat from starting by making started=false again
    }
}


function reset(){

    started=false;
    gameseq=[];
    userseq=[];
    level=0;

    //everything set to initial values again
}