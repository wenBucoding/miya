/*
	首页js文件
 */
;require(['config'],function(){
	require(['jquery','gdsZoom','lxCarousel'],function($){
		//头部
		$('<div/>').addClass('header').load('../html/header.html',function(){
				// 加载完成后写入页面
				$(this).insertBefore('.container');
			});

		//尾部
		$('<div/>').addClass('footer').load('../html/footer.html',function(){
				// 加载完成后写入页面
				$(this).insertAfter('.container');
			});

		$('.content').lxCarousel({
				imgs:['../img/lbt_1.jpg','../img/lbt_2.jpg','../img/lbt_3.jpg','../img/lbt_4.jpg','../img/lbt_5.jpg'],
				width:1423,height:480,
				type:'horizontal',
				buttons:false,
			})
		//显示隐藏
		$(window).on('scroll',function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop>=400){
				$('.scroll_1').fadeIn();
				$('.scroll_2').fadeIn();				
			}else{
				$('.scroll_1').fadeOut();
				$('.scroll_2').fadeOut();		
			}
		})

		
		//返回顶部
		$('.scroll_2')[0].onclick = function(){
			
			var timer = setInterval(function(){
					var scrollTop = window.scrollY;//10000

					// 计算一个速度(可变速度)
					var speed = Math.ceil(scrollTop/10);

					scrollTop -= speed;

					// 滚动到顶部后停止定时器
					if(scrollTop <=0 || speed === 0){
						clearInterval(timer);
						scrollTop = 0;
					}
					window.scrollTo(0,scrollTop);
				},20);
		}

		//注释注释
		//注释注释
		//导航显示隐藏
		$('.dl_1').hover(function(){
				$('.dl_a').show();
				$('.dl_b').hide();
				$('.dl_c').hide();
			},function(){
				setTimeout(function(){
					$('.dl_a').hide();
					$('.dl_b').hide();
				},600)
				
		})

		//导航2
		$('.dl_2').hover(function(){				
				$('.dl_b').show();
				$('.dl_c').hide();
			},function(){
				setTimeout(function(){
					$('.dl_b').hide();$('.dl_a').hide();
				},1000)
				
		})

		//导航3
		$('.dl_3').hover(function(){
				$('.dl_c').show();
			},function(){
				setTimeout(function(){
					$('.dl_b').hide();$('.dl_a').hide();
				},600)
				
		})


		//user php引入

		$.ajax({
			url:'../api/user.php',
			dataType:'json',
			success:res=>{
				console.log(res);
			}
		});

	})
});