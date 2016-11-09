window.onload=function(){
  	var  banners=$(".middle-banner")[0];
	var  imgs=$(".banner-img");
	var  cirs=$(".circle-li");
	var  left=$(".banner-left")[0];
	var  right=$(".banner-right")[0];
	var  jx=$(".jx")
	var  last=$(".jxpic-last")[0];
	var  jxpic=$(".jxpic")
	var  siji=$(".siji-pic")
	var  shouji=$(".shouji-pic")
	var  width=parseInt(getStyle(banners,'width'));
	var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,3000);
	 function move(){
	 	if(flag==false){
	 		return;
	 	}
	 	flag=false;
	 	next=n+1;
	 	if(next>=imgs.length){
	 		next=0;
	 	}
	 	cirs[n].style.background="#D2D1CF";
        cirs[next].style.background="#E40077";
        imgs[next].style.left=width+"px";
	 	animate(imgs[n],{left:-width},600);
        animate(imgs[next],{left:0},600,function(){
        	flag=true;
        });
	 	n=next;
	 }
	 banners.onmouseover=function(){
	 	clearInterval(t);
	 }
	 banners.onmouseout=function(){
	 	t=setInterval(move,3000)
	 }
	 right.onclick=function(){
	 	move();
	 }
	 left.onclick=function(){
	 	if (flag==false) {
	 		return;
	 	}
	 	flag=false;
	 	next=n-1;
	 	if(next<0){
	 		next=imgs.length-1;
	 	}
	 	cirs[n].style.background="#D2D1CF";
        cirs[next].style.background="#E40077";
        imgs[next].style.left=-width+"px";
	 	animate(imgs[n],{left:width},600);
        animate(imgs[next],{left:0},600,function(){
        	flag=true;
        });
	 	n=next;
	 }
	 for(var i=0;i<cirs.length;i++){
	 	cirs[i].index=i;
	 	cirs[i].onclick=function(){
	 		if (this.index<n) {
	 			imgs[this.index].style.left=-width+"px";
			 	animate(imgs[n],{left:width},600);
		        animate(imgs[this.index],{left:0},600);
		        cirs[n].style.background="#D2D1CF";
		        cirs[this.index].style.background="#E40077";
			 }else if(this.index>n){
			 	imgs[this.index].style.left=width+"px";
			 	animate(imgs[n],{left:-width},600);
		        animate(imgs[this.index],{left:0},600);
		        cirs[n].style.background="#D2D1CF";
		        cirs[this.index].style.background="#E40077";
			 }
			 n=this.index;
			 next=this.index;
	 	}
	 }
	 
	 for(var i=0;i<jx.length;i++){
	 	jxpic[i].index=i;
	 	jxpic[i].onmouseover=function(){
	 		animate(jxpic[this.index],{width:38,height:33,marginBottom:3},600);
	 	}
	 	jxpic[i].onmouseout=function(){
	 		animate(jxpic[this.index],{width:36,height:31,marginBottom:5},600);
	 	}
	 }
	 last.onmouseover=function(){
	 	animate(last,{width:46,height:43,marginBottom:3},600);
	 }
	 last.onmouseout=function(){
	 	animate(last,{width:44,height:41,marginBottom:5},600);
	 }
	 for(var i=0;i<siji.length;i++){
	 	siji[i].index=i;
	 	siji[i].onmouseover=function(){
	 		animate(siji[this.index],{left:70},600);
	 	}
	 	siji[i].onmouseout=function(){
	 		animate(siji[this.index],{left:78},600);
	 	}
	 }
	  for(var i=0;i<shouji.length;i++){
	 	shouji[i].index=i;
	 	shouji[i].onmouseover=function(){
	 		animate(shouji[this.index],{left:70},600);
	 	}
	 	shouji[i].onmouseout=function(){
	 		animate(shouji[this.index],{left:78},600);
	 	}
	 }
	 var car=$(".car-area")[0];
	 var carBack=$(".carousel-back")[0];
	 var left2=$(".carousel-left")[0];
	 var right2=$(".carousel-right")[0];
	 var flag=true;
	 var t2=setInterval(move2,4000);
	 function move2(){
	 	if(flag==false){
	 		return;
	 	}
	 	flag=false;
	      animate(carBack,{left:-295},600,function(){
	      	var first=getFirst(carBack,"no");
	        carBack.appendChild(first);
	        carBack.style.left=0;
	        flag=true;
	      })      
	 }
	 carBack.onmouseover=function(){
	 	clearInterval(t2);
	 }
	 carBack.onmouseout=function(){
	 	t2=setInterval(move2,4000)
	 }
	 right2.onclick=function(){
	 	move2()
	 }
	 left2.onclick=function(){
	 	if(flag==false){
	 		return;
	 	}
	 	flag=false;
       var last=getLast(carBack);
       var first=getFirst(carBack);
       insertBefore(last,first)
       carBack.style.left="-295px"
       animate(carBack,{left:0},600,function(){
       	flag=true;
       })
	 }
	 var guding1=$(".guding-1")[0];
	 var guding2=$(".guding-2")[0];
     var guding3=$(".guding-3")[0];
     guding1.onmouseover=function(){
     	animate(guding1,{right:40},600)
     }
      guding1.onmouseout=function(){
     	animate(guding1,{right:-20},600)
     }
      guding2.onmouseover=function(){
     	animate(guding2,{right:40},600)
     }
      guding2.onmouseout=function(){
     	animate(guding2,{right:-20},600)
     }
      guding3.onmouseover=function(){
     	animate(guding3,{right:40},600)
     }
      guding3.onmouseout=function(){
     	animate(guding3,{right:-20},600)
     }
    var nav_fl=$(".nav");
	for(var i=0;i<nav_fl.length;i++){
		if(i==0){
			continue;
		}
		nav_fl[i].index=i;
		hover(nav_fl[i],function(){
			var ul=$(".xiala",this);
			for(var i=0;i<ul.length;i++){
				ul[i].style.display="block";
				ul[i].style.background="#FFF";
				nav_fl[this.index].style.background="#f3f3f3-";
			}
		},function(){
			var ul=$(".xiala",this);
			for(var i=0;i<ul.length;i++){
				ul[i].style.display="none";
				ul[i].style.background="";
				nav_fl[this.index].style.background="";
			}
		})
	}
	 var lefts=$(".select");
      for(var i=0;i<lefts.length;i++){ 
         lefts[i].index=i;
         hover(lefts[i],function(){
           var rights=$(".select-lis",this);
           for(var i=0;i<rights.length;i++){
             rights[i].style.display="block";
             lefts[this.index].style.background="#fff";
             lefts[this.index].style.cssText="1px soild #e5e5e5";
           }
         },function(){
           var rights=$(".select-lis",this);
           for(var i=0;i<rights.length;i++){
             rights[i].style.display="none";
             lefts[this.index].style.background="";
           }
       })
     }
	var gonggao_turn=$(".gonggao-turn")[0];
	var gonggao_turn_lis=$(".gonggao-turn-lis");
    var n=0;
    var zuo=$(".xiaoyu")[0];
    var you=$(".dayu")[0];
    you.onclick=function(){
    	n++;
		 if(n>gonggao_turn_lis.length-1){
	        		n=0;
	        	}
	        for(var i=0;i<gonggao_turn_lis.length;i++){
	        	gonggao_turn_lis[i].style.display="none";
	        }	
	        gonggao_turn_lis[n].style.display="block";  
    }
    zuo.onclick=function(){
    	n--;
		 if(n<1){
	        		n=gonggao_turn_lis.length-1;
	        	}
	        for(var i=0;i<gonggao_turn_lis.length;i++){
	        	gonggao_turn_lis[i].style.display="none";
	        }	
	        gonggao_turn_lis[n].style.display="block";  
    }
    var dropdown_menu=$(".dropdown-menu")[0];
		var body=$("body")[0];
		body.onclick=function(e){
			var e=e||window.event;
			var obj=e.target||e.srcElement;
			if(obj.className=="chengshi"){
					dropdown_menu.style.display="block";
				
			}else{
					dropdown_menu.style.display="none"
			}
		}

}	 	 
	

