$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});


$(function () {
	$(".nomber").mask("8(999) 999 99 99");
});



const servicesBtn = document.querySelectorAll(".services__btn");
const tabsItems = document.querySelectorAll(".services__text");

servicesBtn.forEach(function (item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		servicesBtn.forEach(function (item) {
			item.classList.remove('active');
		});

		tabsItems.forEach(function (item) {
			item.classList.remove('active');
		});

		currentBtn.classList.add('active');
		currentTab.classList.add('active');
	});
})
