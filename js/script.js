
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});


$(function () {
	$(".nomber").mask("8(999) 999 99 99");
});