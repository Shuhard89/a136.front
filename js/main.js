// Desktop header menu
function headerMenu() {
    var menu_btn = $('#menu_btn'),
        body = $('body'),
        menu_container = $('#header_menu_container');

    // Helpers
    function openMenu() {
        menu_btn.addClass('active');
        menu_container.addClass('active');
        body.addClass('overflow-hidden');
    }

    function closeMenu() {
        menu_btn.removeClass('active');
        menu_container.removeClass('active');
        body.removeClass('overflow-hidden');
    }

    // Events
    menu_btn.on('click', function() {
        if ($(this).hasClass('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

// Desktop mobile header menu
function mobileHeaderMenu() {
    var menu_btn = $('#menu_btn_mobile'),
        body = $('body'),
        menu_container = $('#mobile_header_content');

    // Helpers
    function openMenu() {
        menu_btn.addClass('active');
        menu_container.addClass('active');
        body.addClass('overflow-hidden');
    }

    function closeMenu() {
        menu_btn.removeClass('active');
        menu_container.removeClass('active');
        body.removeClass('overflow-hidden');
    }

    // Events
    menu_btn.on('click', function() {
        if ($(this).hasClass('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

// Intro slider
function introSlider(id) {
    var container = $(id),
        sliderContainer = container.find('.intro-slider-container-inner'),
        sliderList = container.find('.intro-slider-list'),
        sliderListItem = sliderList.children('li'),
        sliderListItemContentClass = '.intro-slider-item-content',
        sliderListItemVideo = sliderListItem.find('video'),
        controlsContainer = container.find('.intro-slider-controls-container'),
        control = container.find('.intro-slider-controls-list > li'),
        totalSlides = sliderListItem.length;

    // Helpers
    function buildSlider() {
        var slideWidth = getSlideWidth();
        sliderListItem.outerWidth(slideWidth);
        sliderList.outerWidth(slideWidth*totalSlides + 20);
    }

    function initSlider() {
        buildSlider();
        moveTo(0);
    }

    function playSlideVideo(slideIndex) {
        var currentVideo = sliderListItem.eq(slideIndex).find('video');

        sliderListItemVideo.each(function(index, video) {
            video.pause();
        });

        if (currentVideo.length) {
            currentVideo[0].play();
        }
    }

    function getSlideWidth() {
        return sliderContainer.outerWidth();
    }

    function getCurrentSlideIndex() {
        return sliderListItem.filter('.active').index();
    }

    function moveTo(index) {
        playSlideVideo(index);
        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
        sliderListItem.removeClass('active').eq(index).addClass('active');
        control.removeClass('active').eq(index).addClass('active');
    }

    function moveNext() {
        if (getCurrentSlideIndex() + 1 === totalSlides) {
            moveTo(0);
        } else {
            moveTo(getCurrentSlideIndex() + 1);
        }
    }

    function movePrev() {
        if (getCurrentSlideIndex() - 1 < 0) {
            moveTo(totalSlides - 1);
        } else {
            moveTo(getCurrentSlideIndex() - 1);
        }
    }

    // Events
    control.on('click', function() {
        clearInterval(interval);
        moveTo($(this).index());
    });

    sliderList.on('swipeleft', function(event) {
        moveNext();
    });

    sliderList.on('swiperight', function(event) {
        movePrev();
    });

    // Autoplay
    var interval = setInterval(function(){
        moveNext();
    }, 7000);

    // Init slider
    initSlider();
    $(window).on('resize', function() {
        initSlider();
    });
}

// Sinple img slider
function simpleImgSlider(id) {
    var container = $(id),
        sliderContainer = container.find('.simple-img-slider-list-container'),
        sliderList = container.find('.simple-img-slider-list-container > ul'),
        sliderListItem = sliderList.children('li'),
        control = container.find('.simple-img-slider-controls > li'),
        totalSlides = sliderListItem.length;

    // Helpers
    function buildSlider() {
        var slideWidth = getSlideWidth();
        sliderListItem.outerWidth(slideWidth);
        sliderList.outerWidth(slideWidth*totalSlides + 20);
    }

    function initSlider() {
        buildSlider();
        moveTo(0);
    }

    function getSlideWidth() {
        return sliderContainer.outerWidth();
    }

    function getCurrentSlideIndex() {
        return sliderListItem.filter('.active').index();
    }

    function moveTo(index) {
        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
        sliderListItem.removeClass('active').eq(index).addClass('active');
        control.removeClass('active').eq(index).addClass('active');
    }

    function moveNext() {
        if (getCurrentSlideIndex() + 1 === totalSlides) {
            moveTo(0);
        } else {
            moveTo(getCurrentSlideIndex() + 1);
        }
    }

    function movePrev() {
        if (getCurrentSlideIndex() - 1 < 0) {
            moveTo(totalSlides - 1);
        } else {
            moveTo(getCurrentSlideIndex() - 1);
        }
    }

    // Events
    control.on('click', function() {
        clearInterval(interval);
        moveTo($(this).index());
    });

    sliderList.on('swipeleft', function(event) {
        moveNext();
    });

    sliderList.on('swiperight', function(event) {
        movePrev();
    });

    // Autoplay
    var interval = setInterval(function(){
        moveNext();
    }, 7000);

    // Init slider
    initSlider();
    $(window).on('resize', function() {
        initSlider();
    });
}

// Progress slider
function progressSlider(id) {
    var container = $(id),
        sliderContainer = container.find('.progress-slider-images-container'),
        sliderContainer2 = container.find('.progress-slider-info-inner'),
        sliderList = container.find('.progress-slider-images-list'),
        sliderList2 = container.find('.progress-slider-info-list'),
        sliderListDots = container.find('.dot-controls-list'),
        sliderListItem = sliderList.children('li'),
        sliderListItem2 = sliderList2.children('li'),
        sliderListDotControl = sliderListDots.children('li'),
        control = container.find('.progress-slider-control'),
        totalSlides = sliderListItem.length;

    // Helpers
    function buildSlider() {
        var slideWidth = getSlideWidth();
        sliderListItem.outerWidth(slideWidth[0]);
        sliderList.outerWidth(slideWidth[0]*totalSlides + 20);
        sliderListItem2.outerWidth(slideWidth[1]);
        sliderList2.outerWidth(slideWidth[1]*totalSlides + 20);
    }

    function initSlider() {
        buildSlider();
        moveTo(0);
    }

    function getSlideWidth() {
        return [sliderContainer.outerWidth(), sliderContainer2.outerWidth()];
    }

    function getCurrentSlideIndex() {
        return sliderListItem.filter('.active').index();
    }

    function moveTo(index) {
        sliderList.css('transform', 'translateX(-'+getSlideWidth()[0]*index+'px)');
        sliderListItem.removeClass('active').eq(index).addClass('active');
        sliderList2.css('transform', 'translateX(-'+getSlideWidth()[1]*index+'px)');
        sliderListItem2.removeClass('active').eq(index).addClass('active');
        sliderListDots.css('transform', 'translateX(-'+sliderListDotControl.outerWidth()*(index-1)+'px)');
        sliderListDotControl.removeClass('active').eq(index).addClass('active');
    }

    function moveNext() {
        if (getCurrentSlideIndex() + 1 === totalSlides) {
            moveTo(0);
        } else {
            moveTo(getCurrentSlideIndex() + 1);
        }
    }

    function movePrev() {
        if (getCurrentSlideIndex() - 1 < 0) {
            moveTo(totalSlides - 1);
        } else {
            moveTo(getCurrentSlideIndex() - 1);
        }
    }

    // Events
    control.on('click', function() {
        clearInterval(interval);
        if ($(this).hasClass('left')) {
            movePrev();
        } else {
            moveNext();
        }
    });

    sliderList.on('swipeleft', function(event) {
        moveNext();
    });

    sliderList.on('swiperight', function(event) {
        movePrev();
    });

    sliderListDotControl.find('.dot-control').on('click', function() {
        clearInterval(interval);
        var index = $(this).parent('li').index();
        moveTo(index);
    });

    // Autoplay
    var interval = setInterval(function(){
        moveNext();
    }, 7000);

    // Init slider
    initSlider();
    $(window).on('resize', function() {
        initSlider();
    });
}

// News slider
function newsSlider(id) {
    var container = $(id),
        sliderContainer = container.find('.news-slider-container-inner'),
        sliderList = container.find('.news-slider-list'),
        sliderListItem = sliderList.children('li'),
        control = container.find('.news-slider-control'),
        totalSlides = sliderListItem.length;

    // Helpers
    function buildSlider() {
        var slideWidth = getSlideWidth();
        sliderListItem.outerWidth(slideWidth);
        sliderList.outerWidth(slideWidth*totalSlides + 20);
    }

    function initSlider() {
        buildSlider();
        moveTo(0);
    }

    function getSlideWidth() {
        return sliderListItem.outerWidth();
    }

    function getCurrentSlideIndex() {
        return sliderListItem.filter('.active').index();
    }

    function moveTo(index) {
        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
        sliderListItem.removeClass('active').eq(index).addClass('active');
    }

    function moveNext() {
        if (getCurrentSlideIndex() + 1 === totalSlides) {
            moveTo(0);
        } else {
            moveTo(getCurrentSlideIndex() + 1);
        }
    }

    function movePrev() {
        if (getCurrentSlideIndex() - 1 < 0) {
            moveTo(totalSlides - 1);
        } else {
            moveTo(getCurrentSlideIndex() - 1);
        }
    }

    // Events
    control.on('click', function() {
        if ($(this).hasClass('left')) {
            movePrev();
        } else {
            moveNext();
        }
    });

    sliderList.on('swipeleft', function(event) {
        moveNext();
    });

    sliderList.on('swiperight', function(event) {
        movePrev();
    });

    // Init slider
    initSlider();
    $(window).on('resize', function() {
        initSlider();
    });
}

// Footer map
function initFooterMap(markerPoint, centerPoint) {
    var mapRootId = 'footer_map';

    if ($('#'+mapRootId).length > 0) {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            center: new google.maps.LatLng(centerPoint.lat, centerPoint.lng),
            disableDefaultUI: false,
            draggable: true,
            styles:
            [{featureType:"landscape",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{stylers:[{hue:"#00aaff"},{saturation:-100},{gamma:2.15},{lightness:12}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{visibility:"on"},{lightness:24}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:57}]}]
        };
        var mapElement = document.getElementById(mapRootId);
        var map = new google.maps.Map(mapElement, mapOptions);
        var image = $(window).width() > 767 ? 'img/ui/map_marker.svg' : 'img/ui/map_marker.svg';
        var myLatLng = new google.maps.LatLng(markerPoint.lat, markerPoint.lng);
        var mapMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: '',
            icon: image
        });
    }
}

// Append maps
function initMap(markerPoint, centerPoint, placeholderId) {
    if ($('#'+placeholderId).length > 0) {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            center: new google.maps.LatLng(centerPoint.lat, centerPoint.lng),
            disableDefaultUI: false,
            draggable: true,
            styles:
            [{featureType:"landscape",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{stylers:[{hue:"#00aaff"},{saturation:-100},{gamma:2.15},{lightness:12}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{visibility:"on"},{lightness:24}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:57}]}]
        };
        var mapElement = document.getElementById(placeholderId);
        var map = new google.maps.Map(mapElement, mapOptions);
        var image = $(window).width() > 767 ? 'img/ui/map_marker.svg' : 'img/ui/map_marker.svg';
        var myLatLng = new google.maps.LatLng(markerPoint.lat, markerPoint.lng);
        var mapMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: '',
            icon: image
        });
    }
}


// Infrastructure map
function infrastructureMap() {
    var locations = [ // 0-title , 1-koord1, 2-koord2, 3-point_img, 4-group of markers
        ["«Сінево»", 50.371307, 30.462762, "/img/map/markers/marker_heal.png", "1", "проспект Академіка Глушкова, 9Г", "Медична лабораторія"],
        ["«Фармація»", 50.365913, 30.4541549, "/img/map/markers/marker_heal.png", "1", "проспект Академіка Глушкова, 31А", "Аптека"],
        ["«Фалбі»", 50.3585491, 30.4714911, "/img/map/markers/marker_heal.png", "1", "вул. Академіка Заболотного, 136А", "Аптека"],
        ["«Скайлайн»", 50.36402, 30.464787, "/img/map/markers/marker_heal.png", "1", "вул. Академіка Заболотного, 48А", "Аптека"],
        ["«Аптека низьких цін»", 50.36402, 30.464787, "/img/map/markers/marker_heal.png", "1", "проспект Академіка Глушкова, 31А", "Аптека"],
        ["«Фармація»", 50.366067, 30.453768, "/img/map/markers/marker_heal.png", "1", "проспект Академіка Глушкова, 31А", "Аптека №68"],
        ["«Аптека доброго дня»", 50.3678535, 30.45828, "/img/map/markers/marker_heal.png", "1", "проспект Академіка Глушкова, 13Б", "Аптека"],
        ["«Дойч-фарм»", 50.3708, 30.4640257, "/img/map/markers/marker_heal.png", "1", "проспект Академіка Глушкова, 9В", "Аптека"],
        ["«Вітамін»", 50.3787948, 30.4507811, "/img/map/markers/marker_heal.png", "1", "вул. Лятошинського, 14", "Аптека"],
        ["«Ліра»", 50.382767, 30.479053, "/img/map/markers/marker_heal.png", "1", "Голосіївський проспект, 130/57", "Салон краси"],
        ["«City»", 50.387487, 30.4707879, "/img/map/markers/marker_heal.png", "1", "вул. Михайла Ломоносова, 40А", "Салон краси"],
        ["Sonce", 50.3867397, 30.4701146, "/img/map/markers/marker_heal.png", "1", "вул. Михайла Ломоносова, 73А", "Салон краси"],
        ["INjoy", 50.48547355, 30.43853759, "/img/map/markers/marker_heal.png", "1", "вул. Михайла Ломоносова, 48А", "Салон краси"],
        ["«Марія»", 50.3678535, 30.45828, "/img/map/markers/marker_heal.png", "1", "проспект Академіка Глушкова, 13Б", "Масажний кабінет"],
        ["«Кияночка»", 50.4126746, 30.44975281, "/img/map/markers/marker_heal.png", "1", "вул. Академіка Заболотного, 48А", "Оздоровчо-естетичний комплекс"],
        ["Giglio", 50.3941033, 30.4947901, "/img/map/markers/marker_heal.png", "1", "вулиця Васильківська, 23/16", "Салон краси"],
        ["«Супермаркет краси»", 50.3938859, 30.5049028, "/img/map/markers/marker_heal.png", "1", "вул. Михайла Стельмаха, 6", "Салон краси"],
        ["«Феофанія»", 50.3664472, 30.4633443, "/img/map/markers/marker_heal.png", "1", "вул. Академіка Заболотного, 21", "Клінічна лікарня"],
        ["«Діла»", 50.382767, 30.479053, "/img/map/markers/marker_heal.png", "1", "Голосіївський проспект, 130/57", "Медична лабораторія"],
        ["Фізико-математичний ліцей КНУ ім. Шевченка", 50.379499, 30.469085, "/img/map/markers/marker_book.png", "2", "проспект Академіка Глушкова, 6", "Освітній заклад"],
        ["Середня загальноосвітня школа №286", 50.364392, 30.459748, "/img/map/markers/marker_book.png", "2", "вул. Академіка Заболотного, 6А", "Освітній заклад"],
        ["Школа I-III ступенів №236", 50.36889767, 30.47026634, "/img/map/markers/marker_book.png", "2", "вул. Академіка Заболотного, 144", "Освітній заклад"],
        ["Дошкільний навчальний заклад №372", 50.36169, 30.463285, "/img/map/markers/marker_book.png", "2", "вул. Академіка Заболотного, 114А", "Освітній заклад"],
        ["Ясла-садок №798 «Калинка»", 50.362459, 30.463194, "/img/map/markers/marker_book.png", "2", "вул. Академіка Заболотного, 70А", "Дошкільний навчальний заклад"],
        ["Спеціалізована школа №269", 50.365553, 30.458254, "/img/map/markers/marker_book.png", "2", "вул. Академіка Глушкова, 17А", "З поглибленим вивченням французької мови"],
        ["Середня загальноосвітня школа №132", 50.366386, 30.449411, "/img/map/markers/marker_book.png", "2", "проспект Академіка Глушкова, 28", "Освітній заклад"],
        ["Дитячий садок  №513", 50.368456, 30.451978, "/img/map/markers/marker_book.png", "2", "проспект Академіка Глушкова, 20", "Дошкільний навчальний заклад"],
        ["Школа-дитячий садок «Ромашка»", 50.368591, 30.44968, "/img/map/markers/marker_book.png", "2", "вул. Теремківська, 10", "Освітній заклад"],
        ["Ясла-садок №285", 50.36424, 30.4561786, "/img/map/markers/marker_book.png", "2", "проспект Академіка Глушкова, 41Б", "Дошкільний навчальний заклад"],
        ["Школа-дитячий садок «Барвінок»", 50.364412, 30.453683, "/img/map/markers/marker_book.png", "2", "проспект Академіка Глушкова, 55А", "Освітній заклад"],
        ["«Загреб»", 50.385928, 30.4874449, "/img/map/markers/marker_det_fan.png", "5", "проспект Голосіївський, 116", "Кінотеатр"],
        ["«Лінія кіно»", 50.3696293, 30.457761, "/img/map/markers/marker_det_fan.png", "5", "проспект Академіка Глушкова, 13Б", "Кінотеатр"],
        ["«Активна Країна»", 50.3873945, 30.4918157, "/img/map/markers/marker_det_fan.png", "5", "Голосіївський парк ім. Максима Рильського", "Мотузковий парк"],
        ["«Парк гойдалок»", 50.380599, 30.479004, "/img/map/markers/marker_det_fan.png", "5", "проспект Академіка Глушкова, 1", "Місце відпочинку"],
        ["Skypark", 50.3773595, 30.4788761, "/img/map/markers/marker_det_fan.png", "5", "проспект Академіка Глушкова, 1", "Мотузковий парк"],
        ["«Жага швидкості»", 50.372953, 30.467655, "/img/map/markers/marker_det_fan.png", "5", "проспект Академіка Глушкова, 9", "Картинг-центр"],
        ["«Фалькон»", 50.372074, 30.464970, "/img/map/markers/marker_det_fan.png", "5", "пр. Академіка Глушкова, 9", "Пейнтбольний клуб"],
        ["Тенісні корти", 50.371349, 30.467147, "/img/map/markers/marker_det_fan.png", "5", "пр. Академіка Глушкова, 9", "Спорт"],
        ["Льодовий стадіон", 50.372348, 30.467168, "/img/map/markers/marker_det_fan.png", "5", "пр. Академіка Глушкова, 9", "Спорт"],
        ["«Магелан»", 50.367932, 30.458165, "/img/map/markers/marker_shop.png", "0", "Академіка Глушкова, 13-Б", "Торгово-розважальний центр"],
        ["«Агроконтинент Україна»", 50.354722, 30.482968, "/img/map/markers/marker_shop.png", "0", "вул. Академіка Заболотного, 150А", "Торгівельний центр"],
        ["Епіцентр К", 50.378108, 30.444780, "/img/map/markers/marker_shop.png", "0", "Кільцева дорога, 1Б", "Будівельно-господарський гіпермаркет"],
        ["АТБ-маркет ", 50.3826096, 30.4797167, "/img/map/markers/marker_shop_2.png", "0", "Голосіївський проспект, 128", "Магазин"],
        ["«Бджілка»", 50.35621, 30.482069, "/img/map/markers/marker_shop_2.png", "0", "вул. Академіка Заболотного, 19", "Магазин"],
        ["АТБ-маркет ", 50.3659258, 30.4623382, "/img/map/markers/marker_shop_2.png", "0", "вул. Академіка Заболотного, 20А", "Магазин"],
        ["«Ашан»", 50.3659258, 30.4623382, "/img/map/markers/marker_shop_2.png", "0", "проспект Академіка Глушкова, 13Б", "Гіпермаркет"],
        ["«Бджілка»", 50.3659258, 30.4623382, "/img/map/markers/marker_shop_2.png", "0", "Голосіївський проспект, 114", "Магазин"],
        ["«Фора»", 50.385098, 30.4859227, "/img/map/markers/marker_shop_2.png", "0", "Голосіївський проспект, 118", "Магазин"],
        ["«Люксоптика»", 50.3680004, 30.4584439, "/img/map/markers/marker_shop_2.png", "0", "проспект Академіка Глушкова, 13Б", "Магазин оптики"],
        ["«Будинок іграшок»", 50.3434733, 30.5456739, "/img/map/markers/marker_shop_2.png", "0", "проспект Академіка Глушкова, 13Б", "Магазин"],
        ["«Золотий вік»", 50.36802172, 30.45896173, "/img/map/markers/marker_shop_2.png", "0", "проспект Академіка Глушкова, 13Б", "Магазин"],
        ["Istudio", 50.36802172, 30.45896173, "/img/map/markers/marker_shop_2.png", "0", "проспект Академіка Глушкова, 13Б", "Магазин"],
        ["«Тапитошка»", 50.365905, 30.462326, "/img/map/markers/marker_shop_2.png", "0", "вул. Академіка Заболотного, 20А", "Магазин"],
        ["Eva", 50.3664067, 30.4613408, "/img/map/markers/marker_shop_2.png", "0", "вулиця Академіка Заболотного, 20", "Магазин"],
        ["«Велоплюкс»", 50.365905, 30.462326, "/img/map/markers/marker_shop_2.png", "0", "вулиця Академіка Заболотного, 20", "Магазин"],
        ["«Прага»", 50.3815735, 30.4817256, "/img/map/markers/marker_food.png", "6", "проспект Академіка Глушкова, 1", "Ресторан"],
        ["«Муракамі»", 50.367932, 30.458165, "/img/map/markers/marker_food.png", "6", "Академіка Глушкова, 13Б", "Ресторан"],
        ["Pesto Cafe", 50.367932, 30.458165, "/img/map/markers/marker_food.png", "6", "просп. Академіка Глушкова, 13Б", "Ресторан"],
        ["Americanguys Cafe", 50.367932, 30.458165, "/img/map/markers/marker_food.png", "6", "проспект Академіка Глушкова, 13Б", "Кав'ярня"],
        ["Veterano Coffee", 50.367253, 30.455904, "/img/map/markers/marker_food.png", "6", "проспект Академіка Глушкова, 25", "Кав'ярня"],
        ["Cloud coffee", 50.368925, 30.454459, "/img/map/markers/marker_food.png", "6", "проспект Академіка Глушкова, 16", "Кав'ярня"],
        ["Me.Kava", 50.365436, 30.4473995, "/img/map/markers/marker_food.png", "6", "проспект Академіка Глушкова, 32", "Кав'ярня"],
        ["Guilis", 50.366541, 30.454855, "/img/map/markers/marker_food.png", "6", "проспект Академіка Глушкова, 31", "Кав'ярня"],
        ["Mill Hub", 50.370488, 30.4624975, "/img/map/markers/marker_food.png", "6", "проспект Академіка Глушкова, 11", "Ресторан"],
        ["«Алібі»", 50.365905, 30.462326, "/img/map/markers/marker_food.png", "6", "вулиця Академіка Заболотного, 20А", "Піцерія"],
        ["«Лакі Лучано»", 50.358744, 30.476367, "/img/map/markers/marker_food.png", "6", "вулиця Академіка Заболотного, 13Б", "Ресторан"],
        ["«Портер паб»", 50.358744, 30.476367, "/img/map/markers/marker_food.png", "6", "вулиця Академіка Заболотного, 13Б", ""],
        ["KFC", 50.358744, 30.476367, "/img/map/markers/marker_food.png", "6", "вулиця Академіка Заболотного, 13Б", "Ресторан"],
        ["«Пивний сад»", 50.392892, 30.5081234, "/img/map/markers/marker_food.png", "6", "Голоcіївський проспект, 87", "Ресторан"],
        ["«Голосіївський двір»", 50.392892, 30.5081234, "/img/map/markers/marker_food.png", "6", "Голоcіївський проспект, 87Б", "Ресторан"],
        ["Café des fleurs", 50.3979335, 30.50991, "/img/map/markers/marker_food.png", "6", "проспект Голосіївський, 110", "Кафе"],
        ["Purpur Amore", 50.386295, 30.4890376, "/img/map/markers/marker_food.png", "6", "Голосіївський проспект, 114", "Ресторан"],
        ["Mister Cat", 50.3821839, 30.4782948, "/img/map/markers/marker_food.png", "6", "Голосіївський проспект, 132", "Піцерія"],
        ["Ботанічний сад НУБіП України", 50.3820547, 30.502002400000038, "/img/map/markers/marker_park.png", "4", "вул. Героїв Оборони, 2А", "Природа"],
        ["Оріхуватські ставки", 50.3887209, 30.504160899999988, "/img/map/markers/marker_park.png", "4", "", ""],
        ["Голосіївські ставки", 50.38003900474693, 30.518409593115166, "/img/map/markers/marker_park.png", "4", "", ""],
        ["Ставок Дідорівка", 50.37578179350677, 30.50270929510657, "/img/map/markers/marker_park.png", "4", "", ""],
        ["Парк «Феофанія»", 50.34034459999999, 30.488901299999952, "/img/map/markers/marker_park.png", "4", "", "Природа"],
        ["Голосіївський ліс", 50.367278, 30.486028, "/img/map/markers/marker_park.png", "4", "", ""],
        ["«Пирогів»", 50.353443700000014, 30.505065835276127, "/img/map/markers/marker_park.png", "4", "", "Національний музей народної архітектури та побуту України"],
        ["«Київ» (Жуляни)", 50.411984, 30.443254000000024, "/img/map/markers/marker_park.png", "4", "", "Міжнародний аеропорт"]
    ];                
                
    var map;
    function callMap() {
        // настройки карты
        var mapStyle = [{featureType:"landscape",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{stylers:[{hue:"#00aaff"},{saturation:-100},{gamma:2.15},{lightness:12}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{visibility:"on"},{lightness:24}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:57}]}];
        var latlng = $(window).width() > 767 ? new google.maps.LatLng(50.369652, 30.462442) : new google.maps.LatLng(50.369652, 30.462442);  // map center
        var settings = {
            zoom: 14,   
            disableDefaultUI:true,
            center: latlng,
            styles: mapStyle
        };

        map = new google.maps.Map(document.getElementById("infrastructure_map_root"), settings);
         
        // генерим маркера на карте
        for (var i = 0; i < locations.length; i++) {
            var location = locations[i];
            new CustomMarker(
                location[1],
                location[2],
                map,
                { class : 'map-marker' , type_marker : location[4] }
            );
        }

        // вставляем в маркера контент
        google.maps.event.addListenerOnce(map,'idle',function(){
            for (var i = 0; i < locations.length; i++) {
                var location = locations[i];
                //if(location[4]==1){
                    $('.map-marker').eq(i).append(
                            '<div class="map_marker" style="background-image: url('+location[3]+');">'
                                +' <div class="marker_text_wrap">'
                                    +' <div class="marker_text_wr">'
                                        +' <div class="marker_tittle">'+location[6]+'</div>'
                                        +' <div class="marker_tittle_2">'+location[0]+'</div>'
                                        +'<div class="marker_tittle_text">'+location[5]+'</div>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                    ).addClass('show_marker');
                /*} else {
                    $('.map-marker').eq(i).append(
                            '<div class="map_marker" style="background-image: url('+location[3]+');">'
                                +' <div class="marker_text_wrap">'
                                    +' <div class="marker_text_wr">'
                                        +' <div class="marker_tittle">'+location[6]+'</div>'
                                        +' <div class="marker_tittle_2">'+location[0]+'</div>'
                                        +'<div class="marker_tittle_text">'+location[5]+'</div>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                     );
                    //).hide(); 
                }*/
            }
        });
        
        new CustomMarker(                           // кастомный маркер 
            "50.369652", 
            "30.462442",
            map,
            { class : 'marker_jk', type_marker : "131"}
        );
        google.maps.event.addListenerOnce(map,'idle',function(){
            $('.marker_jk').eq(0).append().show();
        });
        //companyMarker.setMap(map);
        //companyMarker.setCursor('default');
    }
    callMap();

    $('.map_filt_li').hover(function() {
        var n_infr = $(this).data('tp');
    
        $(this).removeClass('map_filt_li_check');
        $('.map-marker').each(function(){
            if($(this).data('tm')!==n_infr){
                //$(this).hide();
                $(this).removeClass('show_marker');
            }
        });
    }, function() {
        $(this).removeClass('map_filt_li_check');
        $(this).addClass('map_filt_li_check');
        var n_infr = $(this).data('tp');
        $('.map-marker').each(function(){
            if($(this).data('tm')!==n_infr){
                //$(this).show();
                $(this).addClass('show_marker');
            } 
        });
    });
}

// Docs slider
function docsSlider(id) {
    var container = $(id),
        sliderContainer = container.find('.docs-slider-container'),
        sliderList = container.find('.docs-slider-list'),
        sliderListItem = sliderList.children('li'),
        control = container.find('.docs-slider-control'),
        totalSlides = sliderListItem.length;

    // Helpers
    function buildSlider() {
        var slideWidth = getSlideWidth();
        sliderListItem.outerWidth(slideWidth);
        sliderList.outerWidth(slideWidth*totalSlides + 20);
    }

    function initSlider() {
        buildSlider();
        moveTo(0);
    }

    function getSlideWidth() {
        return sliderListItem.outerWidth();
    }

    function getCurrentSlideIndex() {
        return sliderListItem.filter('.active').index();
    }

    function moveTo(index) {
        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
        sliderListItem.removeClass('active').eq(index).addClass('active');
    }

    function moveNext() {
        if (getCurrentSlideIndex() + 1 === totalSlides) {
            moveTo(0);
        } else {
            moveTo(getCurrentSlideIndex() + 1);
        }
    }

    function movePrev() {
        if (getCurrentSlideIndex() - 1 < 0) {
            moveTo(totalSlides - 1);
        } else {
            moveTo(getCurrentSlideIndex() - 1);
        }
    }

    sliderList.on('swipeleft', function(event) {
        moveNext();
    });

    sliderList.on('swiperight', function(event) {
        movePrev();
    });

    // Events
    control.on('click', function() {
        if ($(this).hasClass('left')) {
            movePrev();
        } else {
            moveNext();
        }
    });

    // Init slider
    initSlider();
    $(window).on('resize', function() {
        initSlider();
    });
}

// Gallery modal
function galleryModal() {
    var modal = $('.gallery-modal'),
        galleryList = $('.gallery-modal-slider-list'),
        controlsListConatiner = $('.gallery-modal-slider-controls'),
        controlsList = controlsListConatiner.children('ul'),
        closeBtn = modal.find('.close-gallery-modal');

    // Functions
    function moveTo(index) {
        var galleryListItem = galleryList.children('li');
        var control = controlsList.children('li');
        var itemsCount = galleryListItem.length;

        if (index < 0) {
            centerControl(itemsCount - 1);
            galleryListItem.removeClass('active').eq(itemsCount - 1).addClass('active');
            control.removeClass('active').eq(itemsCount - 1).addClass('active');
            galleryList.css('transform', 'translateX(-'+(itemsCount - 1)*100+'vw)');
        }
        else if (index > itemsCount - 1) {
            centerControl(0);
            galleryListItem.removeClass('active').eq(0).addClass('active');
            control.removeClass('active').eq(0).addClass('active');
            galleryList.css('transform', 'translateX(0)');
        } else {
            centerControl(index);
            galleryListItem.removeClass('active').eq(index).addClass('active');
            control.removeClass('active').eq(index).addClass('active');
            galleryList.css('transform', 'translateX(-'+index*100+'vw)');
        }
    }

    function moveNext() {
        var control = controlsList.children('li');
        var currentIndex = control.filter('.active').index();
        moveTo(currentIndex + 1);
    }

    function movePrev() {
        var control = controlsList.children('li');
        var currentIndex = control.filter('.active').index();
        moveTo(currentIndex - 1);
    }

    function centerControl(index) {
        var galleryListItem = galleryList.children('li');
        var control = controlsList.children('li');
        var controlOffset = control.eq(index).offset().left,
            controlPosition = control.eq(index).position().left,
            windowWidth = controlsListConatiner.outerWidth(),
            controlWidth = control.outerWidth(),
            currentIndex = galleryListItem.filter('.active').index();

        if (controlOffset > windowWidth/2) {
            controlsList.css('transform', 'translateX(-'+(index*controlWidth - windowWidth/2 + controlWidth/2)+'px)');
        }
        else if (currentIndex > index && controlOffset < windowWidth/2 && controlPosition > windowWidth/2) {
            controlsList.css('transform', 'translateX(-'+(index*controlWidth - windowWidth/2 + controlWidth/2)+'px)');
        } else {
            controlsList.css('transform', 'translateX(0)');
        }
    }

    function openModal() {
        $('body').addClass('overflow-hidden');
        modal.addClass('visible');
    }

    function closeModal() {
        modal.removeClass('visible');
        $('body').removeClass('overflow-hidden');
    }



    // Events
    $('body').on('click', '.gallery-modal-slider-controls > ul > li', function() {
        moveTo($(this).index());
    });

    galleryList.on('swipeleft', function(event) {
        moveNext();
    });

    galleryList.on('swiperight', function(event) {
        movePrev();
    });

    $('.gallery-button').on('click', function(event) {
        event.preventDefault();

        var images = eval($(this).data('images'));

        galleryList.html('');
        controlsList.html('');
        images.map(function(el, index) {
            galleryList.append('<li><img src="'+el+'"></li>');
            controlsList.append('<li><img src="'+el+'"></li>');
        });

        var galleryListItem = galleryList.children('li');
        var control = controlsList.children('li');

        galleryListItem.eq(0).addClass('active');
        control.eq(0).addClass('active');
        galleryList.css('transform', 'translateX(0)');
        controlsList.css('transform', 'translateX(0)');

        openModal();
    });

    galleryList.on('click', function(event) {
        if (event.pageX > $(window).outerWidth()/2) {
            moveNext();
        } else {
            movePrev();
        }
    });
    galleryList.on('mousemove', function(event) {
        if (event.pageX > $(window).outerWidth()/2) {
            $(this).removeClass('left').addClass('right');
        } else {
            $(this).removeClass('right').addClass('left');
        }
    });

    closeBtn.on('click', function(event) {
        event.preventDefault();
        closeModal();
    });
}

// CCTV modal
function cctvModal() {
    var modal = $('#cctv_modal'),
        openBtn = $('#cctv-btn, .mobile-header-btn-cctv'),
        closeBtn = $('#close_cctv_modal');

    // Helpers
    function opendModal() {
        modal.addClass('active');
        playStream();
    }
    
    function closeModal() {
        modal.removeClass('active');
        stopStream();
    }

    function playStream() {
        // TO DO
    }
    
    function stopStream() {
        // TO DO
    }

    // Events
    openBtn.on('click', function() {
        opendModal();
    });

    closeBtn.on('click', function() {
        closeModal();
    });
}

// Appartment slider
function appSlider(id) {
    var container = $(id),
        sliderContainer = container,
        sliderList = container.find('.single-app-slider-list'),
        sliderListItem = sliderList.children('li'),
        control = container.find('.single-app-slider-control'),
        totalSlides = sliderListItem.length;

    // Helpers
    function buildSlider() {
        var slideWidth = getSlideWidth();
        sliderListItem.outerWidth(slideWidth);
        sliderList.outerWidth(slideWidth*totalSlides + 20);
    }

    function initSlider() {
        buildSlider();
        moveTo(0);
    }

    function getSlideWidth() {
        return sliderContainer.outerWidth();
    }

    function getCurrentSlideIndex() {
        return sliderListItem.filter('.active').index();
    }

    function moveTo(index) {
        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
        sliderListItem.removeClass('active').eq(index).addClass('active');
    }

    function moveNext() {
        if (getCurrentSlideIndex() + 1 === totalSlides) {
            moveTo(0);
        } else {
            moveTo(getCurrentSlideIndex() + 1);
        }
    }

    function movePrev() {
        if (getCurrentSlideIndex() - 1 < 0) {
            moveTo(totalSlides - 1);
        } else {
            moveTo(getCurrentSlideIndex() - 1);
        }
    }

    // Events
    control.on('click', function() {
        if ($(this).hasClass('left')) {
            movePrev();
        } else {
            moveNext();
        }
    });

    sliderList.on('swipeleft', function(event) {
        moveNext();
    });

    sliderList.on('swiperight', function(event) {
        movePrev();
    });

    // Init slider
    initSlider();
    $(window).on('resize', function() {
        initSlider();
    });
}

// Apps slider
function appsSlider(id) {
    var container = $(id),
        sliderContainer = container.find('.apps-slider-container-inner'),
        sliderList = container.find('.apps-slider-list'),
        sliderListItem = sliderList.children('li'),
        control = container.find('.apps-slider-control'),
        totalSlides = sliderListItem.length;

    // Helpers
    function buildSlider() {
        var slideWidth = getSlideWidth();
        sliderListItem.outerWidth(slideWidth);
        sliderList.outerWidth(slideWidth*totalSlides + 20);
    }

    function initSlider() {
        buildSlider();
        moveTo(0);
    }

    function getSlideWidth() {
        return sliderListItem.outerWidth();
    }

    function getCurrentSlideIndex() {
        return sliderListItem.filter('.active').index();
    }

    function moveTo(index) {
        sliderList.css('transform', 'translateX(-'+getSlideWidth()*index+'px)');
        sliderListItem.removeClass('active').eq(index).addClass('active');
    }

    function moveNext() {
        if (getCurrentSlideIndex() + 1 === totalSlides) {
            moveTo(0);
        } else {
            moveTo(getCurrentSlideIndex() + 1);
        }
    }

    function movePrev() {
        if (getCurrentSlideIndex() - 1 < 0) {
            moveTo(totalSlides - 1);
        } else {
            moveTo(getCurrentSlideIndex() - 1);
        }
    }

    // Events
    control.on('click', function() {
        if ($(this).hasClass('left')) {
            movePrev();
        } else {
            moveNext();
        }
    });

    sliderList.on('swipeleft', function(event) {
        moveNext();
    });

    sliderList.on('swiperight', function(event) {
        movePrev();
    });

    // Init slider
    initSlider();
    $(window).on('resize', function() {
        initSlider();
    });
}

// Feedback modal
function feedbackModal() {
    $('.cta-feedback').click(function(event) {
        event.preventDefault();
        $('.feedback-modal').addClass('active');
        $('body').addClass('overflow-hidden');
    });
    $('.feedback-modal .close-modal-btn').click(function(event) {
        $('.feedback-modal').removeClass('active');
        $('body').removeClass('overflow-hidden');
        setTimeout(function() {
            $('.form-feedback-wrapper').css('display', 'block');
            $('.form-feedback-success-container').css('display', 'none');
        }, 1000);
    });
    function sendContactsForm(){
        var inputs = $('.forms-input');
        var nameInput = $('#client-name');
        var phoneInput = $('#client-phone');
        var form = $('#form-feedback');
        var formWrapper = $('.form-feedback-wrapper');
        var submitBtn = $('#order-button');
        var succesMessage = $('.form-feedback-success-container');

        function validateName($name) {
            var nameReg = /^[a-zA-Zа-яА-Я ]{2,3000}$/;
            return nameReg.test( $name );
        }

        function validatePhone($phone) {
            var phoneReg = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
            return phoneReg.test( $phone );
        }     

        // Form AJAX
        form.on('submit', function(event) {
          
            event.preventDefault();
            if (!validateName(nameInput.val() )) {
              nameInput.addClass('invalid');
              setTimeout(function(){
                nameInput.removeClass('invalid');
              }, 3000 );
            }

            if (!validatePhone(phoneInput.val() )) {
              phoneInput.addClass('invalid');
              setTimeout(function(){
                phoneInput.removeClass('invalid');
              }, 3000 );
            }                                                       
                       
            if (validateName(nameInput.val()) && validatePhone(phoneInput.val()) ) {
              // Serialize the form data.
              var formData = $(this).serialize();

              // Submit the form using AJAX.
              $.ajax({
                  type: 'POST',
                  url: $(this).attr('action'),
                  data: formData,
              })
            .done(function(response) {
                form[0].reset();
                nameInput.removeClass('invalid');
                // open success massamge
                formWrapper.css('display', 'none');
                succesMessage.css('display', 'block');
              })
              .fail(function(data) {
                  submitBtn.html('Failed');
              });
            } 
            else {
              if ( validateName(nameInput.val()) == false ){
                nameInput.addClass('invalid');
              }
              if ( validatePhone(phoneInput.val()) == false ){
                phoneInput.addClass('invalid');
              }                          
            }
        });
    };

    sendContactsForm();
}












// On document ready
$(function() {
    // Init
    headerMenu();
    mobileHeaderMenu();
    cctvModal();
    galleryModal();
    feedbackModal();
    setTimeout(function(){
        if ($(window).width() > 767) {
            initFooterMap(
                {lat: 50.455969, lng: 30.496393},
                {lat: 50.455969, lng: 30.496393}
            );
        } else {
            initFooterMap(
                {lat: 50.455969, lng: 30.496393},
                {lat: 50.455969, lng: 30.496393}
            );
        }
    }, 2000);


    // Animations on scroll

    var $animation_elements = $('.animation-element, .animation-element-default');
    var $window = $(window);

    function check_if_in_view() {

      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {

        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position - 100 <= window_bottom_position)) {
                $element.addClass('in-view');
        } else {
          // $element.removeClass('in-view');
        }
      });
    }

    if ( $(window).width() > 767 ){
        check_if_in_view();

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    }

    // Rellax parallax
    if ($(window).width() > 767 && $('.rellax').length > 0) {
        var rellax = new Rellax('.rellax');
    }
});