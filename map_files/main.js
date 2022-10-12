
var JSCMainSiteHelpers = {
	

	initPopup : function () {
		$('.js_popup_window').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 0,
			mainClass: 'my-mfp-zoom-in'
		});
	},
	
	initPopupAjax : function () {
		$('.js_popup_window_ajax').magnificPopup({
			type: 'ajax',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 0,
			mainClass: 'my-mfp-zoom-in'
		});
	},
	
	pageDefaultInit : function () {
		this.initPopup();
		this.initPopupAjax();
	}
	
};

var CJSVideoPopup = {
	open : function (url) {

		let popupHtml = '';
		popupHtml += '<div onclick="CJSVideoPopup.close(); return false;" class="js_projects_map__detail__video_popup projects_map__detail__video_popup">';

		popupHtml += '<div class="projects_map__detail__video_content">';

		popupHtml += '<iframe ' +
			'width="100%" ' +
			'height="100%" ' +
			'src="'+url+'"' +
			' frameborder="0" ' +
			'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

		popupHtml += '</div>';
		popupHtml += '</div>';

		$('body').append(popupHtml);
	},

	close : function () {
		$('.js_projects_map__detail__video_popup').remove();
	}
};

$(document).ready(function (){
	JSCMainSiteHelpers.pageDefaultInit();
	
	var animationTime = 150;
	
	$('.js_megamenu_open').click(function (){
		$('.mega_fixed_menu').fadeIn(animationTime);
		return false;
	});
	
	$('.jsc_shadow_height__link').click(function (){
		
		var obDiv = $(this).parents('.jsc_shadow_height__wrap');
		obDiv.find('.jsc_shadow_height').toggleClass('jsc_shadow_height_open');
		
		
		obDiv.find('.jsc_shadow_height_topen').toggle();
		obDiv.find('.jsc_shadow_height_tclose').toggle();
		
		return false;
	});
	
}); 