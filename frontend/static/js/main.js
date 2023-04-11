ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
        center: [52.38497650, 4.89812075],
        zoom: 9
    }, {
        searchControlProvider: 'yandex#search'
    }),
        
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Мое место проживания'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://www.svgrepo.com/show/362123/map-marker.svg',
            // Размеры метки.
            iconImageSize: [40, 52],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17, -26]
        });

        myMap.geoObjects
            .add(myPlacemark);
        });

let loader = document.getElementById('preloader');

window.addEventListener("DOMContentLoaded", function() {
    loader.style.display = "none";
});