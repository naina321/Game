function start()
        {
          var obj = document.getElementById("basket");
          document.addEventListener('keydown', moveSelection);
          function moveSelection(event)
          {
                    if (event.keyCode==37) {
                        obj.style.left = parseInt(obj.style.left) - 20 + 'px';
                    }
                    else if(event.keyCode==39)
                    {
                      obj.style.left = parseInt(obj.style.left) + 20 + 'px';  
                    }
           }
        }