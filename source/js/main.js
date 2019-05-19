var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--no-js');


navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});


/* Карта */

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
			center: [59.93913800574294, 30.321521561386636],
			zoom: 17
		}, {
			searchControlProvider: 'yandex#search'
		}),

		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemarkWithContent = new ymaps.Placemark([59.93874546240775, 30.323177881614683], {

		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#imageWithContent',
			// Своё изображение иконки метки.
			iconImageHref: '../img/map-marker.png',
			// Размеры метки.
			iconImageSize: [231, 190],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-54, -193],
			// Смещение слоя с содержимым относительно слоя с картинкой.

			// Макет содержимого.
			iconContentLayout: MyIconContentLayout
		});

	myMap.geoObjects
		.add(myPlacemarkWithContent);
});
