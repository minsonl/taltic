function queryDevice(){	
	if($("html").css('max-width')=="100%"){
		return "mobile";
	}else{
		return "pc"
	}
}

(function(){var isIE = function () {var U = navigator.userAgent,
IsIE = U.indexOf('MSIE') > -1,
a = IsIE ? /\d+/.exec(U.split(';')[1]) : 'no ie';return a <= 8;
}();if(isIE){
alert('很抱歉，您的浏览器太久远了，请用新版本浏览器访问！');
}
})();
