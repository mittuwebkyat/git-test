barba.init({
    views: [{
            namespace: 'home',
            beforeEnter(data) {
                basic();

                $('.banner-slide').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: false,
                    autoplay: 100,
                    responsive: {
                        0: {
                            items: 1
                        }
                    }
                })
                $('.testi-carousel').owlCarousel({
                    margin: -30,
                    autoplay: false,
                    center: false,
                    loop: true,
                    nav: false,
                    dots: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        600: {
                            items: 3,
                            margin: -20
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
            
                $('.testi-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
                    if (!e.namespace) {
                        return;
                    }
                    var carousel = e.relatedTarget;
                    var current = carousel.current();
                    $('.testi-carousel .owl-item').removeClass('big');
                    $('.testi-carousel .owl-item').eq(current + 1).addClass('big');
                });
            
                $('.testi-carousel').on('click', '.owl-item', function () {
                    var carousel = $('.testi-carousel').data('owl.carousel');
                    var position = $(this).find('.owl-item').data('position');
                    carousel.to(position, 300);
                });
            
                $('.testi-carousel .card').each(function (index) {
                    $(this).attr('data-position', index);
                });
            
                $('.testi-carousel').on('initialized.owl.carousel', function () {
                    $('.testi-carousel .owl-item').eq(1).addClass('big');
                });
                $('.projects-carousel').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: false,
                    margin: 15,
                    autoplay: 100,
                    responsive: {
                        0: {
                            items: 1,
                            stagePadding:25
                        },
                        650: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    }
                })
            }
        }, {
            namespace: 'about',
            beforeEnter(data) {
                basic();

            }
        },
        {
            namespace: 'interior',
            beforeEnter(data) {
                basic();

            }
        },
        {
            namespace: 'projects',
            beforeEnter(data) {
                basic();
                $('.tab-carousel').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: false,
                    margin: 15,
                    responsive: {
                        0: {
                            items: 1,
                            stagePadding:80
                        },
                        650: {
                            items: 3
                        },
                        1000: {
                            items: 5
                        }
                    }
                })
            }
        },
        {
            namespace: 'projects-inner',
            beforeEnter(data) {
                basic();

            }
        },
        {
            namespace: 'contact',
            beforeEnter(data) {
                basic();

            }
        }
    ]
})

function basic() {
    // set scroll position 0 
    $(window).scrollTop(0);
    // header
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 200) {

            $('.header').addClass('active-header')
        } else {
            $('.header').removeClass('active-header')
        }
    })

    // header dropdown trigger
    $('.drop-trigger').click(function (e) {
        e.preventDefault();
        // hide all dropdown
        // $('.drop-down').removeClass('drop-down-active');
        if ($(this).parent().find('.drop-down').hasClass('drop-down-active')) {
            $(this).parent().find('.drop-down').removeClass('drop-down-active');
        } else {
            $('.drop-down').removeClass('drop-down-active');
            $(this).parent().find('.drop-down').addClass('drop-down-active');
        }
    })

    // sidemenu
    $('.hamburger').click(function () {
        $('.sidemenu').addClass('sidemenu-active');
        $('.shimmer').show();
    })
    $('.sidemenu .close').click(function () {
        $('.sidemenu').removeClass('sidemenu-active');
        $('.shimmer').hide();
    })

    // sidemenu dropdown trigger
    $('.sidemenu .drop-trigger').click(function (e) {
        e.preventDefault();
        if ($(this).parent().find('.drop-down').hasClass('active-drop')) {
            $(this).parent().find('.drop-down').removeClass('active-drop');
        } else {
            $('.drop-down').removeClass('active-drop');
            $(this).parent().find('.drop-down').addClass('active-drop');
        }
    })

    // sticky-contact-button
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200 && $(window).scrollTop() < $(document).height() - 1000) {
            $('.contact-button-sticky-desktop button').css({
                display: 'block'
            })
        } else {
            $('.contact-button-sticky-desktop button').css({
                display: 'none'
            })
        }
    })
    $('.show-contact').click(function () {
        $('.contact-button-sticky-desktop').addClass('contact-button-sticky-desktop-active');
        $('.shimmer').show();
    })
    $('.contact-button-sticky-desktop .close ion-icon').click(function () {

        $('.contact-button-sticky-desktop').removeClass('contact-button-sticky-desktop-active');
        $('.shimmer').hide();
    });
    $('.contact-button-sticky-desktop .button a').click(function (e) {
        // e.preventDefault();
        const url = $(this).attr('href');
        //   alert(url)
        gtag_report_conversion(url);
    });
    $('html, body').scrollTop(0)
    let i = 0;

    // active form field
    $('form input, textarea').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active-box')) {
            $(this).removeClass('active-box');
        } else {
            $('input, textarea').removeClass('active-box');
            $(this).addClass('active-box');
        }
    })

    // for tab
    const tab = $('.tab-holder .tab');
    const tabBody = $('.project-cards');
    tab.click(function () {
        const tabSwitch = $(this).attr('data-switch');
        tab.removeClass('active-tab');
        tabBody.removeClass('active-body');
        $(this).addClass('active-tab');

        tabBody.each(function () {
            const id = $(this).attr('data-id');
            if (tabSwitch == id) {
                $(this).addClass('active-body');
            }
        })

    })


}