$(function(){
	// 给span绑定点击事件
	$('.content-left>div>span').click(function(){
		$(this).parent('div').find('ul').slideToggle();
		})
	
	var flag=true;
	//滚动条距离屏幕多少显示或显示返回标签
	var timr=setInterval(function(){
		var jtop=parseInt($(window).scrollTop());
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
	 
	 //商品筛选
	 //绑定点击事件
	 var num=0;
	 //点击跑鞋时
	$('.Commodity-type>ul>li').eq(1).find('span').click(function(){
		$('.Commodity-type>ul>li').eq(2).find('span').css('backgroundPosition','-28px -294px');
		$('.color>ul>li').eq(5).css('border','2px solid transparent');
		$('.color>ul>li').eq(3).css('border','2px solid #7a7a7a');
		if(num%2==0){
			$('.content-right').css('display','none');
			$(this).css('backgroundPosition','-94px -294px');
			$('.content-right-three').css('display','none');
			$('.content-right-two').css('display','inline-block');
			$('.content-right-si').css('display','none');
		}else{
			$('.content-right').css('display','inline-block');
			$(this).css('backgroundPosition','-28px -294px');
			$('.content-right-three').css('display','none');
			$('.content-right-two').css('display','none');
		}
		num++;
	 })
	
	//点击其他时
	$('.Commodity-type>ul>li').eq(2).find('span').click(function(){
		num++;
		$('.Commodity-type>ul>li').eq(1).find('span').css('backgroundPosition','-28px -294px');
		$('.color>ul>li').eq(5).css('border','2px solid transparent');
		$('.color>ul>li').eq(3).css('border','2px solid #7a7a7a');
		if(num%2==0){
			$('.content-right').css('display','inline-block');
			$(this).css('backgroundPosition','-94px -294px');
			
			$('.content-right-three').css('display','none');
			$('.content-right-two').css('display','none');
			$('.content-right-si').css('display','none');
		}else{
			$('.content-right').css('display','inline-block');
			$(this).css('backgroundPosition','-28px -294px');
			$('.content-right-three').css('display','none');
			$('.content-right-two').css('display','none');
		}
	 })
	 
	//点击红色样式时
	$('.color>ul>li').eq(5).click(function(){
		$('.Commodity-type>ul>li').eq(1).find('span').css('backgroundPosition','-28px -294px');
		$('.Commodity-type>ul>li').eq(2).find('span').css('backgroundPosition','-28px -294px');
		$('.color>ul>li').eq(3).css('border','2px solid #7a7a7a');
		if(num%2==0){
			$('.content-right-three').css('display','inline-block');
			$('.content-right').css('display','none');
			$('.content-right-two').css('display','none');
			$('.content-right-si').css('display','none');
			$('.color>ul>li').eq(5).css('border','2px solid #1d1d1d')
		}else{
			$('.color>ul>li').eq(5).css('border','2px solid transparent');
			$('.content-right-three').css('display','none');
			$('.content-right').css('display','inline-block');
			$('.content-right-two').css('display','none');
			$('.content-right-si').css('display','none');
		}
		num++;
	})
	
	//点击白色时样式
	$('.color>ul>li').eq(3).click(function(){
		$('.Commodity-type>ul>li').eq(1).find('span').css('backgroundPosition','-28px -294px');
		$('.Commodity-type>ul>li').eq(2).find('span').css('backgroundPosition','-28px -294px');
		$('.color>ul>li').eq(5).css('border','2px solid transparent');
		if(num%2==0){
			$('.content-right-three').css('display','none');
			$('.content-right').css('display','none');
			$('.content-right-two').css('display','none');
			$('.content-right-si').css('display','inline-block');
			$('.color>ul>li').eq(3).css('border','2px solid #1d1d1d')
		}else{
			$('.color>ul>li').eq(3).css('border','2px solid #7a7a7a');
			$('.content-right-three').css('display','none');
			$('.content-right').css('display','inline-block');
			$('.content-right-two').css('display','none');
			$('.content-right-si').css('display','none');
		}
		num++;
	})
})