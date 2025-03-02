$(document).ready(function() {
  //// Opening Page for First Visit
  var isshow = localStorage.getItem("isshow");
  if (isshow == null) {
    localStorage.setItem("isshow", 1);

    // Show popup here
    $("#openingDiv").show();
  }

  $(document).on("click", ".openingDiv-close", function() {
    $(this).fadeOut(function() {
      $(this).hide();
    });
  });

  //// Country Highlighting
  var hash = location.hash.replace("#", "");
  if (hash) {
    $("body").attr("id", hash);

    /*We need to save the hash in a cookie for next link filtering... */
    createCookie("next_cat_filter", location.hash, 1);
  } else if ($("html").hasClass("home")) {
    // clear cookie on front page if no filter is applied
    eraseCookie("next_cat_filter");
  }

  if (getCookie("next_cat_filter") && $("body").attr("data-highlight")) {
    var cookie = getCookie("next_cat_filter");
    cookie = cookie.substring(1, cookie.length);
    if ($("body").attr("data-highlight") !== cookie) {
      eraseCookie("next_cat_filter");
    }
  }

  $('[data-behavior="highlight-category"]').on("click", function(ev) {
    ev.preventDefault();
    //console.log(ev.target);
    var targets = $(ev.target).attr("data-bind");
    hash = location.hash.replace("#", "");

    if ($("body").attr("id") === targets || hash === targets) {
      location.hash = "";
      $("body").removeAttr("id");

      /* Wipe the cookie! */
      eraseCookie("next_cat_filter");
    } else {
      location.hash = targets;

      /*We need to save the hash in a cookie for next link filtering... */
      createCookie("next_cat_filter", location.hash, 1);

      $("body")
        .attr("id", targets)
        .animate(
          {
            scrollLeft: 0
          },
          300
        );
    }
  });

  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function eraseCookie(name) {
    createCookie(name, "", -1);
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts
        .pop()
        .split(";")
        .shift();
    else return false;
  }

  //// Kirti Button
  $(document).ready(function() {
    $("#button-Kirti").click(function() {
      if ($("body").hasClass("normal")) {
        $("body")
          .removeClass("normal")
          .addClass("inverted");
      } else {
        $("body")
          .removeClass("inverted")
          .addClass("normal");
      }
    });
  });

  //// About Button
  $("#button-about").click(function() {
    if ($("#item-about").hasClass("hide")) {
      $("#item-about")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-about")
        .removeClass("show")
        .addClass("hide");
    }
    if ($("#button-about").hasClass("no-highlight")) {
      $("#button-about")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-about")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //// About Close Button
  $(".button-AboutClose").click(function() {
    if ($("#item-about").hasClass("hide")) {
      $("#item-about")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-about")
        .removeClass("show")
        .addClass("hide");
    }
    if ($("#button-about").hasClass("no-highlight")) {
      $("#button-about")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-about")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //// Text Close Button
  $(".button-TextClose").click(function() {
    $(".txt-col")
      .removeClass("show")
      .addClass("hide");
  });

  //// VDO Close Button - San Minn
  $(".button-vdoClose").click(function() {
    $(".vdo-row")
      .removeClass("vdo-show")
      .addClass("vdo-hide");
    $(".vdo-row")
      .removeClass("full")
      .addClass("reduced");
    $("#vdo-tag-SanMinn")
      .removeClass("vdo-tag-open")
      .addClass("vdo-tag-close");
    $("#vdo-tag-SanMinn")
      .removeClass("vdo-tag-full")
      .addClass("vdo-tag-close");
    $(".button-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
    $("header, .container-index, footer")
      .removeClass("reduced")
      .addClass("full");
  });
  //// Full Screen Button - San Minn
  $(".button-full").click(function() {
    $(".vdo-row")
      .removeClass("reduced")
      .addClass("full");
    $("#vdo-tag-SanMinn")
      .removeClass("vdo-tag-open")
      .addClass("vdo-tag-full");
    $(".button-full")
      .removeClass("button-show")
      .addClass("button-hide");
    $(".button-minimize")
      .removeClass("button-hide")
      .addClass("button-show");
  });
  //// Minimize Button - San Minn
  $(".button-minimize").click(function() {
    $(".vdo-row")
      .removeClass("full")
      .addClass("reduced");
    $("#vdo-tag-SanMinn")
      .removeClass("vdo-tag-full")
      .addClass("vdo-tag-open");
    $(".button-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
  });

  //// Ticker Clock
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function TimeDisplay() {
    setTimeout(TimeDisplay, 1000);
    var aestTimeYangon = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Yangon"
    });
    aestTimeYangon = new Date(aestTimeYangon);

    var aestTimeBangkok = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Bangkok"
    });
    aestTimeBangkok = new Date(aestTimeBangkok);

    var aestTimeChiangMai = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Bangkok"
    });
    aestTimeChiangMai = new Date(aestTimeChiangMai);

    var aestTimePhnomPenh = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Phnom_Penh"
    });
    aestTimePhnomPenh = new Date(aestTimePhnomPenh);

    var aestTimeHoChiMinh = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh"
    });
    aestTimeHoChiMinh = new Date(aestTimeHoChiMinh);

    var aestTimeHanoi = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Ho_Chi_Minh"
    });
    aestTimeHanoi = new Date(aestTimeHanoi);

    document.getElementById("ClockDisplay").innerText =
      "YGN " +
      addZero(aestTimeYangon.toTimeString()) +
      " —KIRTI— " +
      "BKK " +
      addZero(aestTimeBangkok.toTimeString()) +
      " —KIRTI— " +
      "CNX " +
      addZero(aestTimeChiangMai.toTimeString()) +
      " —KIRTI— " +
      "PNH " +
      addZero(aestTimePhnomPenh.toTimeString()) +
      " —KIRTI— " +
      "HCM " +
      addZero(aestTimeHoChiMinh.toTimeString()) +
      " —KIRTI— " +
      "HAN " +
      addZero(aestTimeHanoi.toTimeString());
  }

  TimeDisplay();

  //// About Page
});
