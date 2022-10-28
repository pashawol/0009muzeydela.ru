// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
	$('.custom-select-js').select2({
		dropdownParent: $(".select-wrap")
	});
	$('.custom-select-filter-js').select2();
	$(".theme-block__toggle").click(function () {
		$(".theme-block").toggleClass('active');
		$(this).toggleClass('active').next().slideToggle();
	})
	$('.past-years__items--js').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			// {
			// 	breakpoint: 400,
			// 	settings: {
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1
			// 	}
			// },

			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	let objItem = document.querySelectorAll(".objects__item--js");
	let objItemToggle = document.querySelectorAll(".objects__header");
	if (objItem) {
		objItemToggle.forEach(function (el) {
			el.addEventListener('click', function () {
				let objItemToggle = document.querySelectorAll('.objects__header');
				let self = this;

				for (let item of objItemToggle) {
					let currContent = item.nextElementSibling;

					if (item === self) {
						item.classList.toggle('active');
						currContent.classList.toggle('active');
					}
					else {
						item.classList.remove('active');
						currContent.classList.remove('active');
					}
				}
			})
		});
	}

	$(document).on("click", '[data-filter]', function(){
		let  self = $(this);
		let tab = self.data("filter");
		console.log(tab);
		$(`[data-filter]`).removeClass("active");
		$(`[data-filter="${tab}"]`).addClass("active");
		$(tab).fadeIn(function(){
			$(this).addClass("active")
		})
		.siblings().hide().removeClass("active")
		;
	})

	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	}, {
		passive: true
	});
});

