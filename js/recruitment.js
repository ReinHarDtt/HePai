
window.onload = function(){

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

	var wordLength = function(){
		var ininWordArr = [];
		var nowWordArr = [];
		$('.word-length').each(function(){
			var i = $('.word-length').index($(this));
			var ininWord = $(this).html();
				ininWordArr.push(ininWord);
			var initWordLength = $(this).html().length;
			var nowWord;
			if (i%2 != 0) {
				if (initWordLength<=40) {
					nowWord = $(this).html();
					$(this).next().css('display','none');
				} else {
					nowWord = $(this).html().substr(0,40)+'......';
				}
			} else {
				if (initWordLength<=120) {
					$(this).next().css('display','none');
					nowWord = $(this).html();
				} else {
					nowWord = $(this).html().substr(0,120)+'......';
				}
			}
			$(this).html(nowWord);
			nowWordArr.push(nowWord);
		})
		$(document).on('click','.to-orange',function(){
			var i = $('.to-orange').index($(this));
			if ($(this).html() == '[展开]') {
				$(this).html('[收起]');
				$(this).prev().html(ininWordArr[i]);
			} else {
				$(this).html('[展开]');
				$(this).prev().html(nowWordArr[i]);
			}
			return false;
		})
	}()
	// var wordLength = function(){
	// 	var ininWordArr = [];
	// 	var nowWordArr = [];
	// 	$('.respons-word-length').each(function(){
	// 		var ininWord = $(this).html();
	// 		ininWordArr.push(ininWord);	
	// 		var nowWord = $(this).html().substr(0,150)+'......';
	// 		$(this).html(nowWord);
	// 		nowWordArr.push(nowWord);
	// 	})
	// 	$(document).on('click','.respons-to-orange',function(){
	// 		var i = $('.respons-to-orange').index($(this));
	// 		if ($(this).html() == '[展开]') {
	// 			$(this).html('[收起]');
	// 			$(this).prev().html(ininWordArr[i]);
	// 		} else {
	// 			$(this).html('[展开]');
	// 			$(this).prev().html(nowWordArr[i]);
	// 		}
	// 		return false;
	// 	})
	// }()
	
	// banner 轮播
	var contentScroll = function(){
		var timejg=10000;//轮播间隔时间
		var size = $('.box_img ul li').size();
		for(var i=1;i<=size;i++){
			$('.box_tab').append('<a href="javascript:(void)"></a>')
		}

		$('.box_img ul li').eq(0).show();
		$('.box_tab a').eq(0).addClass('active')
		$('.box_tab a').mouseover(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var index = $(this).index();
			i=index;
			$('.box_img ul li').eq(index).stop().fadeIn(400).siblings().stop().fadeOut(300);
		});

		var i = 0;
		var time = setInterval(move,timejg);

		function move(){
			i++;
			if(i==size){
				i=0;
			}

			$('.box_tab a').eq(i).addClass('active').siblings().removeClass('active');
			$('.box_img ul li').eq(i).fadeIn(300).siblings().fadeOut(300);
		}

		// $('.banner').hover(function(){
		// 	clearInterval(time);
		// },function(){
		// 	time = setInterval(move,timejg);
		// });
		var bannerImgHeight = $('.box_img ul li').height();
		$('.box_img ul').height(bannerImgHeight);
		$(window).resize(function(){
			bannerImgHeight = $('.box_img ul li').height();
			$('.box_img ul').height(bannerImgHeight);
		})
	}()

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
			var re    = /^(13[0-9]{9})|(15[89][0-9]{8})$/;
			if (!re.test(phone)) {
				document.getElementById('erorr-phone').innerText = '请输入正确的手机号码！';
				return false;
			}
			else {
				document.getElementById('erorr-phone').innerText = '';
			}
		
		}
}

