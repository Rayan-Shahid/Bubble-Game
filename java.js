function bubble_maker()
{
    var clutter = "";
    for( var i=1; i<=112; i++){
        var variable = Math.floor(Math.random()*10);
        clutter +=  `<div class="bubble">${variable}</div>`;
    }
    document.querySelector("#pbtm").innerHTML =  clutter;
}
var time = 60;
function timer()
{
   var mango = setInterval(function(){
        if(time>0)
        {
         time--;
        document.querySelector("#timevalue").textContent = time;
        }
      else
      {
        clearInterval = (mango)
        document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1><button onclick="window.location.reload();">Play Again</button>`;
      }
    },1000)
}
var rnhit = 0;
function hitcounter()
{
   rnhit = Math.floor(Math.random()*10)
    document.querySelector("#hitss").textContent = rnhit;
}
var score = 0
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent =  score;
}
document.querySelector("#pbtm")
.addEventListener("click",function (dets) {
   var numselected = (Number(dets.target.textContent));
  if (numselected == rnhit){
    increaseScore();
    bubble_maker();
    hitcounter();
  }
});
//Calling functions
timer();
bubble_maker();
hitcounter();

