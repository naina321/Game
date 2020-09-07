function mains(cssFile, cssLinkIndex)
{
   document.getElementById('strange').style.display = "none";
   document.getElementById('chick').style.display = "none";

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    start();
}

function start()
{

  document.getElementById('score_help').style.display = "block";
  document.getElementById('basket').style.display = "block";

  var life=10;
  var score=0;
  var id2,id2,id3;
  var scoreSpan=document.getElementById('score');
  var lifeSpan=document.getElementById('lives');

  scoreSpan.textContent=score;
  lifeSpan.textContent=life;

  var obj=document.getElementById("basket");

  var obj1=document.getElementById("egg1");
  var obj2=document.getElementById("egg2");
  var obj3=document.getElementById("egg3");

  var base=document.getElementById('base');
  var restart=document.getElementById('restart');

  var smash1=document.getElementById("splash1");
  var smash2=document.getElementById("splash2");
  var smash3=document.getElementById("splash3");

  var speed1=9;
  var speed2=8;
  var speed3=7;
  var min=4;

  var eggSplash=new Audio("../Game/audio/egg-splash.mp3");
  var scoreChime=new Audio("../Game/audio/score-chime.mp3");


  /*function for moving basket using keyboard*/
  document.addEventListener('keydown', moveSelection);
  function moveSelection(event)
  {
      if (event.keyCode==37 && obj.offsetLeft!=0)
      {
          obj.style.left = obj.offsetLeft - 60 + 'px';
      }
      else if(event.keyCode==39 && (obj.offsetLeft + obj.offsetWidth)<=screen.width)
      {
          obj.style.left = obj.offsetLeft + 60 + 'px';
      }
  }

  /*function for falling eggs randomly*/
  var pos=0;
  id1 = setInterval(function() {fall_egg(obj1 ,obj ,smash1);},speed1);
  id2 = setInterval(function() {fall_egg(obj2 ,obj ,smash2);},speed2);
  id3 = setInterval(function() {fall_egg(obj3 ,obj ,smash3);},speed3);
  function fall_egg(EGG , BASKET , SMASH)
  {
     if(pos==430)
     {
        check_collision(EGG , BASKET , SMASH);
			  pos=0;
      }
     else
     {
      	pos++;
        EGG.style.top=pos +"px";
      }
  }

//fuction for detect collision

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
      var b2 = y2+h2;                      /*mid position of basket from left*/
      var r2 = x2+w2;                        /*bottom position of basket from top*/
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2)
      {
         life--;
         lifeSpan.textContent=life;
         div3.style.zIndex= "10";
         eggSplash.play();
         setTimeout(function() { div3.style.zIndex= "-10"; },800 );
         if (life==0)
          {
            stop_game();
          }
      }
      else
      {
         score+=5;
         scoreSpan.textContent=score;
         scoreChime.play();
         if(score>0 && score%25==0 && speed>min)
         {
           speed1--;
           speed2--;
           speed3--;
           clearInterval(id1);
           id1=setInterval(fall_egg,speed1);
           clearInterval(id2);
           id2=setInterval(fall_egg,speed2);
           clearInterval(id3);
           id3=setInterval(fall_egg,speed3);
         }
      }
  }


	 function stop_game()
   {
			 clearInterval(id1);
			 clearInterval(id2);
			 clearInterval(id3);

			 restart.style.display='block'; /*for restarting the game*/
       restart.disabled=false;
			 restart.addEventListener('click',refresh_page);
			 function refresh_page()
       {
			 		location.reload();
			 }
	 }
}
