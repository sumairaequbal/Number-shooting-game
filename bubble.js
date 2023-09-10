var timer=60;
var score=0;
var hitrn=0;

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}


function newhit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;


}


function makesbubble(){
var clutter="";

for(var i =1; i<=140; i++){
    var rn= Math.floor(Math.random()*10)
    clutter += ` <div class="bubble">${rn}</div> `;
}
document.querySelector(".pbtm").innerHTML=clutter;
// the above code makes only bubbles
}
function runtimer(){
 var timerint= setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timervalue").textContent=timer

    }
    else{
        clearInterval(timerint);
        document.querySelector(".pbtm").innerHTML="<h1>Game over<h1>"; 
    }
},1000);
}

document.querySelector(".pbtm").addEventListener("click",
function (details){
      var clickednum =Number(details.target.textContent);

      if (clickednum===hitrn){
 increasescore();
makesbubble();
newhit();


      }
});

runtimer();
makesbubble();
newhit();
// increasescore();

