//main navigation

jQuery(document).ready(function ($) {
  if ($(".filter_sec").length) {
    $(window).on("show.bs.dropdown", function (e) {
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
    });

    $(window).on("hide.bs.dropdown", function (e) {
      let dropdownMenu = $(
        ".cst_dropdown.dropdown-menu[aria-labelledby='" +
          $(e.target).attr("id") +
          "']"
      );
      $(e.target).append(dropdownMenu.detach());
      dropdownMenu.hide();
    });

    let flt_slider = $(".slid-drop-dwn-nw-all-tp");
    let slideIndex = flt_slider.find(".sngl-sld-all-nw-dp").length;
    const slideShow = 6;

    function getSliderSettings() {
      return {
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: slideShow,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        centerMode: false,
        adaptiveHeight: true,
        //  variableWidth: true,
      };
    }
    flt_slider.slick(getSliderSettings());

    setTimeout(() => {
      $(document).on(
        "click",
        ".dropdown-menu.cst_dropdown .dropdown-item",
        function () {
          let data_id =
            "#" +
            $(this)
              .parents(".dropdown-menu.cst_dropdown")
              .attr("aria-labelledby");
          if ($(data_id).parents(".sngl-sld-all-nw-dp").length) {
            $(data_id).parents(".sngl-sld-all-nw-dp").hide();
            slideIndex++;
            flt_slider.slick(
              "slickAdd",
              '<div class="sngl-sld-all-nw-dp fltr_txt"><div class="single-slct-all-ttd-main"><button class="srch_label">filter label<span data-id="' +
                data_id +
                '" class="close_label">X</span></button></div></div>'
            );
            // flt_slider.slick('unslick');
            // flt_slider.slick(getSliderSettings());

            flt_slider.slick("slickGoTo", Math.abs(slideIndex - slideShow));
          }
        }
      );

      $(document).on("click", ".fltr_txt .close_label", function () {
        flt_slider.slick("slickRemove", slideIndex - 1);
        if (slideIndex !== 0) {
          slideIndex--;
        }
        // flt_slider.slick('unslick');
        // flt_slider.slick(getSliderSettings());
        flt_slider.slick("slickGoTo", Math.abs(slideIndex - slideShow));
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
    },
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
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
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
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
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
  $("body").css("paddingTop", headerHeight + "px");

  $(window).resize(function () {
    var headerHeight = $(".fixt-top-headr").outerHeight();
    $("body").css("paddingTop", headerHeight + "px");
  });
  // pano
  $(function () {
    x = 5;
    $(".single-check-bx-bst-tm .innr-chckbx-bst-tm-dcvr").slice(0, 5).show();
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
    },
  });

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

  const range = document.querySelectorAll(".range-slider span input");
  progress = document.querySelector(".range-slider .progress");
  let gap = 0.1;
  const inputValue = document.querySelectorAll(".numberVal input");

  range.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(range[0].value);
      let maxRange = parseInt(range[1].value);

      if (maxRange - minRange < gap) {
        if (e.target.className === "range-min") {
          range[0].value = maxRange - gap;
        } else {
          range[1].value = minRange + gap;
        }
      } else {
        progress.style.left = (minRange / range[0].max) * 100 + "%";
        progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
        inputValue[0].value = minRange;
        inputValue[1].value = maxRange;
      }
    });
  });

  var lowerSlider = document.querySelector("#lower");
  var upperSlider = document.querySelector("#upper");

  document.querySelector("#two").value = upperSlider.value;
  document.querySelector("#one").value = lowerSlider.value;

  var lowerVal = parseInt(lowerSlider.value);
  var upperVal = parseInt(upperSlider.value);

  upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
      lowerSlider.value = upperVal - 4;
      if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
      }
    }
    document.querySelector("#two").value = this.value;
  };

  lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
      upperSlider.value = lowerVal + 4;
      if (upperVal == upperSlider.max) {
        lowerSlider.value = parseInt(upperSlider.max) - 4;
      }
    }
    document.querySelector("#one").value = this.value;
  };

  var lowerSlider = document.querySelector("#lowers");
  var upperSlider = document.querySelector("#uppers");

  document.querySelector("#twos").value = upperSlider.value;
  document.querySelector("#ones").value = lowerSlider.value;

  var lowerVal = parseInt(lowerSlider.value);
  var upperVal = parseInt(upperSlider.value);

  upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
      lowerSlider.value = upperVal - 4;
      if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
      }
    }
    document.querySelector("#twos").value = this.value;
  };

  lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
      upperSlider.value = lowerVal + 4;
      if (upperVal == upperSlider.max) {
        lowerSlider.value = parseInt(upperSlider.max) - 4;
      }
    }
    document.querySelector("#ones").value = this.value;
  };
});

$(".upcomeMap_btn").on("click", function () {
  $(".map-txt-tab-tw-wrp-inr").toggleClass("upcomeTrip_clm");
  $(".tab-tw-upctrip-map-part").toggleClass("upcomeTrip_map_clm");
  $(this).toggleClass("active");
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
