    <footer class="main-footer">
        <div class="main-footer-left">
            <div class="footer-map-container" id="footer_map"></div>
        </div>
        <div class="main-footer-right">
            <h6 class="section-info-heading">Свяжитесь <br><b>с нами</b></h6>
            <ul class="footer-contacts-list">
                <li>
                    <span class="footer-contacts-list-item-key">Офис продаж</span>
                    <span class="footer-contacts-list-item-value">Г. КИЕВ, УЛ. СЕЧЕВЫХ СТРЕЛЬЦОВ, 41</span>
                </li>
                <li>
                    <span class="footer-contacts-list-item-key">Телефон</span>
                    <a href="tel:+380445002323" class="footer-contacts-list-item-value">(044) 500 23 23</a>
                </li>
                <li>
                    <span class="footer-contacts-list-item-key">E-Mail</span>
                    <a href="mailto:newavtograf@gmail.com" class="footer-contacts-list-item-value">a136@gmail.com</a>
                </li>
            </ul>
        </div>
        <div class="main-footer-bottom">
            <div class="main-footer-bottom-content">
                <a href="#call" class="white-big-btn cta-feedback">
                    <span>Записаться на просмотр</span>
                    <img src="img/ui/plus_flat.svg" alt="Plus icon">
                </a>
            </div>
        </div>
    </footer>
    <!-- Gallery modal -->
    <?php require('templates/common/gallery.php'); ?>
    <!-- Web Camera Modal -->
    <div class="cctv-modal" id="cctv_modal">
        <div class="close-modal-btn" id="close_cctv_modal">
            <img src="img/ui/close_big_black.svg" alt="Close icon">
        </div>
    </div>
    <!-- Feedback Modal -->
    <div class="feedback-modal" id="feedback_modal">
        <div class="feedback-modal-content">
            <div class="form-feedback-wrapper">
                <h3 class="form-feedback-title">Організувати перегляд</h3>
                <form action="mails/form-feedback.php" class="form-feedback" id="form-feedback" method="post">
                    <div class="form-feedback-col-wrapper">
                        <div class="form-feedback-left-col">
                            <div class="input-wrapper">
                                <input class="forms-input" type="text" id="client-name" name="client-name" placeholder="Ім'я" title="Формат: буквы только русского и латинского алфавита (не меньше 2х букв)" autocomplete="off">
                            </div>    
                            <div class="input-wrapper">
                                <input class="forms-input" type="tel" id="client-phone" name="client-phone" placeholder="Ваш номер телефону" autocomplete="off">                           
                            </div>
                        </div>
                        <div class="form-feedback-right-col">
                            <textarea class="client-mssg" id="client-mssg" name="client-mssg" placeholder="Текст вашого повідомлення"></textarea>
                        </div>                    
                    </div>
                    <span class="phone-number-example">Приклад: 095 123 45 67</span>
                    <input type="text" name="required" class="req-input">
                    <button class="button form-feedback-order-button" id="order-button" type="submit">
                        <span>Надіслати</span>
                    </button>
                </form>
                <p class="form-feedback-info-text">Відправляючи повідомлення, ви даєте згоду на обробку своїх даних</p>           
            </div>
            <div class="form-feedback-success-container">
                <h3 class="section-info-heading">Дякуємо!<br> Ваш запит надісланий</h3>
                <p class="section-info-description">Наші консультанти зв'яжуться з вами найближчим часом</p>
            </div>
        </div>
        <div class="close-modal-btn" id="close_map_modal">
            <img src="img/ui/close_big_black.svg" alt="Close icon">
        </div>
    </div>
    <script src="js/libs/jquery-3.3.1.min.js"></script>
    <script src="js/libs/jquery-migrate-3.0.0.min.js"></script>
    <script src="js/libs/jquery.mobile.custom.min.js"></script>
    <script src="js/libs/rellax.min.js"></script>
    <script src="js/libs/selectize.js"></script>
    <script src="js/libs/rSlider.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKqbrvha4p20QERUocxfrpfESrUarPZuQ"></script>
    <script src="js/main.js?ver=1.02"></script>
    <!-- Specific scripts -->
    <?php
        if ( $currentpage == '/' || $currentpage == '/projects/a136.front/' || strpos( $currentpage, 'index.php' ) == true ) { ?>
            <script>
                $(function() {
                   introSlider('#fp_intro_slider');
                   simpleImgSlider('#info_intro_slider');
                   progressSlider('#slider_progress');
                   newsSlider('#news_slider');
                });
            </script>
        <?php }
        else if ( strpos( $currentpage, 'page_about_complex.php' ) == true ) { ?>
            <script src="js/libs/custom-google-marker.js"></script>
            <script>
                $(function() {
                   introSlider('#fp_intro_slider');
                   infrastructureMap();
                   docsSlider('#docs_slider');
                });
            </script>
        <?php }
        else if ( strpos( $currentpage, 'page_progress.php' ) == true ) { ?>
            <script>
                $(function() {
                   progressSlider('#slider_progress');
                });
            </script>
        <?php }
        else if ( strpos( $currentpage, 'page_contacts.php' ) == true ) { ?>
            <script>
                $(function() {
                    initMap(
                        {lat: 50.419759, lng: 30.518221},
                        {lat: 50.419759, lng: 30.518221},
                        'contact_map_1'
                    );
                    initMap(
                        {lat: 50.419759, lng: 30.518221},
                        {lat: 50.419759, lng: 30.518221},
                        'contact_map_2'
                    );
                });
            </script>
        <?php }
        else if ( strpos( $currentpage, 'single_news_article.php' ) == true ) { ?>
            <script>
                $(function() {
                   newsSlider('#news_slider');
                });
            </script>
        <?php }
        if ( strpos( $currentpage, 'page_filter.php' ) == true ) { ?>
            <script>
                $(function() {
                    // Custom ranges
                    var floorRange = new rSlider({
                        target: '#slider_floor',
                        values: { min: 1, max: 20 },
                        step: 1,
                        range: true,
                        tooltip: true,
                        scale: false,
                        labels: false,
                        set: [1, 20]
                    });
                    var sectionRange = new rSlider({
                        target: '#slider_section',
                        values: { min: 1, max: 7 },
                        step: 1,
                        range: true,
                        tooltip: true,
                        scale: false,
                        labels: false,
                        set: [2, 6]
                    });
                    var spaceRange = new rSlider({
                        target: '#slider_space',
                        values: { min: 36, max: 250 },
                        step: 1,
                        range: true,
                        tooltip: true,
                        scale: false,
                        labels: false,
                        set: [36, 250]
                    });
                    var roomsRange = new rSlider({
                        target: '#slider_rooms',
                        values: { min: 1, max: 7 },
                        step: 1,
                        range: true,
                        tooltip: true,
                        scale: false,
                        labels: false,
                        set: [1, 7]
                    });


                    // Custom select
                    $('#sort_select').selectize({
                        create: true,
                        sortField: 'text'
                    });

                    // Mobile filter
                    $('.mobile-filter-button').on('click', function(event) {
                        event.preventDefault();
                        
                        $('.filter-page-container-left').addClass('active');
                        $('body').addClass('overflow-hidden');
                    });

                    $('#mobile-filter-close-btn').on('click', function() {
                        $('.filter-page-container-left').removeClass('active');
                        $('body').removeClass('overflow-hidden');
                    });
                });
            </script>
        <?php }
        if ( strpos( $currentpage, 'single_appartment.php' ) == true ) { ?>
            <script>
                $(function() {
                    appSlider('#app_slider');
                    appsSlider('#apps_slider');
                });
            </script>
        <?php }
    ?>
</body>
</html>