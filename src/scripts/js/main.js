$(document).ready(function() {
    new WOW().init();
    // $('header').scrollToFixed({
    // zIndex: 100,
    // });
    // if ($(window).width() > 1199) {
    //     $('.topbar').scrollToFixed({
    //         marginTop: 100,
    //         zIndex: 50
    //     });
    // }
    // if ($(window).width() < 1200) {
    //     $('.topbar').scrollToFixed({
    //         marginTop: 60,
    //         zIndex: 50
    //     });
    // }
    // $('.parallax-window').parallax({
    //     speed: 0.5
    // });
    $('[data-toggle="tooltip"]').tooltip()
    $('.btn-comment').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 150
        }, 700);
        // $('.nav-tabs li').removeClass('active');
        // $(this).parent('li').addClass('active');
        return false;
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 600) {
            $('header').addClass('show');
        } else {
            $('header').removeClass('show');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 400) {
            $('.product-fly-button').addClass('open');
        } else {
            $('.product-fly-button').removeClass('open');
        }
    });
    $('.up').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });
    // if ($(window).width() < 768) {
    //     $('.btn-showtop').click(function() {
    //         $(this).siblings('ul').slideToggle(300);
    //     });
    // }
    $(".counter").countimator({
        duration: 1000,
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());
    // $('.searchtoggle').click(function() {
    //     $('.search').slideToggle(300);
    // });
    // $('.btn-closesearch').click(function() {
    //     $('.search').slideToggle(300);
    // });

    // MENU
    // if ($(window).width() < 1200) {
    //     $('.menu').insertBefore('.fullpage');
    // }
    $('.btn-showmenu').click(function() {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
        $('.search').removeClass('open');
        $('html').css('overflow', 'hidden');
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        $('html').css('overflow', 'auto');
    });
    $('.btn-showsub').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(500);
    });

    // END-MENU

    $('.btn-apply').click(function() {
        $('.apply-form').slideToggle(300);
    });
    $('#map').click(function() {
            $(this).find('iframe').addClass('active')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('active')
        });

    // FAQ SCRIPT
    $('.faqlist .faq').click(function() {
        $('.faqlist .faq .faqtitle').removeClass('active');
        $('.faqlist .faq .faqcontent').slideUp(300);
        $(this).children('.faqtitle').addClass('active');
        $(this).children('.faqcontent').slideDown(300);
    });

    // SLIDE 
    $('.project-slide, .picture-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 1000,
        // infinite: false,
        // fade: true,
    });

    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.hotnews').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.partner-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 500,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.ppartlist').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 500,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.canho-album').owlCarousel({
        items: 5,
        dots: false,
        nav: true,
    });
    $('.canho-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.canho-nav'
    });
    $('.canho-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.canho-slide',
        dots: false,
        arrows: true,
        focusOnSelect: true
    });


    $('#map').click(function() {
            $(this).find('iframe').addClass('active')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('active')
        });

    // IMAGE MAPS

    $('.imageMap').mapster({
        fillOpacity: 0.0,
        fillColor: "ffea00",
        stroke: true,
        strokeColor: "ffea00",
        strokeOpacity: 1,
        strokeWidth: 3,
        singleSelect: true
    });
});


function resize(maxWidth, maxHeight) {
    var image = $('#mapShapes2'),
        imgWidth = image.width(),
        imgHeight = image.height(),
        newWidth = 0,
        newHeight = 0;
    if (imgWidth / maxWidth > imgHeight / maxHeight) {
        newWidth = maxWidth;
    } else {
        newHeight = maxHeight;
    }
    image.mapster('resize', newWidth, newHeight, resizeTime);
}

;

function onWindowResize() {
    var curWidth = $(window).width(),
        curHeight = $(window).height(),
        checking = false;
    if (checking) {
        return;
    }
    checking = true;
    window.setTimeout(function() {
        var newWidth = $(window).width(),
            newHeight = $(window).height();
        if (newWidth === curWidth && newHeight === curHeight) {
            resize(newWidth, newHeight);
        }
        checking = false;
    }, resizeDelay);
}

$(window).bind('resize', onWindowResize);

;
$(window).resize(function() {});

;


// REVOLUTION SLIDER
var tpj = jQuery;

var banner001;
tpj(document).ready(function() {
    if (tpj("#banner001").revolution == undefined) {
        revslider_showDoubleJqueryError("#banner001");
    } else {
        banner001 = tpj("#banner001").show().revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'uranus',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 300,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: false,
                    style: 'hermes',
                    tmp: '',
                    direction: 'horizontal',
                    rtl: false,

                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 30,
                    space: 10,

                    hide_onleave: false,
                    hide_onmobile: false,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200

                }
            },
            responsiveLevels: [1024, 991, 767, 543],
            visibilityLevels: [1024, 991, 767, 543],
            gridwidth: [1600, 1600, 1600, 1600],
            gridheight: [680, 680, 680, 680],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 50,
                levels: [5000]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
});