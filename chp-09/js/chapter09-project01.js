
/* add code here  */

window.addEventListener('load', function()
{
     var highEle= document.querySelectorAll('.hilightable');
     for(i=0;i<highEle.length;i++)
       {
        var toggle = (event)=>{ event.target.classList.toggle('highlight') }
         highEle[i].addEventListener('focus',toggle)
         highEle[i].addEventListener('blur',toggle)
       }
      function submitfun(event)
       {
         var reqIn = document.querySelectorAll('.required');
         for(i=0;i<reqIn.length;i++)
         {
          if(reqIn[i].value == "")
          {
          event.preventDefault();
          reqIn[i].classList.add("error");
          }
          else
          {
               reqIn[i].classList.remove("error");
          }
 
         }
       }
       var form=document.getElementById("mainForm");
       form.addEventListener("submit",submitfun);
       form.addEventListener("reset",resetform);

 function resetform()
       {
        var reqIn = document.querySelectorAll('.error');
         for(i=0;i<reqIn.length;i++)
         {
          reqIn[i].classList.remove("error");
         }
       }


      
})
