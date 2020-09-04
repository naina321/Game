function mains(cssFile, cssLinkIndex)
 {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
function start()
{
  document.getElementById('score_help').style.display = "block";
  document.getElementById('basket').style.display = "block";
  document.getElementById('strange').style.display = "none";
  document.getElementById('chick').style.display = "none";
  
  var life = 10;
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

	/*function for moving basket using keyboard*/
	document.addEventListener('keydown', moveSelection);
	function moveSelection(event)
		{
		    if (event.keyCode==37)
		    {
		        obj.style.left = obj.offsetLeft - 50 + 'px';
		    }
		    else if(event.keyCode==39)
		    {
		        obj.style.left = obj.offsetLeft + 50 + 'px';
		    }
		 }

  /*function for falling eggs rendomly*/
  id1=setInterval(fall_egg1,10)
  function fall_egg1() {
     if(pos1==400) {
			 	 check_collision(obj1,obj,smash1);
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
     if(pos2==400)
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
  id3=setInterval(fall_egg3,9)
  function fall_egg3()
  {
     if(pos3==400)
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

  /*fuction for detect collision*/
  function check_collision(div1, div2, div3)
  {
      var x1=div1.offsetLeft;       /*position of egg from left*/
      var y1=div1.offsetTop;        /*position of egg from top*/
      var h1=div1.offsetHeight;     /*height of egg */
      var w1=div1.offsetWidth;      /*width of egg */
      var b1 = y1+h1;               /*right position of egg from left*/
      var r1 = x1+w1;               /*bottom position of egg from top*/
      var x2=div2.offsetLeft;                /*position of basket from left*/ 
      var y2=div2.offsetTop;                 /*position of basket from top*/
      var h2=div2.offsetHeight;              /*height of basket */ 
      var w2=div2.offsetWidth;               /*width of basket */ 
      var b2 = y2+h2/2;                      /*mid position of basket from left*/
      var r2 = x2+w2;                        /*bottom position of basket from top*/
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
         life--;
         lifeSpan.textContent=life;
         div3.style.zIndex= "10";
         setTimeout(function() { div3.style.zIndex= "-10"; },800 );
         if (life==0) 
          {
            stop_game();
          } 
      }
      else{
        score+=5;
        scoreSpan.textContent=score;
      }
   }

	 function stop_game() /*function for stop the game*/
   {
			 clearInterval(id1);
			 clearInterval(id2);
			 clearInterval(id3);

			 restart.style.display='block'; /*for restarting the game*/
			 restart.addEventListener('click',refresh_page);
			 function refresh_page() 
       {
			 		location.reload();
			 }
	 }
}
