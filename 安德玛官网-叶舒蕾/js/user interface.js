$(function(){
	var flag=true;
	//滚动条距离屏幕多少显示或显示返回标签
	var timr=setInterval(function(){
		var jtop=parseInt($(window).scrollTop());
		if(jtop>=300){
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
})
