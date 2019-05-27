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

var myMap;

var tablet_viewport = 768;
var desktop_viewport = 1300;
var placemarkImage = '../img/map-pin.png';

window.addEventListener('resize', update);
ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('map', {
    center: [59.93863106417265,30.3230545],
    zoom: 18
    }, {
      searchControlProvider: 'yandex#search'
    });

  update();
}

function update() {
  var mapCenter;
  var placemark;
  var placemarkSize;
  var placemarkOffset;
  var mapZoom;

  var viewport = window.innerWidth;

  if (viewport < tablet_viewport) {
    placemarkSize = [62, 53];
    placemarkOffset = [-31, -43];
    mapCenter = [59.93863106417265,30.3230545];
    placemark = [59.93863106417265,30.3230545];
    mapZoom = 17;
  }
  else if (viewport < desktop_viewport) {
    placemarkSize = [124, 106];
    placemarkOffset = [-61, -85];
    mapCenter = [59.93863106417265,30.3230545];
    placemark = [59.93863106417265,30.3230545];
    mapZoom = 18;
  }

  else {
    placemarkSize = [124, 106];
    placemarkOffset = [-57, -95];
    mapCenter = [59.93863106417265,30.319449611083996];
    placemark = [59.93863106417265,30.3230545];
    mapZoom = 17;
  }

  myMap.setCenter(mapCenter, mapZoom, 'map');

  var myPlacemark = new ymaps.Placemark(placemark, {
      hintContent: 'ул. Большая Конюшенная 19/8, Санкт-Петербург',
    }, {
      iconLayout: 'default#image',
      iconImageHref: placemarkImage,
      iconImageSize: placemarkSize,
      iconImageOffset: placemarkOffset
    }
  );

  myMap.geoObjects.removeAll();
  myMap.geoObjects.add(myPlacemark);
}
