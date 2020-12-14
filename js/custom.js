// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
	$('.custom-select-js').select2();
	$(".theme-block__toggle").click(function () {
		$(".theme-block").toggleClass('active');
		$(this).toggleClass('active').next().slideToggle();
	})
});