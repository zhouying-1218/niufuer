(function(){ 
   var lis=document.querySelector('ul').querySelectorAll('li');
   for(var i=0;i<lis.length;i++){
       
       lis[i].addEventListener('mouseover',function(){
           this.className='active'
       });
       lis[i].addEventListener('mouseout',function(){
           this.className=''
       });
       
   }
   var that=null;
   for(var j=0;j<lis.length;j++){
       lis[0].style.backgroundColor='#009688';
       that=lis[0];
       lis[j].addEventListener('mousedown',function(){
           
           this.style.backgroundColor='#009688';
           if(that!==this){
           that.style.backgroundColor='#2dc2e7'
           that=this;}
       })
   }
})();