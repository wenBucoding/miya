/*
	列表页js文件
 */
;require(['config'],function(){
	require(['jquery','gdsZoom','common'],function($){
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


		//ajax请求
		var guid = location.search.slice(6);
		console.log(guid);
		// 请求后台数据
		$.ajax({
			url:'../api/details.php',
			dataType:'json',
			data:{
				guid:guid
			},
			success:function(res){
				var temp = res[0];				
				show(temp);
				
				function show(item){
					var html = `
							<div class="goodsNav">
								<a href="../index.html">蜜芽首页</a> &gt; <a href="../index.html">${item.brand}</a> 
							</div>				
							
							<div class="large">
								<img src="${item.imgurl}" data-big="${item.imgurl}"/>
							</div>
							
							<div class="little">
								<img src="../img/s2.png"/>
								<img src="../img/s2.png"/>
								<img src="../img/s2.png"/>
								<img src="../img/s2.png"/>
							</div>
							<div class="goodsPrice">
								<h3>[包邮]${item.brand} 纸尿裤增量装 M76片*2包(7-11kg)</h4>
								<ul>
									<li>柔点干爽网面，呵护宝宝娇嫩肌肤，能够有效地抑制婴儿发生斑疹，特有变色尿湿显示带</li>
									<li>售价:<span>${item.price1}</span><span>${item.price2}</span></li>
									<li>优惠夏季爆款直降</li>						
								</ul>							
								<p class="count">购买数量：<span class="min">&minus;</span><input type="text" value="1" class="countNum"><span class="plus">&plus;</span></p>
								<div class="btn">
									<a class="buyNow"><span>加入购物车</span><span>成功加入购物车</span>
									</a>
								</div>
							</div>
						
					`;
				
					$('.goods').html(html);
			
				}



				// 放大镜效果
				$('.large').gdsZoom({
					width:300,height:300,position:'right'
				});


				var $min = $('.min');
				var $plus= $('.plus');
				var $countNum = $('.countNum');
				//点击增减商品数量
				// 点击数量减少
				$min.mousedown(function(){
					$(this).addClass('active');
					var res = $countNum.val();
					res--;
					if(res<=1){
						res = 1;
					}
					$countNum.val(res);
				}).mouseup(function(){
					$(this).removeClass('active');
					return false;
				});
				// 点击数量增加
				$plus.mousedown(function(){
					$(this).addClass('active');
					var res = $countNum.val();
					res++;
					$countNum.val(res);
				}).mouseup(function(){
					$(this).removeClass('active');
					return false;
				});	


				//点击按钮添加到购物车
				var $carNum = $('.carNum');
				$('.buyNow').on('click',function(){
					var res = $countNum.val();
					$carNum.fadeIn();
					$carNum.html(res);
				})



				// 添加到购物车效果
				var $img = $('.large').children('img');
				$('.buyNow').click(function(){
					var $cloneImg = $img.clone();
					$cloneImg.css({
						position:'absolute',
						left:$img.offset().left,
						top:$img.offset().top,
						width:$img.outerWidth(),
						height:$img.outerHeight(),
					}).appendTo('body');

					$cloneImg.animate({
						left:$('.headCar').offset().left,
		                top:$('.headCar').offset().top + $('.headCar').outerHeight(),
		                width:10,
		                height:10
					},function(){
						$cloneImg.remove();
						var res = $countNum.val();
						res++;
						$countNum.val(res);
					});
				});



				//获取cookie
				var car  = getCookie('car');
				car  = car.length>0 ? JSON.parse(car) : [];

				// 点击添加购物车
				$('.buyNow').on('click',function(){	
					var goodsCookie = car.filter(function(item){
						console.log(temp)
						console.log(item);
						return item.guid == temp.id;
					});
					if(goodsCookie.length>0){
						temp.qty++;
					}else{
						var item = {
							guid:temp.guid,
							brand:temp.brand,
							price1:temp.price1,
							price2:temp.price2,
							imgurl:temp.imgurl,
							qty:$('.countNum').val()
						}

					}					
					
					// 往商品列表中添加当前商品信息
					car.push(item);

					setCookie('car',JSON.stringify(car));
				}) 

			}

			
		});

		
		

	})
});