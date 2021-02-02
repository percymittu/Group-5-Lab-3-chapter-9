window.addEventListener('load', function()
{
     var len = document.getElementById("thumbnails")
     for(i=0;i<len.children.length;i++)
     {
       var x = document.getElementById("thumbnails");
       var child=x.children[i];
       child.addEventListener('click',imgfun);
       var imgfun= (event)=>{ 
       	var srcfile = event.target.src.split('/');
       	var lastSegment = srcfile.pop() ;
       	var a=document.getElementById('featured').innerHTML=
       	"<img src='images/small/"+lastSegment+"' style='width:100%'  title="+event.target.title+" alt='big version'  /><figcaption >"+event.target.alt+"</figcaption>";
       	var m=document.getElementById("featured");
       	m.addEventListener('mouseover',(event) => {
       		if(event.target.children[1]){
              event.target.children[1].style.opacity = "50%";
              } })
       	m.addEventListener('mouseout',(event) => {
       		if(event.target.children[1]){
              event.target.children[1].style.opacity= "0%";} })
       		
        }
     }


})