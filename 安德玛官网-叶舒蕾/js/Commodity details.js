$(function(){
	//点击dott-left dott-right使图片左右移动
	var num=0;
	var flag=true;
	//绑定右边点击事件
	$('.dott-right').click(function(){
		if(flag){
			flag=false;
			num++;
		if(num>=6){
			num=0;
		}
		$('.swiper>ul').animate({left: -num*336.5+'px'},1000,function(){
			flag=true;
			})
		}
	})
	
	//滚动条距离屏幕多少显示或显示返回标签
	var timr=setInterval(function(){
		var jtop=parseInt($(window).scrollTop());
		//console.log(jtop)
		if(jtop>=640){
			$('.return').css('display','block');
			
		}else{
			$('.return').css('display','none')
		}
		//隐藏导航
		if(jtop>=463){
			$('.Imbibition').css('display','block');
			$('.header').css('display','none');
		}else{
			$('.header').css('display','block');
			$('.Imbibition').css('display','none');
		}
		//绑定点击事件返回顶部
		$('.return').click(function(){
			if(flag){
				flag=false;
				var time=setInterval(function(){
				var skt=parseInt($(window).scrollTop());
				skt-=40;
				$(window).scrollTop(skt);
				if($(window).scrollTop()<=0){
					clearInterval(time);
					flag=true;
					}
				},1)
			}
		})
	 },1)
	 
	//绑定加入购物袋事件
	$('.inner').click(function(){
		$('.join-box').css('display','block');
		$('.joinin').css('display','block');
		$('body').css('overflow','hidden');
	})
	$('.joinin>span').click(function(){
		$('.join-box').css('display','none');
		$('.joinin').css('display','none');
		$('body').css('overflow','visible');
	})
	
	
	//放大镜
	//鼠标移入
	$('.pic').mouseover(function(event){
			$('.pic>.small').css('left',event.offsetX-125+'px');
			$('.pic>.small').css('top',event.offsetY-195+'px');
			$('.pic>.small').css('display','block');
		})
	//鼠标移动
		$('.pic>.small').mousemove(function(event){
			$('.pic>.small').css('left',$('.pic>.small').position().left+(event.offsetX-125)+'px')
			$('.pic>.small').css('top',$('.pic>.small').position().top+(event.offsetY-125)+'px')
			if(($('.pic>.small').position().left)<=0){
				$('.pic>.small').css('left','0')
			}
			if(($('.pic>.small').position().left)>=300){
				$('.pic>.small').css('left','300px')
			}
			if(($('.pic>.small').position().top)<=0){
				$('.pic>.small').css('top','0')
			}
			if(($('.pic>.small').position().top)>=350){
				$('.pic>.small').css('top','350px')
			}
			$('.pic>.small').css('backgroundPosition','-'+$('.pic>.small').position().left+'px'+' '+'-'+$('.pic>.small').position().top+'px')
			})
	
	//鼠标移出   隐藏small
	$('.pic').mouseout(function(){
		$('.pic>.small').css('display','none');
	})
	
	//绑定尺码表点击事件
	$('.details-box>ul>li').click(function(){
		$('.size>span>span').html($(this).html());
		$(this).css('borderColor','#1d1d1d').siblings().css('borderColor','#d0d0d0');
	})
	
	//绑定数量点击事件
	$('.')
})