/*
	列表页js文件
 */
;require(['config'],function(){
	require(['jquery','common'],function($){
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



		//购物车全选
		var $tbody = $('tbody');
		$('#all').on('click',function(){
			$tbody.find(':checkbox').prop('checked',this.checked);
			$tbody.children()[this.checked ? 'addClass' : 'removeClass']('select');
			$('.pay').css('background-color','#e72323');				
		});

		// 点击任意位置选中当前行
		$tbody.on('click','td',function(){
			var $currentTr = $(this).parent();

			$currentTr.toggleClass('select')

			.find(':checkbox').prop('checked',$currentTr.hasClass('select'));
		})

		// 删除行
		.on('click','.del',function(){
			// 强烈建议使用的获取父元素的方法:closest
			var $currentTr = $(this).closest('tr');

			$currentTr.remove();
		});


		//获取cookie
		var car  = getCookie('car');
		car  = car.length>0 ? JSON.parse(car) : [];
		console.log(car);
		var $ul = $('<ul/>');
		
		var res = car.map(function(item){
			return`
				<li >
					<input type="checkbox" />
					<span><img src="../img/s2.png" alt=""/></span>
					<span>${item.brand}</span>
					<a class="price1">￥:${item.price1}</a>
					<a>
						<span class="min">&minus;</span><input type="text" value="${item.qty}" class="countNum"><span class="plus">&plus;</span>
					</a>
					<a class="one_price">￥:${item.price1*item.qty}</a>
					<a class="del">&times;</a>
				</li>
			`
		}).join('');

			$ul.html(res);
			$ul.appendTo($('.myCar'));


		//全选
		var $ul = $('ul')
		$('#all').click(function(){
				
			$ul.find(':checkbox').prop('checked',this.checked);

		});

		//删除
		$('.del').on('click',function(){
				var $currentLi = $(this).closest('li');

				$currentLi.remove();
		});


		var $min = $('.min');
		var $plus= $('.plus');
		var $countNum = $('.countNum');
		//点击增减商品数量
		// 点击数量减少
		$('li').on('click','.min',function(){
			var res = $(this).siblings('input').val();
			res--;
			if(res<=1){
				res = 1;
			}
			$(this).siblings('input').val(res);
			var money = Number($(this).parent().siblings('.price1').html().slice(2))
			console.log(money);
			var sum = $(this).parent().siblings('.one_price').html('￥'+res*money)
			console.log(sum);
				
		});
		// 点击数量增加
		$('li').on('click','.plus',function(){
			var res = $(this).siblings('input').val();
			res++;
			$(this).siblings('input').val(res);
			var money = Number($(this).parent().siblings('.price1').html().slice(2))
			
			 
			$(this).parent().siblings('.one_price').html('￥'+res*money);
					
			
		});

			//总价
			var sum=0;
			$('.one_price').each(function(idx,item){
				 sum+= Number($(item).html().slice(2));
				$('.totalPrice').html('￥'+':'+sum);
			})

	})
});