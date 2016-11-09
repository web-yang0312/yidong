$(document).ready(function(){
    var n=0;
	var next=0;
	var flag=true;
	var width=$(".middle-banner").width();
	var t=setInterval(move,3000);
	function move(){
		if(flag==false){
			return;
		}
		flag=false;
		next=n+1;
		if(next>=$(".banner-img").length){
			next=0;
		}
		$(".banner-img").eq(next).css("left",width).end().eq(n).animate({left:-width},600).end().eq(next).animate({left:0},600,function(){
			flag=true;
		})
		$(".circle-li").eq(n).css("background","#D2D1CF").end().eq(next).css("background","#E40077");
        n=next;
	}
	$(".banner-left").eq(0).click(function(){
		if(flag==false){
			return;
		}
		flag=false;
		next=n-1;
	 	if(next<0){
	 		next=$(".banner-img").length-1;
	 	}
		$(".banner-img").eq(next).css("left",-width).end().eq(n).animate({left:width},600).end().eq(next).animate({left:0},600,function(){
			flag=true;
		});
		$(".circle-li").eq(n).css("background","#D2D1CF").end().eq(next).css("background","#E40077");
		n=next;
	})
	$(".banner-right").eq(0).click(function(){
        move();
	})
	$(".circle-li").click(function(){
		var index=$(this).index();
		if (index<n){
			$(".banner-img").eq(index).css("left",-width).end().eq(n).animate({left:width},600).end().eq(index).animate({left:0},600,function(){
			flag=true;
		});
		$(".circle-li").eq(n).css("background","#D2D1CF").end().eq(index).css("background","#E40077");
		}else if(index>n){
			$(".banner-img").eq(index).css("left",width).end().eq(n).animate({left:-width},600).end().eq(index).animate({left:0},600,function(){
				flag=true;
			})
			$(".circle-li").eq(n).css("background","#D2D1CF").end().eq(index).css("background","#E40077");
		}
			n=index;
			next=index;
	})
	$(".middle-banner").eq(0).mouseover(function(){
		  clearInterval(t);
		});
	$(".middle-banner").eq(0).mouseout(function(){
		  t=setInterval(move,3000);
		});	
	$(".Lguding").each(function(){
	   $(this).mouseover(function(){
	           $(this).animate({right:40},600)  
	   	   })
	    $(this).mouseout(function(){
	           $(this).animate({right:-20},600)  
	   	   })
	 });
		$(".nav1").each(function(index){
		  $(this).hover(
			  function () {
			    $(".xiala").eq(index).css({"display":"block","background":"#fff"});
			  },
			  function () {
			    $(".xiala").eq(index).css({"display":"none","background":""});
			  }
			);
	    });
	    $(".select").each(function(index){
		    $(this).hover(
			  function () {
			    $(".select-lis").eq(index).css({"display":"block","background":"#fff"});
			  },
			  function () {
			    $(".select-lis").eq(index).css({"display":"none","background":""});
			  }
			);
		});

	$('.jxpic').hover(
		function(){
			$(this).animate({width:38,height:33,marginBottom:3},600)
		},function(){
			$(this).animate({width:36,height:31,marginBottom:5},600)
		})
	$('.jxpic-last').hover(
		function(){
			$(this).animate({width:46,height:43,marginBottom:3},600)
		},function(){
			$(this).animate({width:44,height:41,marginBottom:5},600)
		})
	$('.siji-pic').hover(
		function(){
			$(this).animate({left:70},600)
		},function(){
			$(this).animate({left:78},600)
		})
	$('.shouji-pic').hover(
		function(){
			$(this).animate({left:70},600)
		},function(){
			$(this).animate({left:78},600)
		})
		var flag1=true;
		var now1=0;
		var next1=0;
		var t1=setInterval(move1,4000)
		function move1(){
	        if(!flag1){
	        return;
	        }
	        flag1=false;
	    	$(".carousel-back").eq(0).animate({left:-295},600,function(){
				var fe=$(".car-area:first");
			   $(".carousel-back").append(fe)
			   $(".carousel-back").eq(0).css("left",0);
			   flag1=true;
			})
	    }
	    $(".carousel-back").hover(function(){
	    	clearInterval(t1);
	    },function(){
	    	t1=setInterval(move1,4000)
	    })

	     $(".carousel-right").eq(0).click(function(){
	    	move1();
	    });
	     $(".carousel-left").eq(0).click(function(){
             if(!flag1){
	        return;
	        }
	        flag1=false;
	        // $(".car-area:first").before.($(".car-area:last"));
	        $(".carousel-back").eq(0).animate({left:0},600,function(){
			   flag1=true;
			})
	    });
});