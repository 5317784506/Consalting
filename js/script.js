
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});


$(function () {
	$(".nomber").mask("8(999) 999 99 99");
});




let a = document.querySelector(".text-tax"),
	b = document.querySelector(".text-accounting"),
	c = document.querySelector(".text-lawyer");
const tax = document.querySelector(".btn-tax"),
	accounting = document.querySelector(".btn-accounting"),
	lawyer = document.querySelector(".btn-lawyer");

////////////////////////////////////////////////////

tax.addEventListener('click', function () {
	a.classList.toggle('active');
});

/////////////////////////////////////////////////////

accounting.addEventListener('click', function () {
	b.classList.toggle('active');
});

lawyer.addEventListener('click', function () {
	c.classList.toggle('active');
});

/*
if (tax) {
	tax.addEventListener('click', function () {
		a.classList.toggle('active');
	}
	);
}
*/
