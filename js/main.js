/**
 * ジュンテンドーコーポレートサイト
 * メインスクリプト (jQuery)
 */

$(document).ready(function() {

    const hamburgerSvg = '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">\
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>\
                      </svg>';
    const closeSvg = '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">\
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6l-12 12"/>\
                    </svg>';

    // 初期状態のアクセシビリティ属性
    $('#mobile-menu-btn').attr({ 'aria-expanded': 'false', 'aria-controls': 'mobile-menu' });

    $('#mobile-menu-btn').on('click', function() {
        const $btn = $(this);
        const isActive = !$btn.hasClass('active');
        $btn.toggleClass('active', isActive);
        $('#mobile-menu').toggleClass('active', isActive);
        $btn.attr('aria-expanded', isActive ? 'true' : 'false');
        $btn.html(isActive ? closeSvg : hamburgerSvg);
        $('body').toggleClass('no-scroll', isActive);
    });

    $('#mobile-menu a').on('click', function() {
        $('#mobile-menu-btn').removeClass('active')
            .attr('aria-expanded', 'false')
            .html(hamburgerSvg);
        $('#mobile-menu').removeClass('active');
        $('body').removeClass('no-scroll');
    });



    const upperSwiper = new Swiper('.upper-swiper', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        centeredSlides: false,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 1.17, spaceBetween: 24 },
            1024: { slidesPerView: 1.17, spaceBetween: 24 },
            1920: { slidesPerView: 1.17, spaceBetween: 24 }
        }
    });

    const lowerSwiper = new Swiper('.lower-swiper', {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 }
        }
    });


    let currentFilter = '全て';

    $('.news-filter-btn').on('click', function() {
        $('.news-filter-btn').removeClass('active');
        $(this).addClass('active');

        currentFilter = $(this).text();
        filterNews();
    });

    function filterNews() {
        $('.news-item').each(function() {
            const category = $(this).find('.news-category').text();

            if (currentFilter === '全て' || category === currentFilter) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }


    let selectedPrefecture = '京都府';

    // 都道府県ボタン順に応じて画像切替（img-shopinfo01〜10）
    (function initShopInfoImageByButtons() {
        const $img = $('#prefecture-map');
        if ($img.length === 0) return;
        const $btns = $('.prefecture-btn');
        $btns.each(function(i) {
            const idx = Math.min(i + 1, 10);
            $(this).attr('data-image-index', String(idx).padStart(2, '0'));
        });
        const $active = $btns.filter('.active').first().length ? $btns.filter('.active').first() : $btns.first();
        const initialIdx = $active.attr('data-image-index') || '01';
        $img.attr('src', `img/index/img-shopinfo${initialIdx}.webp`);
    })();

    $('.prefecture-btn').on('click', function() {
        selectedPrefecture = $(this).data('prefecture');

        $('.prefecture-btn').removeClass('active');
        $(this).addClass('active');

        // ボタンの並びに応じた画像へ切替
        const idx = ($(this).attr('data-image-index') || '01').padStart(2, '0');
        $('#prefecture-map').attr('src', `img/index/img-shopinfo${idx}.webp`);

        updateStoreList();
    });

    function updateStoreList() {
        const stores = storeData[selectedPrefecture];
        const storeCount = stores ? stores.length : 0;

        $('#store-list-title').text(`${selectedPrefecture}（${storeCount}店舗）`);

        let html = '';
        if (stores) {
            stores.forEach((store, index) => {
                const borderClass = index < stores.length - 1 ? 'border-bottom' : '';
                html += `
          <div class="store-item ${borderClass}">
            <h4 class="store-name">${store.name}</h4>
            <p class="store-info">${store.postal}　${store.address}</p>
            <p class="store-info">TEL：${store.tel}</p>
          </div>
        `;
            });
        }

        $('#store-list').html(html);
    }

    updateStoreList();


    $('a[href^="#"]').on('click', function(e) {
        const href = $(this).attr('href');

        if (href !== '#' && $(href).length) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $(href).offset().top - 80
            }, 600);
        }
    });


    $('#scroll-to-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

});