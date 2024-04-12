if (document.readyState == "complete") {
    myfunc();
}else{
    window.addEventListener("load", function() { 
    myfunc();
    }, false);
}

function myfunc(){
      var coll = document.getElementsByClassName("dropbtn");
      var i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
           this.classList.toggle("active");
           var content = this.nextElementSibling;
           if (content.style.maxHeight){
              content.style.maxHeight = null;
           } else {
              content.style.maxHeight = content.scrollHeight + "px";
           } 

        });
      }
 }

