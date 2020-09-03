function start()
{
	var life = 5;
	var score=0;
	var id2,id2,id3;
	var scoreSpan=document.getElementById('score');
	var lifeSpan=document.getElementById('life');
	scoreSpan.textContent=score;
	lifeSpan.textContent=life;
	var obj=document.getElementById("basket");
	var obj1=document.getElementById("egg1");
	var pos1=0;
	var obj2=document.getElementById("egg2");
	var pos2=0;
	var obj3=document.getElementById("egg3");
	var pos3=0;
	var base=document.getElementById('base');
	var restart=document.getElementById('restart');
	var smash1=document.getElementById("splash1");
	var smash2=document.getElementById("splash2");
	var smash3=document.getElementById("splash3");
	var speed=9;
	var min=4;
	var eggSplash=new Audio("../Game/audio/egg-splash.mp3");
	var scoreChime=new Audio("../Game/audio/score-chime.mp3");

	/*function for moving basket using keyboard*/
	document.addEventListener('keydown', moveSelection);
	function moveSelection(event)
		{
		    if (event.keyCode==37)
		    {
		        obj.style.left = parseInt(obj.style.left) - 100 + 'px';
		    }
		    else if(event.keyCode==39)
		    {
		        obj.style.left = parseInt(obj.style.left) + 100 + 'px';
		    }
		 }

  /*function for falling eggs randomly*/
  id1=setInterval(fall_egg1,speed-1)
  function fall_egg1() {
     if(pos1==420) {
				 check_collision(obj1,obj,smash1);
				 pos1=0;
     }
     else {
      	 pos1++;
         obj1.style.top=pos1 +"px";

     }
  }

  id2=setInterval(fall_egg2,speed)
  function fall_egg2()
  {
     if(pos2==420)
     {
			 	check_collision(obj2,obj,smash2);
      	pos2=0;
     }
     else
     {
      	 pos2++;
         obj2.style.top=pos2 +"px";
     }
  }

  id3=setInterval(fall_egg3,speed+1.5)
  function fall_egg3()
  {
     if(pos3==420)
     {
			 		check_collision(obj3,obj,smash3);
        	pos3=0;
     }
     else
     {
        	pos3++;
          obj3.style.top=pos3 +"px";
     }
  }

  function check_collision(div1, div2, div3){
			var x1=div1.offsetLeft;
			var y1=div1.offsetTop;
			var h1=div1.offsetHeight;
			var w1=div1.offsetWidth;
			var b1 = y1+h1;
			var r1 = x1+w1;
			var x2=div2.offsetLeft;
			var h2=div2.offsetHeight;
			var y2=div2.offsetTop;
			var w2=div2.offsetWidth;
			var b2 = y2+h2;
			var r2 = x2+w2;
			if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
				 life--;
				 lifeSpan.textContent=life;
				 div3.style.zIndex= "10";
				 eggSplash.play();
				 setTimeout(function() { div3.style.zIndex= "-10"; } ,800);
				 if(life==0){
				 		stop_game();
					}
			}
	    else{
				score+=5;
				scoreSpan.textContent=score;
				scoreChime.play();
				if(score%25==0 && speed>min){
					speed--;
				}
			}
   }


	 function stop_game() {
			 clearInterval(id1);
			 clearInterval(id2);
			 clearInterval(id3);
			 restart.style.display='block';
			 restart.addEventListener('click',refresh_page);
			 function refresh_page() {
			 		location.reload();
			 }
	 }
}
