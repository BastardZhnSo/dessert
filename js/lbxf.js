;(function($){
	/*var homeIs = new iScroll("gd",{
		onBeforeScrollStart:function(e){
			var tar = e.target || e.srcElement,
				tag = tar.nodeName.toLowerCase()
			if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
				e.preventDefault();
		}  // 解除iscroll4的bug
	});*/
	//iscroll滑到底部自动返回到顶部
	var myScroll;
	function loaded(){
		myScroll = new iScroll('gd',{
			scrollY: true, 
			freeScroll: true
		});	
	}
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	document.addEventListener('DOMContentLoaded', loaded, false);

	//swipe
	var mySwiper = new Swiper ('.swiper-container', {
		loop:true,
	    pagination: '.swiper-pagination',
	    autoplay:5000,
	    speed:2000,
	});
	//加入购物车
	$("#jjr").on("click",function(){
		window.location.href="page2.html";
	});
	//tt图片链接
	$(".tt").on("click",function(){
		$(".spym2.html");
	});
	//底部导航
	$(".nav").eq(0).on("click",function(){
		window.location.href="index.html";
	});
	//底部导航
	$(".nav").eq(1).on("click",function(){
		window.location.href="page1.html";
	});
	//底部导航
	$(".nav").eq(2).on("click",function(){
		window.location.href="page2.html";
	});
	//底部导航
	$(".nav").eq(3).on("click",function(){
		window.location.href="page3.html";
	});




})(Zepto);