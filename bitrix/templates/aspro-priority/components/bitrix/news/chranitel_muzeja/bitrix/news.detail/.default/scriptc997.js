$(document).ready(function (){
	
	
	$(".js_convert_imagestyle img").bindImageLoad(function () {
			console.log($(this).attr('src'));
			
			afterImgLoad($(this));
			
	});
	
	function afterImgLoad(obImg) {
		
		obImg.wrap('<span class="contant_image_normolize contant_image_normolize__'+obImg.attr('align')+'"></span>');


		if (obImg.attr('title')) {
			var wrapItem = obImg.parents('span');
			var imgWidth = obImg.outerWidth(true);
			wrapItem.append('<div style="width: '+imgWidth+'px;" class="contant_image_normolize__title">'+obImg.attr('title')+'</div>');
		}

		obImg.removeAttr('align');
		obImg.removeAttr('hspace');
	}
});
;(function ($) {
    $.fn.bindImageLoad = function (callback) {
        function isImageLoaded(img) {
            if (!img.complete) {
                return false;
            }
			
            if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        }

        return this.each(function () {
            var ele = $(this);
            if (ele.is("img") && $.isFunction(callback)) {
                ele.one("load", callback);
                if (isImageLoaded(this)) {
                    ele.trigger("load");
                }
            }
        });
    };
})(jQuery);