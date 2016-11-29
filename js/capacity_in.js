window.onload = function(){
	// banner 轮播~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	var timejg=3500;//轮播间隔时间
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
		$('.box_img ul li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
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

	$('.box').hover(function(){
		clearInterval(time);
	},function(){
		time = setInterval(move,timejg);
	});
	var bannerImgHeight = $('.box_img ul li').height();
	$('.banner .box_img ul').height(bannerImgHeight);
	$(window).resize(function(){
		bannerImgHeight = $('.box_img ul li').height();
		$('.banner .box_img ul').height(bannerImgHeight);
	})
	// banner 轮播~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



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

	$('.each-step').mouseenter(function(){
		$(this).addClass('another-style').siblings().removeClass('another-style');
	})

	// 手机登录验证··············································
	var loginPhone = document.getElementById('login-phone');
		loginPhone.onblur = function(){
			var phone = document.getElementById('login-phone').value;
			var re    = /^1(3|4|5|7|8)\d{9}$/;
			if (!re.test(phone)) {
				document.getElementById('erorr-phone').innerText = '请输入正确的手机号码！';
				return false;
			}
			else {
				document.getElementById('erorr-phone').innerText = '';
			}
		
		}

	//选择城市弹窗提示···························································
	//弹窗内容···········································
	var proArr = [{src:"http://"+window.location.host+'/img/jmzc.jpg',text:'我们正在努力完善信息，请耐心等待……'},
				  {src:'../img/kyjm.jpg',text:'此城市可以加盟，<br><span>5s</span> 后将为您转接在线客服，请耐心等待……'},
				  {src:"http://"+window.location.host+'/img/tsdl.jpg',text:'您还未登录，请登录后查询，谢谢！'},
			  	  {src:"http://"+window.location.host+'/img/',text:'该城市暂未开通加盟站点，我们会继续努力！'}
	]
	//可以加盟弹窗倒计时················································································
	 function timer(){
		var time = setInterval(function(){
				var num = parseInt($('.CPM-Prompt-bottom p span').html());
				var str = num-1+'s';
				$('.CPM-Prompt-bottom p span').html(str);
		},1000)
		setTimeout(function(){
				clearInterval(time);
				$('.CPM-prompt').css('display','none');
				// location.assign('http://www.baidu.com');
		},5000)
	}
	//举个例子，点击搜索按钮出现可以加盟弹窗
	$('.content03 button').on('click',function(){
		$('.CPM-prompt').css('display','block');
		$('.CPM-Prompt-bottom img').attr('src',proArr[1].src);
		$('.CPM-Prompt-bottom p').html(proArr[1].text);
		timer();		
	})
	//加盟政策说明弹窗（目前文案内容待补充，暂以提示为主）
	$('.content03 .join-instructions a').on('click',function(){
		$('.CPM-prompt').css('display','block');
		$('.CPM-Prompt-bottom img').attr('src',proArr[0].src);
		$('.CPM-Prompt-bottom p').html(proArr[0].text);
	})
	//点击×图标关闭弹窗
	$('.CPM-prompt-top img').on('click',function(){
		//如果弹窗内容是此城市可以加盟，并且5秒后跳转，点击×图标无效果
		if ($('.CPM-Prompt-bottom img').attr('src') != '../img/kyjm.jpg') {
			$('.CPM-prompt').css('display','none');
		}
	})
}

