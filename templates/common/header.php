<?php $currentpage = $_SERVER['REQUEST_URI']; ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>A136</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="fonts/fonts.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/rSlider.min.css">
    <link rel="stylesheet" href="css/selectize.css">
    <link rel="stylesheet" href="css/main.css?ver=1.02">
    <link rel="stylesheet" href="css/mediaq.css?ver=1.02">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
</head>
<body>
    <header class="main-header">
        <div class="main-header-top-left">
            <div class="burger-container" id="menu_btn">
                <div class="burger">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="header-logo">
                <a href="index.php">
                    <img src="img/ui/main_logo_dark.svg" alt="A136 logotype">
                </a>
            </div>
        </div>
        <div class="main-header-bottom-left">
            <ul class="header-sidebar-socials-list">
                <li>
                    <a href="https://www.facebook.com/metropolis.ecosphere/" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCYLFxg05jp5eotLHnhyeqgQ/featured" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>
                </li>
            </ul>
            <ul class="header-sidebar-lang-list">
                <li>
                    <a href="#">EN</a>
                </li>
                <li>
                    <a href="#">RU</a>
                </li>
                <li class="active">
                    <a href="#">UA</a>
                </li>
            </ul>
        </div>
        <div class="header-btns">
            <div class="cta-callback-btn" id="cta-callback-btn">
                <img src="img/ui/call_dark.svg" alt="Phone icon">
                <div class="pulse"></div>
            </div>
            <div class="camera-btn" id="cctv-btn">
                <img src="img/ui/CCTV_dark.svg" alt="CCTV icon">
            </div>
        </div>
        <div class="header-menu-container" id="header_menu_container">
            <div class="header-menu-content">
                <div class="header-menu-content-meta">
                    <div class="header-menu-content-meta-address">
                        <span>г. Киев, вул. Антоновича, 136</span>
                    </div>
                </div>
                <div class="header-menu-content-scrollable">
                    <div class="header-menu-content-inner">
                        <nav class="header-menu-content-main-nav">
                            <a href="page_about_complex.php">О комплексе</a> <span>/</span> <a href="page_filter.php">Планировки</a>
                            <br>
                            <!-- <a href="page_progress.php">Ход строительства</a> <span>/</span> --> <a href="single_article.php">White Box</a> <span>/</span> <a href="#gallery" data-images="['img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg']" class="gallery-button">Галерея</a>
                            <br>
                            <!-- <a href="single_article.php">Квартиры с ремонтом</a> -->
                        </nav>
                        <nav class="header-menu-content-additional-nav">
                            <ul class="header-menu-content-additional-nav-list">
                                <li>
                                    <a href="category_news.php">Новости</a>
                                </li>
                                <li>
                                    <a href="page_about_developer.php">Застройщик</a>
                                </li>
                                <li>
                                    <a href="page_docs.php">Документация</a>
                                </li>
                                <li>
                                    <a href="page_contacts.php">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <a class="menu-cta-choose" href="page_filter.php">
                <span>Подобрать квартиру</span>
                <img src="img/ui/plus_flat.svg" alt="Plus icon">
            </a>
            <div class="menu-cta-call-message">
                <a href="tel:+380445003636">044 500 36 36</a>
            </div>
        </div>
        <div class="mobile-header">
            <div class="mobile-burger-container" id="menu_btn_mobile">
                <div class="mobile-burger">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <a href="index.php" class="mobile-header-logo">
                <img src="img/ui/main_logo_dark.svg" alt="A136 logotype">
            </a>
            <div class="mobile-header-btns">
                <div class="mobile-header-btn mobile-header-btn-cctv">
                    <img src="img/ui/CCTV_dark.svg" alt="CCTV icon">
                </div>
                <div class="mobile-header-btn mobile-header-btn-phone">
                    <img src="img/ui/call_dark.svg" alt="Phone icon">
                </div>
            </div>
        </div>
        <div class="mobile-header-content" id="mobile_header_content">
            <div class="mobile-header-content-inner">
                <a href="tel:+380445003636" class="mobile-header-content-phone">044 500 36 36</a>
                <span class="mobile-header-content-address">г. Киев, вул. Антоновича, 136</span>
                <nav class="mobile-header-nav">
                    <ul class="mobile-header-nav-list-top">
                        <li>
                            <a href="page_about_complex.php">О комплексе</a>
                        </li>
                        <li>
                            <a href="page_filter.php">Планировки</a>
                        </li>
<!--                         <li>
                            <a href="page_progress.php">Ход <br>строительства</a>
                        </li> -->
                        <li>
                            <a href="single_article">White box</a>
                        </li>
                        <li>
                            <a href="#" data-images="['img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg','img/gallery/1.jpg']" class="gallery-button">Галерея</a>
                        </li>
                        <li>
                            <a href="page_filter.php">Квартиры</a>
                        </li>
<!--                         <li>
                            <a href="single_article.php">Квартиры <br>с ремонтом</a>
                        </li> -->
                    </ul>
                    <ul class="mobile-header-nav-list-bottom">
                        <li>
                            <a href="category_news.php">Новости</a>
                        </li>
                        <li>
                            <a href="page_about_developer.php">Застройщик</a>
                        </li>
                        <li>
                            <a href="page_docs.php">Документация</a>
                        </li>
                        <li>
                            <a href="page_contacts.php">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <div class="mobile-header-choose-btn-container">
                    <a href="page_filter.php" class="white-big-btn mobile-header-choose-btn">
                        <span>Подобрать <br>квартиру</span>
                        <img src="img/ui/plus_flat.svg" alt="Plus icon">
                    </a>
                </div>
            </div>
            <div class="mobile-header-bottom-right">
                <ul class="header-sidebar-socials-list">
                    <li>
                        <a href="https://www.facebook.com/metropolis.ecosphere/" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCYLFxg05jp5eotLHnhyeqgQ/featured" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>
                <ul class="header-sidebar-lang-list">
                    <li>
                        <a href="#">EN</a>
                    </li>
                    <li>
                        <a href="#">RU</a>
                    </li>
                    <li class="active">
                        <a href="#">UA</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>