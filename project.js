let timer = 60;
let score = 0;
let hitnr = 0 ;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score ;
}
function getNewHit(){
    hitnr = Math.floor(Math.random() * 10);
    document.querySelector("#hitnum").textContent = hitnr;
}
function makebubbles(){
    let cultter = "";

for(let i = 1 ; i<=170 ; i++){
    let rn = Math.floor(Math.random()*10);
    cultter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = cultter;
}
function RunTimer(){
    let timerint= setInterval(function(){
         if(timer>0){
          timer--;
          document.querySelector("#timerval").textContent = timer;
         }else{
          clearInterval(timerint);
          document.querySelector("#pbtm").innerHTML =`<h1>Game Over ! <\h1>`;
         }
      
      }, 1000);
  
}
document.querySelector("#pbtm")
.addEventListener("click" , function(dets){
    let clickednum = Number(dets.target.textContent);
    if(clickednum === hitnr){
        increaseScore();
        makebubbles();
        getNewHit();
    }
});






RunTimer();
makebubbles();
getNewHit(); 
