window.onload = function(){

	// content01 轮播~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	var contentScroll = function(){
		var timejg=5000;//轮播间隔时间
		var size = $('.content01 .box_img ul li').size();
		for(var i=1;i<=size;i++){
			$('.content01 .box_tab').append('<a href="javascript:(void)"></a>')
		}

		$('.content01 .box_img ul li').eq(0).show();
		$('.content01 .box_tab a').eq(0).addClass('active')
		$('.content01 .box_tab a').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var index = $(this).index();
			i=index;
			$('.content01 .box_img ul li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
		});
		
		(function(hash){
			var h = hash.charAt(hash.length - 1);
			$('.content01 .box_tab a').eq(h-1).addClass('active').siblings().removeClass('active');
			$(hash).stop().fadeIn(300).siblings().stop().fadeOut(300);			
		})(window.location.hash);
		var i = 0;
		var time = setInterval(move,timejg);

		function move(){
			i++;
			if(i==size){
				i=0;
			}

			$('.content01 .box_tab a').eq(i).addClass('active').siblings().removeClass('active');
			$('.content01 .box_img ul li').eq(i).fadeIn(300).siblings().fadeOut(300);
		}

		$('.content01 .box').hover(function(){
			clearInterval(time);
		},function(){
			time = setInterval(move,timejg);
		});
		var bannerImgHeight = $('.content01 .box_img ul li').height();
		$('.content01 .box_img ul').height(bannerImgHeight);
		$(window).resize(function(){
			bannerImgHeight = $('.content01 .box_img ul li').height();
			$('.content01 .box_img ul').height(bannerImgHeight);
		})
	}()	
	// content01 轮播~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	// 登陆弹窗~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

	// 回到顶部箭头滚动显示······························
	var windowHeight = $(window).innerHeight();
	$(window).scroll(function(){
		var bodyTop = $(window).scrollTop();
		if (bodyTop>=windowHeight) {
			$('.return-top').show();
		}
		else {
			$('.return-top').hide();
		}
	})
	// 手机登录验证··············································
	var loginPhone = document.getElementById('login-phone');
		loginPhone.onblur = function(){
			var phone = document.getElementById('login-phone').value;
			var re    = /^1([23578])\d{9}$/;
			if (!re.test(phone)) {
				document.getElementById('erorr-phone').innerText = '请输入正确的手机号码！';
				return false;
			}
			else {
				document.getElementById('erorr-phone').innerText = '';
			}
		
		}

// 	function messageSubmit() {
// 		// body...
// 		var name = $('#fm-name').val();
// 		var telephone = $('#fm-telephone').val();
// 		var message = $('#fm-message').val();
// 		var data = {'name':name,'telephone':telephone,'message':message};
// 		$.ajax(function(){
// 			url: '',
// 			type: 'post',
// 			data: data,
// 			success: function(){

// 			}
// 		})
// 	}
}
