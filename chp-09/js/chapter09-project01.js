
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
      
})