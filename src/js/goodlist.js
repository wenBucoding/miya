/*
	列表页js文件
 */
;require(['config'],function(){
	require(['jquery','lxCarousel'],function($){
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


		//商品列表 懒加载		
			// var pageNo = 1;
			// var lastPage = 1;
			// // jquery发起ajax请求
			// $.ajax({				
			// 	url:'../api/goodlist.php',
			// 	data:{pageNo:pageNo,qty:10},

			// 	// 设定返回数据类型
			// 	dataType:'json',
			// 	success:function(res){
			// 		var $ul = $('<ul/>');
			// 		var html = res.data.map(item=>{
			// 			return `
			// 				<li><a href="#"><img src="${item.imgurl}" alt=""/></a>
			// 					<h4>${item.brand}</h4>
			// 					<p>
			// 						<span>￥${item.price1}</span>
			// 						<span>￥${item.price2}</span>
			// 					</p>
			// 				</li>
			// 			`
			// 		});

			// 		$ul.html(html).appendTo('.datalist');

			// 		pageNo++;
			// 	}
			// });

			// // 滚动更多
			// $(window).on('scroll',function(){
			// 	var scrollTop = $(window).scrollTop();
			// 	var winHeight = $(window).height();
			// 	var scrollHeight = $('body').outerHeight();

			// 	// 如何判断滚动到最底部
			// 	if(scrollTop >= scrollHeight - winHeight - 100){
			// 		if(pageNo == lastPage) return;
			// 		$.ajax({
			// 			url:'../api/goodlist.php',
			// 			data:{pageNo:pageNo,qty:10},

			// 			// 设定返回数据类型
			// 			dataType:'json',
			// 			success:function(res){
			// 				var $ul = $('<ul/>');
			// 				var html = res.data.map(item=>{
			// 					return `
			// 						<li><a href="#"><img src="${item.imgurl}" alt=""/></a>
			// 							<h4>商品品牌:${item.brand}</h4>
			// 							<p>
			// 								<span>￥${item.price1}</span>
			// 								<span>￥${item.price2}</span>
			// 							</p>										
			// 						</li>
			// 					`
			// 				});

			// 				$ul.html(html).appendTo('.datalist');

			// 				pageNo++;

			// 			}
			// 		});

			// 		// 更新lastPage
			// 		lastPage = pageNo;

			// 	}

			// 	return false;
			// });

		

		//数据分页	
		var $datalist = $('.datalist');		
		var pageNo = 1;
		var qty = 10;

		// 请求数据
		$.ajax({
			url:'../api/goodlist.php',
			dataType:'json',
			data:{
				page:pageNo,
				qty:qty
			},

			success:function(res){
				show(res);
				// 分页显示
				var pageQty = Math.ceil(res.total/res.qty);

				var page_num = '';

				for(var i=1;i<=pageQty;i++){
					page_num += `<p ${res.pageNo==i?'class="active"':''}>
						<a href="#">${i}</a>
					</p>`;
				}console.log(page_num);
				// 字符串模板里面可进行三元运算 添加当前页码高亮
				$('.number').html(page_num);
			}
		});
		
		// 点击分页切换
		$('.number').on('click','a',function(){
			$datalist.html('');
			// 切换页码添加高亮
			$(this).parent().addClass('active').siblings().removeClass('active');
			pageNo = $(this).text();

			$.ajax({
				url:'../api/goodlist.php',
				dataType:'json',
				data:{
					page:pageNo,
					qty:qty
				},
				success:function(res){
					// console.log(res)
					
					show(res);
				}
			});

			// 阻止浏览器的默认行为（如：点击页码切换时会跳到最顶端）
			// jquery中阻止浏览器默认行为的方式
			return false;
		});


		// 封装函数，减少代码重复
		function show(res){
			var $ul = $('<ul/>');
			var html=res.data.map(function(item){				
				return `
					<li>
						<a href="details.html?guid=${item.id}"><img src="${item.imgurl}" alt=""/></a>
						<h4>商品品牌:${item.brand}</h4>
						<p>
							<span>￥${item.price1}</span>
							<span>￥${item.price2}</span>
						</p>										
					</li>
				`;
			}).join('');
			$ul.html(html).appendTo('.datalist');
		};


	})
});