;(function($){
	var homeIs = new iScroll("gd1",{
		onBeforeScrollStart:function(e){
			var tar = e.target || e.srcElement,
				tag = tar.nodeName.toLowerCase()
			if(tag!="select" && tag!="input" && tag!="a" && tag!="button" && tag!="textarea")
				e.preventDefault();
		}  // 解除iscroll4的bug
	});
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

	//点击商品到预订页面
	$.each($(".ship dl"),function(){
		$(this).on("click",function(){
			window.location.href="spym.html";
		});
	});
	//点击标题到不同页面
	$.each($(".xz ul li"),function(){
		$(this).on("click",function(){
			var html = $(this).html();
			$(".header h1").html(html);
			$(".xz").css("top","-1.5rem");
		});
	});
	//点击标题出来页面
	$(".header h1").on("click",function(){
		$(".xz").css("top",".48rem");
	})

})(Zepto);