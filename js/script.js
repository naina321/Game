function start()
{
	/*function for moving basket using keyboard*/
	var obj = document.getElementById("basket");
	document.addEventListener('keydown', move);
	function move(event)                         
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
   var obj1 = document.getElementById("egg1");
   var pos1= 0;
   var s_core=0;
   setInterval(fall_egg1,5)
   function fall_egg1()
   {
    if(pos1==380)  
    {
    	pos1=0;
    }
    else
    {
    	pos1++;
        obj1.style.top=pos1 +"px";
    }
   }
   
   var obj2 = document.getElementById("egg2");
   var pos2=0;
   setInterval(fall_egg2,4)
   function fall_egg2()
   {
    if(pos2==380)  
    {
    	pos2=0;
    }
    else
    {
    	pos2++;
        obj2.style.top=pos2 +"px";
    }
   }
   
   var obj3 = document.getElementById("egg3");
   var pos3=0;
   setInterval(fall_egg3,6)
   function fall_egg3()
   {
    if(pos3==380)  
    {
    	pos3=0;
    }
    else
    {
    	pos3++;
        obj3.style.top=pos3 +"px";
    }
   }
}
function name()
{
  hello;
}