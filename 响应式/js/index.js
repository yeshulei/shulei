$(function(){
	$('.more').click(function(){
		$('.Side').animate({right:'0px'},500)
	
	})
	$('.gunab').click(function(){
		$('.Side').animate({right:'-35%'},500)
	})
	$('.Side>a').click(function(){
		$('.Side').animate({right:'-35%'},500)
	})
	// 返回顶部
	var flag=true;
	//返回顶部
	$('.f-top').click(function(){
		if(flag){
			flag=false
			$('html,body').animate({
			scrollTop:'0'},500,function(){
			flag=true;//防止事件叠加
			})
		}
	})
})