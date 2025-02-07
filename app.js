let gamepoint=[];
let userpoint=[];
let start=false;
let h2=document.querySelector("h2");
let btns=["red","green","yellow","purple"];
let level=0;
document.addEventListener("keypress",()=>{
    if(start==false){
        start=true;
        levelup();
    }
   
});
function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);

}
function levelup(){
    userpoint=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    let rand=Math.floor(Math.random() * 3);
    let randomColour=btns[rand];
    let randbtn=document.querySelector(`.${randomColour}`);
    gamepoint.push(randomColour);
    console.log(gamepoint);
    flashbtn(randbtn);

}
function checkbtn(index){
    if(gamepoint[index]==userpoint[index]){
        if(userpoint.length==gamepoint.length){ 
        setTimeout(levelup(),250);
    }
    }
    else{
        h2.innerText=`Game Over highscore: ${level} \n Press any key to start`;
        document.querySelector("body").style.background="red";
        setTimeout(()=>{
            document.querySelector("body").style.background="white";

        },150)
        reset();

    }

}
function btnpress(){
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userpoint.push(userColor);
    console.log(userpoint);
    checkbtn(userpoint.length-1);

}
allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    gamepoint=[];
    userpoint=[];
    level=0;
}