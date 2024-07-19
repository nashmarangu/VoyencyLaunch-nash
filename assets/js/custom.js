//main navigation

jQuery(document).ready(function ($) {
  // setInterval(() => {
  //   ScrollTrigger.refresh()
  // }, 650)
  window.addEventListener("scroll", function () {
    ScrollTrigger.refresh();
  });

  $(window).on("resize", function () {
    ScrollTrigger.refresh();
  });
  let portrait = window.matchMedia("(orientation: landscape)");

  portrait.addEventListener("change", function () {
    ScrollTrigger.refresh();
  });
  setTimeout(() => {
    // keep at bottom
    ScrollTrigger.create({
      trigger: ".map-show-mobile",
      start: "top bottom-=85",
      endTrigger: "footer",
      end: "top bottom-=30",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers: true,
      invalidateOnRefresh: true,
    });

    // keep at top
    // ScrollTrigger.create({
    //   trigger: '.map-show-mobile',
    //   start: 'top top+=85',
    //   endTrigger: 'html',
    //   end: 'bottom bottom',
    //   pin: true,
    //   pinSpacing: false,
    //   scrub: 1,
    //   // markers: true,
    //   invalidateOnRefresh: true,
    // })
  }, 300);

  ScrollTrigger.matchMedia({
    // medium
    "(min-width: 480px) and (max-width: 767px)": function () {
      // The ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore.
      // setTimeout(() => {
      // keep at bottom
      ScrollTrigger.create({
        trigger: ".wrp-tb-tw-scnd-upc-trp",
        start: "top top+=76.11",
        endTrigger: ".scnd-upcnm-tab-trip-sta-scrollEnd",
        // end:
        //   '+=' +
        //   document.querySelector('.upcoming-trip-main-inner-sec').clientHeight,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        // markers: true,
        invalidateOnRefresh: true,
        onEnter: function () {
          $(".wrp-tb-tw-scnd-upc-trp").addClass("addBackground");
        },
        onEnterBack: function () {
          $(".wrp-tb-tw-scnd-upc-trp").addClass("addBackground");
        },
        onLeave: function () {
          $(".wrp-tb-tw-scnd-upc-trp").removeClass("addBackground");
        },
        onLeaveBack: function () {
          $(".wrp-tb-tw-scnd-upc-trp").removeClass("addBackground");
        },
      });
      // })
      // }, 600)
    },

    // small
    "(max-width: 479px)": function () {
      // The ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore.
      // setTimeout(() => {
      // keep at bottom
      ScrollTrigger.create({
        trigger: ".wrp-tb-tw-scnd-upc-trp",
        start: "top top+=72",
        endTrigger: ".scnd-upcnm-tab-trip-sta-scrollEnd",
        // end:
        //   '+=' +
        //   document.querySelector('.upcoming-trip-main-inner-sec').clientHeight,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        // markers: true,
        invalidateOnRefresh: true,
        onEnter: function () {
          $(".wrp-tb-tw-scnd-upc-trp").addClass("addBackground");
        },
        onEnterBack: function () {
          $(".wrp-tb-tw-scnd-upc-trp").addClass("addBackground");
        },
        onLeave: function () {
          $(".wrp-tb-tw-scnd-upc-trp").removeClass("addBackground");
        },
        onLeaveBack: function () {
          $(".wrp-tb-tw-scnd-upc-trp").removeClass("addBackground");
        },
      });
      // })
      // }, 600)
    },
  });

  if ($(".filter_sec").length) {
    $(window).on("show.bs.dropdown", function (e) {
      if ($(e.target).parents(".filter_sec").length) {
        let dropdownMenu = $(e.target)
          .parent(".dropdown")
          .find(".dropdown-menu")
          .addClass("cst_dropdown");
        //  $(".dropdown-menu.cst_dropdown").hide();
        $("body").append(dropdownMenu.detach());
        let eOffset = $(e.target).offset();
        dropdownMenu.css({
          display: "block",
          top: eOffset.top + $(e.target).outerHeight(),
          left: eOffset.left,
          zIndex: 10,
        });
      }
    });

    $(window).on("hide.bs.dropdown", function (e) {
      if ($(e.target).parents(".filter_sec").length) {
        let dropdownMenu = $(
          ".cst_dropdown.dropdown-menu[aria-labelledby='" +
            $(e.target).attr("id") +
            "']"
        );
        $(e.target).append(dropdownMenu.detach());
        dropdownMenu.hide();
      }
    });

    let flt_slider = $(".slid-drop-dwn-nw-all-tp");
    let slideIndex = flt_slider.find(".sngl-sld-all-nw-dp").length;
    let resp_arr = [7, 6, 4, 3, 2];
    let slideShow = resp_arr[0];

    function set_show() {
      if (window.outerWidth > 1025) {
        slideShow = resp_arr[0];
      }
      if ((window.outerWidth > 991) & (window.outerWidth <= 1025)) {
        slideShow = resp_arr[1];
      }
      if ((window.outerWidth > 767) & (window.outerWidth <= 991)) {
        slideShow = resp_arr[2];
      }
      if ((window.outerWidth > 575) & (window.outerWidth <= 767)) {
        slideShow = resp_arr[3];
      }
      if ((window.outerWidth > 360) & (window.outerWidth <= 575)) {
        slideShow = resp_arr[4];
      }
      //  flt_slider.slick(getSliderSettings());
    }
    function getSliderSettings() {
      return {
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: resp_arr[0],
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        centerMode: false,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: resp_arr[1],
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: resp_arr[2],
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: resp_arr[3],
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: resp_arr[4],
            },
          },
        ],
      };
    }

    set_show();
    $(window).resize(set_show);
    flt_slider.slick(getSliderSettings());

    setTimeout(() => {
      $(document).on(
        "click",
        ".dropdown-menu.cst_dropdown .dropdown-item",
        function () {
          // console.log("add");
          let data_id =
            "#" +
            $(this)
              .parents(".dropdown-menu.cst_dropdown")
              .attr("aria-labelledby");
          if ($(data_id).parents(".sngl-sld-all-nw-dp").length) {
            // $(data_id).parents('.sngl-sld-all-nw-dp').hide()
            //  slideIndex++;
            flt_slider.slick(
              "slickAdd",
              '<div class="sngl-sld-all-nw-dp fltr_txt"><div class="single-slct-all-ttd-main"><button class="srch_label">filter label<span data-id="' +
                data_id +
                '" class="close_label">X</span></button></div></div>'
            );
            flt_slider.slick("setPosition");
            setTimeout(() => {
              $(data_id).parents(".sngl-sld-all-nw-dp").hide();
            }, 10);
            // flt_slider.slick('unslick');
            // flt_slider.slick(getSliderSettings());

            // flt_slider.slick('slickGoTo', Math.abs(slideIndex - slideShow));
          }
        }
      );

      $(document).on("click", ".fltr_txt .close_label", function (e) {
        // console.log(e.target, $(this).attr("data-id"));
        $($(this).attr("data-id")).parents(".sngl-sld-all-nw-dp").show();
        flt_slider.slick("slickRemove", slideIndex);
        flt_slider.slick("setPosition");
        // if (slideIndex !== 0) {
        //   slideIndex--;
        // }
        // flt_slider.slick('unslick');
        // flt_slider.slick(getSliderSettings());
        //   flt_slider.slick('slickGoTo', Math.abs(slideIndex - slideShow));
      });
    }, 100);
  }

  // nice scroll airport suggestion dropdown
  $(".airport-suggestion-dropdown").niceScroll({
    cursorcolor: "#C4C4C4",
    cursorwidth: "6px",
    cursorborder: "none",
    cursorborderradius: "50px",
    autohidemode: false,
    railpadding: { top: 20, right: 0, left: 0, bottom: 20 },
  });

  $(".airport-suggestion-dropdown").mouseover(function () {
    $(".airport-suggestion-dropdown").getNiceScroll().resize();
  });
  $(".airport-suggestion-dropdown a").on("click", function () {
    $(".airport-suggestion-dropdown").getNiceScroll().resize();
  });
  $(".flightDropdown-btn").on("click", function () {
    // $('.flightDropdown-wrap').removeClass('dropdownShow')

    if ($(this).next(".flightDropdown-wrap").hasClass("dropdownShow")) {
      $(this).next(".flightDropdown-wrap").removeClass("dropdownShow");
    } else {
      $(this).next(".flightDropdown-wrap").addClass("dropdownShow");
    }
  });

  // $(window).scroll(function () {
  //   var scroll = $(window).scrollTop()
  //   if (scroll > 50) {
  //     $('.fixt-top-headr').addClass('sticky')
  //   } else {
  //     $('.fixt-top-headr').removeClass('sticky')
  //   }
  // })

  $(".suggestionOpen").on("click", function () {
    $(".flight_booked_maind_inner").removeClass("active");
    $(this).parents(".flight_booked_maind_inner").addClass("active");

    $(".cusCalender").removeClass("cusCalender-open");
    $(".cusDate-picker").removeClass("cusDate-picker-active");

    $(".flight_booked_maind_inner .suggestionOpen").removeClass("active");
    $(this).addClass("active");

    $(".flight_booked_maind_inner .airport-suggestion-dropdown")
      .removeClass("open")
      .hide();
    $(this)
      .parents(".flight_booked_maind_inner")
      .find(".airport-suggestion-dropdown")
      .addClass("open")
      .show();

    $(".flight_booked_maind_inner .airport-suggestion-dropdown")
      .niceScroll()
      .hide();
    $(this)
      .parents(".flight_booked_maind_inner")
      .find(".airport-suggestion-dropdown")
      .niceScroll()
      .show();
    $(".flight_booked_maind_inner .airport-suggestion-dropdown")
      .niceScroll()
      .resize();
  });
  // close if clicked outside.
  $(document).mouseup(function (e) {
    // if ($('.inline_all_filter').length) {
    //   let container_target = $('.inline_all_filter');
    //   if (
    //     !container_target.is(e.target) &&
    //     container_target.has(e.target).length === 0
    //   ) {
    //     setTimeout(() => {
    //       container_target.removeClass('active');
    //       $(container_target).find(".dropdown .dropdown-toggle").removeClass("show");
    //       $(container_target).find(".dropdown .dropdown-menu").removeClass("show").hide();
    //     }, 5);
    //   }
    //   else {
    //     setTimeout(() => {
    //       container_target.addClass('active');
    //       $(container_target).find(".dropdown .dropdown-toggle").addClass("show");
    //       $(container_target).find(".dropdown .dropdown-menu").addClass("show").show();
    //     }, 5);
    //   }
    // }

    if ($(".flight_booked_maind_inner").length) {
      let container_target = $(".flight_booked_maind_inner");
      if (
        !container_target.is(e.target) &&
        container_target.has(e.target).length === 0
      ) {
        container_target.removeClass("active");
        $(".flight_booked_maind_inner .cusCalender").removeClass(
          "cusCalender-open"
        );
        $(".flight_booked_maind_inner .suggestionOpen").removeClass("active");
        $(".flight_booked_maind_inner .airport-suggestion-dropdown")
          .removeClass("open")
          .hide();

        $(".flight_booked_maind_inner .airport-suggestion-dropdown")
          .niceScroll()
          .hide();
        $(".flight_booked_maind_inner .airport-suggestion-dropdown")
          .niceScroll()
          .resize();
      }
    }
  });

  //Horizontal Tab
  $("#parentHorizontalTab").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: "hor_1", // The tab groups identifier
    activate: function (event) {
      // Callback function if tab is switched
      var $tab = $(this);
      var $info = $("#nested-tabInfo");
      var $name = $("span", $info);
      $name.text($tab.text());
      $info.show();
      $(".goCalender-slider").slick("refresh");
      $(".goCalender-slider").resize();
      $(".imgGallery-slider").slick("refresh");
      $(".imgGallery-slider").resize();
      $(".imgGallery-nav").slick("refresh");
      $(".imgGallery-nav").resize();
    },
  });

  $(".resp-tabs-list li").click(function () {
    ScrollTrigger.refresh();
  });

  $("#parentHorizontalTabtws").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: "hor_1", // The tab groups identifier
    activate: function (event) {
      // Callback function if tab is switched
      var $tab = $(this);
      var $info = $("#nested-tabInfo");
      var $name = $("span", $info);
      $name.text($tab.text());
      $info.show();
      $(".goCalender-slider").slick("refresh");
      $(".goCalender-slider").resize();
      ScrollTrigger.refresh();
    },
  });

  $("#parentHorizontalTabtwsnn").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: "hor_1", // The tab groups identifier
    activate: function (event) {
      // Callback function if tab is switched
      var $tab = $(this);
      var $info = $("#nested-tabInfo");
      var $name = $("span", $info);
      $name.text($tab.text());
      $info.show();
      $(".goCalender-slider").slick("refresh");
      $(".goCalender-slider").resize();
      $(".ttd-main-slider-main").slick("refresh");
      $(".ttd-main-slider-main").resize();
    },
  });

  // Child Tab
  $("#ChildVerticalTab_1").easyResponsiveTabs({
    type: "vertical",
    width: "auto",
    fit: true,
    tabidentify: "ver_1", // The tab groups identifier
    activetab_bg: "#fff", // background color for active tabs in this group
    inactive_bg: "#F5F5F5", // background color for inactive tabs in this group
    active_border_color: "#c1c1c1", // border color for active tabs heads in this group
    active_content_border_color: "#5AB1D0", // border color for active tabs contect in this group so that it matches the tab head border
  });

  $("#ChildVerticalTab_2").easyResponsiveTabs({
    type: "horizontal",
    width: "auto",
    fit: true,
    tabidentify: "ver_1", // The tab groups identifier
    activetab_bg: "#fff", // background color for active tabs in this group
    inactive_bg: "#F5F5F5", // background color for inactive tabs in this group
    active_border_color: "#c1c1c1", // border color for active tabs heads in this group
    active_content_border_color: "#5AB1D0", // border color for active tabs contect in this group so that it matches the tab head border
  });

  // Navbar
  $("<span class='clickD'></span>").insertAfter(
    ".navbar_bts_btm li.menu-item-has-children > a"
  );
  $(".navbar_bts_btm li .clickD").click(function (e) {
    e.preventDefault();
    var $this = $(this);

    if ($this.next().hasClass("show")) {
      $this.next().removeClass("show");
      $this.removeClass("toggled");
    } else {
      $this.parent().parent().find(".sub-menu").removeClass("show");
      $this.parent().parent().find(".toggled").removeClass("toggled");
      $this.next().toggleClass("show");
      $this.toggleClass("toggled");
    }
  });

  $(window).on("resize", function () {
    var win = $(this); //this = window
    if (win.width() < 1025) {
      $("html").click(function () {
        $(".navbar_bts_btm li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(document).click(function () {
        $(".navbar_bts_btm li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(".navbar_bts_btm").click(function (e) {
        e.stopPropagation();
      });
    }
  });
  // Navbar end

  $(".mobile_menu_btn").on("click", function () {
    $(".new_in_head_btmd").toggleClass("show");
    $(".mobile_menu_btn").toggleClass("open");
  });

  $(".trip_details_slect .dropdown-menu li a").click(function () {
    $(this)
      .parents(".dropdown")
      .find(".dropdown-toggle .drop_mn_tg")
      .html($(this).html());
  });

  $(".hot_dls_best_sec_caraousal").on(
    "initialized.owl.carousel translate.owl.carousel",
    function (e) {
      idx = e.item.index;
      $(".owl-item.big").removeClass("big");
      $(".owl-item.medium").removeClass("medium");
      $(".owl-item").eq(idx).addClass("big");
      $(".owl-item")
        .eq(idx - 1)
        .addClass("medium");
      $(".owl-item")
        .eq(idx + 1)
        .addClass("medium");
    }
  );

  $(".hot_dls_best_sec_caraousal").owlCarousel({
    center: true,
    items: 5,
    loop: true,
    margin: 0,
    // autoplay: true,
    // autoPlay: 3000
  });

  $(".imgGallery-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".imgGallery-nav",
  });
  $(".imgGallery-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".imgGallery-slider",
    dots: false,
    arrows: false,
    // centerMode: true,
    focusOnSelect: true,
  });

  $(".ttd-main-slider-main").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1000,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".goCalender-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1000,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  $(".hotDeals-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1000,
    centerMode: false,
    adaptiveHeight: true,
    centerPadding: "0px",

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: false,
          // nashnash
          slidesToShow: 2,
          // slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  });

  $(".hotDeals-sliderv2").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1000,
    centerMode: false,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          touchThreshold: 10,
        },
      },
    ],
  });

  // filter check box slider
  $(".filterCheck-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,

    speed: 300,
    centerMode: false,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".filterCheck-sliderv2").slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,

    speed: 300,
    centerMode: false,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".stay_map_slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    centerMode: true,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".wrap-main-map-area-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 1000,
    centerMode: false,
    adaptiveHeight: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      // {
      //   breakpoint: 991,
      //   settings: {
      //     slidesToShow: 7,
      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 767,
      //   settings: {
      //     slidesToShow: 7,
      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 7,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  });

  $(".imgGallery-slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".imgGallery-nav2",
  });
  $(".imgGallery-nav2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".imgGallery-slider2",
    dots: false,
    arrows: false,
    // centerMode: true,
    focusOnSelect: true,
  });

  $(".imgGallery-slider3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".imgGallery-nav3",
  });
  $(".imgGallery-nav3").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".imgGallery-slider3",
    dots: false,
    arrows: false,
    // centerMode: true,
    focusOnSelect: true,
  });

  var headerHeight = $(".fixt-top-headr").outerHeight();
  var newFooterHeight = $(".btm_footer_copyrtv2").outerHeight();
  $("body").css("paddingTop", headerHeight + "px");
  $("body").css("paddingBottom", newFooterHeight + "px");
  $(".profile-main-menu").css("top", headerHeight + "px");
  $(".profile-main-menu").css("bottom", newFooterHeight + "px");
  // $('.profile-main-menu').css('paddingBottom', headerHeight + 100 + 'px')

  $(window).resize(function () {
    var headerHeight = $(".fixt-top-headr").outerHeight();
    var newFooterHeight = $(".btm_footer_copyrtv2").outerHeight();
    $("body").css("paddingTop", headerHeight + "px");
    $("body").css("paddingBottom", newFooterHeight + "px");
    $(".profile-main-menu").css("top", headerHeight + "px");
    $(".profile-main-menu").css("bottom", newFooterHeight + "px");
  });

  $(function () {
    x = 3;
    $(".single-check-bx-bst-tm .innr-chckbx-bst-tm-dcvr").slice(0, 3).show();
    $("#loadMore").on("click", function (e) {
      e.preventDefault();
      x = x + 5;
      $(".single-check-bx-bst-tm .innr-chckbx-bst-tm-dcvr")
        .slice(0, x)
        .slideDown();
    });
  });
  if ($(window).width() < 767) {
    $(function () {
      x = 6;
      $(".single-check-bx-bst-tm .innr-chckbx-bst-tm-dcvr").slice(0, 6).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        x = x + 2;
        $(".single-check-bx-bst-tm .innr-chckbx-bst-tm-dcvr")
          .slice(0, x)
          .slideDown();
      });
    });
  }

  $(window).on("resize", function () {
    var win = $(this); //this = window
    if (win.width() < 767) {
      $(function () {
        x = 6;
        $(".single-check-bx-bst-tm .innr-chckbx-bst-tm-dcvr")
          .slice(0, 6)
          .show();
        $("#loadMore").on("click", function (e) {
          e.preventDefault();
          x = x + 2;
          $(".single-check-bx-bst-tm .innr-chckbx-bst-tm-dcvr")
            .slice(0, x)
            .slideDown();
        });
      });
    }
  });

  $("#parentHorizontalTabtStayMap").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: "hor_1", // The tab groups identifier
    activate: function (event) {
      // Callback function if tab is switched
      var $tab = $(this);
      var $info = $("#nested-tabInfo");
      var $name = $("span", $info);
      $name.text($tab.text());
      $info.show();
      $(".goCalender-slider").slick("refresh");
      $(".goCalender-slider").resize();
      $(".stay_map_slider").slick("refresh");
      $(".stay_map_slider").resize();
    },
  });

  // 22.06.22

  $("#parentHorizontaltxtTab").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: "hortxt_1", // The tab groups identifier
    activate: function (event) {
      // Callback function if tab is switched
      var $tab = $(this);
      var $info = $("#nested-tabInfo");
      var $name = $("span", $info);
      $name.text($tab.text());
      $info.show();
    },
  });
  $("#parentHorizontaltxtTab-note").easyResponsiveTabs({
    type: "default", //Types: default, vertical, accordion
    width: "auto", //auto or any width like 600px
    fit: true, // 100% fit in a container
    tabidentify: "hortxt_1", // The tab groups identifier
    activate: function (event) {
      // Callback function if tab is switched
      var $tab = $(this);
      var $info = $("#nested-tabInfo");
      var $name = $("span", $info);
      $name.text($tab.text());
      $info.show();
    },
  });

  // shuvam 03.06.22

  // $('.nxt_upcmgAcc .acc:nth-child(1) .acc-head').addClass('active')
  // $('.nxt_upcmgAcc .acc:nth-child(1) .acc-content').slideDown()
  // $('.nxt_upcmgAcc .acc-head').on('click', function () {
  //   if ($(this).hasClass('active')) {
  //     $(this).siblings('.nxt_upcmgAcc .acc-content').slideUp()
  //     $(this).removeClass('active')
  //   } else {
  //     $('.nxt_upcmgAcc .acc-content').slideUp()
  //     $('.nxt_upcmgAcc .acc-head').removeClass('active')
  //     $(this).siblings('.nxt_upcmgAcc .acc-content').slideToggle()
  //     $(this).toggleClass('active')
  //   }
  // })

  $(function () {
    $(".accordion-content:not(:first-of-type)").css("display", "none");
    $(".js-accordion-title:first-of-type").addClass("open");

    $(".js-accordion-title").click(function () {
      $(".open").not(this).removeClass("open").next().slideUp(300);
      $(this).toggleClass("open").next().slideToggle(300);
      ScrollTrigger.refresh();
    });
  });

  $(function () {
    $(".inner-part-scnd-tb-area").css("display", "none");
    // $('.uctAccordian-mobile:first-child .ttilt-exp').addClass('open')

    $(".compare-wrap .ttilt-exp").click(function () {
      $(".open")
        .not(this)
        .removeClass("open")
        .parents(".uctAccordian-mobile")
        .find(".inner-part-scnd-tb-area")
        .slideUp(300);
      $(this)
        .toggleClass("open")
        .parents(".uctAccordian-mobile")
        .find(".inner-part-scnd-tb-area")
        .slideToggle(300);
      $(".imgGallery-slider").slick("setPosition");
      $(".imgGallery-nav").slick("setPosition");
      ScrollTrigger.refresh();
    });
  });

  $(function () {
    $(".upcomingTrip-calander-accordianCont").css("display", "none");
    // $('.uctAccordian-mobile:first-child .ttilt-exp').addClass('open')

    $(
      ".upcomingTrip-calander-dateCommon-wrap .upcomingTrip-calander-dateCommon"
    ).click(function () {
      $(".open")
        .not(this)
        .removeClass("open")
        .parents(".upcomingTrip-calander-cont")
        .find(".upcomingTrip-calander-accordianCont")
        .slideUp(300);
      $(this)
        .toggleClass("open")
        .parents(".upcomingTrip-calander-cont")
        .find(".upcomingTrip-calander-accordianCont")
        .slideToggle(300);
    });
  });

  // upcming trip accordian only for mobile

  // if ($(window).width() < 991) {
  //   // do stuff

  //   $(function () {
  //     $('.inner-part-scnd-tb-area').css('display', 'none')
  //     // $('.uctAccordian-mobile:first-child .ttilt-exp').addClass('open')

  //     $('.ttilt-exp').click(function () {
  //       $('.open').not(this).removeClass('open').next().slideUp(300)
  //       $(this).toggleClass('open').next().slideToggle(300)
  //       $('.imgGallery-slider').slick('setPosition')
  //       $('.imgGallery-nav').slick('setPosition')
  //     })
  //   })
  // }

  // $(window).on('resize', function () {
  //   if ($(window).width() < 991) {
  //     // do stuff

  //     $(function () {
  //       $('.inner-part-scnd-tb-area').css('display', 'none')
  //       // $('.uctAccordian-mobile:first-child .ttilt-exp').addClass('open')

  //       $('.ttilt-exp').click(function () {
  //         $('.open').not(this).removeClass('open').next().slideUp(300)
  //         $(this).toggleClass('open').next().slideToggle(300)
  //         $('.imgGallery-slider').slick('setPosition')
  //         $('.imgGallery-nav').slick('setPosition')
  //       })
  //     })
  //   }
  // })

  // $(window).on('resize', function () {
  //   if ($(window).width() > 768) {
  //     // do stuff
  //     location.reload()
  //   }
  // })
  // if ($(window).width() > 768) {
  //   // do stuff
  //   $('.inner-part-scnd-tb-area').css('display', 'block')
  //   $('.ttilt-exp').removeClass('open')
  // }

  // $('.acc_trip .acc_trip_head').addClass('active')
  // // $('.acc_trip .acc_trip_content').slideDown()
  // $('.acc_trip .acc_trip_content').addClass('acc-hide')
  // $('.acc_trip_head').on('click', function () {
  //   if ($(this).hasClass('active')) {
  //     // $(this).siblings('.acc_trip_content').slideUp()
  //     $(this).siblings('.acc_trip_content').removeClass('acc-hide')
  //     $(this).removeClass('active')
  //   } else {
  //     // $('.acc_trip_content').slideUp()
  //     $('.acc_trip_content').removeClass('acc-hide')
  //     $('.acc_trip_head').removeClass('active')
  //     // $(this).siblings('.acc_trip_content').slideToggle()
  //     $(this).siblings('.acc_trip_content').removeClass('acc-hide')
  //     $(this).toggleClass('active')
  //   }
  // })

  if ($(".openall-tab").length) {
    $(window).on("resize load", function () {
      accord();
    });

    accord();
    function accord() {
      if (window.outerWidth > 767) {
        $(".acc_trip .acc_trip_head").addClass("active");
        $(".acc_trip").addClass("active");
      }
    }

    $(".acc_trip_head").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".acc_trip").removeClass("active");
      } else {
        $(this).addClass("active");
        $(this).parents(".acc_trip").addClass("active");
      }
    });
  }

  // open all tab same time in mobile
  if ($(".openall-tab").length) {
    $(".openall-tab").on("click", function () {
      if ($("#mobile-opentab .acc_trip_head").hasClass("active")) {
        $("#mobile-opentab .acc_trip_head").removeClass("active");
        $("#mobile-opentab .acc_trip").removeClass("active");
        $(this).removeClass("largeText");
      } else {
        $("#mobile-opentab .acc_trip_head").addClass("active");
        $("#mobile-opentab .acc_trip").addClass("active");
        $(this).addClass("largeText");
      }
    });
  }

  if ($(".exand-dates-wrapper").length) {
    $(".exand-dates-wrapper span").on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $(".exand-dates-wrapper span").each(function () {
        $(this).siblings("span").removeClass("active");
      });
      $(this).addClass("active");
      var target = $(this).attr("data-target"),
        $target = $(target);
      if (window.outerWidth > 767) {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop:
                $target.offset().top - $(".fixt-top-headr").outerHeight(),
            },
            500,
            "swing",
            function () {
              // $target.siblings(".acc_trip").removeClass("active");
              // $target.siblings(".acc_trip").find(".acc_trip_head").removeClass("active");
              $target.addClass("active");
              $target.children(".acc_trip_head").addClass("active");
            }
          );
      } else {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop:
                $target.offset().top - $(".fixt-top-headr").outerHeight() - 50,
            },
            500,
            "swing",
            function () {
              // $target.siblings(".acc_trip").removeClass("active");
              // $target.siblings(".acc_trip").find(".acc_trip_head").removeClass("active");
              $target.addClass("active");
              $target.children(".acc_trip_head").addClass("active");
            }
          );
      }
    });
  }

  $(".openall-tab").on("click", function () {
    if ($(this).hasClass("largeText")) {
      $(this).text("Collapse Dates");
    } else $(this).text("Expand Dates");
    //  $(this).text(($(this).text() == 'Expand Dates') ? 'Collapse Dates' : 'Expand Dates')
    // $(this).toggleClass("largeText")
  });
  $(".tritxt-up-dwn-btn").on("click", function () {
    $(this).parents(".tritxt_wrap").find(".resp-tabs-container").slideToggle();
    $(".tritxtBtn_wrap").toggleClass("open");
    if ($(".tritxt_wrap").hasClass("active")) {
      $(".tritxt_wrap").removeClass("active");
    } else {
      $(".tritxt_wrap").addClass("active");
    }
  });

  //     $("[data-element]").on("click", function() {
  //   let _tr = $(this).attr("data-element") ;
  // if ($(this).hasClass('act')){
  //   $("[data-element]").removeClass('act')
  //   $("[data-target]").removeClass("active");
  // }
  // else{
  //   $("[data-element]").removeClass('act')
  //   $("[data-target]").removeClass("active");
  //   $(this).addClass('act')
  //   $("[data-target='" + _tr + "']").addClass("active");

  // }

  // $('.exand-dates-wrapper-new span').on('click', function (e) {
  //       e.preventDefault()
  //       $(".upcomingTrip-calander-popup").off('scroll')
  //   // console.log($(this).offset().top)
  //   setTimeout(() => {
  //     $(".upcomingTrip-calander-cont").each(function () {
  //     console.log($(this).offset().top)
  //   })
  //    var target = $(this).attr('data-target-new');
  //         // $target = $(this);
  //       // $(this).parents('.upcomingTrip-calander-popup')
  //       //     .stop()
  //       //     .animate(
  //       //       {
  //       //         scrollTop:
  //       //           $(target).offset().top + $('.add-more-filter-sticky-head-ucptrp').outerHeight() + 20,
  //       //       },
  //       //       500,
  //       //       'swing',

  //       //     )

  //       $(this).parents('.upcomingTrip-calander-popup').get(0).scrollTo(0, $(target).offset().top + $('.add-more-filter-sticky-head-ucptrp').outerHeight() + 20)
  //   }, 200);

  //           })

  // }
  // $target = $(target)

  // $('html, body')
  //           .stop()
  //           .animate(
  //             {
  //               scrollTop:
  //                 $target.offset().top - $('.fixt-top-headr').outerHeight() - 50,
  //             },
  //             500,
  //             'swing',
  //             function () {
  //               // $target.siblings(".acc_trip").removeClass("active");
  //               // $target.siblings(".acc_trip").find(".acc_trip_head").removeClass("active");
  //               $target.addClass('active')
  //               $target.children('.acc_trip_head').addClass('active')
  //             }
  //           )
  // });

  // 06.06.22

  $(".doc_trip .doc_head").addClass("active");
  $(".doc_trip .doc_content").slideDown();
  $(".doc_head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".doc_content").slideUp();
      $(this).removeClass("active");
    } else {
      $(".doc_content").slideUp();
      $(".doc_head").removeClass("active");
      $(this).siblings(".doc_content").slideToggle();
      $(this).toggleClass("active");
    }
  });

  // 07.06.22

  $(".upcomeMap_btn").click(function () {
    // var $this = $(this)
    // $this.toggleClass('upcomeMap_btn')
    // if ($this.hasClass('upcomeMap_btn')) {
    //   $this.text('Show Map')
    // } else {
    //   $this.text('Hide Map')
    // }
    if (this.text == "Hide Map") this.text = "Show Map";
    else this.text = "Hide Map";
  });

  $(".sett_btn").click(function (e) {
    e.stopPropagation();
    if (
      $(this).parents(".settingTd").find(".setting_pop").hasClass("settingShow")
    ) {
      $(this)
        .parents(".settingTd")
        .find(".setting_pop")
        .removeClass("settingShow");
    } else {
      $(".setting_pop").removeClass("settingShow");
      $(this)
        .parents(".settingTd")
        .find(".setting_pop")
        .addClass("settingShow");
    }

    $(".sett_btn").not(this).removeClass("active");
    $(this).toggleClass("active");
  });

  // shuvam end

  $(".flight_booked_maind_inner .cusDate-picker").on("click", function () {
    $(".cusCalender").toggleClass("cusCalender-open");
    $(".airport-suggestion-dropdown").removeClass("suggestionShow");
    // $('.cusDate-picker').removeClass('cusDate-picker-active')
    $(".goCalender-slider").slick("refresh");
    if ($(this).hasClass("cusDate-picker-active")) {
      $(this).removeClass("cusDate-picker-active");
    } else {
      $(this).addClass("cusDate-picker-active");
    }
  });

  $(".cusDate-picker").on("click", function () {
    if ($(".flight_booked_maind_inner").length) {
      let container_target = $(".flight_booked_maind_inner");
      container_target.removeClass("active");
      container_target.find(".cusCalender").removeClass("cusCalender-open");
      container_target.find(".suggestionOpen").removeClass("active");
      container_target
        .find(".airport-suggestion-dropdown")
        .removeClass("open")
        .hide();
      container_target.find(".airport-suggestion-dropdown").niceScroll().hide();
      container_target
        .find(".airport-suggestion-dropdown")
        .niceScroll()
        .resize();
    }
  });

  // calendar open for modal popup
  $(".cmn-popupDate-wrap .cusDate-picker").on("click", function () {
    $(".modal-content .cusCalender").toggleClass("cusCalender-open");
  });
  $(".resp-tab-item ").on("click", function () {
    // $('.goCalender-slider').slick('setPosition')
    $(".wrap-main-map-area-slider").slick("setPosition");
    $(".goCalender-slider").slick("refresh");
  });
  // $('.resp-tab-item').on('shown.bs.tab', function (e) {
  //   $('.your-class').slick('setPosition')
  // })

  // $('#demo').daterangepicker({
  //   startDate: '05/10/2022',
  //   endDate: '05/16/2022',
  //   parentEl: '.calenderMain',
  //   alwaysShowCalendars: true,
  //   autoApply: true,
  //   inline: true,
  // })

  var separator = " - ",
    dateFormat = "YYYY/MM/DD";
  var options = {
    showDropdowns: true,
    alwaysShowCalendars: true,
    autoUpdateInput: false,
    autoApply: false,
    inline: true,
    parentEl: ".calenderMain",

    locale: {
      format: dateFormat,
      separator: separator,
      monthNames: moment.months(),
    },
    // minDate: moment().add(30, 'days'),
    // maxDate: moment().add(359, 'days'),
    drops: "auto",
    opens: "right",
  };
  moment.updateLocale("en", {
    weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"],
  });

  $("[data-datepicker=separateRange]")
    .daterangepicker(options)
    .on("apply.daterangepicker", function (ev, picker) {
      var boolStart =
        this.name.match(/value_from_start_/g) == null ? false : true;
      var boolEnd = this.name.match(/value_from_end_/g) == null ? false : true;

      var mainName = this.name.replace("value_from_start_", "");
      if (boolEnd) {
        mainName = this.name.replace("value_from_end_", "");
        $(this)
          .closest("form")
          .find("[name=value_from_end_" + mainName + "]")
          .blur();
      }

      $(this)
        .closest("form")
        .find("[name=value_from_start_" + mainName + "]")
        .val(picker.startDate.format(dateFormat));
      $(this)
        .closest("form")
        .find("[name=value_from_end_" + mainName + "]")
        .val(picker.endDate.format(dateFormat));

      $(this).trigger("change").trigger("keyup");
    })
    .on("show.daterangepicker", function (ev, picker) {
      var boolStart =
        this.name.match(/value_from_start_/g) == null ? false : true;
      var boolEnd = this.name.match(/value_from_end_/g) == null ? false : true;
      var mainName = this.name.replace("value_from_start_", "");
      if (boolEnd) {
        mainName = this.name.replace("value_from_end_", "");
      }

      var startDate = $(this)
        .closest("form")
        .find("[name=value_from_start_" + mainName + "]")
        .val();
      var endDate = $(this)
        .closest("form")
        .find("[name=value_from_end_" + mainName + "]")
        .val();

      $("[name=daterangepicker_start]")
        .val(startDate)
        .trigger("change")
        .trigger("keyup");
      $("[name=daterangepicker_end]")
        .val(endDate)
        .trigger("change")
        .trigger("keyup");

      if (boolEnd) {
        $("[name=daterangepicker_end]").focus();
      }
    });

  // $("[data-datepicker='separateRange']:eq(0)").trigger('click')

  // $('#calHide').trigger('click')

  $(".flight_booked_maind_inner.flexible").hide();
  $("#flexible").on("click", function () {
    // $('.goCalender-slider').slick('setPosition')
    $(".flight_booked_maind_inner.calender").hide();
    $(".flight_booked_maind_inner.flexible").show();
  });
  $("#calendar").on("click", function () {
    // $('.goCalender-slider').slick('setPosition')
    $(".flight_booked_maind_inner.flexible").hide();
    $(".flight_booked_maind_inner.calender").show();
  });

  $(".datetimepicker1").datepicker({
    format: "D, MM d",
  });

  $(".datetimepicker1").on("click", function () {
    $(".airport-suggestion-dropdown").removeClass("suggestionShow");
  });

  $(".showFull-map ").on("click", function () {
    $(".fullMap-left").addClass("fullMap-left-hide");
    $(".fullMap-right").addClass("fullMap-rigt-full");
    $(this).removeClass("show");
    $(".hide-map").addClass("show");
  });
  $(".hide-map ").on("click", function () {
    $(".fullMap-left").removeClass("fullMap-left-hide");
    $(".fullMap-right").removeClass("fullMap-rigt-full");
    $(this).removeClass("show");
    $(".showFull-map").addClass("show");
  });

  // accordian
  $(".acc-container .acc:nth-child(1) .acc-head").addClass("active");
  $(".acc-container .acc:nth-child(1) .acc-content").slideDown();
  $(".acc-head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".acc-content").slideUp();
      $(this).removeClass("active");
    } else {
      $(".acc-content").slideUp();
      $(".acc-head").removeClass("active");
      $(this).siblings(".acc-content").slideToggle();
      $(this).toggleClass("active");
    }
  });

  // each open accordion
  $(".acc-head-dash").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).siblings(".acc-content").slideUp();
      $(this).removeClass("active");

      $(this).parent(".acc").removeClass("accordion_overlay");
      // $(this).next().find(".depature-single").delay(2000).queue(function(){
      //   $(this).removeClass("test").dequeue();
      // });
    } else {
      // $('.acc-content').slideUp()
      // $('.acc-head-dash').removeClass('active')
      $(this).siblings(".acc-content").slideDown();
      $(this).toggleClass("active");
      $(this).parent(".acc").addClass("accordion_overlay", 1000);

      // setTimeout( function() { $('.acc_loader').show(); }, 1 )
      // $(this).next().find(".acc_loader").delay(0).show(0);
      // $(this).next().find(".acc_loader").delay(2000).hide(0);
      // // $(this).next().find(".cmn_accordion_wpr").delay(2000).addClass("acc_opecity");

      // $(this).next().find(".cmn_accordion_wpr").delay(2000).queue(function(){
      //   $(this).addClass("acc_opecity").dequeue();
      // });
      $(this)
        .next(".acc-content")
        .find(
          ".cmn_accordion_wpr  i, .cmn_accordion_wpr  .depature-single-col, .cmn_accordion_wpr .hrt-ttd-icn-img "
        )
        .addClass("skeleton");

      $(this)
        .next(".acc-content")
        .find(
          ".cmn_accordion_wpr .upcmng-trp-stay-img, .cmn_accordion_wpr span, .cmn_accordion_wpr h5, .cmn_accordion_wpr p , .cmn_accordion_wpr .stayMap_leftBtn_wrap "
        )
        .addClass("skeleton");
      $(this)
        .next()
        .find(
          ".cmn_accordion_wpr  i, .cmn_accordion_wpr  .depature-single-col, .cmn_accordion_wpr .hrt-ttd-icn-img"
        )
        .delay(4000)
        .queue(function () {
          $(this).removeClass("skeleton").dequeue();
        });
      $(this)
        .next()
        .find(
          ".cmn_accordion_wpr .upcmng-trp-stay-img, .cmn_accordion_wpr span, .cmn_accordion_wpr h5, .cmn_accordion_wpr p, .cmn_accordion_wpr .stayMap_leftBtn_wrap"
        )
        .delay(4000)
        .queue(function () {
          $(this).removeClass("skeleton").dequeue();
        });
    }
  });

  $(document).on("click", ".qty-count--add", function () {
    $(this)
      .prev()
      .val(+$(this).prev().val() + 1);
  });
  $(document).on("click", ".qty-count--minus", function () {
    if ($(this).next().val() > 0)
      $(this)
        .next()
        .val(+$(this).next().val() - 1);
  });

  // custom dropdown
  $(".peopleNum-btn").on("click", function () {
    $(".peopleNum-dropdown").toggleClass("open");
  });

  $(document).on("click", function (e) {
    var $target = $(e.target);
    if (
      !$target.is(".peopleNum-dropdown > *") &&
      !$target.is(".peopleNum-btn")
    ) {
      $(".peopleNum-dropdown").removeClass("open");
    }
  });

  //   const $menu = $('.peopleNum-dropdown')
  // $('.peopleNum-btn').on('click', () => {
  //   $menu.toggleClass('open')
  // })
  //   $(document).mouseup((e) => {
  //     if (
  //       !$menu.is(e.target) && // if the target of the click isn't the container...
  //       $menu.has(e.target).length === 0
  //     ) {
  //       // ... nor a descendant of the container
  //       $menu.removeClass('open')
  //     }
  //   })

  $(".cusCalender-wrapper .cusCalender-closeBtn ").on("click", function () {
    $(".cusCalender").removeClass("cusCalender-open");
  });
  $(".modal-content .cusCalender-closeBtn ").on("click", function () {
    $(".modal-content .cusCalender").removeClass("cusCalender-open");
  });

  $(".cmn-popupInputWithIcon").on("click", function () {
    $(".addTravelBuddy-dropdown").toggleClass("open");
  });
  $(".locationSuggestion").on("click", function () {
    $(".locationSuggestion-dropDown").toggleClass("open");
  });

  // popup
  $(".stayName-suggestion").on("click", function () {
    $(".stayName-suggestion-dropDown").toggleClass("open");
  });

  // $('body').click(function (e) {
  //   if (
  //     e.target.className !== 'addTravelBuddy-dropdown' &&
  //     e.target.className !== 'cmn-popupInputWithIcon'
  //   ) {
  //     $('.addTravelBuddy-dropdown').hide()
  //   }
  // })

  $(document).mouseup(function (e) {
    var container = $(".addTravelBuddy-dropdown");

    // if the target of the click isn't the container nor a descendant of the container
    if (
      !container.is(e.target) &&
      !$(".cmn-popupInputWithIcon").is(e.target) &&
      container.has(e.target).length === 0
    ) {
      container.removeClass("open");
    }
  });

  // image gallery isotope js

  // init Isotope
  if ($(".grid").length) {
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        gutter: 20,
      },
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
      $grid.isotope("layout");
    });
  }

  // image gallery fancy box
  if ($('[data-fancybox="gallery"]').length) {
    $('[data-fancybox="gallery"]').fancybox({
      buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
      loop: false,
      protect: true,
    });
  }
  $(".abt-exp-show-btn a").on("click", function () {
    $.fancybox.open(
      [
        {
          src: "assets/images/abtex1.jpg",
          opts: {
            caption: "Caption Images 1",
            thumb: "assets/images/abtex1.jpg",
          },
        },
        {
          src: "assets/images/abtex2.jpg",
          opts: {
            caption: "Caption Images 2",
            thumb: "assets/images/abtex2.jpg",
          },
        },
        {
          src: "assets/images/abtex3.jpg",
          opts: {
            caption: "Caption Images 3",
            thumb: "assets/images/abtex3.jpg",
          },
        },
        {
          src: "assets/images/abtex4.jpg",
          opts: {
            caption: "Caption Images 4",
            thumb: "assets/images/abtex4.jpg",
          },
        },
        {
          src: "assets/images/abtex5.jpg",
          opts: {
            caption: "Caption Images 5",
            thumb: "assets/images/abtex5.jpg",
          },
        },
      ],

      {
        loop: false,
        protect: true,
        // thumbs: {
        //   autoStart: true,
        // },
      }
    );
  });

  $(".addFilter-closeBtn").on("click", function () {
    $(this)
      .parents(".lft-fxt-dp-dw-mbl")
      .find(".dropdown-toggle")
      .trigger("click");
  });

  // range slider
  // double range
  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $(function () {
    $("#slider-range2").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $(function () {
    $("#slider-range3").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $(function () {
    $("#slider-range4").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $(function () {
    $("#slider-range5").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $(function () {
    $("#slider-range6").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $(function () {
    $("#slider-range7").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $(function () {
    $("#slider-range8").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $(function () {
    $("#slider-range9").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
  $(function () {
    $("#slider-range10").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });

  // single range
  $(function () {
    $("#slider-range-min").slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function (event, ui) {
        $("#amount").val("$" + ui.value);
      },
    });
    $("#amount").val("$" + $("#slider-range-min").slider("value"));
  });

  $(function () {
    $("#slider-range-min2").slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function (event, ui) {
        $("#amount").val("$" + ui.value);
      },
    });
    $("#amount").val("$" + $("#slider-range-min").slider("value"));
  });
  $(function () {
    $("#slider-range-min3").slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function (event, ui) {
        $("#amount").val("$" + ui.value);
      },
    });
    $("#amount").val("$" + $("#slider-range-min").slider("value"));
  });
  $(function () {
    $("#slider-range-min4").slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function (event, ui) {
        $("#amount").val("$" + ui.value);
      },
    });
    $("#amount").val("$" + $("#slider-range-min").slider("value"));
  });
  $(function () {
    $("#slider-range-min5").slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function (event, ui) {
        $("#amount").val("$" + ui.value);
      },
    });
    $("#amount").val("$" + $("#slider-range-min").slider("value"));
  });

  $(function () {
    $("#popupCommonTab").tabs();
  });
  $(function () {
    $("#popupCommonTab2").tabs();
  });
  $(function () {
    $("#popupCommonTab3").tabs();
  });
  $(function () {
    $("#popupCommonTab4").tabs();
  });
  $(function () {
    $("#popupCommonTab5").tabs();
  });
  $(function () {
    $("#popupCommonTab6").tabs();
  });
  $(function () {
    $("#popupCommonTab7").tabs();
  });
  $(function () {
    $("#popupCommonTab8").tabs();
  });
  $(function () {
    $("#popupCommonTab9").tabs();
  });
  $(function () {
    $("#popupCommonTab10").tabs();
  });
  $(function () {
    $("#popupCommonTab11").tabs();
  });
  $(function () {
    $("#popupCommonTab12").tabs();
  });
  $(function () {
    $("#popupCommonTab13").tabs();
  });

  // mobile map js
  $(".shw-map-mobile-vw").click(function () {
    $(".map-mbl-show-nw").toggleClass("show");
    $("body").toggleClass("disableScroll");
    $("html").toggleClass("disableScroll");
    $(".upctrpCal-btn").text("Calendar");
    $(".upcomingTrip-calander-popup").removeClass("show");
    if (this.text == "Show Map") this.text = "Hide Map";
    else this.text = "Show Map";
  });
  $(".showFull-map").click(function () {
    $(".refreshBtn span").text("Update List");
  });
  $(".hide-map").click(function () {
    $(".refreshBtn span").text("Refresh");
  });

  // var count = $('acc-content table tr td').length
  // $('.acc-content table td').hover(function () {
  //   $(this).toggleClass('result_hover')
  //   var cellIndex = $(this).index()
  //   console.log(cellIndex)
  //   $(this)
  //     .parents('tbody')
  //     .find('tr:nth-child(1) th:nth-child(cellIndex)')
  //     .toggleClass('active')
  // })
  $(".addFilterMobile-btn").click(function () {
    $(".allFilter-dropdown").toggleClass("show");
  });

  if ($(window).width() < 768) {
    // do stuff
    $(".addFilter-closeBtn").click(function () {
      $(".allFilter-dropdown").removeClass("show");
    });
  }

  $(window).on("resize", function () {
    if ($(window).width() < 768) {
      // do stuff
      $(".addFilter-closeBtn").click(function () {
        $(".allFilter-dropdown").removeClass("show");
      });
    }
  });
  $(".show-map-mobile-wrap a").click(function () {
    if ($(".allFilter-dropdown").hasClass("show")) {
      $(".bottom-fixt-mne-all-pgs").addClass("noBoxShadow");
    } else if ($(".map-mbl-show-nw").hasClass("show")) {
      $(".bottom-fixt-mne-all-pgs").addClass("noBoxShadow");
    } else {
      $(".bottom-fixt-mne-all-pgs").removeClass("noBoxShadow");
    }
  });
  $(".addFilter-closeBtn").click(function () {
    if (!$(".allFilter-dropdown").hasClass("show")) {
      $(".bottom-fixt-mne-all-pgs").removeClass("noBoxShadow");
    }
  });

  // $(document).scroll(function () {
  //   checkOffset()
  // })
  // function checkOffset() {
  //   if (
  //     $(' .show-map-mobile-wrap').offset().top +
  //       $(' .show-map-mobile-wrap').height() >=
  //     $('footer').offset().top - 45
  //   )
  //     $(' .show-map-mobile-wrap').delay(8000).css('position', 'static')

  //   if ($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
  //     $(' .show-map-mobile-wrap').css('position', 'fixed') // restore when you scroll up
  // }

  // filter height for mobile
  if ($(window).width() < 768) {
    // do stuff
    let filterHeight = jQuery(window).height();
    $(".add-filter-innr-main-nw-dsgn").css("height", filterHeight);
  }

  $(window).on("resize", function () {
    if ($(window).width() < 768) {
      // do stuff
      let filterHeight = jQuery(window).height();
      $(".add-filter-innr-main-nw-dsgn").css("height", filterHeight);
    }
  });

  // new map view for upcoming trip
  $(".upcomingTrip-mapView").on("click", function () {
    $(".wrap-main-map").toggleClass("openMap");
    $(".wrap-main-map-area-slider").slick("setPosition");
    $(this).toggleClass("upcomingTrip-ListView");
    // $('.tab-tw-upctrip-map-part').removeClass('upcomeTrip_map_clm')
    // $('.map-txt-tab-tw-wrp-inr ').removeClass('upcomeTrip_clm')
    if ($(this).hasClass("upcomingTrip-ListView")) {
      $(".upcomeMap_btn").addClass("removeBtn");
      $(".upcomeMap_newVersion").addClass("addBtn");
      $(".tab-tw-upctrip-map-part").removeClass("upcomeTrip_map_clm");
      $(".map-txt-tab-tw-wrp-inr ").removeClass("upcomeTrip_clm");
      $(".upcomeMap_btn").text("Show Map");
      if (this.text == "Calendar") this.text = "List";
      else this.text = "Calendar";
    } else {
      this.text = "Calendar";
      $(".upcomeMap_btn").removeClass("removeBtn");
      $(".upcomeMap_newVersion").removeClass("addBtn");
    }
  });
  // hide list view
  $(".upcomingTrip-mapView").on("click", function () {
    $(".acc_trip").toggleClass("hideListView");
  });
  // hide map only from calendar view
  $(".upcomeMap_newVersion").on("click", function () {
    $(".wrap-main-map-area-ifrme").toggleClass("hideMapOnly");
    if (this.text == "Hide Map") this.text = "Show Map";
    else this.text = "Hide Map";
  });

  $(".addItinerary-popupBtn").on("click", function () {
    $(".lst-icn-alltab-upctrp").slideToggle();
  });

  $(".mapBtn-hide").on("click", function () {
    $("body").addClass("hideMap-planTrip");
  });
  $(".mapBtn-show").on("click", function () {
    $("body").removeClass("hideMap-planTrip");
  });
  $(window).on("load", function () {
    if (
      $('.mapBtn-show[aria-controls="hor_1_tab_item-1"]').hasClass(
        "resp-tab-active"
      )
    ) {
      $("body").removeClass("hideMap-planTrip");
    }
  });

  $(document).mouseup(function (e) {
    if ($(".classbtn-pls-ban-upc-trp").length) {
      let container_target = $(".classbtn-pls-ban-upc-trp");
      if (
        !container_target.is(e.target) &&
        container_target.has(e.target).length === 0
      ) {
        container_target.removeClass("active");
        $(".classbtn-pls-ban-upc-trp .hvr-dv-box-upcmng").removeClass("show");
        $(".flight_booked_maind_inner .suggestionOpen").removeClass("active");
        $(".classbtn-pls-ban-upc-trp .hvr-dv-box-upcmng").removeClass("show");
        // .hide()
      }
    }
  });
  $(document).mouseup(function (e) {
    if ($(".settingTd").length) {
      let container_target = $(".settingTd");
      if (
        !container_target.is(e.target) &&
        container_target.has(e.target).length === 0
      ) {
        container_target.removeClass("active");
        $(".settingTd .setting_pop").removeClass("settingShow");
        $(".flight_booked_maind_inner .suggestionOpen").removeClass("active");
        $(".settingTd .setting_pop").removeClass("settingShow");
        // .hide()
      }
    }
  });

  $(function () {
    $("#durationTabs").tabs();
  });
  $(function () {
    $("#durationTabs2").tabs();
  });
  $(".upctrpCal-btn").click(function () {
    $(".upcomingTrip-calander-popup").toggleClass("show");
    // $("body").addClass("upctrp-body-new")
    $("body").toggleClass("disableScroll");
    $("html").toggleClass("disableScroll");
    $(".map-mbl-show-nw").removeClass("show");
    $(".shw-map-mobile-vw").text("Show Map");

    $(this).parents(".pin-spacer").addClass("upctrp-body-new");
    if (this.text == "Calendar") this.text = "List";
    else this.text = "Calendar";
  });

  $(document).mouseup(function (e) {
    // if ($('.inline_all_filter').length) {
    //   let container_target = $('.inline_all_filter');
    //   if (
    //     !container_target.is(e.target) &&
    //     container_target.has(e.target).length === 0
    //   ) {
    //     setTimeout(() => {
    //       container_target.removeClass('active');
    //       $(container_target).find(".dropdown .dropdown-toggle").removeClass("show");
    //       $(container_target).find(".dropdown .dropdown-menu").removeClass("show").hide();
    //     }, 5);
    //   }
    //   else {
    //     setTimeout(() => {
    //       container_target.addClass('active');
    //       $(container_target).find(".dropdown .dropdown-toggle").addClass("show");
    //       $(container_target).find(".dropdown .dropdown-menu").addClass("show").show();
    //     }, 5);
    //   }
    // }

    if ($(".pin-spacer").length) {
      let container_target = $(".pin-spacer");
      if (
        !container_target.is(e.target) &&
        container_target.has(e.target).length === 0
      ) {
        container_target.removeClass("upctrp-body-new");
      }
    }
  });

  $(".upcomingTrip-calander-closeBtn").on("click", function () {
    $(".upcomingTrip-calander-popup").removeClass("show");
    // $("body").removeClass("upctrp-body-new")
    $(this).parents(".pin-spacer").removeClass("upctrp-body-new");
    $(".upctrpCal-btn").text("Calendar");
    $("body").removeClass("disableScroll");
    $("html").removeClass("disableScroll");
  });
  $(".likeBtn").click(function () {
    $(this).toggleClass("like-active");
  });

  // stay table show/hide
  $(".compareShow-btn").click(function () {
    $("#stayTable").addClass("tableShow");
    $("#stayList").addClass("listHide");
  });
  $(".compareHide-btn").click(function () {
    $("#stayTable").removeClass("tableShow");
    $("#stayList").removeClass("listHide");
  });

  if ($(".exand-dates-wrapper-new").length) {
    $(".exand-dates-wrapper-new span").on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $(".exand-dates-wrapper-new span").each(function () {
        $(this).siblings("span").removeClass("active");
      });
      $(this).addClass("active");
      var target = $(this).attr("data-target-new"),
        $target = $(target);
      $target
        .parents(".upcomingTrip-calander-popup-wrapper")
        .find(".upcomingTrip-calander-cont")
        .siblings(".upcomingTrip-calander-cont")
        .removeClass("active");
      $target.addClass("active");
      $(".upcomingTrip-calander-dateCommon").removeClass("open");
      $(".upcomingTrip-calander-accordianCont").stop().slideUp();

      $target.find(".upcomingTrip-calander-dateCommon").addClass("open");
      $target.find(".upcomingTrip-calander-accordianCont").stop().slideDown();

      // if (window.outerWidth > 767) {
      //   $('html, body')
      //     .stop()
      //     .animate(
      //       {
      //         scrollTop:
      //           $target.offset().top - $('.fixt-top-headr').outerHeight(),
      //       },
      //       500,
      //       'swing',
      //       function () {
      //         // $target.siblings(".acc_trip").removeClass("active");
      //         // $target.siblings(".acc_trip").find(".acc_trip_head").removeClass("active");
      //         $target.addClass('active')
      //         $target.children('.acc_trip_head').addClass('active')
      //       }
      //     )
      // } else {
      //   $('html, body')
      //     .stop()
      //     .animate(
      //       {
      //         scrollTop:
      //           $target.offset().top - $('.fixt-top-headr').outerHeight() - 50,
      //       },
      //       500,
      //       'swing',
      //       function () {
      //         // $target.siblings(".acc_trip").removeClass("active");
      //         // $target.siblings(".acc_trip").find(".acc_trip_head").removeClass("active");
      //         $target.addClass('active')
      //         $target.children('.acc_trip_head').addClass('active')
      //       }
      //     )
      // }
    });
  }
});

$(".upcomeMap_btn").on("click", function () {
  $(".map-txt-tab-tw-wrp-inr").toggleClass("upcomeTrip_clm");
  $(".tab-tw-upctrip-map-part").toggleClass("upcomeTrip_map_clm");
  // $(this).toggleClass('active')
});

$(".classBtn_plus").on("click", function () {
  $(".hvr-dv-box-upcmng").toggleClass("show");
});

$(".day-show-fld").on("click", function () {
  $(".day-inr-show").toggleClass("show");
});

// // mobile calendar
// const picker = new easepick.create({
//   element: document.getElementById('calHide-mobile'),
//   css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css'],
//   plugins: ['RangePlugin'],
//   inline: true,
//   RangePlugin: {
//     tooltipNumber(num) {
//       return num - 1
//     },
//     locale: {
//       one: 'night',
//       other: 'nights',
//     },
//   },
// })

$(document).ready(function () {
  $("#formButton").click(function () {
    $(".show-pag-frm-serch-bx").toggleClass("hidediv");
    $("#form1").addClass("showsrchbx");
  });

  $(".sho-srch-frm-bx").click(function () {
    $(".show-pag-frm-serch-bx").removeClass("hidediv");
    $("#form1").removeClass("showsrchbx");
  });
});

$(document).ready(function () {
  $(".plan-trip-show").click(function () {
    $(".sub-menu").toggle();
  });
  $(".plan-trip-show2").click(function () {
    $(".submenu2").toggle();
  });
});

// mobile range date picker open
var dateFrom = null;
var dateTo = null;

// $("#from").val('06/10/2015');
// $("#to").val('10/10/2015');
var selectedDate = null;
var tempDateFrom = null;
var tempDateTo = null;

$(".datepicker2").datepicker({
  minDate: 0,
  numberOfMonths: [2, 1],
  dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
  // defaultDate: '06/10/2015',
  beforeShowDay: function (date) {
    dateFrom = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      $("#from").val()
    );
    dateTo = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      $("#to").val()
    );

    if (dateFrom != null) {
      if (date.getTime() == dateFrom.getTime()) {
        return [true, "dateFrom"];
      }
    }
    if (dateTo != null) {
      if (date.getTime() == dateTo.getTime()) {
        return [true, "dateTo"];
      }
    }
    return [
      true,
      dateFrom &&
      (date.getTime() == dateFrom.getTime() ||
        (dateTo && date >= dateFrom && date <= dateTo))
        ? "dp-highlight"
        : "",
    ];
  },
  onSelect: function (dateText, inst) {
    console.log("onSelect");
    dateFrom = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      $("#from").val()
    );
    dateTo = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      $("#to").val()
    );
    selectedDate = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      dateText
    );
    if (!dateFrom || dateTo) {
      $("#from").val(dateText);
      $("#to").val("");
      $(this).datepicker();
    } else if (selectedDate < dateFrom) {
      $("#to").val($("#from").val());
      $("#from").val(dateText);
      $(this).datepicker();
    } else {
      $("#to").val(dateText);
      $(this).datepicker();
    }
    setTimeout(function () {
      highlightBetweenDates();
    }, 0);
  },
  refresh: function () {
    alert("sdfdsf");
  },
});

$(".datepicker").datepicker({
  minDate: 0,
  numberOfMonths: [12, 1],
  dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
  // defaultDate: '06/10/2015',
  beforeShowDay: function (date) {
    dateFrom = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      $("#from").val()
    );
    dateTo = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      $("#to").val()
    );

    if (dateFrom != null) {
      if (date.getTime() == dateFrom.getTime()) {
        return [true, "dateFrom"];
      }
    }
    if (dateTo != null) {
      if (date.getTime() == dateTo.getTime()) {
        return [true, "dateTo"];
      }
    }
    return [
      true,
      dateFrom &&
      (date.getTime() == dateFrom.getTime() ||
        (dateTo && date >= dateFrom && date <= dateTo))
        ? "dp-highlight"
        : "",
    ];
  },
  onSelect: function (dateText, inst) {
    console.log("onSelect");
    dateFrom = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      $("#from").val()
    );
    dateTo = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      $("#to").val()
    );
    selectedDate = $.datepicker.parseDate(
      $.datepicker._defaults.dateFormat,
      dateText
    );
    if (!dateFrom || dateTo) {
      $("#from").val(dateText);
      $("#to").val("");
      $(this).datepicker();
    } else if (selectedDate < dateFrom) {
      $("#to").val($("#from").val());
      $("#from").val(dateText);
      $(this).datepicker();
    } else {
      $("#to").val(dateText);
      $(this).datepicker();
    }
    setTimeout(function () {
      highlightBetweenDates();
    }, 0);
  },
  refresh: function () {
    alert("sdfdsf");
  },
});

var currentDate = null;
var allTds = null;

function highlightBetweenDates() {
  if (dateFrom == null || dateTo == null) {
    $(".ui-datepicker-calendar td").mouseover(function () {
      if (dateFrom != null && !$(this).hasClass("ui-datepicker-unselectable")) {
        currentDate = $.datepicker.parseDate(
          $.datepicker._defaults.dateFormat,
          $(this).children().text() +
            "/" +
            (parseInt($(this).attr("data-month")) + 1) +
            "/" +
            parseInt($(this).attr("data-year"))
        );
        if (currentDate != selectedDate) {
          if (selectedDate === null) {
            selectedDate = new Date();
          }
          allTds = $(".ui-datepicker").find("td");
          allTds.removeClass("dp-highlight");
          found = false;
          if (currentDate < selectedDate) {
            for (i = 0; i < allTds.length; i++) {
              if (allTds[i] == this) {
                found = true;
              }
              if ($(allTds[i]).hasClass("ui-datepicker-current-day")) {
                break;
              }
              if (found) {
                $(allTds[i]).addClass("dp-highlight");
              }
            }
          } else if (currentDate > selectedDate) {
            for (i = 0; i < allTds.length; i++) {
              if (found) {
                $(allTds[i]).addClass("dp-highlight");
              }
              if ($(allTds[i]).hasClass("ui-datepicker-current-day")) {
                found = true;
              }
              if (allTds[i] == this) {
                break;
              }
            }
          }
        } else {
          console.log("same");
        }
      } else {
        console.log("NOT");
      }
    });
  } else {
    $(".ui-datepicker-calendar td").unbind("mouseover");
    $(".ui-datepicker-calendar td").off("mouseover");
  }
}

highlightBetweenDates();
$(".datepicker3").datepicker({
  yearRange: "-100:+0",
  changeMonth: true,
  changeYear: true,
});

// $('.datepicker3').datepicker({
//   minDate: 0,
//   numberOfMonths: [1, 1],
//   dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
//   // defaultDate: '06/10/2015',
//   beforeShowDay: function (date) {
//     dateFrom = $.datepicker.parseDate(
//       $.datepicker._defaults.dateFormat,
//       $('#from').val()
//     )
//     dateTo = $.datepicker.parseDate(
//       $.datepicker._defaults.dateFormat,
//       $('#to').val()
//     )

//     if (dateFrom != null) {
//       if (date.getTime() == dateFrom.getTime()) {
//         return [true, 'dateFrom']
//       }
//     }
//     if (dateTo != null) {
//       if (date.getTime() == dateTo.getTime()) {
//         return [true, 'dateTo']
//       }
//     }
//     return [
//       true,
//       dateFrom &&
//       (date.getTime() == dateFrom.getTime() ||
//         (dateTo && date >= dateFrom && date <= dateTo))
//         ? 'dp-highlight'
//         : '',
//     ]
//   },
//   onSelect: function (dateText, inst) {
//     console.log('onSelect')
//     dateFrom = $.datepicker.parseDate(
//       $.datepicker._defaults.dateFormat,
//       $('#from').val()
//     )
//     dateTo = $.datepicker.parseDate(
//       $.datepicker._defaults.dateFormat,
//       $('#to').val()
//     )
//     selectedDate = $.datepicker.parseDate(
//       $.datepicker._defaults.dateFormat,
//       dateText
//     )
//     if (!dateFrom || dateTo) {
//       $('#from').val(dateText)
//       $('#to').val('')
//       $(this).datepicker()
//     } else if (selectedDate < dateFrom) {
//       $('#to').val($('#from').val())
//       $('#from').val(dateText)
//       $(this).datepicker()
//     } else {
//       $('#to').val(dateText)
//       $(this).datepicker()
//     }
//     setTimeout(function () {
//       highlightBetweenDates()
//     }, 0)
//   },
//   refresh: function () {
//     alert('sdfdsf')
//   },
// })
// mobile range date picker end

$("[data-element]").on("click", function () {
  let _tr = $(this).attr("data-element");
  if (!$(this).hasClass("act")) {
    // $('[data-target]').removeClass('active')
    // } else {
    $("[data-element]").removeClass("act");
    $("[data-target]").removeClass("active");
    $(this).addClass("act");
    $("[data-target='" + _tr + "']").addClass("active");

    if ($(".flight_booked_maind_inner").length) {
      $(".flight_booked_maind_inner").removeClass("active");
      $(".flight_booked_maind_inner .cusCalender").removeClass(
        "cusCalender-open"
      );
      $(".flight_booked_maind_inner .suggestionOpen").removeClass("active");
      $(".flight_booked_maind_inner .airport-suggestion-dropdown")
        .removeClass("open")
        .hide();

      $(".flight_booked_maind_inner .airport-suggestion-dropdown")
        .niceScroll()
        .hide();
      $(".flight_booked_maind_inner .airport-suggestion-dropdown")
        .niceScroll()
        .resize();

      $(".cusCalender").removeClass("cusCalender-open");
      $(".cusDate-picker").removeClass("cusDate-picker-active");
    }
  }
});

$("[data-qty] .qty-count").on("click", function () {
  if (
    $(this).parents(".inner-wrap-people-chs").find(".child-qnty_box").length
  ) {
    let init_val = 0;
    setTimeout(() => {
      init_val = parseInt(
        $(this).parents(".right-nmbr-ppl").find(".product-qty").val()
      );
      //console.log(init_val);
      if (init_val > 0) {
        $(this)
          .parents(".inner-wrap-people-chs")
          .find(".child-qnty_box")
          .addClass("show")
          .show();
      } else {
        $(this)
          .parents(".inner-wrap-people-chs")
          .find(".child-qnty_box")
          .removeClass("show")
          .hide();
      }
    }, 5);
  }
});

$(".cst_cusDate-picker").on("click", function () {
  if (
    $(this).parents(".flight_booked_maind_inner").find(".singleCalToggle")
      .length
  ) {
    $(".cusCalender").removeClass("cusCalender-open");
    $(".cusCalender.singleCalToggle").removeClass("cusCalender-open");
    if (!$(this).hasClass("cusDate-picker-active")) {
      setTimeout(() => {
        $(this)
          .parents(".flight_booked_maind_inner")
          .find(".singleCalToggle")
          .addClass("cusCalender-open");
      }, 5);
    }
  }
});

// Circle Progressbar
function makesvg(percentage, inner_text = "") {
  var abs_percentage = Math.abs(percentage).toString();
  // var percentage_str = percentage.toString();
  var classes = "";

  // if(percentage < 0){
  //   classes = "danger-stroke circle-chart__circle--negative";
  // } else if(percentage > 0 && percentage <= 30){
  //   classes = "warning-stroke";
  // } else{
  //   classes = "success-stroke";
  // }

  var svg =
    '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">' +
    '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />' +
    '<circle class="circle-chart__circle ' +
    classes +
    '"' +
    'stroke-dasharray="' +
    abs_percentage +
    ',100"    cx="16.9" cy="16.9" r="15.9" />' +
    '<g class="circle-chart__info">';
  //  + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';

  // if(inner_text){
  //   svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
  // }

  svg += " </g></svg>";

  return svg;
}

(function ($) {
  $.fn.circlechart = function () {
    this.each(function () {
      var percentage = $(this).data("percentage");
      var inner_text = $(this).text();
      $(this).html(makesvg(percentage, inner_text));
    });
    return this;
  };
})(jQuery);

$(function () {
  $(".circlechart").circlechart();
});

// Circle ProgressBAr
let cpBar = document.querySelectorAll(".cpBar");
for (let i = 0; i < cpBar.length; i++) {
  const progressValue = cpBar[i].querySelector(".prcntge_bar");
  let crrntValue = cpBar[i].querySelector(".current_value").innerHTML;
  let ttlValue = cpBar[i].querySelector(".totl_value").innerHTML;
  let crrntValueNum = parseInt(crrntValue);
  let ttlValueNum = parseInt(ttlValue);
  let avgTotal = crrntValueNum / ttlValueNum;
  let percentTotal = avgTotal * 100;

  cpBar[i].querySelector(".current_value").dataset.cnt = Number(crrntValue);
  cpBar[i].querySelector(".prcntge_bar").dataset.svgcnt = Number(percentTotal);
  // progressValue.style.setProperty('--percent', `0`);
  progressValue.style.strokeDashoffset = "420px";

  // function setValue(value) {
  //   progressValue.style.setProperty('--percent', `${percentTotal}`);
  //   percentTotal.valueOf = value;
  // }
  // setValue();
}

// number only counter
let nmCounter = document.querySelectorAll(".invdl_trvlBox");
for (let i = 0; i < nmCounter.length; i++) {
  let crrntValue2 = nmCounter[i].querySelector(".current_value2").innerHTML;
  let crrntValueNum = parseInt(crrntValue2);
  nmCounter[i].querySelector(".current_value2").dataset.cnt2 =
    Number(crrntValue2);
}

$(".dcheck-search-dropdown-open").on("click", function () {
  $(this)
    .parent(".dcheck-searchArea-input")
    .find(".dcheck-search-dropdown")
    .toggleClass("open");
});

$(document).mouseup(function (e) {
  var container = $(".dcheck-search-dropdown");

  // if the target of the click isn't the container nor a descendant of the container
  if (
    !container.is(e.target) &&
    !$(".dcheck-search-dropdown-open").is(e.target) &&
    container.has(e.target).length === 0
  ) {
    container.removeClass("open");
  }
});

$(".navbar-nav > li >a.discvr,.bottom-fixt-mne-all-pgs li>a.discvr").on(
  "click",
  function () {
    // $('.srch_drpDwn').slideToggle()
    $(".srch_drpDwn").toggleClass("active");
  }
);
$(".search_drpDwn_close").on("click", function () {
  // $('.srch_drpDwn').slideToggle()
  $(".srch_drpDwn").removeClass("active");
});
// Search Toggle close on click outside
$(document).mouseup(function (e) {
  var container = $(".srch_drpDwn");

  // if the target of the click isn't the container nor a descendant of the container
  if (
    !container.is(e.target) &&
    !$(".navbar-nav > li >a.discvr,.bottom-fixt-mne-all-pgs li>a.discvr").is(
      e.target
    ) &&
    container.has(e.target).length === 0
  ) {
    container.removeClass("active");
  }
});

var drpDwnHeight = $(".fixt-top-headr").outerHeight();
$(".srch_drpDwn").css("marginTop", drpDwnHeight + "px");

$(window).resize(function () {
  var drpDwnHeight = $(".fixt-top-headr").outerHeight();
  $(".srch_drpDwn").css("marginTop", drpDwnHeight + "px");
});
// Search Drop-Down Tab
$("#srchDrpDwnTab").easyResponsiveTabs({
  type: "default", //Types: default, vertical, accordion
  width: "auto", //auto or any width like 600px
  fit: true, // 100% fit in a container
  tabidentify: "srchDrp_1", // The tab groups identifier
  activate: function (event) {
    // Callback function if tab is switched
    var $tab = $(this);
    var $info = $("#nested-tabInfo");
    var $name = $("span", $info);
    $name.text($tab.text());
    $info.show();
  },
});
//Horizontal Tab
$(
  "#parentHorizontalTab2,#parentHorizontalTab3,#parentHorizontalTab4,#parentHorizontalTab5,#parentHorizontalTab6,#parentHorizontalTab7, #parentHorizontalTabComtitent"
).easyResponsiveTabs({
  type: "default", //Types: default, vertical, accordion
  width: "auto", //auto or any width like 600px
  fit: true, // 100% fit in a container
  tabidentify: "hor_1", // The tab groups identifier
  activate: function (event) {
    // Callback function if tab is switched
    var $tab = $(this);
    var $info = $("#nested-tabInfo");
    var $name = $("span", $info);
    $name.text($tab.text());
    $info.show();
    $(".goCalender-slider").slick("refresh");
    $(".goCalender-slider").resize();
    $(".imgGallery-slider").slick("refresh");
    $(".imgGallery-slider").resize();
    $(".imgGallery-nav").slick("refresh");
    $(".imgGallery-nav").resize();
    $(".hotDeals-slider").slick("refresh");
    $(".hotDeals-slider").resize();
  },
});

$(".resp-tabs-list li").click(function () {
  ScrollTrigger.refresh();
});

// am4core.ready(function() {

//   // Themes begin
//   // Themes end

//   /* Create map instance */
//   var chart = am4core.create("chartdiv", am4maps.MapChart);

//   /* Set map definition */
//   chart.geodata = am4geodata_worldLow;

//   /* Set projection */
//   chart.projection = new am4maps.projections.Miller();

//   /* Create map polygon series */
//   var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//   /* Make map load polygon (like country names) data from GeoJSON */
//   polygonSeries.useGeodata = true;

//   /* Configure series */
//   var polygonTemplate = polygonSeries.mapPolygons.template;
//   polygonTemplate.applyOnClones = true;
//   polygonTemplate.togglable = true;
//   polygonTemplate.tooltipText = "{name}";
//   polygonTemplate.nonScalingStroke = true;
//   polygonTemplate.strokeOpacity = 0.5;
//   polygonTemplate.fill = chart.colors.getIndex(0);
//   var lastSelected;
//   polygonTemplate.events.on("hit", function(ev) {
//     if (lastSelected) {
//       // This line serves multiple purposes:
//       // 1. Clicking a country twice actually de-activates, the line below
//       //    de-activates it in advance, so the toggle then re-activates, making it
//       //    appear as if it was never de-activated to begin with.
//       // 2. Previously activated countries should be de-activated.
//       lastSelected.isActive = false;
//     }
//     ev.target.series.chart.zoomToMapObject(ev.target);
//     if (lastSelected !== ev.target) {
//       lastSelected = ev.target;
//     }
//   })

//   /* Create selected and hover states and set alternative fill color */
//   var ss = polygonTemplate.states.create("active");
//   ss.properties.fill = chart.colors.getIndex(2);

//   var hs = polygonTemplate.states.create("hover");
//   hs.properties.fill = chart.colors.getIndex(4);

//   // Hide Antarctica
//   polygonSeries.exclude = ["AQ"];

//   // Small map
//   //chart.smallMap = new am4maps.SmallMap();
//   // Re-position to top right (it defaults to bottom left)
//   //chart.smallMap.align = "right";
//   //chart.smallMap.valign = "top";
//   //chart.smallMap.series.push(polygonSeries);

//   // Zoom control
//   chart.zoomControl = new am4maps.ZoomControl();

//   var homeButton = new am4core.Button();
//   homeButton.events.on("hit", function(){
//     chart.goHome();
//   });

//   homeButton.icon = new am4core.Sprite();
//   homeButton.padding(7, 5, 7, 5);
//   homeButton.width = 30;
//   homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
//   homeButton.marginBottom = 10;
//   homeButton.parent = chart.zoomControl;
//   homeButton.insertBefore(chart.zoomControl.plusButton);

//   }); // end am4core.ready()

$(".profile-form-group .cusDate-picker").on("click", function () {
  $(".cusCalender").toggleClass("cusCalender-open");
});

$(document).mouseup(function (e) {
  var container = $(" .profile-form-group .cusCalender");

  // if the target of the click isn't the container nor a descendant of the container
  if (
    !container.is(e.target) &&
    !$(".profile-form-group .cusDate-picker").is(e.target) &&
    container.has(e.target).length === 0
  ) {
    container.removeClass("cusCalender-open");
  }
});

$(".cusCalender-closeBtn-dash").on("click", function () {
  $(this).parents(".cusCalender").removeClass("cusCalender-open");
  $(".change_paceholder_calendar")
    .removeClass("placeholder_active")
    .attr("placeholder", "Birthday");
});

// $(function () {
//   $(".load_more_div_desktop .load_more_div .dcheckbox-col").slice(0, 8).addClass('display');
//   $(".load_more").on('click', function (e) {
//     e.preventDefault();
//     $(".load_more_div_desktop .load_more_div .dcheckbox-col:hidden").slice(0, 8).slideDown(700);

//     if ($(".load_more_div_desktop .load_more_div .dcheckbox-col:hidden").length === 0) {
//       $(".load_more").parent(".load_more_btn_wpr").hide();
//       $(".collapse_after_load").addClass("show")

//     } else {
//       // $('html,body').animate({
//       //     scrollTop: $(this).offset().top
//       // }, 1500);
//       $(".collapse_after_load").removeClass("show")
//     }
//   });
// });
// $(function () {
//   // $(".load_more_div .dcheckbox-col").slice(0, 16).addClass('display');
//   $(".load_collapse").on('click', function (e) {
//     e.preventDefault();
//   // $(".load_more_div .dcheckbox-col").slice(0, 16).addClass('display');
//   $(".collapse_after_load").removeClass("show")
//   $(".load_more_div_desktop .load_more_btn_wpr").show();
//     $(".load_more_div_desktop .load_more_div .dcheckbox-col").slice(0, 16).slideUp(1000);

//   });
// });

// load more checkbox for mobile

// $(function () {
//   $(".load_more_div_mobile .load_more_div_mobile_wpr").slice(0, 1).addClass('display');
//   $(".load_more").on('click', function (e) {
//     e.preventDefault();
//     $(".load_more_div_mobile .load_more_div_mobile_wpr:hidden").slice(0, 1).slideDown(700);
//     $(".load_more_div_mobile .load_more_div_mobile_wpr:hidden").slice(0, 1).addClass("test");

//     if ($(".load_more_div_mobile .load_more_div_mobile_wpr:hidden").length === 0) {
//       $(".load_more").parent(".load_more_btn_wpr").hide();
//       $(".collapse_after_load").addClass("show")

//     } else {
//       // $('html,body').animate({
//       //     scrollTop: $(this).offset().top
//       // }, 1500);
//       $(".collapse_after_load").removeClass("show")
//     }

//   });
// });

// $(function () {
//   // $(".load_more_div .dcheckbox-col").slice(0, 16).addClass('display');
//   $(".load_collapse").on('click', function (e) {
//     e.preventDefault();
//   // $(".load_more_div .dcheckbox-col").slice(0, 16).addClass('display');
//   $(".collapse_after_load").removeClass("show")
//   $(".load_more_btn_wpr").show();
//     // $(".load_more_div_mobile .load_more_div_mobile_wpr").slice(0, 2).slideUp(1000);

//   });
// });

var index = 1;
var total = $(".load_more_div_mobile .load_more_div_mobile_wpr").length;
$(".load_more_div_mobile .load_more_div_mobile_wpr:first").addClass("display");
$(".load_more").click(function (e) {
  e.preventDefault();
  $(".load_more_div_mobile .load_more_div_mobile_wpr").removeClass(
    "load_more_overlay"
  );
  $(".load_more_div_mobile .load_more_div_mobile_wpr")
    .eq(index)
    .addClass("load_more_overlay display");
  $(".load_more_div_mobile .load_more_div_mobile_wpr")
    .eq(index)
    .delay(1000)
    .queue(function () {
      $(this).removeClass("load_more_overlay").dequeue();
    });

  index = (index + 1) % total;

  if (
    $(".load_more_div_mobile .load_more_div_mobile_wpr:last").is(":visible")
  ) {
    $(this).parent().hide();
    $(".collapse_after_load").addClass("show");
    index = 1;
  }
});
$(".collapse_after_load").click(function () {
  var index = 1;
  $(
    ".load_more_div_mobile .load_more_div_mobile_wpr:not(:first-child)"
  ).removeClass("display");
  $(".load_more_btn_wpr").show();
  $(".collapse_after_load").removeClass("show");
  $(".load_more_div_mobile").addClass("load_more_overlay");
  $(".load_more_div_mobile")
    .delay(1000)
    .queue(function () {
      $(this).removeClass("load_more_overlay").dequeue();
    });
});

///// animate number
if ($("[data-cnt]").length) {
  inView("[data-cnt]").on("enter", function (el) {
    if (!el.classList.contains("active")) {
      el.classList.add("active");
      //number counter
      let set_num_target = $(el),
        Contz = {
          val: 0,
        },
        get_num = parseInt(set_num_target.attr("data-cnt"));
      set_num_target.html(0);
      TweenMax.to(Contz, 2, {
        delay: 0.4,
        val: get_num,
        roundProps: "val",
        onUpdate: function () {
          set_num_target.html(Contz.val.toLocaleString());
          // console.log(Contz.val)
        },
      });
    }
  });
  // .on('exit', function (el) {
  //   if (el.classList.contains("active")) {
  //     el.classList.remove('active');
  //     //number counter
  //     let set_num_target = $(el);
  //     let get_num = parseInt(set_num_target.attr("data-cnt")),
  //       Contz = {
  //         val: get_num
  //       };

  //     set_num_target.html(get_num.toLocaleString());
  //     TweenMax.to(Contz, 0.1, {
  //       val: 0,
  //       roundProps: "val",
  //       onUpdate: function () {
  //         set_num_target.html(Contz.val.toLocaleString());
  //         // console.log(Contz.val)
  //       }
  //     });
  //   }
  // });
}

if ($("[data-svgcnt]").length) {
  inView("[data-svgcnt]").on("enter", function (el) {
    if (!el.classList.contains("active")) {
      el.classList.add("active");
      //number counter
      let set_num_target = el,
        Contz = {
          val: 0,
        },
        get_num = parseInt($(set_num_target).attr("data-svgcnt"));
      set_num_target.style.strokeDashoffset = "420px";
      gsap.to(Contz, 2, {
        delay: 0.4,
        val: get_num,
        roundProps: "val",
        onUpdate: function () {
          set_num_target.style.strokeDashoffset =
            "calc(420px - (420px * " + Contz.val + ") / 100)";
          // console.log(Contz.val)
        },
      });
    }
  });
  // .on('exit', function (el) {
  //   if (el.classList.contains("active")) {
  //     el.classList.remove('active');
  //     //number counter
  //     let set_num_target = el;
  //     let get_num = parseInt($(set_num_target).attr("data-svgcnt")),
  //       Contz = {
  //         val: get_num
  //       };

  //     set_num_target.style.strokeDashoffset = "calc(420px - (420px * " + get_num + ") / 100)";

  //     gsap.to(Contz, 0.1, {
  //       val: 0,
  //       roundProps: "val",
  //       onUpdate: function () {
  //         set_num_target.style.strokeDashoffset = "calc(420px - (420px * " + Contz.val + ") / 100)";
  //         // console.log(Contz.val)
  //       }
  //     });
  //   }
  // });
}

///// animate number
if ($("[data-cnt2]").length) {
  inView("[data-cnt2]").on("enter", function (el) {
    if (!el.classList.contains("active")) {
      el.classList.add("active");
      //number counter
      let set_num_target = $(el),
        Contz = {
          val: 0,
        },
        get_num = parseInt(set_num_target.attr("data-cnt2"));
      set_num_target.html(0);
      TweenMax.to(Contz, 2, {
        delay: 0.4,
        val: get_num,
        roundProps: "val",
        onUpdate: function () {
          set_num_target.html(Contz.val.toLocaleString());
          // console.log(Contz.val)
        },
      });
    }
  });
  // .on('exit', function (el) {
  //   if (el.classList.contains("active")) {
  //     el.classList.remove('active');
  //     //number counter
  //     let set_num_target = $(el);
  //     let get_num = parseInt(set_num_target.attr("data-cnt2")),
  //       Contz = {
  //         val: get_num
  //       };

  //     set_num_target.html(get_num.toLocaleString());
  //     TweenMax.to(Contz, 0.1, {
  //       val: 0,
  //       roundProps: "val",
  //       onUpdate: function () {
  //         set_num_target.html(Contz.val.toLocaleString());
  //         // console.log(Contz.val)
  //       }
  //     });
  //   }
  // });
}

$(".profile-main-menu").niceScroll({
  cursorcolor: "#C4C4C4",
  cursorwidth: "6px",
  cursorborder: "none",
  cursorborderradius: "50px",
  autohidemode: true,
  railpadding: { top: 10, right: 0, left: 0, bottom: 10 },
});

$(".profile-main-menu").mouseover(function () {
  $(".profile-main-menu").getNiceScroll().resize();
});
$(".profile-main-menu a").on("click", function () {
  $(".profile-main-menu").getNiceScroll().resize();
});

// change placeholder
$(".change_paceholder_calendar").on("click", function () {
  if (
    $(this)
      .parent(".calentim_container")
      .find(".calentim-popup")
      .css("display") == "block"
  ) {
    $(this).addClass("placeholder_active").attr("placeholder", "mm/dd/yyyy ");
  } else {
    $(this).removeClass("placeholder_active").attr("placeholder", "Birthday");
  }
});
$(document).on("click", function (e) {
  if (!$(e.target).hasClass("placeholder_active")) {
    $(".change_paceholder_calendar").attr("placeholder", "Birthday");
  } else {
    if (
      !$(this)
        .parent(".calentim_container")
        .find(".calentim-popup")
        .css("display") == "block"
    ) {
      $(".change_paceholder_calendar")
        .removeClass("placeholder_active")
        .attr("placeholder", "Birthday");
    }
  }
});

$(document).ready(function () {
  $(".profile-left .profile-main-menu").css({
    height: $(".profile-right-wprr").innerHeight(),
  });

  // use min-height on the pages that have less content start
  function adjustPageHeight() {
    if ($(window).width() > 991) {
      var heightOfWindow = $(window).height();
      var headerHeight = $("header").innerHeight();
      var footerHeight = $("footer").innerHeight();
      var pageHeight = heightOfWindow - (headerHeight + footerHeight);
      $(".adjust_page_height").css({ "min-height": pageHeight });
    }
  }
  adjustPageHeight();
  function adjustCountryCode() {
    var countryCodeWidth = $(".profile-form-group").innerWidth();
    $(".iti__country-list").css({ width: countryCodeWidth });
  }
  adjustCountryCode();

  $(window).resize(function () {
    adjustPageHeight();
    adjustCountryCode();
  });
  // use min-height on the pages that have less content end
});

$(window).resize(function () {
  $(".profile-left .profile-main-menu").css({
    height: $(".profile-right-wprr").innerHeight(),
  });
});

// image upload
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});

$("#telephone").intlTelInput({
  // options here
  placeholderNumberType: "MOBILE",
});

function checkElements(els) {
  var element = document.querySelector(els);
  if (typeof element != "undefined" && element != null) {
    return true;
  } else {
    return false;
  }
}

// skeletons effect
//   $(".acc-head-dash").on("click", function(){
//   if (checkElements(".skeleton")) {
//   const skeletons = document.querySelectorAll('.skeleton')
//   skeletons.forEach((skeletonem) => {
//       setTimeout(() => {
//           skeletonem.classList.remove('skeleton')
//       }, 4000)
//   })
// }
//   })

// $('.departure-suggestion-btn').on('click', function () {
//   $(this).next('.dcheck-search-dropdown2').toggleClass("open")
// })

$(document).mouseup(function (e) {
  var container = $(".dcheck-search-dropdown2");

  // if the target of the click isn't the container nor a descendant of the container
  if (
    !container.is(e.target) &&
    !$(".departure-suggestion-btn").is(e.target) &&
    container.has(e.target).length === 0
  ) {
    container.removeClass("open");
  }
});
$(document).on("click", ".departure-suggestion-btn", function () {
  $(this).next(".dcheck-search-dropdown2").toggleClass("open");
});

// append input field
$(".add_depart_city").on("click", function () {
  $(".profile-form-row").append(
    ' <div class="col-lg-4 col-md-6 profile-form-col"><div class="profile-form-group profile-form-group-close-icon"><a href="javascript:void(0)" class="closeAppend-input" ><i><img src="assets/images/cross-btn.svg" alt=""></i></a><input type="text" placeholder="Departing City" class="profile-input-cmn departure-suggestion-btn"><div class="dcheck-search-dropdown2"><ul><li><a href="#">City 1</a></li><li><a href="#">City 2</a></li><li><a href="#">City 3</a></li><li><a href="#">City 4</a></li><li><a href="#">City 5</a></li></ul></div></div></div>'
  );
});

// remove appended div
$(document).on("click", ".closeAppend-input", function (e) {
  $(this).parent().parent().remove();
});

$(".hdsw_footer").on("click", function () {
  $(this).toggleClass("expand_active");
  $(".tripiry_footerv2").toggleClass("show_footer");

  if ($(this).hasClass("expand_active")) {
    $(this).find(".chng_text").text("Hide Footer");
    // $("body").addClass("footer_overlay");
    $("body, html").addClass("hide_scroll");
    $("body").append("<div class='footer_overlay'></div>");
  } else {
    $(this).find(".chng_text").text("Expand Footer");
    // $("body").removeClass("footer_overlay");
    $("body, html").removeClass("hide_scroll");
    $("body").find(".footer_overlay").remove();
  }
});

// $(".footer_overlay").on("click", function (){
//   $(this).remove();
// })

$(document).on("click", ".footer_overlay", function (e) {
  $(this).remove();
  $("body, html").removeClass("hide_scroll");
  $(".tripiry_footer").removeClass("show_footer");
  $(".hdsw_footer").removeClass("expand_active");
  $(".hdsw_footer").find(".chng_text").text("Expand Footer");
});

$(".profile-main-menuv2").mouseenter(function () {
  $("body, html ").addClass("scroll_for_one");
});
$(".profile-main-menuv2").mouseleave(function () {
  $("body, html").removeClass("scroll_for_one");
});

$(".parentHorizontalTabComtitent_wpr .resp-tab-item").on("click", function () {
  $(".parentHorizontalTabComtitent_wpr .resp-tab-content").addClass(
    "tab_loader"
  );
  $(".parentHorizontalTabComtitent_wpr .resp-tab-content")
    .delay(4000)
    .queue(function () {
      $(this).removeClass("tab_loader").dequeue();
    });
});
$(".load_more, .load_collapse").on("click", function () {
  $(".load_more_div_desktop .load_more_div").addClass("load_more_overlay");
  $(".load_more_div_desktop .load_more_div")
    .delay(1000)
    .queue(function () {
      $(this).removeClass("load_more_overlay").dequeue();
    });
});

$(document).mouseup(function (e) {
  var container = $(".gender_dropdown");

  // if the target of the click isn't the container nor a descendant of the container
  if (
    !container.is(e.target) &&
    !$(".gender_dropdown_btn").is(e.target) &&
    container.has(e.target).length === 0
  ) {
    container.removeClass("open");
  }
});
$(document).on("click", ".gender_dropdown_btn", function () {
  $(this).next(".gender_dropdown").toggleClass("open");
});
moment.locale("	dd");

$("#calentim_cal").calentim({
  singleDate: true,
  calendarCount: 1,
  showHeader: true,
  showFooter: false,
  // autoCloseOnSelect: true,
  showTimePickers: false,
  startEmpty: true,
  container: ".calentim_container",
  format: "L",
  onaftershow: function () {
    function printYear() {
      console.log("asfasf");
      setTimeout(() => {
        let selector = $(".calentim-year-selector .cal_year_wpr");
        selector.append(
          "<span class='cal_year_range'>" +
            selector.find(".calentim-ys-year:eq(0)").text() +
            " - " +
            selector
              .find(
                ".calentim-ys-year:eq(" +
                  (selector.find(".calentim-ys-year").length - 1) +
                  ")"
              )
              .text() +
            "</span>"
        );
      }, 200);
    }
    $("body").on("click", ".calentim-year-switch", printYear);
    $("body").on("click", ".calentim-ys-year-next", printYear);
    $("body").on("click", ".calentim-ys-year-prev", printYear);
  },
});

// $(document).on('click', '#calentim_cal', function (e) {
//   $('.calentim-month-selector').children().wrap('<div></div>');
//   $(".calentim-ms-month").addClass("test")
// document.querySelector(".calentim-ms-month").classList.add("abcd");

// });
