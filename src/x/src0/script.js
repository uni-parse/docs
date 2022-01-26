

var l = $('li'),
  el = document.createElement('a'),
  txt = document.createTextNode(' link '),
  img = document.createElement('img');
el.appendChild(txt);
img.setAttribute('src', 'images/heart-empty.png');
img.style.maxWidth = '1em';
img.style.maxheight = 'auto';
	  
	
for(var i=0; i<l.length; i++){
  l[i].addEventListener('click', (function(i){
    return function(){
      var pre = l[i].innerHTML;
      l[i].innerHTML = '<b>hello' + (i+1) + ' !!</b>';
      var b = $('li>b');
      //l[i].insertAfter(el.cloneNode(true), b[i]);//issue
      //l[i].insertBefore(el.cloneNode(true), b[i]);//issue
      //b[i].before(el.cloneNode(true));//issue
      //b[i].after(el.cloneNode(true));//issue
      setTimeout(()=>{
        l[i].appendChild(el.cloneNode(true));
      }, 300);
      setTimeout(()=>{
        //l[i].replaceChild(el.cloneNode(true), b[i]);//issue
        //l[i].removeChild(b[i]);//issue
        l[i].appendChild(img.cloneNode(true));
      }, 400);
      
	        
      l[i].style.color = 'hsl(90, 100%, 27%)';
      l[i].style.transform = 'rotate(-' + (3*i + 10) + 'deg)';
	    l[i].style.transition = 'all 1s';
	      
	    //setTimeout(()=>{alert('markup:\n' + '\t• frome:\n\t\t\t' + pre + '\n\t• to:\n\t\t\t' + l[i].innerHTML)}, 1000);
    };
  })(i), true, {once: true});
}
	
  
//alert('done\nno syntaxt errors');










