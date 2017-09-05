$(function(){
//	设置大总管变量
		var a = 0;
//		设置定时器要调用的函;数,用来控制图片和li的效果切换
	function run(){
		a++;
		a = a==6?0:a;
//		让A显示,其他图片隐藏
		$("#flash .tupianhe a img").stop().eq(a).fadeIn(300).siblings("img").fadeOut(300);
//		让li eq(a)变黑,让兄弟变白
		$("#flash .tupianhe ul li").stop().eq(a).css({"background":"#49483E"}).siblings("li").css({"background":"#FFFFFF"});
		}
//			设置定时器
		var tim = setInterval(run,2000);
	
//		设置鼠标一进li 的时候,图片和li跟着变化,需要设定,获得事件源
	$("#flash .tupianhe ul li").click(function(){

//		  大总管获得事件源和序号
		  	a = $(this).index();
//		  	让A显示,其他图片隐藏
		$("#flash .tupianhe a img").stop().eq(a).fadeIn(300).siblings("img").fadeOut(300);
//		让li eq(a)变黑,让兄弟变白
		$("#flash .tupianhe ul li").stop().eq(a).css({"background":"#49483E"}).siblings("li").css({"background":"#FFFFFF"});
		
		  	
	})
//		给大盒子加移动事件
      $("#flash").mouseenter(function(){
      		clearInterval(tim);	
      })
//    给大盒子加移动事件
	$("#flash").mouseleave(function(){
		
		tim = setInterval(run,2000);
	})
	
	
		


//第二部分  周边第一张大图设置animate动画
		$("#er .zhintu a img.jings").mouseenter(function(){
			$(this).stop().animate({'top':'-5px'},300)
		})
		
		
		$("#er .zhintu a img.jings").mouseleave(function(){
			
		$(this).stop().animate({'top':'0px'},300)
	})
//	周边左边大图animate动画


//		给电饭煲盒子加鼠标移入事件  给bage加入移动事件
	$("#er .zhintu .bage").mouseenter(function(){
//		  
		$(this).stop().animate({'top':'-5px'},300)
//		
		})
//	给电饭煲盒子加鼠标移出事件
	$("#er .zhintu .bage").mouseleave(function(){
		$(this).stop().animate({'top':'0'},300)
	})
		
//	第三部分	搭配
//				左边两图的
		$("#er .dapeitu .left").mouseenter(function(){
			$(this).stop().animate({"top":"-3"},300)
		})
		$("#er .dapeitu .left").mouseleave(function(){
			$(this).stop().animate({"top":"0"},300)
		})
//	右边几个的移动
		$("#er .dapeitu .right .tao").mouseenter(function(){
			$(this).stop().animate({"top":"-3"},300)
		})	
		$("#er .dapeitu .right .tao").mouseleave(function(){
			$(this).stop().animate({"top":"0"},300)
		})
//	右边的两个小盒子加移入浮动	
		$("#er .dapeitu .right .xiaohezi").mouseenter(function(){
			$(this).stop().animate({"top":"-3"},300)
		})
		$("#er .dapeitu .right .xiaohezi").mouseleave(function(){
			$("#er .dapeitu .right .xiaohezi").stop().animate({"top":"0"},300)
		})
	
	
//	下面的为你推荐移入浮动事件
		$("#er .weini .xing").mouseenter(function(){
			$(this).stop().animate({"top":"-3"},300)
		})
		$("#er .weini .xing").mouseleave(function(){
			$(this).stop().animate({"top":"0"},300)
		})
	
//	热评产品前面三个鼠标移入自动动画
		$("#er .retu .shuai").mouseenter(function(){
			$(this).stop().animate({"top":"-3"},300)
		})
		$("#er .retu .shuai").mouseleave(function(){
			$(this).stop().animate({"top":"0"},300)
		})
	
//	热屏产品最后一个鼠标移动自动动画事件
		$("#er .retu .right").mouseenter(function(){
			$(this).stop().animate({"top":"-3"},300)
		})
		$("#er .retu .right").mouseleave(function(){
			$(this).stop().animate({"top":"0"},300)
		})
	
//	内容板块鼠标移入自动动画事件
		$("#er .ertong .di1").mouseenter(function(){
			$(this).stop().animate({"top":"-3"},300)
		})
		$("#er .ertong .di1").mouseleave(function(){
			$(this).stop().animate({"top":"0"},300)
		})
		
		
		
//	最后一个内容板块鼠标移入自动动画事件
		$("#er .ertong .haha").mouseenter(function(){
			$(this).stop().animate({"top":"-5"},300)
		})
		$("#er .ertong .haha").mouseleave(function(){
			$(this).stop().animate({"top":"0"},300)
		})
	
//	视频板块鼠标移入自动动画事件
		$("#er .shiping .leijun").mouseenter(function(){
			$(this).stop().animate({"top":"-5"},300)
		})
		$("#er .shiping .leijun").mouseleave(function(){
			$(this).stop().animate({"top":"0"},300)
		})
//	最后一个视频板块鼠标移入自动动画事件
//		$("#er .shiping .cz").mouseenter(function(){
//			$("#er .shiping .cz").stop().animate({"top":"-5"},300)
//		})
//		$("#er .shiping .cz").mouseleave(function(){
//			$("#er .shiping .cz").stop().animate({"top":"0"},300)
//		})
//	
	
	
//	    小米明星单品切换开始
//	    鼠标点击时切换向右  
				var c=0;
			$("#mingxin .jiantou .you").click(function(){
				c++;
				if (c==3){
					$("#dihe #mingxintu").css({"left":"0px"})
					c=1;
				}
//				获得最大的left
				var l = c*-1226;
				$("#dihe #mingxintu").animate({"left":l+"px"},300)
			})
			
//			鼠标点击左边时切换
				$("#mingxin .jiantou .zuo").click(function(){
					c--;
					if (c=-1){
						$("#dihe #mingxintu").css({"left":-1226*2})
						c=1;
					}
//					获得最大的left值.这个要放在判断下面
				var l = c*-1226;
				  $("#dihe #mingxintu").animate({"left":l+"px"},300)
				
				})
//		小米明星单品切换结束
		
		
		
		
		
//		为你推荐切换开始
//	    点击向右切换
             var b=0;
		$("#mingxin .jiantou .you").click(function(){
					b++;
				if (b==3){
					$("#er #weidi .weini").css({"left":"0px"})
					b=1;
				}
//				获得最大的left
				var l = b*-1226;
				$("#er #weidi .weini").animate({"left":l+"px"},300)
			
		})
		
//		点击向左切换
		$("#mingxin .jiantou .zuo").click(function(){
			b--;
			
			if (b==-1){
				$("#er #weidi .weini").css({"left":-1226*2})
				b=1;
			}
			
//			计算最大值变量,不能在-1判断里面,要不b*-1226;里面的b就会成为1了!
			var l = b*-1226;
			
			$("#er #weidi .weini").animate({"left":l+"px"},300)
		})
			

//		为你推荐切换结束
    
//		头部购物车下滑开始
//			鼠标移入进去
   $("#menu .center .right .cart").mouseenter(function(){
   	$("#menu .center .right .cart .hide").stop().animate({"height":"100px"},300)
   		
   	})
   
   	$("#menu .center .right .cart").mouseleave(function(){
   		$("#menu .center .right .cart .hide").stop().animate({"height":"0px"},300)
   	})
// 购物车下滑结束
		
		
//		好东西大家一起分享隐藏开始
//		鼠标移入显示
		$("#er .dapeitu .right .tao").mouseenter(function(){
			$(this).find('.yincang').stop().animate({"bottom":"0px"},300)
		})
		$("#er .dapeitu .right .tao").mouseleave(function(){
			$(this).find('.yincang').stop().animate({"bottom":"-100px"},300)
		})


//		好东西大家一起分享隐藏结束
	  
	  
//	    搜素栏下滑
//			鼠标移入事件
		  $("#search").mouseenter(function(){
		  	$("#search .ni").stop().animate({"height":"232px"},300)
		  		$("#search .ni .zhuangtu").stop().animate({"height":"232px"},300)
		  		$("#search .ni .zhuangtu img").show()
		  })
//		移除事件
		$("#search").mouseleave(function(){
			$("#search .ni").stop().animate({"height":"0px"},300)
					$("#search .ni .zhuangtu").stop().animate({"height":"0px"},300)
					$("#search .ni .zhuangtu img").hide();
		})
		
//		小米切换
//			加入移入事件
		$("#search .tags a").mouseenter(function(){
//			获得事件源序号
				var q = $(this).index();
//				让index号con显示,兄弟隐藏
		$(this).parent('.tags').siblings('.ni').find('img').eq(q).show().siblings('img').hide();
		})
		
	
		
		
		
		
		
		
		
		
		
		

	//	  搜素栏结束
	
	
	
//	                              哈利波特儿童乐园切换开始
//			点击左键切换
	           $("#er .ertong .di1 .left").click(function(){
              c--;
              if (c==-1){
              	$(this).siblings(".chang").css({"left":-311*3})
              	c=2;
              }
//			计算出最大的left
			var l = c*-297;
//			给大盒子加自动动画
		$(this).siblings(".chang").stop().animate({"left":l+"px"},300)
//		$(this).find(".chang").animate({"left":l+"px"},300)
	})	
	
	
	
	
//	   哈利波特 移入显示事件
	$("#er .ertong .di1").mouseenter(function(){
		$(this).find(".left").css({"display":"block"})
		$(this).find(".right").css({"display":"block"})
	})	
//	移除隐藏事件
	$("#er .ertong .di1").mouseleave(function(){
		$("#er .ertong .di1 .left").css({"display":"none"})
		$("#er .ertong .di1 .right").css({"display":"none"})
	})
	
	
	
//			哈利波特点击右键切换
			$("#er .ertong .di1 .right").click(function(){
				c++;
				if (c==4){
					$(this).siblings(".chang").css({"left":"0px"})
					c=1;
				}
//					计算最大的left
				var l = c*-297;
//				给大盒子加自动动画
			$(this).siblings(".chang").stop().animate({"left":l+"px"},300)
			
				
			})
	
	
//	儿童乐园切换结束	
	
//				视频点击事件
			$("#er .shiping .leijun .an").click(function(){
				$("#er .shiping .leijun .kuangjia").animate({"top":"100px"},500)
			})
//				点击删除键
			$("#er .shiping .leijun .kuangjia .shanghe #shan").click(function(){
				$("#er .shiping .leijun .kuangjia").animate({"top":"-700px"},500)
			})
			
			
			
//			移入背景变
			$("#er .shiping .leijun").mouseenter(function(){
				$(this).find(".an").css({"background":"#FF6700"})
//				$("#er .shiping .leijun .an").css({"background":"#FF6700"})
			})
//			移除背景还原
			$("#er .shiping .leijun").mouseleave(function(){
				$("#er .shiping .leijun .an").css({"background":"#040404"})
			})
	
	
//		智能大图显影效果
			
//			点击事件
			$("#er .dapei .hezi a").mouseenter(function(){
//				获得当前点击的序号
				var l = $(this).index();
				
				document.title = l;      //显示序号的多少的用法
//				让 l序号的right显示,其他兄弟隐藏
			$(this).parents('.dapei').next('.dapeitu').find('.right').eq(l).show().siblings('.right').hide();
//			如果找jq关系的话，  a假如在 一个祖宗里，  你去找另个一个祖宗 但是可能会有多个祖宗兄弟！而且名字还都一样！！那么就要用.next（祖宗名字）   .next是下一个的关系意思！ 
			})
//	      智能大图显影结束




	
	
				
//		鼠标移动到自己想让浮动的话!用this就行了,不需要别的了！
//		$(this).find   找自己  或里面的
//		.siblings() 亲兄弟或同级
//		.parent()  找祖宗
//		.parents()  找祖宗们 		
//      .next()     找下一个		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})













