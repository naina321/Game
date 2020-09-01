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
	/*function for moving basket using keyboard*/
	document.addEventListener('keydown', moveSelection);
	function moveSelection(event)
		{
		    if (event.keyCode==37)
		    {
		        obj.style.left = parseInt(obj.style.left) - 30 + 'px';
		    }
		    else if(event.keyCode==39)
		    {
		        obj.style.left = parseInt(obj.style.left) + 30 + 'px';
		    }
		 }

  /*function for falling eggs rendomly*/
  id1=setInterval(fall_egg1,6)
  function fall_egg1() {
     if(pos1==450) {
			 	 check_collision(obj1,obj);
      	 pos1=0;
     }
     else {
      	 pos1++;
         obj1.style.top=pos1 +"px";

     }
  }

  id2=setInterval(fall_egg2,8)
  function fall_egg2()
  {
     if(pos2==450)
     {
			 	check_collision(obj2,obj);
      	 pos2=0;
     }
     else
     {
      	 pos2++;
         obj2.style.top=pos2 +"px";
     }
  }

  id3=setInterval(fall_egg3,9)
  function fall_egg3()
  {
     if(pos3==450)
     {
			 		check_collision(obj3,obj);
        	pos3=0;
     }
     else
     {
        	pos3++;
          obj3.style.top=pos3 +"px";
     }
  }


  function check_collision(div1, div2){
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
				 stop_game();
			}
	    else{
				score++;
				scoreSpan.textContent=score;
			}
   }

	 function stop_game() {
		 if(life==0){
			 clearInterval(id1);
			 clearInterval(id2);
			 clearInterval(id3);
			 restart.style.display='block';
		 }
	 }
}
