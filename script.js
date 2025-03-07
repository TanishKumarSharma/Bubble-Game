var timer=60;
var score=0;

var hitrn=0;
function increaseScore(){
score+=10;
document.querySelector("#scoreVal").textContent=score;
}




function hitScore(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitScore").textContent=hitrn;
    
}



function makeBubble(){
    var clutter='';
    
    
    for(var i=1;i<=176;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`   <div class="bubble">${rn}</div>`;
    }
    
    document.querySelector(".pbtm").innerHTML=clutter

}


function runTimer(){
    var timinterval=setInterval(function(){
        if(timer>0){
            
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timinterval);
            document.querySelector(".pbtm").innerHTML="";
        }
    },1000)
}


document.querySelector(".pbtm").addEventListener("click",function(dets){

    var clickdnum=Number(dets.target.textContent);
    if(clickdnum===hitrn){
        increaseScore();
        makeBubble();
        hitScore();
    }
    

})




runTimer();
makeBubble();
hitScore();






