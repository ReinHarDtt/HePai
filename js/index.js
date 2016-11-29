$(document).ready(function(){
	$('.login-btn').on('click',function(){
		$(this).find('.box-login').slideDown(300);
		$('.mask').show();
	})
	$('.mask').on('click',function(){
		$('.box-login').slideUp(300);
		$(this).hide();
		document.getElementById('erorr-phone').innerText = '';
	})

	$('.confirm').on('click',function(){
		$(this).children().slideToggle(300);
	})

	var winHeight = $(window).height();
	$('.banner-pic').height(winHeight*0.8);

	// 手机登录验证··············································
	var loginPhone = document.getElementById('login-phone');
		loginPhone.onblur = function(){
			var phone = document.getElementById('login-phone').value;
			var re    = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
			if (!re.test(phone)) {
				document.getElementById('erorr-phone').innerText = '请输入正确的手机号码！';
				return false;
			}
			else {
				document.getElementById('erorr-phone').innerText = '';
			}
		
		}
})
