$(function(){
	//首页轮播图
	var num = 0;
	var time = setInterval(run,2500)
	// 设置移入事件
	$('.little-box').hover(function(){
		// 鼠标移入时执行
		clearInterval(time)
	},function(){
		// 鼠标移出时执行
		time = setInterval(run,2500)
	})
	// 给小圆点绑定点击事件
	$('.little-box>li').click(function(){
		num = $(this).index()-1
		run()
	})
	function run(){
		num++;
		// 设num的范围
		if(num>=$('.banner>img').length){
			num=0;
		}
		$('.banner').animate({left: -num*100+'%'},400);
		$('.little-box>li').eq(num).css('background','#1d1d1d').siblings().css('background','#fff');
	}
	
	//休闲鞋点击左右图标移动
	//给左边span  jiantl绑定点击事件
	var num2=0;
	var flag=true;
	$('.jiantl').click(function(){
		if(flag){
		flag=false;
		num2++;
		if(num2<=$('.pirc>li').length){
			num2=0;
		}
		$('.pirc').animate({left: num2*-100+'%'},400,function(){
			flag=true;
		});
		}
	})
	//给右边span   jiantr绑定点击事件
	$('.jiantr').click(function(){
		if(flag){
		flag=false;
		num2++;
		if(num2>=$('.pirc>li').length){
			num2=0;
		}
		$('.pirc').animate({left: num2*-100+'%'},400,function(){
			flag=true;
		});
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
	
	//登录注册页面
	//给top内span绑定点击事件 
	$('.top span').click(function(){
		$('body').css('overflow','hidden');
		$('.Sign-on').css('display','block');
		$('.sign-box').css('display','block');
	})
	//x绑定点击事件 恢复正常页面
	$('.sign-box>span').click(function(){
		$('body').css('overflow','visible');
		$('.Sign-on').css('display','none');
		$('.sign-box').css('display','none');
	})
	//绑定账号登录点击事件
	$('.sign-box .click-right').click(function(){
		$('.signin').css('display','block');
		console.log(1)
		$('.sign-box').css('display','none');
	})
	//绑定以显示出来的登录点击事件
	$('.signin .click-left').click(function(){
		$('.signin').css('display','none');
		$('.sign-box').css('display','block');
	})
	//在登录页面关闭
	$('.signin>span').click(function(){
		$('body').css('overflow','visible');
		$('.Sign-on').css('display','none');
		$('.signin').css('display','none');
	})
	
	//给表单绑定失焦事件
	$('.sign-box .one-input>input').blur(function(){
		$('.sign-box .one-input>input').css('border','1px solid #ff220b')
		$('.sign-box .one-input>div').css('color','#ff220b');
		$('.sign-box .one-input>p').css('color','#ff220b');
	})
	$('.signin .one-input>input').blur(function(){
		$('.signin .one-input>input').css('border','1px solid #ff220b')
		$('.signin .one-input>div').css('color','#ff220b');
		$('.signin .one-input>p').css('color','#ff220b');
	})
})