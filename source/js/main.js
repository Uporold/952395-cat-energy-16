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
      center: [59.93905635443461,30.319621272460942],
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([59.938625680716555,30.323033042327896], {

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map-pin.png',
      // Размеры метки.
      iconImageSize: [124, 106],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-50, -130],
      // Смещение слоя с содержимым относительно слоя с картинкой.

      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkWithContent);


});

  if (window.innerWidth < 768){
  myMap.center = [158.93863106417265,30.3230545];
}
