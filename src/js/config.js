// 配置
// 依赖
require.config({
	// baseUrl:''
	paths:{
		jquery:'../lib/jquery3.1.1',
		gdsZoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		lxCarousel:'../lib/jquery.lxCarousel/jquery.lxCarousel',
		messages:'../lib/jquery-validate/localization/messages_zh',
		validate:'../lib/jquery-validate/jquery.validate',
		common:'common',		
		// 解决缓存
		urlArgs:'v='+Date.now(),
	
	},
	shim:{
		// gdszoom依赖jquery		
		gdsZoom:['jquery'],
		lxCarousel:['jquery'],
		messages:['validate'],
		validate:['jquery'],		
	}
});