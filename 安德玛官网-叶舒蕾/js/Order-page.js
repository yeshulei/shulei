$(function(){
	$('.fonah input').blur(function(){
		if($(this).val()){
			$(this).css('border', '1px solid #d0d0d0').next().css('color','transparent').next().css('color','#1d1d1d')
		}else{
			$(this).css('border', '1px solid #ff220b').next().css('color','#ff220b').next().css('color','#ff220b')
		}			
	})
	var num3=0
	$('.lpony').click(function(){
		if(num3%2==0){
			$('.lpony').css('backgroundPosition','-94px -294px');
			$('.dint').css('background','#ff220b');
		}else{
			$('.lpony').css('backgroundPosition','-138px -294px');
			$('.dint').css('background','#f09999');
		}
		num3++;
	})
	
	var num4=0;
	$('.fap>span').click(function(){
		if(num4%2==0){
			$('.fap>span').css('backgroundPosition','-94px -294px');
		}else{
			$('.fap>span').css('backgroundPosition','-138px -294px');
		}
		num4++;	
	})
	
	//点击支付方式切换边框颜色
	$('.albb').click(function(){
		$(this).css('borderColor','#1d1d1d').siblings().css('borderColor','#d0d0d0');
	})
	$('.vx').click(function(){
			$(this).css('borderColor','#1d1d1d').siblings().css('borderColor','#d0d0d0');
	})
})