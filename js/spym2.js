;(function($){
	var us  = document.getElementById("us"),
		len = $("#us li").length,
		i   = 0;
	us.addEventListener("swipeLeft",function(){
		i++;
		if(i>len-1){
			i=len-1;
		}
		$("#us").animate({"margin-left":-(i*100)+"%"},500,"ease-in");
	},false);
	us.addEventListener("swipeRight",function(){
		i--;
		if(i<=0){
			i=0;
		}
		$("#us").animate({"margin-left":-(i*100)+"%"},500,"ease-in");
	});
})(Zepto);