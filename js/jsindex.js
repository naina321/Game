function theme() {
  docum

}

function main(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
























/*function summer()
{
	var star = window.open('game-page.html','_blank');
	/*star.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
	star.document.body.backgroundImage = "url('../image/landscape1.jpg')";


}

/*function reply_click(clicked_id)
  {
     if(clicked_id == "T1")
      {
var x = window.open("game-page.html");
x.document.body.backgroundimage = "url('../image/landscape1.jpg')";
  }
}*/
