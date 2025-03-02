$(document).ready(function() {
  //// add / after each name
  $(".name").after("<p> / </p>");

  $(".name")
    .find("img.lazyload")
    .lazyload();

  // Empty all Img in #row
  $.fn.hideAllInfoVDOTag = function() {
    $(".info-tag")
      .removeClass("show")
      .addClass("hide");
    $(".int-tag")
      .removeClass("show")
      .addClass("hide");
    $(".img-row img").remove();

    //// Close Info
    $(".info-row")
      .removeClass("info-show")
      .addClass("info-hide");
    $(".info-row")
      .removeClass("full")
      .addClass("reduced");
    $(".int-row")
      .removeClass("int-show")
      .addClass("int-hide");
    $(".int-row")
      .removeClass("full")
      .addClass("reduced");

    $(".button-info-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-info-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
    $("header, .container-index, footer")
      .removeClass("reduced")
      .addClass("full");
    $(".info-tag")
      .removeClass("info-tag-open")
      .addClass("info-tag-close");
    $(".info-tag")
      .removeClass("info-tag-full")
      .addClass("info-tag-close");
    $(".int-tag")
      .removeClass("int-tag-open")
      .addClass("int-tag-close");
    $(".int-tag")
      .removeClass("int-tag-full")
      .addClass("int-tag-close");
  };

  // Hide All Artist-Des
  $.fn.hideArtistDes = function() {
    $(".Art-des")
      .removeClass("show")
      .addClass("hide");
  };

  //////-------------------- ArachaCholitgul --------------------//////
  $("#button-ArachaCholitgul").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayArachaCholitgul1 = [
      "img/Thailand/Bangkok/ArachaCholitgul/01/01.jpg",
      "img/Thailand/Bangkok/ArachaCholitgul/01/02.jpg"
    ];

    if ($("#item-ArachaCholitgul1").hasClass("hide")) {
      for (var i = 0; i < imgArrayArachaCholitgul1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayArachaCholitgul1[i]);
        img.setAttribute(
          "class",
          "lazyload img-ArachaCholitgul ArachaCholitgul-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxArachaCholitgul(); currentSlideArachaCholitgul(" +
            i +
            "+1)"
        );
        document.getElementById("row-ArachaCholitgul-1").appendChild(img);
      }

      $("#row-ArachaCholitgul")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-ArachaCholitgul1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ArachaCholitgul1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-ArachaCholitgul")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ArachaCholitgul1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-ArachaCholitgul")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-ArachaCholitgul-1").click(function() {
      var ArachaCholitgul1 = document.getElementById("row-ArachaCholitgul-1")
        .firstChild;
      ArachaCholitgul1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-ArachaCholitgul2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-ArachaCholitgul2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ArachaCholitgul2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ArachaCholitgul2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ArachaCholitgul").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-ArachaCholitgul"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-ArachaCholitgul")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ArachaCholitgul")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- ArachaCholitgul Lightbox --------------------//
    for (var i = 0; i < imgArrayArachaCholitgul1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayArachaCholitgul1[i]);
      img.setAttribute("class", "lazyload imgSlides imgArachaCholitgul-img");
      document.getElementById("imgArachaCholitgul").appendChild(img);
    }

    $("#imgArachaCholitgul")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- ArachaCholitgul Contact --------------------//
  $("#button-ArachaCholitgul-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#ArachaCholitgul-contact").hasClass("hide")) {
      $("#ArachaCholitgul-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ArachaCholitgul-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ArachaCholitgul-contact").hasClass("no-highlight")) {
      $("#button-ArachaCholitgul-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ArachaCholitgul-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- ArachaCholitgul Work --------------------//
  $("#button-ArachaCholitgul-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#ArachaCholitgul-work").hasClass("hide")) {
      $("#ArachaCholitgul-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ArachaCholitgul-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ArachaCholitgul-work").hasClass("no-highlight")) {
      $("#button-ArachaCholitgul-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ArachaCholitgul-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- ArachaCholitgul Hyperlinks --------------------//
  $("#button-ArachaCholitgul-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#ArachaCholitgul-hyperlinks").hasClass("hide")) {
      $("#ArachaCholitgul-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ArachaCholitgul-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ArachaCholitgul-hyperlinks").hasClass("no-highlight")) {
      $("#button-ArachaCholitgul-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ArachaCholitgul-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End ArachaCholitgul --------------------//////

  //////-------------------- AyeKo --------------------//////
  $("#button-AyeKo").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayAyeKo1 = [
      "img/Myanmar/Yangon/AyeKo/01/01.jpg",
      "img/Myanmar/Yangon/AyeKo/01/02.jpg",
      "img/Myanmar/Yangon/AyeKo/01/03.jpg",
      "img/Myanmar/Yangon/AyeKo/01/04.jpg",
      "img/Myanmar/Yangon/AyeKo/01/05.jpg",
      "img/Myanmar/Yangon/AyeKo/01/06.jpg",
      "img/Myanmar/Yangon/AyeKo/01/07.jpg",
      "img/Myanmar/Yangon/AyeKo/01/08.jpg"
    ];
    var imgArrayAyeKo2 = [
      "img/Myanmar/Yangon/AyeKo/02/01.jpg",
      "img/Myanmar/Yangon/AyeKo/02/02.jpg",
      "img/Myanmar/Yangon/AyeKo/02/03.jpg",
      "img/Myanmar/Yangon/AyeKo/02/04.jpg"
    ];
    var imgArrayAyeKo3 = [
      "img/Myanmar/Yangon/AyeKo/03/01.jpg",
      "img/Myanmar/Yangon/AyeKo/03/02.jpg",
      "img/Myanmar/Yangon/AyeKo/03/03.jpg",
      "img/Myanmar/Yangon/AyeKo/03/04.jpg",
      "img/Myanmar/Yangon/AyeKo/03/05.jpg",
      "img/Myanmar/Yangon/AyeKo/03/06.jpg",
      "img/Myanmar/Yangon/AyeKo/03/07.jpg",
      "img/Myanmar/Yangon/AyeKo/03/08.jpg",
      "img/Myanmar/Yangon/AyeKo/03/09.jpg",
      "img/Myanmar/Yangon/AyeKo/03/10.jpg",
      "img/Myanmar/Yangon/AyeKo/03/11.jpg",
      "img/Myanmar/Yangon/AyeKo/03/12.jpg",
      "img/Myanmar/Yangon/AyeKo/03/13.jpg"
    ];
    var imgArrayAyeKo4 = [
      "img/Myanmar/Yangon/AyeKo/04/01.jpg",
      "img/Myanmar/Yangon/AyeKo/04/02.jpg",
      "img/Myanmar/Yangon/AyeKo/04/03.jpg",
      "img/Myanmar/Yangon/AyeKo/04/04.jpg",
      "img/Myanmar/Yangon/AyeKo/04/05.jpg"
    ];

    if ($("#item-AyeKo1").hasClass("hide")) {
      for (var i = 0; i < imgArrayAyeKo1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayAyeKo1[i]);
        img.setAttribute("class", "lazyload img-AyeKo AyeKo-group1");
        img.setAttribute(
          "onclick",
          "openLightboxAyeKo(); currentSlideAyeKo(" + i + "+1)"
        );
        document.getElementById("row-AyeKo-1").appendChild(img);
      }
      for (var i = 0; i < imgArrayAyeKo2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayAyeKo2[i]);
        img.setAttribute("class", "lazyload img-AyeKo AyeKo-group2");
        img.setAttribute(
          "onclick",
          "openLightboxAyeKo(); currentSlideAyeKo(" + i + "+1)"
        );
        document.getElementById("row-AyeKo-2").appendChild(img);
      }
      for (var i = 0; i < imgArrayAyeKo3.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayAyeKo3[i]);
        img.setAttribute("class", "lazyload img-AyeKo AyeKo-group3");
        img.setAttribute(
          "onclick",
          "openLightboxAyeKo(); currentSlideAyeKo(" + i + "+1)"
        );
        document.getElementById("row-AyeKo-3").appendChild(img);
      }
      for (var i = 0; i < imgArrayAyeKo4.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayAyeKo4[i]);
        img.setAttribute("class", "lazyload img-AyeKo AyeKo-group4");
        img.setAttribute(
          "onclick",
          "openLightboxAyeKo(); currentSlideAyeKo(" + i + "+1)"
        );
        document.getElementById("row-AyeKo-4").appendChild(img);
      }

      $("#row-AyeKo")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-AyeKo1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-AyeKo1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-AyeKo")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-AyeKo1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-AyeKo")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-AyeKo-1").click(function() {
      var AyeKo1 = document.getElementById("row-AyeKo-1").firstChild;
      AyeKo1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-AyeKo-2").click(function() {
      var AyeKo1 = document.getElementById("row-AyeKo-2").firstChild;
      AyeKo1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-AyeKo-3").click(function() {
      var AyeKo1 = document.getElementById("row-AyeKo-3").firstChild;
      AyeKo1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-AyeKo-4").click(function() {
      var AyeKo1 = document.getElementById("row-AyeKo-4").firstChild;
      AyeKo1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-AyeKo2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-AyeKo2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-AyeKo2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-AyeKo2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-AyeKo").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-AyeKo"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-AyeKo")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-AyeKo")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- AyeKo Lightbox --------------------//
    for (var i = 0; i < imgArrayAyeKo1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayAyeKo1[i]);
      img.setAttribute("class", "lazyload imgSlides imgAyeKo-img");
      document.getElementById("imgAyeKo").appendChild(img);
    }
    for (var i = 0; i < imgArrayAyeKo2.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayAyeKo2[i]);
      img.setAttribute("class", "lazyload imgSlides imgAyeKo-img");
      document.getElementById("imgAyeKo").appendChild(img);
    }
    for (var i = 0; i < imgArrayAyeKo3.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayAyeKo3[i]);
      img.setAttribute("class", "lazyload imgSlides imgAyeKo-img");
      document.getElementById("imgAyeKo").appendChild(img);
    }
    for (var i = 0; i < imgArrayAyeKo4.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayAyeKo4[i]);
      img.setAttribute("class", "lazyload imgSlides imgAyeKo-img");
      document.getElementById("imgAyeKo").appendChild(img);
    }

    $("#imgAyeKo")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- AyeKo Contact --------------------//
  $("#button-AyeKo-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#AyeKo-contact").hasClass("hide")) {
      $("#AyeKo-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#AyeKo-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-AyeKo-contact").hasClass("no-highlight")) {
      $("#button-AyeKo-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-AyeKo-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- AyeKo Work --------------------//
  $("#button-AyeKo-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#AyeKo-work").hasClass("hide")) {
      $("#AyeKo-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#AyeKo-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-AyeKo-work").hasClass("no-highlight")) {
      $("#button-AyeKo-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-AyeKo-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- AyeKo Hyperlinks --------------------//
  $("#button-AyeKo-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#AyeKo-hyperlinks").hasClass("hide")) {
      $("#AyeKo-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#AyeKo-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-AyeKo-hyperlinks").hasClass("no-highlight")) {
      $("#button-AyeKo-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-AyeKo-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End AyeKo --------------------//////

  //////-------------------- BartWasNotHere --------------------//////
  $("#button-BartWasNotHere").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayBartWasNotHere1 = [
      "img/Myanmar/Yangon/BartWasNotHere/01/01.jpg",
      "img/Myanmar/Yangon/BartWasNotHere/01/02.jpg",
      "img/Myanmar/Yangon/BartWasNotHere/01/03.jpg"
    ];

    if ($("#item-BartWasNotHere1").hasClass("hide")) {
      for (var i = 0; i < imgArrayBartWasNotHere1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayBartWasNotHere1[i]);
        img.setAttribute(
          "class",
          "lazyload img-BartWasNotHere BartWasNotHere-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxBartWasNotHere(); currentSlideBartWasNotHere(" +
            i +
            "+1)"
        );
        document.getElementById("row-BartWasNotHere-1").appendChild(img);
      }

      $("#row-BartWasNotHere")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-BartWasNotHere1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-BartWasNotHere1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-BartWasNotHere")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-BartWasNotHere1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-BartWasNotHere")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-BartWasNotHere-1").click(function() {
      var BartWasNotHere1 = document.getElementById("row-BartWasNotHere-1")
        .firstChild;
      BartWasNotHere1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-BartWasNotHere2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-BartWasNotHere2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-BartWasNotHere2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-BartWasNotHere2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-BartWasNotHere").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-BartWasNotHere"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-BartWasNotHere")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BartWasNotHere")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- BartWasNotHere Lightbox --------------------//
    for (var i = 0; i < imgArrayBartWasNotHere1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayBartWasNotHere1[i]);
      img.setAttribute("class", "lazyload imgSlides imgBartWasNotHere-img");
      document.getElementById("imgBartWasNotHere").appendChild(img);
    }

    $("#imgBartWasNotHere")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- BartWasNotHere Contact --------------------//
  $("#button-BartWasNotHere-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#BartWasNotHere-contact").hasClass("hide")) {
      $("#BartWasNotHere-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#BartWasNotHere-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-BartWasNotHere-contact").hasClass("no-highlight")) {
      $("#button-BartWasNotHere-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BartWasNotHere-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- BartWasNotHere Work --------------------//
  $("#button-BartWasNotHere-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#BartWasNotHere-work").hasClass("hide")) {
      $("#BartWasNotHere-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#BartWasNotHere-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-BartWasNotHere-work").hasClass("no-highlight")) {
      $("#button-BartWasNotHere-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BartWasNotHere-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- BartWasNotHere Hyperlinks --------------------//
  $("#button-BartWasNotHere-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#BartWasNotHere-hyperlinks").hasClass("hide")) {
      $("#BartWasNotHere-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#BartWasNotHere-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-BartWasNotHere-hyperlinks").hasClass("no-highlight")) {
      $("#button-BartWasNotHere-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BartWasNotHere-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End BartWasNotHere --------------------//////

  //////-------------------- BunthengBat --------------------//////
  $("#button-BunthengBat").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayBunthengBat1 = [
      "img/Cambodia/PhnomPenh/BunthengBat/01/01.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/01/02.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/01/03.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/01/04.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/01/05.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/01/06.jpg"
    ];
    var imgArrayBunthengBat2 = [
      "img/Cambodia/PhnomPenh/BunthengBat/02/01.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/02/02.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/02/03.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/02/04.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/02/05.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/02/06.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/02/07.jpg",
      "img/Cambodia/PhnomPenh/BunthengBat/02/08.jpg"
    ];

    if ($("#item-BunthengBat1").hasClass("hide")) {
      for (var i = 0; i < imgArrayBunthengBat1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayBunthengBat1[i]);
        img.setAttribute(
          "class",
          "lazyload img-BunthengBat BunthengBat-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxBunthengBat(); currentSlideBunthengBat(" + i + "+1)"
        );
        document.getElementById("row-BunthengBat-1").appendChild(img);
      }

      for (var i = 0; i < imgArrayBunthengBat2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayBunthengBat2[i]);
        img.setAttribute(
          "class",
          "lazyload img-BunthengBat BunthengBat-group2"
        );
        img.setAttribute(
          "onclick",
          "openLightboxBunthengBat(); currentSlideBunthengBat(" + i + "+7)"
        );
        document.getElementById("row-BunthengBat-2").appendChild(img);
      }

      $("#row-BunthengBat")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-BunthengBat1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-BunthengBat1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-BunthengBat")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-BunthengBat1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-BunthengBat")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#item-BunthengBat2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-BunthengBat2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-BunthengBat2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-BunthengBat2")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-BunthengBat-1").click(function() {
      var BunthengBat1 = document.getElementById("row-BunthengBat-1")
        .firstChild;
      BunthengBat1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-BunthengBat-2").click(function() {
      var BunthengBat2 = document.getElementById("row-BunthengBat-2")
        .firstChild;
      BunthengBat2.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#button-BunthengBat").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-BunthengBat"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-BunthengBat")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BunthengBat")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- BunthengBat Lightbox --------------------//
    for (var i = 0; i < imgArrayBunthengBat1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayBunthengBat1[i]);
      img.setAttribute("class", "lazyload imgSlides imgBunthengBat-img");
      document.getElementById("imgBunthengBat").appendChild(img);
    }

    for (var i = 0; i < imgArrayBunthengBat2.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayBunthengBat2[i]);
      img.setAttribute("class", "lazyload imgSlides imgBunthengBat-img");
      document.getElementById("imgBunthengBat").appendChild(img);
    }

    $("#imgBunthengBat")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- BunthengBat Contact --------------------//
  $("#button-BunthengBat-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#BunthengBat-contact").hasClass("hide")) {
      $("#BunthengBat-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#BunthengBat-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-BunthengBat-contact").hasClass("no-highlight")) {
      $("#button-BunthengBat-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BunthengBat-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- BunthengBat Work --------------------//
  $("#button-BunthengBat-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#BunthengBat-work").hasClass("hide")) {
      $("#BunthengBat-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#BunthengBat-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-BunthengBat-work").hasClass("no-highlight")) {
      $("#button-BunthengBat-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BunthengBat-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- BunthengBat Hyperlinks --------------------//
  $("#button-BunthengBat-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#BunthengBat-hyperlinks").hasClass("hide")) {
      $("#BunthengBat-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#BunthengBat-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-BunthengBat-hyperlinks").hasClass("no-highlight")) {
      $("#button-BunthengBat-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BunthengBat-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End BunthengBat --------------------//////

  //////-------------------- DatVu --------------------//////
  $("#button-DatVu").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayDatVu1 = [
      "img/Vietnam/HoChiMinhCity/DatVu/01/01.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/02.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/03.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/04.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/05.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/06.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/07.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/08.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/09.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/10.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/11.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/12.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/13.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/14.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/15.jpg",
      "img/Vietnam/HoChiMinhCity/DatVu/01/16.jpg"
    ];

    if ($("#item-DatVu1").hasClass("hide")) {
      for (var i = 0; i < imgArrayDatVu1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayDatVu1[i]);
        img.setAttribute("class", "lazyload img-DatVu");
        img.setAttribute(
          "onclick",
          "openLightboxDatVu(); currentSlideDatVu(" + i + "+1)"
        );
        document.getElementById("row-DatVu").appendChild(img);
      }

      $("#row-DatVu")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-DatVu1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-DatVu1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-DatVu")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-DatVu1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-DatVu")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#item-DatVu2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-DatVu2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-DatVu2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-DatVu2")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-DatVu-1").click(function() {
      var DatVu1 = document.getElementById("row-DatVu-1").firstChild;
      DatVu1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#button-DatVu").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-DatVu"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-DatVu")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-DatVu")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- DatVu Lightbox --------------------//
    for (var i = 0; i < imgArrayDatVu1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayDatVu1[i]);
      img.setAttribute("class", "lazyload imgSlides imgDatVu-img");
      document.getElementById("imgDatVu").appendChild(img);
    }

    $("#imgDatVu")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- DatVu Contact --------------------//
  $("#button-DatVu-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#DatVu-contact").hasClass("hide")) {
      $("#DatVu-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#DatVu-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-DatVu-contact").hasClass("no-highlight")) {
      $("#button-DatVu-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-DatVu-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- DatVu Work --------------------//
  $("#button-DatVu-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#DatVu-work").hasClass("hide")) {
      $("#DatVu-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#DatVu-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-DatVu-work").hasClass("no-highlight")) {
      $("#button-DatVu-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-DatVu-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- DatVu Hyperlinks --------------------//
  $("#button-DatVu-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#DatVu-hyperlinks").hasClass("hide")) {
      $("#DatVu-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#DatVu-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-DatVu-hyperlinks").hasClass("no-highlight")) {
      $("#button-DatVu-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-DatVu-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End DatVu --------------------//////

  //////-------------------- DuHoang --------------------//////
  $("#button-DuHoang").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayDuHoang1 = [
      "img/Vietnam/Hanoi/DuHoang/01/01.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/02.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/03.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/04.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/05.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/06.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/07.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/08.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/09.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/10.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/11.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/12.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/13.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/14.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/15.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/16.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/17.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/18.jpg",
      "img/Vietnam/Hanoi/DuHoang/01/19.jpg"
    ];
    var imgArrayDuHoang2 = [
      "img/Vietnam/Hanoi/DuHoang/02/01.jpg",
      "img/Vietnam/Hanoi/DuHoang/02/02.jpg",
      "img/Vietnam/Hanoi/DuHoang/02/03.jpg",
      "img/Vietnam/Hanoi/DuHoang/02/04.jpg",
      "img/Vietnam/Hanoi/DuHoang/02/05.jpg",
      "img/Vietnam/Hanoi/DuHoang/02/06.jpg",
      "img/Vietnam/Hanoi/DuHoang/02/07.jpg",
      "img/Vietnam/Hanoi/DuHoang/02/08.jpg"
    ];
    var imgArrayDuHoang3 = [
      "img/Vietnam/Hanoi/DuHoang/03/01.jpg",
      "img/Vietnam/Hanoi/DuHoang/03/02.jpg",
      "img/Vietnam/Hanoi/DuHoang/03/03.jpg",
      "img/Vietnam/Hanoi/DuHoang/03/04.jpg"
    ];

    if ($("#item-DuHoang1").hasClass("hide")) {
      for (var i = 0; i < imgArrayDuHoang1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayDuHoang1[i]);
        img.setAttribute("class", "lazyload img-DuHoang DuHoang-group1");
        img.setAttribute(
          "onclick",
          "openLightboxDuHoang(); currentSlideDuHoang(" + i + "+1)"
        );
        document.getElementById("row-DuHoang-1").appendChild(img);
      }

      for (var i = 0; i < imgArrayDuHoang2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayDuHoang2[i]);
        img.setAttribute("class", "lazyload img-DuHoang DuHoang-group2");
        img.setAttribute(
          "onclick",
          "openLightboxDuHoang(); currentSlideDuHoang(" + i + "+20)"
        );
        document.getElementById("row-DuHoang-2").appendChild(img);
      }

      for (var i = 0; i < imgArrayDuHoang3.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayDuHoang3[i]);
        img.setAttribute("class", "lazyload img-DuHoang DuHoang-group3");
        img.setAttribute(
          "onclick",
          "openLightboxDuHoang(); currentSlideDuHoang(" + i + "+28)"
        );
        document.getElementById("row-DuHoang-3").appendChild(img);
      }

      $("#row-DuHoang")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-DuHoang1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-DuHoang1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-DuHoang")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-DuHoang1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-DuHoang")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-DuHoang-1").click(function() {
      var DuHoang1 = document.getElementById("row-DuHoang-1").firstChild;
      DuHoang1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-DuHoang-2").click(function() {
      var DuHoang2 = document.getElementById("row-DuHoang-2").firstChild;
      DuHoang2.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-DuHoang-3").click(function() {
      var DuHoang3 = document.getElementById("row-DuHoang-3").firstChild;
      DuHoang3.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-DuHoang2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-DuHoang2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-DuHoang2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-DuHoang2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-DuHoang").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-DuHoang"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-DuHoang")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-DuHoang")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- DuHoang Lightbox --------------------//
    for (var i = 0; i < imgArrayDuHoang1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayDuHoang1[i]);
      img.setAttribute("class", "lazyload imgSlides imgDuHoang-img");
      document.getElementById("imgDuHoang").appendChild(img);
    }
    for (var i = 0; i < imgArrayDuHoang2.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayDuHoang2[i]);
      img.setAttribute("class", "lazyload imgSlides imgDuHoang-img");
      document.getElementById("imgDuHoang").appendChild(img);
    }
    for (var i = 0; i < imgArrayDuHoang3.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayDuHoang3[i]);
      img.setAttribute("class", "lazyload imgSlides imgDuHoang-img");
      document.getElementById("imgDuHoang").appendChild(img);
    }
    $("#imgDuHoang")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- DuHoang Contact --------------------//
  $("#button-DuHoang-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#DuHoang-contact").hasClass("hide")) {
      $("#DuHoang-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#DuHoang-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-DuHoang-contact").hasClass("no-highlight")) {
      $("#button-DuHoang-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-DuHoang-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- DuHoang Work --------------------//
  $("#button-DuHoang-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#DuHoang-work").hasClass("hide")) {
      $("#DuHoang-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#DuHoang-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-DuHoang-work").hasClass("no-highlight")) {
      $("#button-DuHoang-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-DuHoang-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- DuHoang Hyperlinks --------------------//
  $("#button-DuHoang-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#DuHoang-hyperlinks").hasClass("hide")) {
      $("#DuHoang-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#DuHoang-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-DuHoang-hyperlinks").hasClass("no-highlight")) {
      $("#button-DuHoang-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-DuHoang-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //////-------------------- End DuHoang --------------------//////

  //////-------------------- EijiSumi --------------------//////
  $("#button-EijiSumi").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayEijiSumi1 = [
      "img/Thailand/Bangkok/EijiSumi/01/01.jpg",
      "img/Thailand/Bangkok/EijiSumi/01/02.jpg",
      "img/Thailand/Bangkok/EijiSumi/01/03.jpg",
      "img/Thailand/Bangkok/EijiSumi/01/04.jpg",
      "img/Thailand/Bangkok/EijiSumi/01/05.jpg"
    ];

    var imgArrayEijiSumi2 = [
      "img/Thailand/Bangkok/EijiSumi/02/01.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/02.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/03.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/04.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/05.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/06.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/07.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/08.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/09.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/10.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/11.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/12.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/13.jpg",
      "img/Thailand/Bangkok/EijiSumi/02/14.jpg"
    ];

    if ($("#item-EijiSumi1").hasClass("hide")) {
      for (var i = 0; i < imgArrayEijiSumi1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayEijiSumi1[i]);
        img.setAttribute("class", "lazyload img-EijiSumi EijiSumi-group1");
        img.setAttribute(
          "onclick",
          "openLightboxEijiSumi(); currentSlideEijiSumi(" + i + "+1)"
        );
        document.getElementById("row-EijiSumi-1").appendChild(img);
      }

      for (var i = 0; i < imgArrayEijiSumi2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayEijiSumi2[i]);
        img.setAttribute("class", "lazyload img-EijiSumi EijiSumi-group2");
        img.setAttribute(
          "onclick",
          "openLightboxEijiSumi(); currentSlideEijiSumi(" + i + "+6)"
        );
        document.getElementById("row-EijiSumi-2").appendChild(img);
      }

      $("#row-EijiSumi")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-EijiSumi1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-EijiSumi1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-EijiSumi")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-EijiSumi1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-EijiSumi")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-EijiSumi-1").click(function() {
      var EijiSumi1 = document.getElementById("row-EijiSumi-1").firstChild;
      EijiSumi1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-EijiSumi-2").click(function() {
      var EijiSumi2 = document.getElementById("row-EijiSumi-2").firstChild;
      EijiSumi2.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-EijiSumi2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-EijiSumi2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-EijiSumi2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-EijiSumi2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-EijiSumi").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-EijiSumi"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-EijiSumi")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-EijiSumi")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- EijiSumi Lightbox --------------------//
    for (var i = 0; i < imgArrayEijiSumi1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayEijiSumi1[i]);
      img.setAttribute("class", "lazyload imgSlides imgEijiSumi-img");
      document.getElementById("imgEijiSumi").appendChild(img);
    }
    for (var i = 0; i < imgArrayEijiSumi2.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayEijiSumi2[i]);
      img.setAttribute("class", "lazyload imgSlides imgEijiSumi-img");
      document.getElementById("imgEijiSumi").appendChild(img);
    }
    $("#imgEijiSumi")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- EijiSumi Contact --------------------//
  $("#button-EijiSumi-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#EijiSumi-contact").hasClass("hide")) {
      $("#EijiSumi-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#EijiSumi-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-EijiSumi-contact").hasClass("no-highlight")) {
      $("#button-EijiSumi-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-EijiSumi-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- EijiSumi Work --------------------//
  $("#button-EijiSumi-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#EijiSumi-work").hasClass("hide")) {
      $("#EijiSumi-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#EijiSumi-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-EijiSumi-work").hasClass("no-highlight")) {
      $("#button-EijiSumi-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-EijiSumi-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- EijiSumi Hyperlinks --------------------//
  $("#button-EijiSumi-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#EijiSumi-hyperlinks").hasClass("hide")) {
      $("#EijiSumi-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#EijiSumi-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-EijiSumi-hyperlinks").hasClass("no-highlight")) {
      $("#button-EijiSumi-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-EijiSumi-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End EijiSumi --------------------//////

  //////-------------------- HuyAn --------------------//////
  $("#button-HuyAn").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayHuyAn1 = [
      "img/Vietnam/Hanoi/HuyAn/01/01.jpg",
      "img/Vietnam/Hanoi/HuyAn/01/02.jpg",
      "img/Vietnam/Hanoi/HuyAn/01/03.jpg",
      "img/Vietnam/Hanoi/HuyAn/01/04.jpg",
      "img/Vietnam/Hanoi/HuyAn/01/05.jpg",
      "img/Vietnam/Hanoi/HuyAn/01/06.jpg",
      "img/Vietnam/Hanoi/HuyAn/01/07.jpg",
      "img/Vietnam/Hanoi/HuyAn/01/08.jpg",
      "img/Vietnam/Hanoi/HuyAn/01/09.jpg",
      "img/Vietnam/Hanoi/HuyAn/01/10.jpg"
    ];

    if ($("#item-HuyAn1").hasClass("hide")) {
      for (var i = 0; i < imgArrayHuyAn1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayHuyAn1[i]);
        img.setAttribute("class", "lazyload img-HuyAn HuyAn-group1");
        img.setAttribute(
          "onclick",
          "openLightboxHuyAn(); currentSlideHuyAn(" + i + "+1)"
        );
        document.getElementById("row-HuyAn-1").appendChild(img);
      }

      $("#row-HuyAn")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-HuyAn1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-HuyAn1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-HuyAn")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-HuyAn1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-HuyAn")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-HuyAn-1").click(function() {
      var HuyAn1 = document.getElementById("row-HuyAn-1").firstChild;
      HuyAn1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-HuyAn2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-HuyAn2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-HuyAn2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-HuyAn2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-HuyAn").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-HuyAn"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-HuyAn")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-HuyAn")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- HuyAn Lightbox --------------------//

    for (var i = 0; i < imgArrayHuyAn1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayHuyAn1[i]);
      img.setAttribute("class", "lazyload imgSlides imgHuyAn-img");
      document.getElementById("imgHuyAn").appendChild(img);
    }

    $("#imgHuyAn")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- HuyAn Contact --------------------//
  $("#button-HuyAn-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#HuyAn-contact").hasClass("hide")) {
      $("#HuyAn-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#HuyAn-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-HuyAn-contact").hasClass("no-highlight")) {
      $("#button-HuyAn-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-HuyAn-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- HuyAn Work --------------------//
  $("#button-HuyAn-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#HuyAn-work").hasClass("hide")) {
      $("#HuyAn-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#HuyAn-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-HuyAn-work").hasClass("no-highlight")) {
      $("#button-HuyAn-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-HuyAn-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- HuyAn Hyperlinks --------------------//
  $("#button-HuyAn-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#HuyAn-hyperlinks").hasClass("hide")) {
      $("#HuyAn-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#HuyAn-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-HuyAn-hyperlinks").hasClass("no-highlight")) {
      $("#button-HuyAn-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-HuyAn-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End HuyAn --------------------//////

  //////-------------------- JedsadaTangtrakulwong --------------------//////
  $("#button-JedsadaTangtrakulwong").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayJedsadaTangtrakulwong1 = [
      "img/Thailand/ChiangMai/JedsadaTangtrakulwong/01/01.jpg",
      "img/Thailand/ChiangMai/JedsadaTangtrakulwong/01/02.jpg",
      "img/Thailand/ChiangMai/JedsadaTangtrakulwong/01/03.jpg"
    ];

    if ($("#item-JedsadaTangtrakulwong1").hasClass("hide")) {
      for (var i = 0; i < imgArrayJedsadaTangtrakulwong1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayJedsadaTangtrakulwong1[i]);
        img.setAttribute(
          "class",
          "lazyload img-JedsadaTangtrakulwong JedsadaTangtrakulwong-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxJedsadaTangtrakulwong(); currentSlideJedsadaTangtrakulwong(" +
            i +
            "+1)"
        );
        document.getElementById("row-JedsadaTangtrakulwong-1").appendChild(img);
      }

      $("#row-JedsadaTangtrakulwong")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-JedsadaTangtrakulwong1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-JedsadaTangtrakulwong1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-JedsadaTangtrakulwong")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-JedsadaTangtrakulwong1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-JedsadaTangtrakulwong")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-JedsadaTangtrakulwong-1").click(function() {
      var JedsadaTangtrakulwong1 = document.getElementById(
        "row-JedsadaTangtrakulwong-1"
      ).firstChild;
      JedsadaTangtrakulwong1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-JedsadaTangtrakulwong2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-JedsadaTangtrakulwong2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-JedsadaTangtrakulwong2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-JedsadaTangtrakulwong2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-JedsadaTangtrakulwong").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-JedsadaTangtrakulwong"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-JedsadaTangtrakulwong")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-JedsadaTangtrakulwong")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- JedsadaTangtrakulwong Lightbox --------------------//
    for (var i = 0; i < imgArrayJedsadaTangtrakulwong1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayJedsadaTangtrakulwong1[i]);
      img.setAttribute(
        "class",
        "lazyload imgSlides imgJedsadaTangtrakulwong-img"
      );
      document.getElementById("imgJedsadaTangtrakulwong").appendChild(img);
    }

    $("#imgJedsadaTangtrakulwong")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- JedsadaTangtrakulwong Contact --------------------//
  $("#button-JedsadaTangtrakulwong-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#JedsadaTangtrakulwong-contact").hasClass("hide")) {
      $("#JedsadaTangtrakulwong-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#JedsadaTangtrakulwong-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-JedsadaTangtrakulwong-contact").hasClass("no-highlight")) {
      $("#button-JedsadaTangtrakulwong-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-JedsadaTangtrakulwong-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- JedsadaTangtrakulwong Work --------------------//
  $("#button-JedsadaTangtrakulwong-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#JedsadaTangtrakulwong-work").hasClass("hide")) {
      $("#JedsadaTangtrakulwong-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#JedsadaTangtrakulwong-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-JedsadaTangtrakulwong-work").hasClass("no-highlight")) {
      $("#button-JedsadaTangtrakulwong-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-JedsadaTangtrakulwong-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- JedsadaTangtrakulwong Hyperlinks --------------------//
  $("#button-JedsadaTangtrakulwong-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#JedsadaTangtrakulwong-hyperlinks").hasClass("hide")) {
      $("#JedsadaTangtrakulwong-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#JedsadaTangtrakulwong-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if (
      $("#button-JedsadaTangtrakulwong-hyperlinks").hasClass("no-highlight")
    ) {
      $("#button-JedsadaTangtrakulwong-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-JedsadaTangtrakulwong-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End JedsadaTangtrakulwong --------------------//////

  //////-------------------- KaminLertchaiprasert --------------------//////
  $("#button-KaminLertchaiprasert").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayKaminLertchaiprasert1 = [
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/01.jpg",
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/02.jpg",
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/03.jpg",
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/04.jpg",
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/05.jpg",
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/06.jpg",
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/07.jpg",
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/08.jpg",
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/09.jpg",
      "img/Thailand/ChiangMai/KaminLertchaiprasert/01/10.jpg"
    ];

    if ($("#item-KaminLertchaiprasert1").hasClass("hide")) {
      for (var i = 0; i < imgArrayKaminLertchaiprasert1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayKaminLertchaiprasert1[i]);
        img.setAttribute(
          "class",
          "lazyload img-KaminLertchaiprasert KaminLertchaiprasert-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxKaminLertchaiprasert(); currentSlideKaminLertchaiprasert(" +
            i +
            "+1)"
        );
        document.getElementById("row-KaminLertchaiprasert-1").appendChild(img);
      }

      $("#row-KaminLertchaiprasert")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-KaminLertchaiprasert1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-KaminLertchaiprasert1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-KaminLertchaiprasert")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-KaminLertchaiprasert1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-KaminLertchaiprasert")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-KaminLertchaiprasert-1").click(function() {
      var KaminLertchaiprasert1 = document.getElementById(
        "row-KaminLertchaiprasert-1"
      ).firstChild;
      KaminLertchaiprasert1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-KaminLertchaiprasert2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-KaminLertchaiprasert2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-KaminLertchaiprasert2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-KaminLertchaiprasert2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KaminLertchaiprasert").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-KaminLertchaiprasert"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-KaminLertchaiprasert")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KaminLertchaiprasert")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- KaminLertchaiprasert Lightbox --------------------//
    for (var i = 0; i < imgArrayKaminLertchaiprasert1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayKaminLertchaiprasert1[i]);
      img.setAttribute(
        "class",
        "lazyload imgSlides imgKaminLertchaiprasert-img"
      );
      document.getElementById("imgKaminLertchaiprasert").appendChild(img);
    }

    $("#imgKaminLertchaiprasert")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- KaminLertchaiprasert Contact --------------------//
  $("#button-KaminLertchaiprasert-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#KaminLertchaiprasert-contact").hasClass("hide")) {
      $("#KaminLertchaiprasert-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#KaminLertchaiprasert-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KaminLertchaiprasert-contact").hasClass("no-highlight")) {
      $("#button-KaminLertchaiprasert-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KaminLertchaiprasert-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- KaminLertchaiprasert Work --------------------//
  $("#button-KaminLertchaiprasert-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#KaminLertchaiprasert-work").hasClass("hide")) {
      $("#KaminLertchaiprasert-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#KaminLertchaiprasert-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KaminLertchaiprasert-work").hasClass("no-highlight")) {
      $("#button-KaminLertchaiprasert-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KaminLertchaiprasert-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- KaminLertchaiprasert Hyperlinks --------------------//
  $("#button-KaminLertchaiprasert-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#KaminLertchaiprasert-hyperlinks").hasClass("hide")) {
      $("#KaminLertchaiprasert-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#KaminLertchaiprasert-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KaminLertchaiprasert-hyperlinks").hasClass("no-highlight")) {
      $("#button-KaminLertchaiprasert-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KaminLertchaiprasert-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End KaminLertchaiprasert --------------------//////

  //////-------------------- KanithaTith --------------------//////
  $("#button-KanithaTith").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayKanithaTith1 = [
      "img/Cambodia/PhnomPenh/KanithaTith/01/01.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/02.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/03.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/04.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/05.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/06.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/07.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/08.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/09.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/10.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/11.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/12.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/13.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/14.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/15.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/16.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/17.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/18.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/19.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/20.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/21.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/22.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/23.jpeg",
      "img/Cambodia/PhnomPenh/KanithaTith/01/24.jpeg"
    ];

    if ($("#item-KanithaTith1").hasClass("hide")) {
      for (var i = 0; i < imgArrayKanithaTith1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayKanithaTith1[i]);
        img.setAttribute(
          "class",
          "lazyload img-KanithaTith KanithaTith-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxKanithaTith(); currentSlideKanithaTith(" + i + "+1)"
        );
        document.getElementById("row-KanithaTith-1").appendChild(img);
      }

      $("#row-KanithaTith")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-KanithaTith1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-KanithaTith1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-KanithaTith")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-KanithaTith1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-KanithaTith")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-KanithaTith-1").click(function() {
      var KanithaTith1 = document.getElementById("row-KanithaTith-1")
        .firstChild;
      KanithaTith1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-KanithaTith2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-KanithaTith2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-KanithaTith2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-KanithaTith2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KanithaTith").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-KanithaTith"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-KanithaTith")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KanithaTith")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- KanithaTith Lightbox --------------------//
    for (var i = 0; i < imgArrayKanithaTith1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayKanithaTith1[i]);
      img.setAttribute("class", "lazyload imgSlides imgKanithaTith-img");
      document.getElementById("imgKanithaTith").appendChild(img);
    }

    $("#imgKanithaTith")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- KanithaTith Contact --------------------//
  $("#button-KanithaTith-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#KanithaTith-contact").hasClass("hide")) {
      $("#KanithaTith-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#KanithaTith-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KanithaTith-contact").hasClass("no-highlight")) {
      $("#button-KanithaTith-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KanithaTith-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- KanithaTith Work --------------------//
  $("#button-KanithaTith-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#KanithaTith-work").hasClass("hide")) {
      $("#KanithaTith-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#KanithaTith-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KanithaTith-work").hasClass("no-highlight")) {
      $("#button-KanithaTith-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KanithaTith-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- KanithaTith Hyperlinks --------------------//
  $("#button-KanithaTith-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#KanithaTith-hyperlinks").hasClass("hide")) {
      $("#KanithaTith-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#KanithaTith-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KanithaTith-hyperlinks").hasClass("no-highlight")) {
      $("#button-KanithaTith-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KanithaTith-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End KanithaTith --------------------//////

  //////-------------------- KhievKanel --------------------//////
  $("#button-KhievKanel").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayKhievKanel1 = [
      "img/Cambodia/PhnomPenh/KhievKanel/01/01.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/02.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/03.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/04.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/05.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/06.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/07.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/08.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/09.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/10.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/11.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/12.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/13.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/14.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/15.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/16.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/17.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/18.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/19.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/20.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/21.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/22.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/23.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/24.jpg",
      "img/Cambodia/PhnomPenh/KhievKanel/01/25.jpg"
    ];

    if ($("#item-KhievKanel1").hasClass("hide")) {
      for (var i = 0; i < imgArrayKhievKanel1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayKhievKanel1[i]);
        img.setAttribute("class", "lazyload img-KhievKanel KhievKanel-group1");
        img.setAttribute(
          "onclick",
          "openLightboxKhievKanel(); currentSlideKhievKanel(" + i + "+1)"
        );
        document.getElementById("row-KhievKanel-1").appendChild(img);
      }

      $("#row-KhievKanel")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-KhievKanel1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-KhievKanel1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-KhievKanel")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-KhievKanel1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-KhievKanel")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-KhievKanel-1").click(function() {
      var KhievKanel1 = document.getElementById("row-KhievKanel-1").firstChild;
      KhievKanel1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-KhievKanel2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-KhievKanel2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-KhievKanel2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-KhievKanel2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KhievKanel").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-KhievKanel"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-KhievKanel")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KhievKanel")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- KhievKanel Lightbox --------------------//
    for (var i = 0; i < imgArrayKhievKanel.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayKhievKanel[i]);
      img.setAttribute("class", "lazyload imgSlides imgKhievKanel-img");
      document.getElementById("imgKhievKanel").appendChild(img);
    }

    $("#imgKhievKanel")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- KhievKanel Contact --------------------//
  $("#button-KhievKanel-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#KhievKanel-contact").hasClass("hide")) {
      $("#KhievKanel-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#KhievKanel-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KhievKanel-contact").hasClass("no-highlight")) {
      $("#button-KhievKanel-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KhievKanel-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- KhievKanel Work --------------------//
  $("#button-KhievKanel-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#KhievKanel-work").hasClass("hide")) {
      $("#KhievKanel-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#KhievKanel-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KhievKanel-work").hasClass("no-highlight")) {
      $("#button-KhievKanel-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KhievKanel-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- KhievKanel Hyperlinks --------------------//
  $("#button-KhievKanel-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#KhievKanel-hyperlinks").hasClass("hide")) {
      $("#KhievKanel-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#KhievKanel-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-KhievKanel-hyperlinks").hasClass("no-highlight")) {
      $("#button-KhievKanel-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KhievKanel-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End KhievKanel --------------------//////

  //////-------------------- LeBrothers --------------------//////
  $("#button-LeBrothers").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayLeBrothers1 = [
      "img/Vietnam/Hue/LeBrothers/01/01.jpg",
      "img/Vietnam/Hue/LeBrothers/01/02.jpg",
      "img/Vietnam/Hue/LeBrothers/01/03.jpg",
      "img/Vietnam/Hue/LeBrothers/01/04.jpg",
      "img/Vietnam/Hue/LeBrothers/01/05.jpg",
      "img/Vietnam/Hue/LeBrothers/01/06.jpg",
      "img/Vietnam/Hue/LeBrothers/01/07.jpg",
      "img/Vietnam/Hue/LeBrothers/01/08.jpg",
      "img/Vietnam/Hue/LeBrothers/01/09.jpg",
      "img/Vietnam/Hue/LeBrothers/01/10.jpg"
    ];

    if ($("#item-LeBrothers1").hasClass("hide")) {
      for (var i = 0; i < imgArrayLeBrothers1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayLeBrothers1[i]);
        img.setAttribute("class", "lazyload img-LeBrothers LeBrothers-group1");
        img.setAttribute(
          "onclick",
          "openLightboxLeBrothers(); currentSlideLeBrothers(" + i + "+1)"
        );
        document.getElementById("row-LeBrothers-1").appendChild(img);
      }

      $("#row-LeBrothers")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-LeBrothers1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-LeBrothers1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-LeBrothers")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-LeBrothers1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-LeBrothers")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-LeBrothers-1").click(function() {
      var LeBrothers1 = document.getElementById("row-LeBrothers-1").firstChild;
      LeBrothers1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-LeBrothers2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-LeBrothers2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-LeBrothers2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-LeBrothers2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeBrothers").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-LeBrothers"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-LeBrothers")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeBrothers")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- LeBrothers Lightbox --------------------//
    for (var i = 0; i < imgArrayLeBrothers1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayLeBrothers1[i]);
      img.setAttribute("class", "lazyload imgSlides imgLeBrothers-img");
      document.getElementById("imgLeBrothers").appendChild(img);
    }

    $("#imgLeBrothers")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- LeBrothers Contact --------------------//
  $("#button-LeBrothers-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#LeBrothers-contact").hasClass("hide")) {
      $("#LeBrothers-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#LeBrothers-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeBrothers-contact").hasClass("no-highlight")) {
      $("#button-LeBrothers-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeBrothers-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- LeBrothers Work --------------------//
  $("#button-LeBrothers-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#LeBrothers-work").hasClass("hide")) {
      $("#LeBrothers-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#LeBrothers-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeBrothers-work").hasClass("no-highlight")) {
      $("#button-LeBrothers-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeBrothers-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- LeBrothers Hyperlinks --------------------//
  $("#button-LeBrothers-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#LeBrothers-hyperlinks").hasClass("hide")) {
      $("#LeBrothers-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#LeBrothers-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeBrothers-hyperlinks").hasClass("no-highlight")) {
      $("#button-LeBrothers-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeBrothers-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End LeBrothers --------------------//////

  //////-------------------- LeopoldFranckowiak --------------------//////
  $("#button-LeopoldFranckowiak").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayLeopoldFranckowiak1 = [
      "img/Vietnam/Hue/LeopoldFranckowiak/01/01.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/02.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/03.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/04.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/05.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/06.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/07.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/08.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/09.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/10.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/11.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/12.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/13.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/14.jpg",
      "img/Vietnam/Hue/LeopoldFranckowiak/01/15.jpg"
    ];

    if ($("#item-LeopoldFranckowiak1").hasClass("hide")) {
      for (var i = 0; i < imgArrayLeopoldFranckowiak1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayLeopoldFranckowiak1[i]);
        img.setAttribute(
          "class",
          "lazyload img-LeopoldFranckowiak LeopoldFranckowiak-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxLeopoldFranckowiak(); currentSlideLeopoldFranckowiak(" +
            i +
            "+1)"
        );
        document.getElementById("row-LeopoldFranckowiak-1").appendChild(img);
      }

      $("#row-LeopoldFranckowiak")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-LeopoldFranckowiak1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-LeopoldFranckowiak1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-LeopoldFranckowiak")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-LeopoldFranckowiak1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-LeopoldFranckowiak")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-LeopoldFranckowiak-1").click(function() {
      var LeopoldFranckowiak1 = document.getElementById(
        "row-LeopoldFranckowiak-1"
      ).firstChild;
      LeopoldFranckowiak1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-LeopoldFranckowiak2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-LeopoldFranckowiak2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-LeopoldFranckowiak2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-LeopoldFranckowiak2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeopoldFranckowiak").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-LeopoldFranckowiak"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-LeopoldFranckowiak")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeopoldFranckowiak")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- LeopoldFranckowiak Lightbox --------------------//
    for (var i = 0; i < imgArrayLeopoldFranckowiak1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayLeopoldFranckowiak1[i]);
      img.setAttribute("class", "lazyload imgSlides imgLeopoldFranckowiak-img");
      document.getElementById("imgLeopoldFranckowiak").appendChild(img);
    }

    $("#imgLeopoldFranckowiak")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- LeopoldFranckowiak Contact --------------------//
  $("#button-LeopoldFranckowiak-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#LeopoldFranckowiak-contact").hasClass("hide")) {
      $("#LeopoldFranckowiak-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#LeopoldFranckowiak-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeopoldFranckowiak-contact").hasClass("no-highlight")) {
      $("#button-LeopoldFranckowiak-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeopoldFranckowiak-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- LeopoldFranckowiak Work --------------------//
  $("#button-LeopoldFranckowiak-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#LeopoldFranckowiak-work").hasClass("hide")) {
      $("#LeopoldFranckowiak-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#LeopoldFranckowiak-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeopoldFranckowiak-work").hasClass("no-highlight")) {
      $("#button-LeopoldFranckowiak-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeopoldFranckowiak-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- LeopoldFranckowiak Hyperlinks --------------------//
  $("#button-LeopoldFranckowiak-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#LeopoldFranckowiak-hyperlinks").hasClass("hide")) {
      $("#LeopoldFranckowiak-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#LeopoldFranckowiak-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeopoldFranckowiak-hyperlinks").hasClass("no-highlight")) {
      $("#button-LeopoldFranckowiak-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeopoldFranckowiak-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End LeopoldFranckowiak --------------------//////

  //////-------------------- LeQuyTong --------------------//////
  $("#button-LeQuyTong").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayLeQuyTong1 = [
      "img/Vietnam/Hanoi/LeQuyTong/01/01.jpg",
      "img/Vietnam/Hanoi/LeQuyTong/01/02.jpg",
      "img/Vietnam/Hanoi/LeQuyTong/01/03.jpg",
      "img/Vietnam/Hanoi/LeQuyTong/01/04.jpg",
      "img/Vietnam/Hanoi/LeQuyTong/01/05.jpg",
      "img/Vietnam/Hanoi/LeQuyTong/01/06.jpg",
      "img/Vietnam/Hanoi/LeQuyTong/01/07.jpg",
      "img/Vietnam/Hanoi/LeQuyTong/01/08.jpg",
      "img/Vietnam/Hanoi/LeQuyTong/01/09.jpg",
      "img/Vietnam/Hanoi/LeQuyTong/01/10.jpg"
    ];

    if ($("#item-LeQuyTong1").hasClass("hide")) {
      for (var i = 0; i < imgArrayLeQuyTong1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayLeQuyTong1[i]);
        img.setAttribute("class", "lazyload img-LeQuyTong LeQuyTong-group1");
        img.setAttribute(
          "onclick",
          "openLightboxLeQuyTong(); currentSlideLeQuyTong(" + i + "+1)"
        );
        document.getElementById("row-LeQuyTong-1").appendChild(img);
      }

      $("#row-LeQuyTong")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-LeQuyTong1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-LeQuyTong1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-LeQuyTong")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-LeQuyTong1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-LeQuyTong")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-LeQuyTong-1").click(function() {
      var LeQuyTong1 = document.getElementById("row-LeQuyTong-1").firstChild;
      LeQuyTong1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-LeQuyTong2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-LeQuyTong2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-LeQuyTong2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-LeQuyTong2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeQuyTong").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-LeQuyTong"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-LeQuyTong")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeQuyTong")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- LeQuyTong Lightbox --------------------//
    for (var i = 0; i < imgArrayLeQuyTong1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayLeQuyTong1[i]);
      img.setAttribute("class", "lazyload imgSlides imgLeQuyTong-img");
      document.getElementById("imgLeQuyTong").appendChild(img);
    }

    $("#imgLeQuyTong")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- LeQuyTong Contact --------------------//
  $("#button-LeQuyTong-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#LeQuyTong-contact").hasClass("hide")) {
      $("#LeQuyTong-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#LeQuyTong-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeQuyTong-contact").hasClass("no-highlight")) {
      $("#button-LeQuyTong-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeQuyTong-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- LeQuyTong Work --------------------//
  $("#button-LeQuyTong-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#LeQuyTong-work").hasClass("hide")) {
      $("#LeQuyTong-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#LeQuyTong-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeQuyTong-work").hasClass("no-highlight")) {
      $("#button-LeQuyTong-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeQuyTong-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- LeQuyTong Hyperlinks --------------------//
  $("#button-LeQuyTong-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#LeQuyTong-hyperlinks").hasClass("hide")) {
      $("#LeQuyTong-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#LeQuyTong-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-LeQuyTong-hyperlinks").hasClass("no-highlight")) {
      $("#button-LeQuyTong-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LeQuyTong-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End LeQuyTong --------------------//////

  //////-------------------- MaiNguyenAnh --------------------//////
  $("#button-MaiNguyenAnh").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayMaiNguyenAnh1 = [
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/01.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/02.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/03.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/04.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/05.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/06.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/07.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/08.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/09.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/10.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/11.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/12.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/13.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/14.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/15.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/16.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/17.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/18.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/19.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/20.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/21.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/22.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/23.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/24.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/25.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/26.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/27.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/28.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/29.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/30.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/31.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/32.jpg",
      "img/Vietnam/Hanoi/MaiNguyenAnh/01/33.jpg"
    ];

    if ($("#item-MaiNguyenAnh1").hasClass("hide")) {
      for (var i = 0; i < imgArrayMaiNguyenAnh1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayMaiNguyenAnh1[i]);
        img.setAttribute(
          "class",
          "lazyload img-MaiNguyenAnh MaiNguyenAnh-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxMaiNguyenAnh(); currentSlideMaiNguyenAnh(" + i + "+1)"
        );
        document.getElementById("row-MaiNguyenAnh-1").appendChild(img);
      }

      $("#row-MaiNguyenAnh")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-MaiNguyenAnh1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-MaiNguyenAnh1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-MaiNguyenAnh")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-MaiNguyenAnh1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-MaiNguyenAnh")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-MaiNguyenAnh-1").click(function() {
      var MaiNguyenAnh1 = document.getElementById("row-MaiNguyenAnh-1")
        .firstChild;
      MaiNguyenAnh1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-MaiNguyenAnh2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-MaiNguyenAnh2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-MaiNguyenAnh2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-MaiNguyenAnh2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-MaiNguyenAnh").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-MaiNguyenAnh"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-MaiNguyenAnh")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MaiNguyenAnh")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- MaiNguyenAnh Lightbox --------------------//
    for (var i = 0; i < imgArrayMaiNguyenAnh1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayMaiNguyenAnh1[i]);
      img.setAttribute("class", "lazyload imgSlides imgMaiNguyenAnh-img");
      document.getElementById("imgMaiNguyenAnh").appendChild(img);
    }

    $("#imgMaiNguyenAnh")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- MaiNguyenAnh Contact --------------------//
  $("#button-MaiNguyenAnh-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#MaiNguyenAnh-contact").hasClass("hide")) {
      $("#MaiNguyenAnh-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#MaiNguyenAnh-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-MaiNguyenAnh-contact").hasClass("no-highlight")) {
      $("#button-MaiNguyenAnh-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MaiNguyenAnh-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- MaiNguyenAnh Work --------------------//
  $("#button-MaiNguyenAnh-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#MaiNguyenAnh-work").hasClass("hide")) {
      $("#MaiNguyenAnh-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#MaiNguyenAnh-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-MaiNguyenAnh-work").hasClass("no-highlight")) {
      $("#button-MaiNguyenAnh-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MaiNguyenAnh-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- MaiNguyenAnh Hyperlinks --------------------//
  $("#button-MaiNguyenAnh-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#MaiNguyenAnh-hyperlinks").hasClass("hide")) {
      $("#MaiNguyenAnh-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#MaiNguyenAnh-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-MaiNguyenAnh-hyperlinks").hasClass("no-highlight")) {
      $("#button-MaiNguyenAnh-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MaiNguyenAnh-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End MaiNguyenAnh --------------------//////

  //////-------------------- ManitSriwanichpoom --------------------//////
  $("#button-ManitSriwanichpoom").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayManitSriwanichpoom1 = [
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/01.jpg",
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/02.jpg",
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/03.jpg",
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/04.jpg",
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/05.jpg",
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/06.jpg",
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/07.jpg",
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/08.jpg",
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/09.jpg",
      "img/Thailand/Bangkok/ManitSriwanichpoom/01/10.jpg"
    ];

    if ($("#item-ManitSriwanichpoom1").hasClass("hide")) {
      for (var i = 0; i < imgArrayManitSriwanichpoom1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayManitSriwanichpoom1[i]);
        img.setAttribute(
          "class",
          "lazyload img-ManitSriwanichpoom ManitSriwanichpoom-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxManitSriwanichpoom(); currentSlideManitSriwanichpoom(" +
            i +
            "+1)"
        );
        document.getElementById("row-ManitSriwanichpoom-1").appendChild(img);
      }

      $("#row-ManitSriwanichpoom")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-ManitSriwanichpoom1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ManitSriwanichpoom1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-ManitSriwanichpoom")
        .removeClass("hide")
        .addClass("show");
      $("#int-tag-ManitSriwanichpoom")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ManitSriwanichpoom1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-ManitSriwanichpoom")
        .removeClass("show")
        .addClass("hide");
      $("#int-tag-ManitSriwanichpoom")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-ManitSriwanichpoom-1").click(function() {
      var ManitSriwanichpoom1 = document.getElementById(
        "row-ManitSriwanichpoom-1"
      ).firstChild;
      ManitSriwanichpoom1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-ManitSriwanichpoom2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-ManitSriwanichpoom2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ManitSriwanichpoom2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ManitSriwanichpoom2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ManitSriwanichpoom").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-ManitSriwanichpoom"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-ManitSriwanichpoom")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ManitSriwanichpoom")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- ManitSriwanichpoom Lightbox --------------------//
    for (var i = 0; i < imgArrayManitSriwanichpoom1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayManitSriwanichpoom1[i]);
      img.setAttribute("class", "lazyload imgSlides imgManitSriwanichpoom-img");
      document.getElementById("imgManitSriwanichpoom").appendChild(img);
    }

    $("#imgManitSriwanichpoom")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- ManitSriwanichpoom Contact --------------------//
  $("#button-ManitSriwanichpoom-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#ManitSriwanichpoom-contact").hasClass("hide")) {
      $("#ManitSriwanichpoom-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ManitSriwanichpoom-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ManitSriwanichpoom-contact").hasClass("no-highlight")) {
      $("#button-ManitSriwanichpoom-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ManitSriwanichpoom-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- ManitSriwanichpoom Work --------------------//
  $("#button-ManitSriwanichpoom-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#ManitSriwanichpoom-work").hasClass("hide")) {
      $("#ManitSriwanichpoom-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ManitSriwanichpoom-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ManitSriwanichpoom-work").hasClass("no-highlight")) {
      $("#button-ManitSriwanichpoom-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ManitSriwanichpoom-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- ManitSriwanichpoom Hyperlinks --------------------//
  $("#button-ManitSriwanichpoom-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#ManitSriwanichpoom-hyperlinks").hasClass("hide")) {
      $("#ManitSriwanichpoom-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ManitSriwanichpoom-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ManitSriwanichpoom-hyperlinks").hasClass("no-highlight")) {
      $("#button-ManitSriwanichpoom-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ManitSriwanichpoom-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End ManitSriwanichpoom --------------------//////

  //////-------------------- Mayco --------------------//////
  $("#button-Mayco").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayMayco1 = [
      "img/Myanmar/Yangon/Mayco/01/01.jpg",
      "img/Myanmar/Yangon/Mayco/01/02.jpg",
      "img/Myanmar/Yangon/Mayco/01/03.jpg",
      "img/Myanmar/Yangon/Mayco/01/04.jpg",
      "img/Myanmar/Yangon/Mayco/01/05.jpg",
      "img/Myanmar/Yangon/Mayco/01/06.jpg",
      "img/Myanmar/Yangon/Mayco/01/07.jpg",
      "img/Myanmar/Yangon/Mayco/01/08.jpg",
      "img/Myanmar/Yangon/Mayco/01/09.jpg",
      "img/Myanmar/Yangon/Mayco/01/10.jpg",
      "img/Myanmar/Yangon/Mayco/01/11.jpg",
      "img/Myanmar/Yangon/Mayco/01/12.jpg",
      "img/Myanmar/Yangon/Mayco/01/13.jpg",
      "img/Myanmar/Yangon/Mayco/01/14.jpg",
      "img/Myanmar/Yangon/Mayco/01/15.jpg",
      "img/Myanmar/Yangon/Mayco/01/16.jpg",
      "img/Myanmar/Yangon/Mayco/01/17.jpg",
      "img/Myanmar/Yangon/Mayco/01/18.jpg",
      "img/Myanmar/Yangon/Mayco/01/19.jpg",
      "img/Myanmar/Yangon/Mayco/01/20.jpg",
      "img/Myanmar/Yangon/Mayco/01/21.jpg",
      "img/Myanmar/Yangon/Mayco/01/22.jpg",
      "img/Myanmar/Yangon/Mayco/01/23.jpg",
      "img/Myanmar/Yangon/Mayco/01/24.jpg",
      "img/Myanmar/Yangon/Mayco/01/25.jpg",
      "img/Myanmar/Yangon/Mayco/01/26.jpg",
      "img/Myanmar/Yangon/Mayco/01/27.jpg",
      "img/Myanmar/Yangon/Mayco/01/28.jpg",
      "img/Myanmar/Yangon/Mayco/01/29.jpg",
      "img/Myanmar/Yangon/Mayco/01/30.jpg",
      "img/Myanmar/Yangon/Mayco/01/31.jpg"
    ];

    if ($("#item-Mayco1").hasClass("hide")) {
      for (var i = 0; i < imgArrayMayco1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayMayco1[i]);
        img.setAttribute("class", "lazyload img-Mayco Mayco-group1");
        img.setAttribute(
          "onclick",
          "openLightboxMayco(); currentSlideMayco(" + i + "+1)"
        );
        document.getElementById("row-Mayco-1").appendChild(img);
      }

      $("#row-Mayco")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-Mayco1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Mayco1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-Mayco")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-Mayco1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-Mayco")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-Mayco-1").click(function() {
      var Mayco1 = document.getElementById("row-Mayco-1").firstChild;
      Mayco1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-Mayco2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-Mayco2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Mayco2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-Mayco2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-Mayco").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-Mayco"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-Mayco")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Mayco")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- Mayco Lightbox --------------------//
    for (var i = 0; i < imgArrayMayco1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayMayco1[i]);
      img.setAttribute("class", "lazyload imgSlides imgMayco-img");
      document.getElementById("imgMayco").appendChild(img);
    }

    $("#imgMayco")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- Mayco Contact --------------------//
  $("#button-Mayco-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#Mayco-contact").hasClass("hide")) {
      $("#Mayco-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#Mayco-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-Mayco-contact").hasClass("no-highlight")) {
      $("#button-Mayco-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Mayco-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- Mayco Work --------------------//
  $("#button-Mayco-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#Mayco-work").hasClass("hide")) {
      $("#Mayco-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#Mayco-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-Mayco-work").hasClass("no-highlight")) {
      $("#button-Mayco-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Mayco-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- Mayco Hyperlinks --------------------//
  $("#button-Mayco-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#Mayco-hyperlinks").hasClass("hide")) {
      $("#Mayco-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#Mayco-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-Mayco-hyperlinks").hasClass("no-highlight")) {
      $("#button-Mayco-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Mayco-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End Mayco --------------------//////

  //////-------------------- MitJaiInn --------------------//////
  $("#button-MitJaiInn").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayMitJaiInn1 = [
      "img/Thailand/ChiangMai/MitJaiInn/01/01.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/02.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/03.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/04.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/05.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/06.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/07.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/08.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/09.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/10.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/11.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/12.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/13.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/14.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/15.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/16.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/17.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/18.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/19.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/20.jpg",
      "img/Thailand/ChiangMai/MitJaiInn/01/21.jpg"
    ];

    if ($("#item-MitJaiInn1").hasClass("hide")) {
      for (var i = 0; i < imgArrayMitJaiInn1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayMitJaiInn1[i]);
        img.setAttribute("class", "lazyload img-MitJaiInn MitJaiInn-group1");
        img.setAttribute(
          "onclick",
          "openLightboxMitJaiInn(); currentSlideMitJaiInn(" + i + "+1)"
        );
        document.getElementById("row-MitJaiInn-1").appendChild(img);
      }

      $("#row-MitJaiInn")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-MitJaiInn1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-MitJaiInn1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-MitJaiInn")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-MitJaiInn1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-MitJaiInn")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-MitJaiInn-1").click(function() {
      var MitJaiInn1 = document.getElementById("row-MitJaiInn-1").firstChild;
      MitJaiInn1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-MitJaiInn2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-MitJaiInn2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-MitJaiInn2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-MitJaiInn2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-MitJaiInn").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-MitJaiInn"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-MitJaiInn")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MitJaiInn")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- MitJaiInn Lightbox --------------------//
    for (var i = 0; i < imgArrayMitJaiInn1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayMitJaiInn1[i]);
      img.setAttribute("class", "lazyload imgSlides imgMitJaiInn-img");
      document.getElementById("imgMitJaiInn").appendChild(img);
    }

    $("#imgMitJaiInn")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- MitJaiInn Contact --------------------//
  $("#button-MitJaiInn-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#MitJaiInn-contact").hasClass("hide")) {
      $("#MitJaiInn-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#MitJaiInn-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-MitJaiInn-contact").hasClass("no-highlight")) {
      $("#button-MitJaiInn-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MitJaiInn-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- MitJaiInn Work --------------------//
  $("#button-MitJaiInn-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#MitJaiInn-work").hasClass("hide")) {
      $("#MitJaiInn-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#MitJaiInn-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-MitJaiInn-work").hasClass("no-highlight")) {
      $("#button-MitJaiInn-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MitJaiInn-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- MitJaiInn Hyperlinks --------------------//
  $("#button-MitJaiInn-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#MitJaiInn-hyperlinks").hasClass("hide")) {
      $("#MitJaiInn-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#MitJaiInn-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-MitJaiInn-hyperlinks").hasClass("no-highlight")) {
      $("#button-MitJaiInn-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MitJaiInn-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End MitJaiInn --------------------//////

  //////-------------------- NguyenQuocDzung --------------------//////
  $("#button-NguyenQuocDzung").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayNguyenQuocDzung1 = [
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/01.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/02.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/03.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/04.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/05.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/06.jpg"
    ];
    var imgArrayNguyenQuocDzung2 = [
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/01.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/02.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/03.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/04.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/05.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/06.jpg"
    ];
    var imgArrayNguyenQuocDzung3 = [
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/01.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/02.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/03.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/04.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/05.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/06.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/01.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/02.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/03.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/04.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/05.jpg"
    ];

    if ($("#item-NguyenQuocDzung1").hasClass("hide")) {
      for (var i = 0; i < imgArrayNguyenQuocDzung1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayNguyenQuocDzung1[i]);
        img.setAttribute(
          "class",
          "lazyload img-NguyenQuocDzung NguyenQuocDzung-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxNguyenQuocDzung(); currentSlideNguyenQuocDzung(" +
            i +
            "+1)"
        );
        document.getElementById("row-NguyenQuocDzung-1").appendChild(img);
      }

      for (var i = 0; i < imgArrayNguyenQuocDzung2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayNguyenQuocDzung2[i]);
        img.setAttribute(
          "class",
          "lazyload img-NguyenQuocDzung NguyenQuocDzung-group2"
        );
        img.setAttribute(
          "onclick",
          "openLightboxNguyenQuocDzung(); currentSlideNguyenQuocDzung(" +
            i +
            "+1)"
        );
        document.getElementById("row-NguyenQuocDzung-2").appendChild(img);
      }

      for (var i = 0; i < imgArrayNguyenQuocDzung3.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayNguyenQuocDzung3[i]);
        img.setAttribute(
          "class",
          "lazyload img-NguyenQuocDzung NguyenQuocDzung-group3"
        );
        img.setAttribute(
          "onclick",
          "openLightboxNguyenQuocDzung(); currentSlideNguyenQuocDzung(" +
            i +
            "+1)"
        );
        document.getElementById("row-NguyenQuocDzung-3").appendChild(img);
      }

      $("#row-NguyenQuocDzung")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-NguyenQuocDzung1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-NguyenQuocDzung1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-NguyenQuocDzung")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-NguyenQuocDzung1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-NguyenQuocDzung")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-NguyenQuocDzung-1").click(function() {
      var NguyenQuocDzung1 = document.getElementById("row-NguyenQuocDzung-1")
        .firstChild;
      NguyenQuocDzung1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-NguyenQuocDzung-2").click(function() {
      var NguyenQuocDzung2 = document.getElementById("row-NguyenQuocDzung-2")
        .firstChild;
      NguyenQuocDzung2.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-NguyenQuocDzung-3").click(function() {
      var NguyenQuocDzung3 = document.getElementById("row-NguyenQuocDzung-3")
        .firstChild;
      NguyenQuocDzung3.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-NguyenQuocDzung2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-NguyenQuocDzung2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-NguyenQuocDzung2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-NguyenQuocDzung2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-NguyenQuocDzung").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-NguyenQuocDzung"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-NguyenQuocDzung")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-NguyenQuocDzung")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- NguyenQuocDzung Lightbox --------------------//
    for (var i = 0; i < imgArrayNguyenQuocDzung1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayNguyenQuocDzung1[i]);
      img.setAttribute("class", "lazyload imgSlides imgNguyenQuocDzung-img");
      document.getElementById("imgNguyenQuocDzung").appendChild(img);
    }
    for (var i = 0; i < imgArrayNguyenQuocDzung2.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayNguyenQuocDzung2[i]);
      img.setAttribute("class", "lazyload imgSlides imgNguyenQuocDzung-img");
      document.getElementById("imgNguyenQuocDzung").appendChild(img);
    }
    for (var i = 0; i < imgArrayNguyenQuocDzung3.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayNguyenQuocDzung3[i]);
      img.setAttribute("class", "lazyload imgSlides imgNguyenQuocDzung-img");
      document.getElementById("imgNguyenQuocDzung").appendChild(img);
    }

    $("#imgNguyenQuocDzung")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- NguyenQuocDzung Contact --------------------//
  $("#button-NguyenQuocDzung-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#NguyenQuocDzung-contact").hasClass("hide")) {
      $("#NguyenQuocDzung-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#NguyenQuocDzung-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-NguyenQuocDzung-contact").hasClass("no-highlight")) {
      $("#button-NguyenQuocDzung-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-NguyenQuocDzung-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- NguyenQuocDzung Work --------------------//
  $("#button-NguyenQuocDzung-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#NguyenQuocDzung-work").hasClass("hide")) {
      $("#NguyenQuocDzung-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#NguyenQuocDzung-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-NguyenQuocDzung-work").hasClass("no-highlight")) {
      $("#button-NguyenQuocDzung-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-NguyenQuocDzung-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- NguyenQuocDzung Hyperlinks --------------------//
  $("#button-NguyenQuocDzung-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#NguyenQuocDzung-hyperlinks").hasClass("hide")) {
      $("#NguyenQuocDzung-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#NguyenQuocDzung-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-NguyenQuocDzung-hyperlinks").hasClass("no-highlight")) {
      $("#button-NguyenQuocDzung-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-NguyenQuocDzung-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End NguyenQuocDzung --------------------//////

  //////-------------------- NguyenVanDu --------------------//////
  $("#button-NguyenVanDu").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayNguyenVanDu1 = [
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/01.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/02.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/03.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/04.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/05.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/06.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/07.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/08.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/09.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/10.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/11.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/12.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/13.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/14.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/15.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/16.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/17.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/18.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/19.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/20.jpg"
    ];
    var imgArrayNguyenVanDu2 = [
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/01.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/02.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/03.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/04.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/05.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/06.jpg",
      "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/07.jpg"
    ];

    if ($("#item-NguyenVanDu1").hasClass("hide")) {
      for (var i = 0; i < imgArrayNguyenVanDu1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayNguyenVanDu1[i]);
        img.setAttribute(
          "class",
          "lazyload img-NguyenVanDu NguyenVanDu-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxNguyenVanDu(); currentSlideNguyenVanDu(" + i + "+1)"
        );
        document.getElementById("row-NguyenVanDu-1").appendChild(img);
      }
      for (var i = 0; i < imgArrayNguyenVanDu2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayNguyenVanDu2[i]);
        img.setAttribute(
          "class",
          "lazyload img-NguyenVanDu NguyenVanDu-group2"
        );
        img.setAttribute(
          "onclick",
          "openLightboxNguyenVanDu(); currentSlideNguyenVanDu(" + i + "+1)"
        );
        document.getElementById("row-NguyenVanDu-2").appendChild(img);
      }

      $("#row-NguyenVanDu")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-NguyenVanDu1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-NguyenVanDu1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-NguyenVanDu")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-NguyenVanDu1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-NguyenVanDu")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-NguyenVanDu-1").click(function() {
      var NguyenVanDu1 = document.getElementById("row-NguyenVanDu-1")
        .firstChild;
      NguyenVanDu1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-NguyenVanDu-2").click(function() {
      var NguyenVanDu2 = document.getElementById("row-NguyenVanDu-2")
        .firstChild;
      NguyenVanDu2.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-NguyenVanDu2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-NguyenVanDu2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-NguyenVanDu2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-NguyenVanDu2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-NguyenVanDu").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-NguyenVanDu"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-NguyenVanDu")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-NguyenVanDu")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- NguyenVanDu Lightbox --------------------//
    for (var i = 0; i < imgArrayNguyenVanDu1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayNguyenVanDu1[i]);
      img.setAttribute("class", "lazyload imgSlides imgNguyenVanDu-img");
      document.getElementById("imgNguyenVanDu").appendChild(img);
    }
    for (var i = 0; i < imgArrayNguyenVanDu2.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayNguyenVanDu2[i]);
      img.setAttribute("class", "lazyload imgSlides imgNguyenVanDu-img");
      document.getElementById("imgNguyenVanDu").appendChild(img);
    }

    $("#imgNguyenVanDu")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- NguyenVanDu Contact --------------------//
  $("#button-NguyenVanDu-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#NguyenVanDu-contact").hasClass("hide")) {
      $("#NguyenVanDu-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#NguyenVanDu-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-NguyenVanDu-contact").hasClass("no-highlight")) {
      $("#button-NguyenVanDu-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-NguyenVanDu-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- NguyenVanDu Work --------------------//
  $("#button-NguyenVanDu-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#NguyenVanDu-work").hasClass("hide")) {
      $("#NguyenVanDu-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#NguyenVanDu-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-NguyenVanDu-work").hasClass("no-highlight")) {
      $("#button-NguyenVanDu-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-NguyenVanDu-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- NguyenVanDu Hyperlinks --------------------//
  $("#button-NguyenVanDu-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#NguyenVanDu-hyperlinks").hasClass("hide")) {
      $("#NguyenVanDu-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#NguyenVanDu-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-NguyenVanDu-hyperlinks").hasClass("no-highlight")) {
      $("#button-NguyenVanDu-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-NguyenVanDu-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End NguyenVanDu --------------------//////

  //////-------------------- PheSophon --------------------//////
  $("#button-PheSophon").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayPheSophon1 = [
      "img/Cambodia/PhnomPenh/PheSophon/01/01.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/02.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/03.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/04.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/05.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/06.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/07.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/08.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/09.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/10.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/11.jpeg",
      "img/Cambodia/PhnomPenh/PheSophon/01/12.jpeg"
    ];

    if ($("#item-PheSophon1").hasClass("hide")) {
      for (var i = 0; i < imgArrayPheSophon1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayPheSophon1[i]);
        img.setAttribute("class", "lazyload img-PheSophon PheSophon-group1");
        img.setAttribute(
          "onclick",
          "openLightboxPheSophon(); currentSlidePheSophon(" + i + "+1)"
        );
        document.getElementById("row-PheSophon-1").appendChild(img);
      }

      $("#row-PheSophon")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-PheSophon1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PheSophon1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-PheSophon")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PheSophon1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-PheSophon")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-PheSophon-1").click(function() {
      var PheSophon1 = document.getElementById("row-PheSophon-1").firstChild;
      PheSophon1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-PheSophon2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-PheSophon2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PheSophon2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PheSophon2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PheSophon").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-PheSophon"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PheSophon")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PheSophon")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- PheSophon Lightbox --------------------//
    for (var i = 0; i < imgArrayPheSophon1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayPheSophon1[i]);
      img.setAttribute("class", "lazyload imgSlides imgPheSophon-img");
      document.getElementById("imgPheSophon").appendChild(img);
    }

    $("#imgPheSophon")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- PheSophon Contact --------------------//
  $("#button-PheSophon-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#PheSophon-contact").hasClass("hide")) {
      $("#PheSophon-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PheSophon-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PheSophon-contact").hasClass("no-highlight")) {
      $("#button-PheSophon-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PheSophon-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- PheSophon Work --------------------//
  $("#button-PheSophon-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#PheSophon-work").hasClass("hide")) {
      $("#PheSophon-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PheSophon-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PheSophon-work").hasClass("no-highlight")) {
      $("#button-PheSophon-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PheSophon-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- PheSophon Hyperlinks --------------------//
  $("#button-PheSophon-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#PheSophon-hyperlinks").hasClass("hide")) {
      $("#PheSophon-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PheSophon-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PheSophon-hyperlinks").hasClass("no-highlight")) {
      $("#button-PheSophon-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PheSophon-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End PheSophon --------------------//////

  //////-------------------- PhuongDuc --------------------//////
  $("#button-PhuongDuc").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayPhuongDuc1 = [
      "img/Vietnam/Hanoi/PhuongDuc/01/01.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/02.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/03.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/04.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/05.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/06.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/07.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/08.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/09.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/10.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/11.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/12.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/13.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/14.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/15.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/16.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/17.jpg",
      "img/Vietnam/Hanoi/PhuongDuc/01/18.jpg"
    ];

    if ($("#item-PhuongDuc1").hasClass("hide")) {
      for (var i = 0; i < imgArrayPhuongDuc1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayPhuongDuc1[i]);
        img.setAttribute("class", "lazyload img-PhuongDuc PhuongDuc-group1");
        img.setAttribute(
          "onclick",
          "openLightboxPhuongDuc(); currentSlidePhuongDuc(" + i + "+1)"
        );
        document.getElementById("row-PhuongDuc-1").appendChild(img);
      }

      $("#row-PhuongDuc")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-PhuongDuc1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PhuongDuc1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-PhuongDuc")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PhuongDuc1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-PhuongDuc")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-PhuongDuc-1").click(function() {
      var PhuongDuc1 = document.getElementById("row-PhuongDuc-1").firstChild;
      PhuongDuc1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-PhuongDuc2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-PhuongDuc2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PhuongDuc2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PhuongDuc2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PhuongDuc").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-PhuongDuc"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PhuongDuc")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PhuongDuc")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- PhuongDuc Lightbox --------------------//
    for (var i = 0; i < imgArrayPhuongDuc1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayPhuongDuc1[i]);
      img.setAttribute("class", "lazyload imgSlides imgPhuongDuc-img");
      document.getElementById("imgPhuongDuc").appendChild(img);
    }

    $("#imgPhuongDuc")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- PhuongDuc Contact --------------------//
  $("#button-PhuongDuc-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#PhuongDuc-contact").hasClass("hide")) {
      $("#PhuongDuc-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PhuongDuc-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PhuongDuc-contact").hasClass("no-highlight")) {
      $("#button-PhuongDuc-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PhuongDuc-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- PhuongDuc Work --------------------//
  $("#button-PhuongDuc-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#PhuongDuc-work").hasClass("hide")) {
      $("#PhuongDuc-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PhuongDuc-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PhuongDuc-work").hasClass("no-highlight")) {
      $("#button-PhuongDuc-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PhuongDuc-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- PhuongDuc Hyperlinks --------------------//
  $("#button-PhuongDuc-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#PhuongDuc-hyperlinks").hasClass("hide")) {
      $("#PhuongDuc-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PhuongDuc-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PhuongDuc-hyperlinks").hasClass("no-highlight")) {
      $("#button-PhuongDuc-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PhuongDuc-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End PhuongDuc --------------------//////

  //////-------------------- PichaiPongsasaovapark --------------------//////
  $("#button-PichaiPongsasaovapark").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayPichaiPongsasaovapark1 = [
      "img/Thailand/Bangkok/PichaiPongsasaovapark/01/01.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/01/02.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/02/01.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/02/02.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/03/01.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/03/02.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/04/01.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/04/02.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/05/01.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/05/02.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/06/01.jpg",
      "img/Thailand/Bangkok/PichaiPongsasaovapark/06/02.jpg"
    ];

    if ($("#item-PichaiPongsasaovapark1").hasClass("hide")) {
      for (var i = 0; i < imgArrayPichaiPongsasaovapark1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayPichaiPongsasaovapark1[i]);
        img.setAttribute(
          "class",
          "lazyload img-PichaiPongsasaovapark PichaiPongsasaovapark-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxPichaiPongsasaovapark(); currentSlidePichaiPongsasaovapark(" +
            i +
            "+1)"
        );
        document.getElementById("row-PichaiPongsasaovapark-1").appendChild(img);
      }

      $("#row-PichaiPongsasaovapark")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-PichaiPongsasaovapark1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PichaiPongsasaovapark1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-PichaiPongsasaovapark")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PichaiPongsasaovapark1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-PichaiPongsasaovapark")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-PichaiPongsasaovapark-1").click(function() {
      var PichaiPongsasaovapark1 = document.getElementById(
        "row-PichaiPongsasaovapark-1"
      ).firstChild;
      PichaiPongsasaovapark1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-PichaiPongsasaovapark2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-PichaiPongsasaovapark2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PichaiPongsasaovapark2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PichaiPongsasaovapark2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PichaiPongsasaovapark").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-PichaiPongsasaovapark"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PichaiPongsasaovapark")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PichaiPongsasaovapark")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- PichaiPongsasaovapark Lightbox --------------------//
    for (var i = 0; i < imgArrayPichaiPongsasaovapark1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayPichaiPongsasaovapark1[i]);
      img.setAttribute(
        "class",
        "lazyload imgSlides imgPichaiPongsasaovapark-img"
      );
      document.getElementById("imgPichaiPongsasaovapark").appendChild(img);
    }

    $("#imgPichaiPongsasaovapark")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- PichaiPongsasaovapark Contact --------------------//
  $("#button-PichaiPongsasaovapark-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#PichaiPongsasaovapark-contact").hasClass("hide")) {
      $("#PichaiPongsasaovapark-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PichaiPongsasaovapark-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PichaiPongsasaovapark-contact").hasClass("no-highlight")) {
      $("#button-PichaiPongsasaovapark-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PichaiPongsasaovapark-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- PichaiPongsasaovapark Work --------------------//
  $("#button-PichaiPongsasaovapark-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#PichaiPongsasaovapark-work").hasClass("hide")) {
      $("#PichaiPongsasaovapark-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PichaiPongsasaovapark-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PichaiPongsasaovapark-work").hasClass("no-highlight")) {
      $("#button-PichaiPongsasaovapark-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PichaiPongsasaovapark-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- PichaiPongsasaovapark Hyperlinks --------------------//
  $("#button-PichaiPongsasaovapark-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#PichaiPongsasaovapark-hyperlinks").hasClass("hide")) {
      $("#PichaiPongsasaovapark-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PichaiPongsasaovapark-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if (
      $("#button-PichaiPongsasaovapark-hyperlinks").hasClass("no-highlight")
    ) {
      $("#button-PichaiPongsasaovapark-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PichaiPongsasaovapark-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End PichaiPongsasaovapark --------------------//////

  //////-------------------- PipatraBanpabutr --------------------//////
  $("#button-PipatraBanpabutr").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayPipatraBanpabutr1 = [
      "img/Thailand/Bangkok/PipatraBanpabutr/01/01.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/02.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/03.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/04.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/05.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/06.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/07.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/08.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/09.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/10.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/11.jpg",
      "img/Thailand/Bangkok/PipatraBanpabutr/01/12.jpg"
    ];

    if ($("#item-PipatraBanpabutr1").hasClass("hide")) {
      for (var i = 0; i < imgArrayPipatraBanpabutr1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayPipatraBanpabutr1[i]);
        img.setAttribute(
          "class",
          "lazyload img-PipatraBanpabutr PipatraBanpabutr-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxPipatraBanpabutr(); currentSlidePipatraBanpabutr(" +
            i +
            "+1)"
        );
        document.getElementById("row-PipatraBanpabutr-1").appendChild(img);
      }

      $("#row-PipatraBanpabutr")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-PipatraBanpabutr1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PipatraBanpabutr1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-PipatraBanpabutr")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PipatraBanpabutr1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-PipatraBanpabutr")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-PipatraBanpabutr-1").click(function() {
      var PipatraBanpabutr1 = document.getElementById("row-PipatraBanpabutr-1")
        .firstChild;
      PipatraBanpabutr1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-PipatraBanpabutr2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-PipatraBanpabutr2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PipatraBanpabutr2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PipatraBanpabutr2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PipatraBanpabutr").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-PipatraBanpabutr"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PipatraBanpabutr")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PipatraBanpabutr")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- PipatraBanpabutr Lightbox --------------------//
    for (var i = 0; i < imgArrayPipatraBanpabutr1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayPipatraBanpabutr1[i]);
      img.setAttribute("class", "lazyload imgSlides imgPipatraBanpabutr-img");
      document.getElementById("imgPipatraBanpabutr").appendChild(img);
    }

    $("#imgPipatraBanpabutr")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- PipatraBanpabutr Contact --------------------//
  $("#button-PipatraBanpabutr-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#PipatraBanpabutr-contact").hasClass("hide")) {
      $("#PipatraBanpabutr-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PipatraBanpabutr-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PipatraBanpabutr-contact").hasClass("no-highlight")) {
      $("#button-PipatraBanpabutr-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PipatraBanpabutr-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- PipatraBanpabutr Work --------------------//
  $("#button-PipatraBanpabutr-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#PipatraBanpabutr-work").hasClass("hide")) {
      $("#PipatraBanpabutr-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PipatraBanpabutr-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PipatraBanpabutr-work").hasClass("no-highlight")) {
      $("#button-PipatraBanpabutr-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PipatraBanpabutr-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- PipatraBanpabutr Hyperlinks --------------------//
  $("#button-PipatraBanpabutr-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#PipatraBanpabutr-hyperlinks").hasClass("hide")) {
      $("#PipatraBanpabutr-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PipatraBanpabutr-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PipatraBanpabutr-hyperlinks").hasClass("no-highlight")) {
      $("#button-PipatraBanpabutr-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PipatraBanpabutr-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End PipatraBanpabutr --------------------//////

  //////-------------------- PiyaratPiyapongwiwat --------------------//////
  $("#button-PiyaratPiyapongwiwat").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayPiyaratPiyapongwiwat1 = [
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/01.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/02.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/03.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/04.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/05.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/06.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/07.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/08.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/09.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/10.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/11.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/12.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/13.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/14.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/15.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/16.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/17.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/18.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/19.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/20.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/21.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/22.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/23.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/24.jpg",
      "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/25.jpg"
    ];

    if ($("#item-PiyaratPiyapongwiwat1").hasClass("hide")) {
      for (var i = 0; i < imgArrayPiyaratPiyapongwiwat1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayPiyaratPiyapongwiwat1[i]);
        img.setAttribute(
          "class",
          "lazyload img-PiyaratPiyapongwiwat PiyaratPiyapongwiwat-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxPiyaratPiyapongwiwat(); currentSlidePiyaratPiyapongwiwat(" +
            i +
            "+1)"
        );
        document.getElementById("row-PiyaratPiyapongwiwat-1").appendChild(img);
      }

      $("#row-PiyaratPiyapongwiwat")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-PiyaratPiyapongwiwat1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PiyaratPiyapongwiwat1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-PiyaratPiyapongwiwat")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PiyaratPiyapongwiwat1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-PiyaratPiyapongwiwat")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-PiyaratPiyapongwiwat-1").click(function() {
      var PiyaratPiyapongwiwat1 = document.getElementById(
        "row-PiyaratPiyapongwiwat-1"
      ).firstChild;
      PiyaratPiyapongwiwat1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-PiyaratPiyapongwiwat2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-PiyaratPiyapongwiwat2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PiyaratPiyapongwiwat2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PiyaratPiyapongwiwat2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PiyaratPiyapongwiwat").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-PiyaratPiyapongwiwat"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PiyaratPiyapongwiwat")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PiyaratPiyapongwiwat")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- PiyaratPiyapongwiwat Lightbox --------------------//
    for (var i = 0; i < imgArrayPiyaratPiyapongwiwat1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayPiyaratPiyapongwiwat1[i]);
      img.setAttribute(
        "class",
        "lazyload imgSlides imgPiyaratPiyapongwiwat-img"
      );
      document.getElementById("imgPiyaratPiyapongwiwat").appendChild(img);
    }

    $("#imgPiyaratPiyapongwiwat")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- PiyaratPiyapongwiwat Contact --------------------//
  $("#button-PiyaratPiyapongwiwat-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#PiyaratPiyapongwiwat-contact").hasClass("hide")) {
      $("#PiyaratPiyapongwiwat-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PiyaratPiyapongwiwat-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PiyaratPiyapongwiwat-contact").hasClass("no-highlight")) {
      $("#button-PiyaratPiyapongwiwat-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PiyaratPiyapongwiwat-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- PiyaratPiyapongwiwat Work --------------------//
  $("#button-PiyaratPiyapongwiwat-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#PiyaratPiyapongwiwat-work").hasClass("hide")) {
      $("#PiyaratPiyapongwiwat-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PiyaratPiyapongwiwat-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PiyaratPiyapongwiwat-work").hasClass("no-highlight")) {
      $("#button-PiyaratPiyapongwiwat-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PiyaratPiyapongwiwat-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- PiyaratPiyapongwiwat Hyperlinks --------------------//
  $("#button-PiyaratPiyapongwiwat-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#PiyaratPiyapongwiwat-hyperlinks").hasClass("hide")) {
      $("#PiyaratPiyapongwiwat-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PiyaratPiyapongwiwat-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PiyaratPiyapongwiwat-hyperlinks").hasClass("no-highlight")) {
      $("#button-PiyaratPiyapongwiwat-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PiyaratPiyapongwiwat-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End PiyaratPiyapongwiwat --------------------//////

  //////-------------------- Popo --------------------//////
  $("#button-PoPo").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayPopo1 = [
      "img/Myanmar/Yangon/PoPo/01/01.jpeg",
      "img/Myanmar/Yangon/PoPo/01/02.jpeg",
      "img/Myanmar/Yangon/PoPo/01/03.jpeg",
      "img/Myanmar/Yangon/PoPo/01/04.jpeg",
      "img/Myanmar/Yangon/PoPo/01/05.jpeg",
      "img/Myanmar/Yangon/PoPo/01/06.jpeg",
      "img/Myanmar/Yangon/PoPo/01/07.jpeg",
      "img/Myanmar/Yangon/PoPo/01/08.jpeg",
      "img/Myanmar/Yangon/PoPo/01/09.jpeg"
    ];
    var imgArrayPopo2 = [
      "img/Myanmar/Yangon/PoPo/02/01.jpeg",
      "img/Myanmar/Yangon/PoPo/02/02.jpeg",
      "img/Myanmar/Yangon/PoPo/02/03.jpeg",
      "img/Myanmar/Yangon/PoPo/02/04.jpeg"
    ];

    if ($("#item-PoPo1").hasClass("hide")) {
      for (var i = 0; i < imgArrayPopo1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayPopo1[i]);
        img.setAttribute("class", "lazyload img-PoPo PoPo-group1");
        img.setAttribute(
          "onclick",
          "openLightboxPoPo(); currentSlidePoPo(" + i + "+1)"
        );
        document.getElementById("row-PoPo-1").appendChild(img);
      }

      for (var i = 0; i < imgArrayPopo2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayPopo2[i]);
        img.setAttribute("class", "lazyload img-PoPo PoPo-group2");
        img.setAttribute(
          "onclick",
          "openLightboxPoPo(); currentSlidePoPo(" + i + "+10)"
        );
        document.getElementById("row-PoPo-2").appendChild(img);
      }

      $("#row-PoPo")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-PoPo1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PoPo1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-PoPo")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PoPo1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-PoPo")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-PoPo-1").click(function() {
      var PoPo1 = document.getElementById("row-PoPo-1").firstChild;
      PoPo1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-PoPo-2").click(function() {
      var PoPo1 = document.getElementById("row-PoPo-2").firstChild;
      PoPo1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-PoPo2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-PoPo2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PoPo2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PoPo2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PoPo").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-PoPo"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PoPo")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PoPo")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- PoPo Lightbox --------------------//
    for (var i = 0; i < imgArrayPoPo1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayPoPo1[i]);
      img.setAttribute("class", "lazyload imgSlides imgPoPo-img");
      document.getElementById("imgPoPo").appendChild(img);
    }
    for (var i = 0; i < imgArrayPoPo2.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayPoPo2[i]);
      img.setAttribute("class", "lazyload imgSlides imgPoPo-img");
      document.getElementById("imgPoPo").appendChild(img);
    }

    $("#imgPoPo")
      .find("img.lazyload")
      .lazyload();
  });

  //-------------------- PoPo Contact --------------------//
  $("#button-PoPo-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#PoPo-contact").hasClass("hide")) {
      $("#PoPo-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PoPo-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PoPo-contact").hasClass("no-highlight")) {
      $("#button-PoPo-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PoPo-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- PoPo Work --------------------//
  $("#button-PoPo-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#PoPo-work").hasClass("hide")) {
      $("#PoPo-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PoPo-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PoPo-work").hasClass("no-highlight")) {
      $("#button-PoPo-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PoPo-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- PoPo Hyperlinks --------------------//
  $("#button-PoPo-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#PoPo-hyperlinks").hasClass("hide")) {
      $("#PoPo-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PoPo-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PoPo-hyperlinks").hasClass("no-highlight")) {
      $("#button-PoPo-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PoPo-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End Popo --------------------//////

  //////-------------------- PornchaiChaima --------------------//////
  $("#button-PornchaiChaima").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayPornchaiChaima1 = [
      "img/Thailand/ChiangMai/PornchaiChaima/01/01.jpg",
      "img/Thailand/ChiangMai/PornchaiChaima/01/02.jpg",
      "img/Thailand/ChiangMai/PornchaiChaima/01/03.jpg",
      "img/Thailand/ChiangMai/PornchaiChaima/01/04.jpg",
      "img/Thailand/ChiangMai/PornchaiChaima/01/05.jpg",
      "img/Thailand/ChiangMai/PornchaiChaima/01/06.jpg",
      "img/Thailand/ChiangMai/PornchaiChaima/01/07.jpg",
      "img/Thailand/ChiangMai/PornchaiChaima/01/08.jpg",
      "img/Thailand/ChiangMai/PornchaiChaima/01/09.jpg",
      "img/Thailand/ChiangMai/PornchaiChaima/01/10.jpg"
    ];

    if ($("#item-PornchaiChaima1").hasClass("hide")) {
      for (var i = 0; i < imgArrayPornchaiChaima1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayPornchaiChaima1[i]);
        img.setAttribute(
          "class",
          "lazyload img-PornchaiChaima PornchaiChaima-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxPornchaiChaima(); currentSlidePornchaiChaima(" +
            i +
            "+1)"
        );
        document.getElementById("row-PornchaiChaima-1").appendChild(img);
      }

      $("#row-PornchaiChaima")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-PornchaiChaima1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PornchaiChaima1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-PornchaiChaima")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PornchaiChaima1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-PornchaiChaima")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-PornchaiChaima-1").click(function() {
      var PornchaiChaima1 = document.getElementById("row-PornchaiChaima-1")
        .firstChild;
      PornchaiChaima1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-PornchaiChaima2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-PornchaiChaima2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PornchaiChaima2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-PornchaiChaima2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PornchaiChaima").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-PornchaiChaima"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PornchaiChaima")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PornchaiChaima")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- PornchaiChaima Lightbox --------------------//
    for (var i = 0; i < imgArrayPornchaiChaima1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayPornchaiChaima1[i]);
      img.setAttribute("class", "lazyload imgSlides imgPornchaiChaima-img");
      document.getElementById("imgPornchaiChaima").appendChild(img);
    }

    $("#imgPornchaiChaima")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- PornchaiChaima Contact --------------------//
  $("#button-PornchaiChaima-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#PornchaiChaima-contact").hasClass("hide")) {
      $("#PornchaiChaima-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PornchaiChaima-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PornchaiChaima-contact").hasClass("no-highlight")) {
      $("#button-PornchaiChaima-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PornchaiChaima-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- PornchaiChaima Work --------------------//
  $("#button-PornchaiChaima-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#PornchaiChaima-work").hasClass("hide")) {
      $("#PornchaiChaima-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PornchaiChaima-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PornchaiChaima-work").hasClass("no-highlight")) {
      $("#button-PornchaiChaima-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PornchaiChaima-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- PornchaiChaima Hyperlinks --------------------//
  $("#button-PornchaiChaima-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#PornchaiChaima-hyperlinks").hasClass("hide")) {
      $("#PornchaiChaima-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#PornchaiChaima-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-PornchaiChaima-hyperlinks").hasClass("no-highlight")) {
      $("#button-PornchaiChaima-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PornchaiChaima-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End PornchaiChaima --------------------//////

  //////-------------------- SaiHtinLinnHtet --------------------//////
  $("#button-SaiHtinLinnHtet").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArraySaiHtinLinnHtet1 = [
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/01.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/02.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/03.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/04.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/05.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/06.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/07.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/08.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/09.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/10.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/11.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/12.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/13.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/14.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/15.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/16.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/17.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/18.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/19.jpg",
      "img/Myanmar/Yangon/SaiHtinLinnHtet/01/20.jpg"
    ];

    if ($("#item-SaiHtinLinnHtet1").hasClass("hide")) {
      for (var i = 0; i < imgArraySaiHtinLinnHtet1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArraySaiHtinLinnHtet1[i]);
        img.setAttribute(
          "class",
          "lazyload img-SaiHtinLinnHtet SaiHtinLinnHtet-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxSaiHtinLinnHtet(); currentSlideSaiHtinLinnHtet(" +
            i +
            "+1)"
        );
        document.getElementById("row-SaiHtinLinnHtet-1").appendChild(img);
      }

      $("#row-SaiHtinLinnHtet")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-SaiHtinLinnHtet1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SaiHtinLinnHtet1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-SaiHtinLinnHtet")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-SaiHtinLinnHtet1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-SaiHtinLinnHtet")
        .removeClass("show")
        .addClass("hide");
      $("#int-tag-SaiHtinLinnHtet")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-SaiHtinLinnHtet-1").click(function() {
      var SaiHtinLinnHtet1 = document.getElementById("row-SaiHtinLinnHtet-1")
        .firstChild;
      SaiHtinLinnHtet1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-SaiHtinLinnHtet2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-SaiHtinLinnHtet2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SaiHtinLinnHtet2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-SaiHtinLinnHtet2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SaiHtinLinnHtet").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-SaiHtinLinnHtet"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-SaiHtinLinnHtet")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SaiHtinLinnHtet")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- SaiHtinLinnHtet Lightbox --------------------//
    for (var i = 0; i < imgArraySaiHtinLinnHtet1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArraySaiHtinLinnHtet1[i]);
      img.setAttribute("class", "lazyload imgSlides imgSaiHtinLinnHtet-img");
      document.getElementById("imgSaiHtinLinnHtet").appendChild(img);
    }

    $("#imgSaiHtinLinnHtet")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- SaiHtinLinnHtet Contact --------------------//
  $("#button-SaiHtinLinnHtet-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#SaiHtinLinnHtet-contact").hasClass("hide")) {
      $("#SaiHtinLinnHtet-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SaiHtinLinnHtet-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SaiHtinLinnHtet-contact").hasClass("no-highlight")) {
      $("#button-SaiHtinLinnHtet-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SaiHtinLinnHtet-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- SaiHtinLinnHtet Work --------------------//
  $("#button-SaiHtinLinnHtet-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#SaiHtinLinnHtet-work").hasClass("hide")) {
      $("#SaiHtinLinnHtet-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SaiHtinLinnHtet-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SaiHtinLinnHtet-work").hasClass("no-highlight")) {
      $("#button-SaiHtinLinnHtet-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SaiHtinLinnHtet-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- SaiHtinLinnHtet Hyperlinks --------------------//
  $("#button-SaiHtinLinnHtet-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#SaiHtinLinnHtet-hyperlinks").hasClass("hide")) {
      $("#SaiHtinLinnHtet-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SaiHtinLinnHtet-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SaiHtinLinnHtet-hyperlinks").hasClass("no-highlight")) {
      $("#button-SaiHtinLinnHtet-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SaiHtinLinnHtet-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End SaiHtinLinnHtet --------------------//////

  //////-------------------- SamakKosem --------------------//////
  $("#button-SamakKosem").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArraySamakKosem1 = [
      "img/Thailand/ChiangMai/SamakKosem/01/01.jpg",
      "img/Thailand/ChiangMai/SamakKosem/01/02.jpg",
      "img/Thailand/ChiangMai/SamakKosem/01/03.jpg",
      "img/Thailand/ChiangMai/SamakKosem/01/04.jpg",
      "img/Thailand/ChiangMai/SamakKosem/01/05.jpg",
      "img/Thailand/ChiangMai/SamakKosem/01/06.jpg"
    ];

    if ($("#item-SamakKosem1").hasClass("hide")) {
      for (var i = 0; i < imgArraySamakKosem1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArraySamakKosem1[i]);
        img.setAttribute("class", "lazyload img-SamakKosem SamakKosem-group1");
        img.setAttribute(
          "onclick",
          "openLightboxSamakKosem(); currentSlideSamakKosem(" + i + "+1)"
        );
        document.getElementById("row-SamakKosem-1").appendChild(img);
      }

      $("#row-SamakKosem")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-SamakKosem1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SamakKosem1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-SamakKosem")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-SamakKosem1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-SamakKosem")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-SamakKosem-1").click(function() {
      var SamakKosem1 = document.getElementById("row-SamakKosem-1").firstChild;
      SamakKosem1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-SamakKosem2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-SamakKosem2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SamakKosem2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-SamakKosem2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SamakKosem").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-SamakKosem"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-SamakKosem")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SamakKosem")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- SamakKosem Lightbox --------------------//
    for (var i = 0; i < imgArraySamakKosem1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArraySamakKosem1[i]);
      img.setAttribute("class", "lazyload imgSlides imgSamakKosem-img");
      document.getElementById("imgSamakKosem").appendChild(img);
    }

    $("#imgSamakKosem")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- SamakKosem Contact --------------------//
  $("#button-SamakKosem-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#SamakKosem-contact").hasClass("hide")) {
      $("#SamakKosem-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SamakKosem-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SamakKosem-contact").hasClass("no-highlight")) {
      $("#button-SamakKosem-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SamakKosem-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- SamakKosem Work --------------------//
  $("#button-SamakKosem-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#SamakKosem-work").hasClass("hide")) {
      $("#SamakKosem-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SamakKosem-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SamakKosem-work").hasClass("no-highlight")) {
      $("#button-SamakKosem-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SamakKosem-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- SamakKosem Hyperlinks --------------------//
  $("#button-SamakKosem-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#SamakKosem-hyperlinks").hasClass("hide")) {
      $("#SamakKosem-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SamakKosem-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SamakKosem-hyperlinks").hasClass("no-highlight")) {
      $("#button-SamakKosem-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SamakKosem-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End SamakKosem --------------------//////

  //////-------------------- SanMinn --------------------//////
  $("#button-SanMinn").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArraySanMinn1 = [
      "img/Myanmar/Yangon/SanMinn/01/01.jpg",
      "img/Myanmar/Yangon/SanMinn/01/02.jpg",
      "img/Myanmar/Yangon/SanMinn/01/03.jpg",
      "img/Myanmar/Yangon/SanMinn/01/04.jpg",
      "img/Myanmar/Yangon/SanMinn/01/05.jpg",
      "img/Myanmar/Yangon/SanMinn/01/06.jpg",
      "img/Myanmar/Yangon/SanMinn/01/07.jpg",
      "img/Myanmar/Yangon/SanMinn/01/08.jpg",
      "img/Myanmar/Yangon/SanMinn/01/09.jpg",
      "img/Myanmar/Yangon/SanMinn/01/10.jpg",
      "img/Myanmar/Yangon/SanMinn/01/11.jpg",
      "img/Myanmar/Yangon/SanMinn/01/12.jpg",
      "img/Myanmar/Yangon/SanMinn/01/13.jpg",
      "img/Myanmar/Yangon/SanMinn/01/14.jpg",
      "img/Myanmar/Yangon/SanMinn/01/15.jpg",
      "img/Myanmar/Yangon/SanMinn/01/16.jpg",
      "img/Myanmar/Yangon/SanMinn/01/17.jpg",
      "img/Myanmar/Yangon/SanMinn/01/18.jpg",
      "img/Myanmar/Yangon/SanMinn/01/19.jpg",
      "img/Myanmar/Yangon/SanMinn/01/20.jpg",
      "img/Myanmar/Yangon/SanMinn/01/21.jpg",
      "img/Myanmar/Yangon/SanMinn/01/22.jpg",
      "img/Myanmar/Yangon/SanMinn/01/23.jpg",
      "img/Myanmar/Yangon/SanMinn/01/24.jpg",
      "img/Myanmar/Yangon/SanMinn/01/25.jpg",
      "img/Myanmar/Yangon/SanMinn/01/26.jpg",
      "img/Myanmar/Yangon/SanMinn/01/27.jpg",
      "img/Myanmar/Yangon/SanMinn/01/28.jpg",
      "img/Myanmar/Yangon/SanMinn/01/29.jpg"
    ];

    if ($("#item-SanMinn1").hasClass("hide")) {
      for (var i = 0; i < imgArraySanMinn1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArraySanMinn1[i]);
        img.setAttribute("class", "lazyload img-SanMinn SanMinn-group1");
        img.setAttribute(
          "onclick",
          "openLightboxSanMinn(); currentSlideSanMinn(" + i + "+1)"
        );
        document.getElementById("row-SanMinn-1").appendChild(img);
      }

      $("#row-SanMinn")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-SanMinn1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SanMinn1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-SanMinn")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-SanMinn1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-SanMinn")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-SanMinn-1").click(function() {
      var SanMinn1 = document.getElementById("row-SanMinn-1").firstChild;
      SanMinn1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-SanMinn2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-SanMinn2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SanMinn2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-SanMinn2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SanMinn").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-SanMinn"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-SanMinn")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SanMinn")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- SanMinn Lightbox --------------------//
    for (var i = 0; i < imgArraySanMinn1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArraySanMinn1[i]);
      img.setAttribute("class", "lazyload imgSlides imgSanMinn-img");
      document.getElementById("imgSanMinn").appendChild(img);
    }

    $("#imgSanMinn")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- SanMinn Contact --------------------//
  $("#button-SanMinn-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#SanMinn-contact").hasClass("hide")) {
      $("#SanMinn-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SanMinn-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SanMinn-contact").hasClass("no-highlight")) {
      $("#button-SanMinn-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SanMinn-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- SanMinn Work --------------------//
  $("#button-SanMinn-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#SanMinn-work").hasClass("hide")) {
      $("#SanMinn-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SanMinn-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SanMinn-work").hasClass("no-highlight")) {
      $("#button-SanMinn-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SanMinn-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- SanMinn Hyperlinks --------------------//
  $("#button-SanMinn-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#SanMinn-hyperlinks").hasClass("hide")) {
      $("#SanMinn-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SanMinn-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SanMinn-hyperlinks").hasClass("no-highlight")) {
      $("#button-SanMinn-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SanMinn-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End SanMinn --------------------//////

  //////-------------------- SreyMao --------------------//////
  $("#button-SreyMao").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArraySreyMao1 = [
      "img/Cambodia/PhnomPenh/SreyMao/01/01.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/01/02.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/01/03.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/01/04.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/01/05.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/01/06.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/01/07.jpg"
    ];
    var imgArraySreyMao2 = [
      "img/Cambodia/PhnomPenh/SreyMao/02/01.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/02/02.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/02/03.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/02/04.jpg",
      "img/Cambodia/PhnomPenh/SreyMao/02/05.jpg"
    ];

    if ($("#item-SreyMao1").hasClass("hide")) {
      for (var i = 0; i < imgArraySreyMao1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArraySreyMao1[i]);
        img.setAttribute("class", "lazyload img-SreyMao SreyMao-group1");
        img.setAttribute(
          "onclick",
          "openLightboxSreyMao(); currentSlideSreyMao(" + i + "+1)"
        );
        document.getElementById("row-SreyMao-1").appendChild(img);
      }
      for (var i = 0; i < imgArraySreyMao2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArraySreyMao2[i]);
        img.setAttribute("class", "lazyload img-SreyMao SreyMao-group2");
        img.setAttribute(
          "onclick",
          "openLightboxSreyMao(); currentSlideSreyMao(" + i + "+1)"
        );
        document.getElementById("row-SreyMao-2").appendChild(img);
      }

      $("#row-SreyMao")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-SreyMao1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SreyMao1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-SreyMao")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-SreyMao1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-SreyMao")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-SreyMao-1").click(function() {
      var SreyMao1 = document.getElementById("row-SreyMao-1").firstChild;
      SreyMao1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-SreyMao-2").click(function() {
      var SreyMao1 = document.getElementById("row-SreyMao-2").firstChild;
      SreyMao2.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-SreyMao2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-SreyMao2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SreyMao2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-SreyMao2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SreyMao").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-SreyMao"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-SreyMao")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SreyMao")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- SreyMao Lightbox --------------------//
    for (var i = 0; i < imgArraySreyMao1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArraySreyMao1[i]);
      img.setAttribute("class", "lazyload imgSlides imgSreyMao-img");
      document.getElementById("imgSreyMao").appendChild(img);
    }
    for (var i = 0; i < imgArraySreyMao2.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArraySreyMao2[i]);
      img.setAttribute("class", "lazyload imgSlides imgSreyMao-img");
      document.getElementById("imgSreyMao").appendChild(img);
    }

    $("#imgSreyMao")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- SreyMao Contact --------------------//
  $("#button-SreyMao-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#SreyMao-contact").hasClass("hide")) {
      $("#SreyMao-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SreyMao-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SreyMao-contact").hasClass("no-highlight")) {
      $("#button-SreyMao-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SreyMao-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- SreyMao Work --------------------//
  $("#button-SreyMao-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#SreyMao-work").hasClass("hide")) {
      $("#SreyMao-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SreyMao-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SreyMao-work").hasClass("no-highlight")) {
      $("#button-SreyMao-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SreyMao-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- SreyMao Hyperlinks --------------------//
  $("#button-SreyMao-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#SreyMao-hyperlinks").hasClass("hide")) {
      $("#SreyMao-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#SreyMao-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-SreyMao-hyperlinks").hasClass("no-highlight")) {
      $("#button-SreyMao-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SreyMao-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End SreyMao --------------------//////

  //////-------------------- ThasnaiSethaseree --------------------//////
  $("#button-ThasnaiSethaseree").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayThasnaiSethaseree1 = [
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/01.jpg",
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/02.jpg",
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/03.jpg",
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/04.jpg",
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/05.jpg",
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/06.jpg",
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/07.jpg",
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/08.jpg",
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/09.jpg",
      "img/Thailand/ChiangMai/ThasnaiSethaseree/01/10.jpg"
    ];

    if ($("#item-ThasnaiSethaseree1").hasClass("hide")) {
      for (var i = 0; i < imgArrayThasnaiSethaseree1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayThasnaiSethaseree1[i]);
        img.setAttribute(
          "class",
          "lazyload img-ThasnaiSethaseree ThasnaiSethaseree-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxThasnaiSethaseree(); currentSlideThasnaiSethaseree(" +
            i +
            "+1)"
        );
        document.getElementById("row-ThasnaiSethaseree-1").appendChild(img);
      }

      $("#row-ThasnaiSethaseree")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-ThasnaiSethaseree1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ThasnaiSethaseree1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-ThasnaiSethaseree")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ThasnaiSethaseree1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-ThasnaiSethaseree")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-ThasnaiSethaseree-1").click(function() {
      var ThasnaiSethaseree1 = document.getElementById(
        "row-ThasnaiSethaseree-1"
      ).firstChild;
      ThasnaiSethaseree1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-ThasnaiSethaseree2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-ThasnaiSethaseree2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ThasnaiSethaseree2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ThasnaiSethaseree2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ThasnaiSethaseree").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-ThasnaiSethaseree"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-ThasnaiSethaseree")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ThasnaiSethaseree")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- ThasnaiSethaseree Lightbox --------------------//
    for (var i = 0; i < imgArrayThasnaiSethaseree1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayThasnaiSethaseree1[i]);
      img.setAttribute("class", "lazyload imgSlides imgThasnaiSethaseree-img");
      document.getElementById("imgThasnaiSethaseree").appendChild(img);
    }

    $("#imgThasnaiSethaseree")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- ThasnaiSethaseree Contact --------------------//
  $("#button-ThasnaiSethaseree-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#ThasnaiSethaseree-contact").hasClass("hide")) {
      $("#ThasnaiSethaseree-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ThasnaiSethaseree-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ThasnaiSethaseree-contact").hasClass("no-highlight")) {
      $("#button-ThasnaiSethaseree-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ThasnaiSethaseree-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- ThasnaiSethaseree Work --------------------//
  $("#button-ThasnaiSethaseree-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#ThasnaiSethaseree-work").hasClass("hide")) {
      $("#ThasnaiSethaseree-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ThasnaiSethaseree-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ThasnaiSethaseree-work").hasClass("no-highlight")) {
      $("#button-ThasnaiSethaseree-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ThasnaiSethaseree-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- ThasnaiSethaseree Hyperlinks --------------------//
  $("#button-ThasnaiSethaseree-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#ThasnaiSethaseree-hyperlinks").hasClass("hide")) {
      $("#ThasnaiSethaseree-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ThasnaiSethaseree-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ThasnaiSethaseree-hyperlinks").hasClass("no-highlight")) {
      $("#button-ThasnaiSethaseree-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ThasnaiSethaseree-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End ThasnaiSethaseree --------------------//////

  //////-------------------- TheetatThunkijjanukij --------------------//////
  $("#button-TheetatThunkijjanukij").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayTheetatThunkijjanukij1 = [
      "img/Thailand/Bangkok/TheetatThunkijjanukij/01/01.jpg",
      "img/Thailand/Bangkok/TheetatThunkijjanukij/01/02.jpg",
      "img/Thailand/Bangkok/TheetatThunkijjanukij/01/03.jpg"
    ];

    if ($("#item-TheetatThunkijjanukij1").hasClass("hide")) {
      for (var i = 0; i < imgArrayTheetatThunkijjanukij1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayTheetatThunkijjanukij1[i]);
        img.setAttribute(
          "class",
          "lazyload img-TheetatThunkijjanukij TheetatThunkijjanukij-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxTheetatThunkijjanukij(); currentSlideTheetatThunkijjanukij(" +
            i +
            "+1)"
        );
        document.getElementById("row-TheetatThunkijjanukij-1").appendChild(img);
      }

      $("#row-TheetatThunkijjanukij")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-TheetatThunkijjanukij1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-TheetatThunkijjanukij1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-TheetatThunkijjanukij")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-TheetatThunkijjanukij1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-TheetatThunkijjanukij")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-TheetatThunkijjanukij-1").click(function() {
      var TheetatThunkijjanukij1 = document.getElementById(
        "row-TheetatThunkijjanukij-1"
      ).firstChild;
      TheetatThunkijjanukij1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-TheetatThunkijjanukij2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-TheetatThunkijjanukij2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-TheetatThunkijjanukij2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-TheetatThunkijjanukij2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TheetatThunkijjanukij").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-TheetatThunkijjanukij"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-TheetatThunkijjanukij")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TheetatThunkijjanukij")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- TheetatThunkijjanukij Lightbox --------------------//
    for (var i = 0; i < imgArrayTheetatThunkijjanukij1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayTheetatThunkijjanukij1[i]);
      img.setAttribute(
        "class",
        "lazyload imgSlides imgTheetatThunkijjanukij-img"
      );
      document.getElementById("imgTheetatThunkijjanukij").appendChild(img);
    }

    $("#imgTheetatThunkijjanukij")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- TheetatThunkijjanukij Contact --------------------//
  $("#button-TheetatThunkijjanukij-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#TheetatThunkijjanukij-contact").hasClass("hide")) {
      $("#TheetatThunkijjanukij-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#TheetatThunkijjanukij-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TheetatThunkijjanukij-contact").hasClass("no-highlight")) {
      $("#button-TheetatThunkijjanukij-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TheetatThunkijjanukij-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- TheetatThunkijjanukij Work --------------------//
  $("#button-TheetatThunkijjanukij-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#TheetatThunkijjanukij-work").hasClass("hide")) {
      $("#TheetatThunkijjanukij-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#TheetatThunkijjanukij-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TheetatThunkijjanukij-work").hasClass("no-highlight")) {
      $("#button-TheetatThunkijjanukij-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TheetatThunkijjanukij-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- TheetatThunkijjanukij Hyperlinks --------------------//
  $("#button-TheetatThunkijjanukij-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#TheetatThunkijjanukij-hyperlinks").hasClass("hide")) {
      $("#TheetatThunkijjanukij-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#TheetatThunkijjanukij-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if (
      $("#button-TheetatThunkijjanukij-hyperlinks").hasClass("no-highlight")
    ) {
      $("#button-TheetatThunkijjanukij-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TheetatThunkijjanukij-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End TheetatThunkijjanukij --------------------//////

  //////-------------------- ThitibodeeRungteerawattananon --------------------//////
  $("#button-ThitibodeeRungteerawattananon").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayThitibodeeRungteerawattananon1 = [
      "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/01.jpg",
      "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/02.jpg",
      "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/03.jpg",
      "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/04.jpg",
      "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/05.jpg",
      "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/06.jpg",
      "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/07.jpg"
    ];

    if ($("#item-ThitibodeeRungteerawattananon1").hasClass("hide")) {
      for (
        var i = 0;
        i < imgArrayThitibodeeRungteerawattananon1.length;
        i += 1
      ) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayThitibodeeRungteerawattananon1[i]);
        img.setAttribute(
          "class",
          "lazyload img-ThitibodeeRungteerawattananon ThitibodeeRungteerawattananon-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxThitibodeeRungteerawattananon(); currentSlideThitibodeeRungteerawattananon(" +
            i +
            "+1)"
        );
        document
          .getElementById("row-ThitibodeeRungteerawattananon-1")
          .appendChild(img);
      }

      $("#row-ThitibodeeRungteerawattananon")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-ThitibodeeRungteerawattananon1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ThitibodeeRungteerawattananon1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-ThitibodeeRungteerawattananon")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ThitibodeeRungteerawattananon1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-ThitibodeeRungteerawattananon")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-ThitibodeeRungteerawattananon-1").click(function() {
      var ThitibodeeRungteerawattananon1 = document.getElementById(
        "row-ThitibodeeRungteerawattananon-1"
      ).firstChild;
      ThitibodeeRungteerawattananon1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-ThitibodeeRungteerawattananon2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-ThitibodeeRungteerawattananon2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ThitibodeeRungteerawattananon2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ThitibodeeRungteerawattananon2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ThitibodeeRungteerawattananon").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-ThitibodeeRungteerawattananon"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-ThitibodeeRungteerawattananon")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ThitibodeeRungteerawattananon")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- ThitibodeeRungteerawattananon Lightbox --------------------//
    for (var i = 0; i < imgArrayThitibodeeRungteerawattananon1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayThitibodeeRungteerawattananon1[i]);
      img.setAttribute(
        "class",
        "lazyload imgSlides imgThitibodeeRungteerawattananon-img"
      );
      document
        .getElementById("imgThitibodeeRungteerawattananon")
        .appendChild(img);
    }

    $("#imgThitibodeeRungteerawattananon")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- ThitibodeeRungteerawattananon Contact --------------------//
  $("#button-ThitibodeeRungteerawattananon-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#ThitibodeeRungteerawattananon-contact").hasClass("hide")) {
      $("#ThitibodeeRungteerawattananon-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ThitibodeeRungteerawattananon-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if (
      $("#button-ThitibodeeRungteerawattananon-contact").hasClass(
        "no-highlight"
      )
    ) {
      $("#button-ThitibodeeRungteerawattananon-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ThitibodeeRungteerawattananon-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- ThitibodeeRungteerawattananon Work --------------------//
  $("#button-ThitibodeeRungteerawattananon-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#ThitibodeeRungteerawattananon-work").hasClass("hide")) {
      $("#ThitibodeeRungteerawattananon-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ThitibodeeRungteerawattananon-work")
        .removeClass("show")
        .addClass("hide");
    }

    if (
      $("#button-ThitibodeeRungteerawattananon-work").hasClass("no-highlight")
    ) {
      $("#button-ThitibodeeRungteerawattananon-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ThitibodeeRungteerawattananon-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- ThitibodeeRungteerawattananon Hyperlinks --------------------//
  $("#button-ThitibodeeRungteerawattananon-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#ThitibodeeRungteerawattananon-hyperlinks").hasClass("hide")) {
      $("#ThitibodeeRungteerawattananon-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ThitibodeeRungteerawattananon-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if (
      $("#button-ThitibodeeRungteerawattananon-hyperlinks").hasClass(
        "no-highlight"
      )
    ) {
      $("#button-ThitibodeeRungteerawattananon-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ThitibodeeRungteerawattananon-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End ThitibodeeRungteerawattananon --------------------//////

  //////-------------------- TienVeGroup --------------------//////
  $("#button-TienVeGroup").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayTienVeGroup1 = [
      "img/Vietnam/Hanoi/TienVeGroup/01/01.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/02.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/03.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/04.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/05.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/06.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/07.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/08.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/09.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/10.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/11.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/12.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/13.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/01.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/02.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/03.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/04.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/05.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/06.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/07.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/08.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/09.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/10.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/11.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/12.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/13.jpg",
      "img/Vietnam/Hanoi/TienVeGroup/01/14.jpg"
    ];

    if ($("#item-TienVeGroup1").hasClass("hide")) {
      for (var i = 0; i < imgArrayTienVeGroup1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayTienVeGroup1[i]);
        img.setAttribute(
          "class",
          "lazyload img-TienVeGroup TienVeGroup-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxTienVeGroup(); currentSlideTienVeGroup(" + i + "+1)"
        );
        document.getElementById("row-TienVeGroup-1").appendChild(img);
      }

      $("#row-TienVeGroup")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-TienVeGroup1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-TienVeGroup1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-TienVeGroup")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-TienVeGroup1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-TienVeGroup")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-TienVeGroup-1").click(function() {
      var TienVeGroup1 = document.getElementById("row-TienVeGroup-1")
        .firstChild;
      TienVeGroup1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-TienVeGroup2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-TienVeGroup2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-TienVeGroup2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-TienVeGroup2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TienVeGroup").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-TienVeGroup"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-TienVeGroup")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TienVeGroup")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- TienVeGroup Lightbox --------------------//
    for (var i = 0; i < imgArrayTienVeGroup1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayTienVeGroup1[i]);
      img.setAttribute("class", "lazyload imgSlides imgTienVeGroup-img");
      document.getElementById("imgTienVeGroup").appendChild(img);
    }

    $("#imgTienVeGroup")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- TienVeGroup Contact --------------------//
  $("#button-TienVeGroup-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#TienVeGroup-contact").hasClass("hide")) {
      $("#TienVeGroup-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#TienVeGroup-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TienVeGroup-contact").hasClass("no-highlight")) {
      $("#button-TienVeGroup-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TienVeGroup-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- TienVeGroup Work --------------------//
  $("#button-TienVeGroup-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#TienVeGroup-work").hasClass("hide")) {
      $("#TienVeGroup-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#TienVeGroup-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TienVeGroup-work").hasClass("no-highlight")) {
      $("#button-TienVeGroup-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TienVeGroup-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- TienVeGroup Hyperlinks --------------------//
  $("#button-TienVeGroup-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#TienVeGroup-hyperlinks").hasClass("hide")) {
      $("#TienVeGroup-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#TienVeGroup-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TienVeGroup-hyperlinks").hasClass("no-highlight")) {
      $("#button-TienVeGroup-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TienVeGroup-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End TienVeGroup --------------------//////

  //////-------------------- TunWinAungAndWahNu --------------------//////
  $("#button-TunWinAungAndWahNu").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayTunWinAungAndWahNu1 = [
      "img/Myanmar/Yangon/TunWinAungAndWahNu/01/01.jpg",
      "img/Myanmar/Yangon/TunWinAungAndWahNu/01/02.jpg",
      "img/Myanmar/Yangon/TunWinAungAndWahNu/01/03.jpg",
      "img/Myanmar/Yangon/TunWinAungAndWahNu/01/04.jpg",
      "img/Myanmar/Yangon/TunWinAungAndWahNu/01/05.jpg"
    ];
    var imgArrayTunWinAungAndWahNu2 = [
      "img/Myanmar/Yangon/TunWinAungAndWahNu/02/01.jpg",
      "img/Myanmar/Yangon/TunWinAungAndWahNu/02/02.jpg",
      "img/Myanmar/Yangon/TunWinAungAndWahNu/02/03.jpg",
      "img/Myanmar/Yangon/TunWinAungAndWahNu/02/04.jpg",
      "img/Myanmar/Yangon/TunWinAungAndWahNu/02/05.jpg"
    ];

    if ($("#item-TunWinAungAndWahNu1").hasClass("hide")) {
      for (var i = 0; i < imgArrayTunWinAungAndWahNu1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayTunWinAungAndWahNu1[i]);
        img.setAttribute(
          "class",
          "lazyload img-TunWinAungAndWahNu TunWinAungAndWahNu-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxTunWinAungAndWahNu(); currentSlideTunWinAungAndWahNu(" +
            i +
            "+1)"
        );
        document.getElementById("row-TunWinAungAndWahNu-1").appendChild(img);
      }
      for (var i = 0; i < imgArrayTunWinAungAndWahNu2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayTunWinAungAndWahNu2[i]);
        img.setAttribute(
          "class",
          "lazyload img-TunWinAungAndWahNu TunWinAungAndWahNu-group2"
        );
        img.setAttribute(
          "onclick",
          "openLightboxTunWinAungAndWahNu(); currentSlideTunWinAungAndWahNu(" +
            i +
            "+1)"
        );
        document.getElementById("row-TunWinAungAndWahNu-2").appendChild(img);
      }

      $("#row-TunWinAungAndWahNu")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-TunWinAungAndWahNu1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-TunWinAungAndWahNu1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-TunWinAungAndWahNu")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-TunWinAungAndWahNu1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-TunWinAungAndWahNu")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-TunWinAungAndWahNu-1").click(function() {
      var TunWinAungAndWahNu1 = document.getElementById(
        "row-TunWinAungAndWahNu-1"
      ).firstChild;
      TunWinAungAndWahNu1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-TunWinAungAndWahNu2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-TunWinAungAndWahNu2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-TunWinAungAndWahNu2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-TunWinAungAndWahNu2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TunWinAungAndWahNu").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-TunWinAungAndWahNu"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-TunWinAungAndWahNu")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TunWinAungAndWahNu")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- TunWinAungAndWahNu Lightbox --------------------//
    for (var i = 0; i < imgArrayTunWinAungAndWahNu1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayTunWinAungAndWahNu1[i]);
      img.setAttribute("class", "lazyload imgSlides imgTunWinAungAndWahNu-img");
      document.getElementById("imgTunWinAungAndWahNu").appendChild(img);
    }

    $("#imgTunWinAungAndWahNu")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- TunWinAungAndWahNu Contact --------------------//
  $("#button-TunWinAungAndWahNu-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#TunWinAungAndWahNu-contact").hasClass("hide")) {
      $("#TunWinAungAndWahNu-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#TunWinAungAndWahNu-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TunWinAungAndWahNu-contact").hasClass("no-highlight")) {
      $("#button-TunWinAungAndWahNu-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TunWinAungAndWahNu-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- TunWinAungAndWahNu Work --------------------//
  $("#button-TunWinAungAndWahNu-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#TunWinAungAndWahNu-work").hasClass("hide")) {
      $("#TunWinAungAndWahNu-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#TunWinAungAndWahNu-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TunWinAungAndWahNu-work").hasClass("no-highlight")) {
      $("#button-TunWinAungAndWahNu-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TunWinAungAndWahNu-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- TunWinAungAndWahNu Hyperlinks --------------------//
  $("#button-TunWinAungAndWahNu-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#TunWinAungAndWahNu-hyperlinks").hasClass("hide")) {
      $("#TunWinAungAndWahNu-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#TunWinAungAndWahNu-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-TunWinAungAndWahNu-hyperlinks").hasClass("no-highlight")) {
      $("#button-TunWinAungAndWahNu-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TunWinAungAndWahNu-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End TunWinAungAndWahNu --------------------//////

  //////-------------------- UdomsakKrisanamis --------------------//////
  $("#button-UdomsakKrisanamis").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayUdomsakKrisanamis1 = [
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/01.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/02.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/03.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/04.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/05.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/06.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/07.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/08.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/09.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/10.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/11.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/12.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/13.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/14.jpg",
      "img/Thailand/ChiangMai/UdomsakKrisanamis/01/15.jpg"
    ];

    if ($("#item-UdomsakKrisanamis1").hasClass("hide")) {
      for (var i = 0; i < imgArrayUdomsakKrisanamis1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayUdomsakKrisanamis1[i]);
        img.setAttribute(
          "class",
          "lazyload img-UdomsakKrisanamis UdomsakKrisanamis-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxUdomsakKrisanamis(); currentSlideUdomsakKrisanamis(" +
            i +
            "+1)"
        );
        document.getElementById("row-UdomsakKrisanamis-1").appendChild(img);
      }

      $("#row-UdomsakKrisanamis")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-UdomsakKrisanamis1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-UdomsakKrisanamis1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-UdomsakKrisanamis")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-UdomsakKrisanamis1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-UdomsakKrisanamis")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-UdomsakKrisanamis-1").click(function() {
      var UdomsakKrisanamis1 = document.getElementById(
        "row-UdomsakKrisanamis-1"
      ).firstChild;
      UdomsakKrisanamis1.scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    });

    if ($("#item-UdomsakKrisanamis2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-UdomsakKrisanamis2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-UdomsakKrisanamis2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-UdomsakKrisanamis2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-UdomsakKrisanamis").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-UdomsakKrisanamis"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-UdomsakKrisanamis")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-UdomsakKrisanamis")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- UdomsakKrisanamis Lightbox --------------------//
    for (var i = 0; i < imgArrayUdomsakKrisanamis1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayUdomsakKrisanamis1[i]);
      img.setAttribute("class", "lazyload imgSlides imgUdomsakKrisanamis-img");
      document.getElementById("imgUdomsakKrisanamis").appendChild(img);
    }

    $("#imgUdomsakKrisanamis")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- UdomsakKrisanamis Contact --------------------//
  $("#button-UdomsakKrisanamis-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#UdomsakKrisanamis-contact").hasClass("hide")) {
      $("#UdomsakKrisanamis-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#UdomsakKrisanamis-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-UdomsakKrisanamis-contact").hasClass("no-highlight")) {
      $("#button-UdomsakKrisanamis-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-UdomsakKrisanamis-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- UdomsakKrisanamis Work --------------------//
  $("#button-UdomsakKrisanamis-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#UdomsakKrisanamis-work").hasClass("hide")) {
      $("#UdomsakKrisanamis-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#UdomsakKrisanamis-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-UdomsakKrisanamis-work").hasClass("no-highlight")) {
      $("#button-UdomsakKrisanamis-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-UdomsakKrisanamis-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- UdomsakKrisanamis Hyperlinks --------------------//
  $("#button-UdomsakKrisanamis-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#UdomsakKrisanamis-hyperlinks").hasClass("hide")) {
      $("#UdomsakKrisanamis-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#UdomsakKrisanamis-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-UdomsakKrisanamis-hyperlinks").hasClass("no-highlight")) {
      $("#button-UdomsakKrisanamis-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-UdomsakKrisanamis-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End UdomsakKrisanamis --------------------//////

  //////-------------------- UuDamTranNguyen --------------------//////
  $("#button-UuDamTranNguyen").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayUuDamTranNguyen1 = [
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/01.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/02.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/03.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/04.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/05.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/06.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/07.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/08.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/09.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/10.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/11.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/12.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/13.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/14.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/15.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/16.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/17.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/18.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/19.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/20.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/21.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/22.jpg",
      "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/23.jpg"
    ];

    if ($("#item-UuDamTranNguyen1").hasClass("hide")) {
      for (var i = 0; i < imgArrayUuDamTranNguyen1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayUuDamTranNguyen1[i]);
        img.setAttribute(
          "class",
          "lazyload img-UuDamTranNguyen UuDamTranNguyen-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxUuDamTranNguyen(); currentSlideUuDamTranNguyen(" +
            i +
            "+1)"
        );
        document.getElementById("row-UuDamTranNguyen-1").appendChild(img);
      }

      $("#row-UuDamTranNguyen")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-UuDamTranNguyen1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-UuDamTranNguyen1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-UuDamTranNguyen")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-UuDamTranNguyen1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-UuDamTranNguyen")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-UuDamTranNguyen-1").click(function() {
      var UuDamTranNguyen1 = document.getElementById("row-UuDamTranNguyen-1")
        .firstChild;
      UuDamTranNguyen1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-UuDamTranNguyen2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-UuDamTranNguyen2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-UuDamTranNguyen2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-UuDamTranNguyen2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-UuDamTranNguyen").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-UuDamTranNguyen"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-UuDamTranNguyen")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-UuDamTranNguyen")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- UuDamTranNguyen Lightbox --------------------//
    for (var i = 0; i < imgArrayUuDamTranNguyen1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayUuDamTranNguyen1[i]);
      img.setAttribute("class", "lazyload imgSlides imgUuDamTranNguyen-img");
      document.getElementById("imgUuDamTranNguyen").appendChild(img);
    }

    $("#imgUuDamTranNguyen")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- UuDamTranNguyen Contact --------------------//
  $("#button-UuDamTranNguyen-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#UuDamTranNguyen-contact").hasClass("hide")) {
      $("#UuDamTranNguyen-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#UuDamTranNguyen-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-UuDamTranNguyen-contact").hasClass("no-highlight")) {
      $("#button-UuDamTranNguyen-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-UuDamTranNguyen-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- UuDamTranNguyen Work --------------------//
  $("#button-UuDamTranNguyen-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#UuDamTranNguyen-work").hasClass("hide")) {
      $("#UuDamTranNguyen-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#UuDamTranNguyen-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-UuDamTranNguyen-work").hasClass("no-highlight")) {
      $("#button-UuDamTranNguyen-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-UuDamTranNguyen-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- UuDamTranNguyen Hyperlinks --------------------//
  $("#button-UuDamTranNguyen-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#UuDamTranNguyen-hyperlinks").hasClass("hide")) {
      $("#UuDamTranNguyen-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#UuDamTranNguyen-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-UuDamTranNguyen-hyperlinks").hasClass("no-highlight")) {
      $("#button-UuDamTranNguyen-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-UuDamTranNguyen-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End UuDamTranNguyen --------------------//////

  //////-------------------- VinaiDithajohn --------------------//////
  $("#button-VinaiDithajohn").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayVinaiDithajohn1 = [
      "img/Thailand/Bangkok/VinaiDithajohn/01/01.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/02.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/03.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/04.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/05.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/06.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/07.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/08.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/09.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/10.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/11.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/12.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/13.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/14.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/15.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/16.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/17.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/18.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/19.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/20.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/21.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/22.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/23.jpg",
      "img/Thailand/Bangkok/VinaiDithajohn/01/24.jpg"
    ];

    if ($("#item-VinaiDithajohn1").hasClass("hide")) {
      for (var i = 0; i < imgArrayVinaiDithajohn1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayVinaiDithajohn1[i]);
        img.setAttribute(
          "class",
          "lazyload img-VinaiDithajohn VinaiDithajohn-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxVinaiDithajohn(); currentSlideVinaiDithajohn(" +
            i +
            "+1)"
        );
        document.getElementById("row-VinaiDithajohn-1").appendChild(img);
      }

      $("#row-VinaiDithajohn")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-VinaiDithajohn1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-VinaiDithajohn1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-VinaiDithajohn")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-VinaiDithajohn1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-VinaiDithajohn")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-VinaiDithajohn-1").click(function() {
      var VinaiDithajohn1 = document.getElementById("row-VinaiDithajohn-1")
        .firstChild;
      VinaiDithajohn1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-VinaiDithajohn2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-VinaiDithajohn2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-VinaiDithajohn2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-VinaiDithajohn2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-VinaiDithajohn").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-VinaiDithajohn"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-VinaiDithajohn")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-VinaiDithajohn")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- VinaiDithajohn Lightbox --------------------//
    for (var i = 0; i < imgArrayVinaiDithajohn1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayVinaiDithajohn1[i]);
      img.setAttribute("class", "lazyload imgSlides imgVinaiDithajohn-img");
      document.getElementById("imgVinaiDithajohn").appendChild(img);
    }

    $("#imgVinaiDithajohn")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- VinaiDithajohn Contact --------------------//
  $("#button-VinaiDithajohn-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#VinaiDithajohn-contact").hasClass("hide")) {
      $("#VinaiDithajohn-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#VinaiDithajohn-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-VinaiDithajohn-contact").hasClass("no-highlight")) {
      $("#button-VinaiDithajohn-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-VinaiDithajohn-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- VinaiDithajohn Work --------------------//
  $("#button-VinaiDithajohn-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#VinaiDithajohn-work").hasClass("hide")) {
      $("#VinaiDithajohn-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#VinaiDithajohn-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-VinaiDithajohn-work").hasClass("no-highlight")) {
      $("#button-VinaiDithajohn-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-VinaiDithajohn-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- VinaiDithajohn Hyperlinks --------------------//
  $("#button-VinaiDithajohn-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#VinaiDithajohn-hyperlinks").hasClass("hide")) {
      $("#VinaiDithajohn-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#VinaiDithajohn-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-VinaiDithajohn-hyperlinks").hasClass("no-highlight")) {
      $("#button-VinaiDithajohn-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-VinaiDithajohn-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End VinaiDithajohn --------------------//////

  //////-------------------- YuYuMyintThan --------------------//////
  $("#button-YuYuMyintThan").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayYuYuMyintThan1 = [
      "img/Myanmar/Yangon/YuYuMyintThan/01/01.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/02.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/03.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/04.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/05.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/06.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/07.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/08.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/09.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/10.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/11.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/12.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/13.jpg",
      "img/Myanmar/Yangon/YuYuMyintThan/01/14.jpg"
    ];

    if ($("#item-YuYuMyintThan1").hasClass("hide")) {
      for (var i = 0; i < imgArrayYuYuMyintThan1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayYuYuMyintThan1[i]);
        img.setAttribute(
          "class",
          "lazyload img-YuYuMyintThan YuYuMyintThan-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxYuYuMyintThan(); currentSlideYuYuMyintThan(" + i + "+1)"
        );
        document.getElementById("row-YuYuMyintThan-1").appendChild(img);
      }

      $("#row-YuYuMyintThan")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-YuYuMyintThan1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-YuYuMyintThan1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-YuYuMyintThan")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-YuYuMyintThan1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-YuYuMyintThan")
        .removeClass("show")
        .addClass("hide");
      $("#int-tag-YuYuMyintThan")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-YuYuMyintThan-1").click(function() {
      var YuYuMyintThan1 = document.getElementById("row-YuYuMyintThan-1")
        .firstChild;
      YuYuMyintThan1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-YuYuMyintThan2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-YuYuMyintThan2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-YuYuMyintThan2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-YuYuMyintThan2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-YuYuMyintThan").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-YuYuMyintThan"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-YuYuMyintThan")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-YuYuMyintThan")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- YuYuMyintThan Lightbox --------------------//
    for (var i = 0; i < imgArrayYuYuMyintThan1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayYuYuMyintThan1[i]);
      img.setAttribute("class", "lazyload imgSlides imgYuYuMyintThan-img");
      document.getElementById("imgYuYuMyintThan").appendChild(img);
    }

    $("#imgYuYuMyintThan")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- YuYuMyintThan Contact --------------------//
  $("#button-YuYuMyintThan-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#YuYuMyintThan-contact").hasClass("hide")) {
      $("#YuYuMyintThan-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#YuYuMyintThan-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-YuYuMyintThan-contact").hasClass("no-highlight")) {
      $("#button-YuYuMyintThan-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-YuYuMyintThan-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- YuYuMyintThan Work --------------------//
  $("#button-YuYuMyintThan-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#YuYuMyintThan-work").hasClass("hide")) {
      $("#YuYuMyintThan-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#YuYuMyintThan-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-YuYuMyintThan-work").hasClass("no-highlight")) {
      $("#button-YuYuMyintThan-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-YuYuMyintThan-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- YuYuMyintThan Hyperlinks --------------------//
  $("#button-YuYuMyintThan-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#YuYuMyintThan-hyperlinks").hasClass("hide")) {
      $("#YuYuMyintThan-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#YuYuMyintThan-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-YuYuMyintThan-hyperlinks").hasClass("no-highlight")) {
      $("#button-YuYuMyintThan-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-YuYuMyintThan-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End YuYuMyintThan --------------------//////

  //////-------------------- ZarMinHtike --------------------//////
  $("#button-ZarMinHtike").click(function() {
    $.fn.hideAllInfoVDOTag();

    var imgArrayZarMinHtike1 = [
      "img/Myanmar/Yangon/ZarMinHtike/01/01.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/02.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/03.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/04.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/05.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/06.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/07.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/08.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/09.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/10.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/11.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/12.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/13.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/14.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/15.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/16.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/17.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/18.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/19.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/20.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/21.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/22.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/23.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/01/24.jpg"
    ];
    var imgArrayZarMinHtike2 = [
      "img/Myanmar/Yangon/ZarMinHtike/02/01.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/02.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/03.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/04.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/05.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/06.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/07.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/08.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/09.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/10.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/11.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/12.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/13.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/14.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/15.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/16.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/17.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/18.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/19.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/20.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/21.jpg",
      "img/Myanmar/Yangon/ZarMinHtike/02/22.jpg"
    ];

    if ($("#item-ZarMinHtike1").hasClass("hide")) {
      for (var i = 0; i < imgArrayZarMinHtike1.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayZarMinHtike1[i]);
        img.setAttribute(
          "class",
          "lazyload img-ZarMinHtike ZarMinHtike-group1"
        );
        img.setAttribute(
          "onclick",
          "openLightboxZarMinHtike(); currentSlideZarMinHtike(" + i + "+1)"
        );
        document.getElementById("row-ZarMinHtike-1").appendChild(img);
      }
      for (var i = 0; i < imgArrayZarMinHtike2.length; i += 1) {
        var img = document.createElement("img");
        img.setAttribute("data-src", imgArrayZarMinHtike2[i]);
        img.setAttribute(
          "class",
          "lazyload img-ZarMinHtike ZarMinHtike-group2"
        );
        img.setAttribute(
          "onclick",
          "openLightboxZarMinHtike(); currentSlideZarMinHtike(" + i + "+1)"
        );
        document.getElementById("row-ZarMinHtike-2").appendChild(img);
      }

      $("#row-ZarMinHtike")
        .find("img.lazyload")
        .lazyload();

      $(".img-row-container")
        .not($("#item-ZarMinHtike1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ZarMinHtike1")
        .removeClass("hide")
        .addClass("show");
      $("#info-tag-ZarMinHtike")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ZarMinHtike1")
        .removeClass("show")
        .addClass("hide");
      $("#info-tag-ZarMinHtike")
        .removeClass("show")
        .addClass("hide");
    }

    $("#button-ZarMinHtike-1").click(function() {
      var ZarMinHtike1 = document.getElementById("row-ZarMinHtike-1")
        .firstChild;
      ZarMinHtike1.scrollIntoView({ behavior: "smooth", inline: "start" });
    });
    $("#button-ZarMinHtike-2").click(function() {
      var ZarMinHtike2 = document.getElementById("row-ZarMinHtike-2")
        .firstChild;
      ZarMinHtike2.scrollIntoView({ behavior: "smooth", inline: "start" });
    });

    if ($("#item-ZarMinHtike2").hasClass("hide")) {
      $(".footnote")
        .not($("#item-ZarMinHtike2"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ZarMinHtike2")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#item-ZarMinHtike2")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ZarMinHtike").hasClass("no-highlight")) {
      $(".name")
        .not($("#button-ZarMinHtike"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-ZarMinHtike")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ZarMinHtike")
        .removeClass("highlight")
        .addClass("no-highlight");
    }

    //-------------------- ZarMinHtike Lightbox --------------------//
    for (var i = 0; i < imgArrayZarMinHtike1.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayZarMinHtike1[i]);
      img.setAttribute("class", "lazyload imgSlides imgZarMinHtike-img");
      document.getElementById("imgZarMinHtike").appendChild(img);
    }
    for (var i = 0; i < imgArrayZarMinHtike2.length; i += 1) {
      var img = document.createElement("img");
      img.setAttribute("data-src", imgArrayZarMinHtike2[i]);
      img.setAttribute("class", "lazyload imgSlides imgZarMinHtike-img");
      document.getElementById("imgZarMinHtike").appendChild(img);
    }

    $("#imgZarMinHtike")
      .find("img.lazyload")
      .lazyload();
  });
  //-------------------- ZarMinHtike Contact --------------------//
  $("#button-ZarMinHtike-contact").click(function() {
    $.fn.hideArtistDes();
    if ($("#ZarMinHtike-contact").hasClass("hide")) {
      $("#ZarMinHtike-contact")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ZarMinHtike-contact")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ZarMinHtike-contact").hasClass("no-highlight")) {
      $("#button-ZarMinHtike-contact")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ZarMinHtike-contact")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //-------------------- ZarMinHtike Work --------------------//
  $("#button-ZarMinHtike-work").click(function() {
    $.fn.hideArtistDes();
    if ($("#ZarMinHtike-work").hasClass("hide")) {
      $("#ZarMinHtike-work")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ZarMinHtike-work")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ZarMinHtike-work").hasClass("no-highlight")) {
      $("#button-ZarMinHtike-work")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ZarMinHtike-work")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //-------------------- ZarMinHtike Hyperlinks --------------------//
  $("#button-ZarMinHtike-hyperlinks").click(function() {
    $.fn.hideArtistDes();
    if ($("#ZarMinHtike-hyperlinks").hasClass("hide")) {
      $("#ZarMinHtike-hyperlinks")
        .removeClass("hide")
        .addClass("show");
    } else {
      $("#ZarMinHtike-hyperlinks")
        .removeClass("show")
        .addClass("hide");
    }

    if ($("#button-ZarMinHtike-hyperlinks").hasClass("no-highlight")) {
      $("#button-ZarMinHtike-hyperlinks")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ZarMinHtike-hyperlinks")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });
  //////-------------------- End ZarMinHtike --------------------//////

  //// url for artists
  var url = document.location.toString();
  if (url.match("#ArachaCholitgul")) {
    $("#button-ArachaCholitgul").trigger("click");
  }
  if (url.match("#AyeKo")) {
    $("#button-AyeKo").trigger("click");
  }
  if (url.match("#BartWasNotHere")) {
    $("#button-BartWasNotHere").trigger("click");
  }
  if (url.match("#BunthengBat")) {
    $("#button-BunthengBat").trigger("click");
  }
  if (url.match("#DatVu")) {
    $("#button-DatVu").trigger("click");
  }
  if (url.match("#DuHoang")) {
    $("#button-DuHoang").trigger("click");
  }
  if (url.match("#EijiSumi")) {
    $("#button-EijiSumi").trigger("click");
  }
  if (url.match("#HuyAn")) {
    $("#button-HuyAn").trigger("click");
  }
  if (url.match("#JedsadaTangtrakulwong")) {
    $("#button-JedsadaTangtrakulwong").trigger("click");
  }
  if (url.match("#KaminLertchaiprasert")) {
    $("#button-KaminLertchaiprasert").trigger("click");
  }
  if (url.match("#KanithaTith")) {
    $("#button-KanithaTith").trigger("click");
  }
  if (url.match("#KhievKanel")) {
    $("#button-KhievKanel").trigger("click");
  }
  if (url.match("#LeBrothers")) {
    $("#button-LeBrothers").trigger("click");
  }
  if (url.match("#LeopoldFranckowiak")) {
    $("#button-LeopoldFranckowiak").trigger("click");
  }
  if (url.match("#LeQuyTong")) {
    $("#button-LeQuyTong").trigger("click");
  }
  if (url.match("#MaiNguyenAnh")) {
    $("#button-MaiNguyenAnh").trigger("click");
  }
  if (url.match("#ManitSriwanichpoom")) {
    $("#button-ManitSriwanichpoom").trigger("click");
  }
  if (url.match("#Mayco")) {
    $("#button-Mayco").trigger("click");
  }
  if (url.match("#MitJaiInn")) {
    $("#button-MitJaiInn").trigger("click");
  }
  if (url.match("#NguyenQuocDzung")) {
    $("#button-NguyenQuocDzung").trigger("click");
  }
  if (url.match("#NguyenVanDu")) {
    $("#button-NguyenVanDu").trigger("click");
  }
  if (url.match("#PheSophon")) {
    $("#button-PheSophon").trigger("click");
  }
  if (url.match("#PhuongDuc")) {
    $("#button-PhuongDuc").trigger("click");
  }
  if (url.match("#PichaiPongsasaovapark")) {
    $("#button-PichaiPongsasaovapark").trigger("click");
  }
  if (url.match("#PipatraBanpabutr")) {
    $("#button-PipatraBanpabutr").trigger("click");
  }
  if (url.match("#PiyaratPiyapongwiwat")) {
    $("#button-PiyaratPiyapongwiwat").trigger("click");
  }
  if (url.match("#PoPo")) {
    $("#button-PoPo").trigger("click");
  }
  if (url.match("#PornchaiChaima")) {
    $("#button-PornchaiChaima").trigger("click");
  }
  if (url.match("#SaiHtinLinnHtet")) {
    $("#button-SaiHtinLinnHtet").trigger("click");
  }
  if (url.match("#SamakKosem")) {
    $("#button-SamakKosem").trigger("click");
  }
  if (url.match("#SanMinn")) {
    $("#button-SanMinn").trigger("click");
  }
  if (url.match("#SreyMao")) {
    $("#button-SreyMao").trigger("click");
  }
  if (url.match("#ThasnaiSethaseree")) {
    $("#button-ThasnaiSethaseree").trigger("click");
  }
  if (url.match("#ThitibodeeRungteerawattananon")) {
    $("#button-ThitibodeeRungteerawattananon").trigger("click");
  }
  if (url.match("#TheetatThunkijjanukij")) {
    $("#button-TheetatThunkijjanukij").trigger("click");
  }
  if (url.match("#TienVeGroup")) {
    $("#button-TienVeGroup").trigger("click");
  }
  if (url.match("#TunWinAungAndWahNu")) {
    $("#button-TunWinAungAndWahNu").trigger("click");
  }
  if (url.match("#UdomsakKrisanamis")) {
    $("#button-UdomsakKrisanamis").trigger("click");
  }
  if (url.match("#UuDamTranNguyen")) {
    $("#button-UuDamTranNguyen").trigger("click");
  }
  if (url.match("#VinaiDithajohn")) {
    $("#button-VinaiDithajohn").trigger("click");
  }
  if (url.match("#YuYuMyintThan")) {
    $("#button-YuYuMyintThan").trigger("click");
  }
  if (url.match("#ZarMinHtike")) {
    $("#button-ZarMinHtike").trigger("click");
  }
});

$(document).ready(function() {
  $.fn.hideAllInfoIntTag = function() {
    $(".sound iframe").remove();
  };
  //// info and vdo button to open info-row
  //// ArachaCholitgul
  $("#button-info-tag-ArachaCholitgul").click(function() {
    $.fn.hideAllInfoIntTag();
    if ($("#info-ArachaCholitgul").hasClass("info-hide")) {
      $("#info-ArachaCholitgul")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-ArachaCholitgul")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-ArachaCholitgul")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-ArachaCholitgul")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// AyeKo
  $("#button-info-tag-AyeKo").click(function() {
    $.fn.hideAllInfoIntTag();
    if ($("#info-AyeKo").hasClass("info-hide")) {
      $("#info-AyeKo")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-AyeKo")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-AyeKo")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-AyeKo")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// BartWasNotHere
  $("#button-info-tag-BartWasNotHere").click(function() {
    $.fn.hideAllInfoIntTag();
    if ($("#info-BartWasNotHere").hasClass("info-hide")) {
      $("#info-BartWasNotHere")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-BartWasNotHere")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-BartWasNotHere")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-BartWasNotHere")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// BunthengBat
  $("#button-info-tag-BunthengBat").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-BunthengBat").hasClass("info-hide")) {
      $("#info-BunthengBat")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-BunthengBat")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-BunthengBat")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-BunthengBat")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// DatVu
  $("#button-info-tag-DatVu").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-DatVu").hasClass("info-hide")) {
      $("#info-DatVu")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-DatVu")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-DatVu")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-DatVu")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// DuHoang
  $("#button-info-tag-DuHoang").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-DuHoang").hasClass("info-hide")) {
      $("#info-DuHoang")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-DuHoang")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-DuHoang")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-DuHoang")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// EijiSumi
  $("#button-info-tag-EijiSumi").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-EijiSumi").hasClass("info-hide")) {
      $("#info-EijiSumi")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-EijiSumi")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-EijiSumi")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-EijiSumi")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// HuyAn
  $("#button-info-tag-HuyAn").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-HuyAn").hasClass("info-hide")) {
      $("#info-HuyAn")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-HuyAn")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-HuyAn")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-HuyAn")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// JedsadaTangtrakulwong
  $("#button-info-tag-JedsadaTangtrakulwong").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-JedsadaTangtrakulwong").hasClass("info-hide")) {
      $("#info-JedsadaTangtrakulwong")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-JedsadaTangtrakulwong")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-JedsadaTangtrakulwong")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-JedsadaTangtrakulwong")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// KaminLertchaiprasert
  $("#button-info-tag-KaminLertchaiprasert").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-KaminLertchaiprasert").hasClass("info-hide")) {
      $("#info-KaminLertchaiprasert")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-KaminLertchaiprasert")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-KaminLertchaiprasert")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-KaminLertchaiprasert")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// KanithaTith
  $("#button-info-tag-KanithaTith").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-KanithaTith").hasClass("info-hide")) {
      $("#info-KanithaTith")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-KanithaTith")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-KanithaTith")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-KanithaTith")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// KhievKanel
  $("#button-info-tag-KhievKanel").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-KhievKanel").hasClass("info-hide")) {
      $("#info-KhievKanel")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-KhievKanel")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-KhievKanel")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-KhievKanel")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// LeBrothers
  $("#button-info-tag-LeBrothers").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-LeBrothers").hasClass("info-hide")) {
      $("#info-LeBrothers")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-LeBrothers")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-LeBrothers")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-LeBrothers")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// LeopoldFranckowiak
  $("#button-info-tag-LeopoldFranckowiak").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-LeopoldFranckowiak").hasClass("info-hide")) {
      $("#info-LeopoldFranckowiak")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-LeopoldFranckowiak")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-LeopoldFranckowiak")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-LeopoldFranckowiak")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// LeQuyTong
  $("#button-info-tag-LeQuyTong").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-LeQuyTong").hasClass("info-hide")) {
      $("#info-LeQuyTong")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-LeQuyTong")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-LeQuyTong")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-LeQuyTong")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// MaiNguyenAnh
  $("#button-info-tag-MaiNguyenAnh").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-MaiNguyenAnh").hasClass("info-hide")) {
      $("#info-MaiNguyenAnh")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-MaiNguyenAnh")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-MaiNguyenAnh")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-MaiNguyenAnh")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// ManitSriwanichpoom - Info Tag
  $("#button-info-tag-ManitSriwanichpoom").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-ManitSriwanichpoom").hasClass("info-hide")) {
      $("#info-ManitSriwanichpoom")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#int-ManitSriwanichpoom")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-ManitSriwanichpoom")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("#int-tag-ManitSriwanichpoom")
        .removeClass("int-tag-close")
        .addClass("int-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-ManitSriwanichpoom")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-ManitSriwanichpoom")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("#int-tag-ManitSriwanichpoom")
        .removeClass("int-tag-open")
        .addClass("int-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// ManitSriwanichpoom - Interview Tag
  $("#button-int-tag-ManitSriwanichpoom").click(function() {
    $.fn.hideAllInfoIntTag();

    var sound = document.createElement("iframe");
    sound.setAttribute(
      "src",
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/657865835&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    );
    sound.setAttribute("width", "100%");
    sound.setAttribute("height", "166");
    sound.setAttribute("scrolling", "no");
    sound.setAttribute("frameborder", "no");
    document.getElementById("sound-ManitSriwanichpoom").appendChild(sound);

    if ($("#int-ManitSriwanichpoom").hasClass("int-hide")) {
      $("#int-ManitSriwanichpoom")
        .removeClass("int-hide")
        .addClass("int-show");
      $("#info-ManitSriwanichpoom")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#int-tag-ManitSriwanichpoom")
        .removeClass("int-tag-close")
        .addClass("int-tag-open");
      $("#info-tag-ManitSriwanichpoom")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#int-ManitSriwanichpoom")
        .removeClass("int-show")
        .addClass("int-hide");
      $("#info-ManitSriwanichpoom")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#int-tag-ManitSriwanichpoom")
        .removeClass("int-tag-open")
        .addClass("int-tag-close");
      $("#info-tag-ManitSriwanichpoom")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// Mayco
  $("#button-info-tag-Mayco").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-Mayco").hasClass("info-hide")) {
      $("#info-Mayco")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-Mayco")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");

      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-Mayco")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-Mayco")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// MitJaiInn
  $("#button-info-tag-MitJaiInn").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-MitJaiInn").hasClass("info-hide")) {
      $("#info-MitJaiInn")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-MitJaiInn")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-MitJaiInn")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-MitJaiInn")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// NguyenQuocDzung
  $("#button-info-tag-NguyenQuocDzung").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-NguyenQuocDzung").hasClass("info-hide")) {
      $("#info-NguyenQuocDzung")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-NguyenQuocDzung")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-NguyenQuocDzung")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-NguyenQuocDzung")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// NguyenVanDu
  $("#button-info-tag-NguyenVanDu").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-NguyenVanDu").hasClass("info-hide")) {
      $("#info-NguyenVanDu")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-NguyenVanDu")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-NguyenVanDu")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-NguyenVanDu")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// PheSophon
  $("#button-info-tag-PheSophon").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-PheSophon").hasClass("info-hide")) {
      $("#info-PheSophon")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-PheSophon")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-PheSophon")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-PheSophon")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// PhuongDuc
  $("#button-info-tag-PhuongDuc").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-PhuongDuc").hasClass("info-hide")) {
      $("#info-PhuongDuc")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-PhuongDuc")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-PhuongDuc")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-PhuongDuc")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// PichaiPongsasaovapark
  $("#button-info-tag-PichaiPongsasaovapark").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-PichaiPongsasaovapark").hasClass("info-hide")) {
      $("#info-PichaiPongsasaovapark")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-PichaiPongsasaovapark")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-PichaiPongsasaovapark")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-PichaiPongsasaovapark")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// PipatraBanpabutr
  $("#button-info-tag-PipatraBanpabutr").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-PipatraBanpabutr").hasClass("info-hide")) {
      $("#info-PipatraBanpabutr")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-PipatraBanpabutr")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-PipatraBanpabutr")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-PipatraBanpabutr")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// PiyaratPiyapongwiwat
  $("#button-info-tag-PiyaratPiyapongwiwat").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-PiyaratPiyapongwiwat").hasClass("info-hide")) {
      $("#info-PiyaratPiyapongwiwat")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-PiyaratPiyapongwiwat")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-PiyaratPiyapongwiwat")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-PiyaratPiyapongwiwat")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// Popo
  $("#button-info-tag-Popo").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-Popo").hasClass("info-hide")) {
      $("#info-Popo")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-Popo")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-Popo")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-Popo")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// PornchaiChaima
  $("#button-info-tag-PornchaiChaima").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-PornchaiChaima").hasClass("info-hide")) {
      $("#info-PornchaiChaima")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-PornchaiChaima")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-PornchaiChaima")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-PornchaiChaima")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// SaiHtinLinnHtet - Info
  $("#button-info-tag-SaiHtinLinnHtet").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-SaiHtinLinnHtet").hasClass("info-hide")) {
      $("#info-SaiHtinLinnHtet")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-SaiHtinLinnHtet")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-SaiHtinLinnHtet")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-SaiHtinLinnHtet")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// SaiHtinLinnHtet - Interview
  $("#button-int-tag-SaiHtinLinnHtet").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#int-SaiHtinLinnHtet").hasClass("int-hide")) {
      $("#int-SaiHtinLinnHtet")
        .removeClass("int-hide")
        .addClass("int-show");
      $("#int-tag-SaiHtinLinnHtet")
        .removeClass("int-tag-close")
        .addClass("int-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#int-SaiHtinLinnHtet")
        .removeClass("int-show")
        .addClass("int-hide");
      $("#int-tag-SaiHtinLinnHtet")
        .removeClass("int-tag-open")
        .addClass("int-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });

  //// SamakKosem
  $("#button-info-tag-SamakKosem").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-SamakKosem").hasClass("info-hide")) {
      $("#info-SamakKosem")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-SamakKosem")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-SamakKosem")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-SamakKosem")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// SanMinn
  $("#button-info-tag-SanMinn").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-SanMinn").hasClass("info-hide")) {
      $("#info-SanMinn")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-SanMinn")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-SanMinn")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-SanMinn")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// SreyMao
  $("#button-info-tag-SreyMao").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-SreyMao").hasClass("info-hide")) {
      $("#info-SreyMao")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-SreyMao")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-SreyMao")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-SreyMao")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// ThasnaiSethaseree
  $("#button-info-tag-ThasnaiSethaseree").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-ThasnaiSethaseree").hasClass("info-hide")) {
      $("#info-ThasnaiSethaseree")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-ThasnaiSethaseree")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-ThasnaiSethaseree")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-ThasnaiSethaseree")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// TheetatThunkijjanukij
  $("#button-info-tag-TheetatThunkijjanukij").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-TheetatThunkijjanukij").hasClass("info-hide")) {
      $("#info-TheetatThunkijjanukij")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-TheetatThunkijjanukij")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-TheetatThunkijjanukij")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-TheetatThunkijjanukij")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// ThitibodeeRungteerawattananon
  $("#button-info-tag-ThitibodeeRungteerawattananon").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-ThitibodeeRungteerawattananon").hasClass("info-hide")) {
      $("#info-ThitibodeeRungteerawattananon")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-ThitibodeeRungteerawattananon")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-ThitibodeeRungteerawattananon")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-ThitibodeeRungteerawattananon")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// TienVeGroup
  $("#button-info-tag-TienVeGroup").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-TienVeGroup").hasClass("info-hide")) {
      $("#info-TienVeGroup")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-TienVeGroup")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-TienVeGroup")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-TienVeGroup")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// TunWinAungAndWahNu
  $("#button-info-tag-TunWinAungAndWahNu").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-TunWinAungAndWahNu").hasClass("info-hide")) {
      $("#info-TunWinAungAndWahNu")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-TunWinAungAndWahNu")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-TunWinAungAndWahNu")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-TunWinAungAndWahNu")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// UdomsakKrisanamis
  $("#button-info-tag-UdomsakKrisanamis").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-UdomsakKrisanamis").hasClass("info-hide")) {
      $("#info-UdomsakKrisanamis")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-UdomsakKrisanamis")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-UdomsakKrisanamis")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-UdomsakKrisanamis")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// UuDamTranNguyen
  $("#button-info-tag-UuDamTranNguyen").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-UuDamTranNguyen").hasClass("info-hide")) {
      $("#info-UuDamTranNguyen")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-UuDamTranNguyen")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-UuDamTranNguyen")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-UuDamTranNguyen")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// VinaiDithajohn
  $("#button-info-tag-VinaiDithajohn").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-VinaiDithajohn").hasClass("info-hide")) {
      $("#info-VinaiDithajohn")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-VinaiDithajohn")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-VinaiDithajohn")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-VinaiDithajohn")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// YuYuMyintThan - Info
  $("#button-info-tag-YuYuMyintThan").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-YuYuMyintThan").hasClass("info-hide")) {
      $("#info-YuYuMyintThan")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-YuYuMyintThan")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-YuYuMyintThan")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-YuYuMyintThan")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });
  //// YuYuMyintThan - Interview
  $("#button-int-tag-YuYuMyintThan").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#int-YuYuMyintThan").hasClass("int-hide")) {
      $("#int-YuYuMyintThan")
        .removeClass("int-hide")
        .addClass("int-show");
      $("#int-tag-YuYuMyintThan")
        .removeClass("int-tag-close")
        .addClass("int-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#int-YuYuMyintThan")
        .removeClass("int-show")
        .addClass("int-hide");
      $("#int-tag-YuYuMyintThan")
        .removeClass("int-tag-open")
        .addClass("int-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });

  //// ZarMinHtike
  $("#button-info-tag-ZarMinHtike").click(function() {
    $.fn.hideAllInfoIntTag();

    if ($("#info-ZarMinHtike").hasClass("info-hide")) {
      $("#info-ZarMinHtike")
        .removeClass("info-hide")
        .addClass("info-show");
      $("#info-tag-ZarMinHtike")
        .removeClass("info-tag-close")
        .addClass("info-tag-open");
      $("header, .container-index, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#info-ZarMinHtike")
        .removeClass("info-show")
        .addClass("info-hide");
      $("#info-tag-ZarMinHtike")
        .removeClass("info-tag-open")
        .addClass("info-tag-close");
      $("header, .container-index, footer")
        .removeClass("reduced")
        .addClass("full");
    }
  });

  //// Info Close Button
  $(".button-info-close").click(function() {
    $(".info-row")
      .removeClass("info-show")
      .addClass("info-hide");
    $(".info-row")
      .removeClass("full")
      .addClass("reduced");
    $(".info-tag")
      .removeClass("info-tag-open")
      .addClass("info-tag-close");
    $(".info-tag").removeClass("info-tag-full");

    $(".int-row")
      .removeClass("int-show")
      .addClass("int-hide");
    $(".int-row")
      .removeClass("full")
      .addClass("reduced");
    $(".int-tag")
      .removeClass("int-tag-open")
      .addClass("int-tag-close");
    $(".int-tag").removeClass("int-tag-full");

    $(".button-info-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-info-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
    $("header, .container-index, footer")
      .removeClass("reduced")
      .addClass("full");
  });
  //// Info Full Screen Button
  $(".button-info-full").click(function() {
    $(".info-row")
      .removeClass("reduced")
      .addClass("full");
    $(".info-tag")
      .removeClass("info-tag-open")
      .addClass("info-tag-full");
    $(".int-tag")
      .removeClass("int-tag-open")
      .addClass("int-tag-full");
    $(".button-info-full")
      .removeClass("button-show")
      .addClass("button-hide");
    $(".button-info-minimize")
      .removeClass("button-hide")
      .addClass("button-show");
  });
  //// Info Minimize Button
  $(".button-info-minimize").click(function() {
    $(".info-row")
      .removeClass("full")
      .addClass("reduced");
    $(".info-tag")
      .removeClass("info-tag-full")
      .addClass("info-tag-open");
    $(".int-tag")
      .removeClass("int-tag-full")
      .addClass("int-tag-open");
    $(".button-info-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-info-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
  });

  //// Interview Close Button
  $(".button-int-close").click(function() {
    $(".int-row")
      .removeClass("int-show")
      .addClass("int-hide");
    $(".int-row")
      .removeClass("full")
      .addClass("reduced");
    $(".int-tag")
      .removeClass("int-tag-open")
      .addClass("int-tag-close");
    $(".int-tag").removeClass("int-tag-full");

    $(".info-row")
      .removeClass("info-show")
      .addClass("info-hide");
    $(".info-row")
      .removeClass("full")
      .addClass("reduced");
    $(".info-tag")
      .removeClass("info-tag-open")
      .addClass("info-tag-close");
    $(".info-tag").removeClass("info-tag-full");

    $(".button-int-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-int-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
    $("header, .container-index, footer")
      .removeClass("reduced")
      .addClass("full");
  });
  //// Interview Full Screen Button
  $(".button-int-full").click(function() {
    $(".int-row")
      .removeClass("reduced")
      .addClass("full");
    $(".int-tag")
      .removeClass("int-tag-open")
      .addClass("int-tag-full");
    $(".info-tag")
      .removeClass("info-tag-open")
      .addClass("info-tag-full");

    $(".button-int-full")
      .removeClass("button-show")
      .addClass("button-hide");
    $(".button-int-minimize")
      .removeClass("button-hide")
      .addClass("button-show");
  });
  //// Interview Minimize Button
  $(".button-int-minimize").click(function() {
    $(".int-row")
      .removeClass("full")
      .addClass("reduced");
    $(".int-tag")
      .removeClass("int-tag-full")
      .addClass("int-tag-open");
    $(".info-tag")
      .removeClass("info-tag-full")
      .addClass("info-tag-open");

    $(".button-int-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-int-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
  });
  //// footnote

  //// Alternative Img Row View ////
  // mCSB_container / width: 100%;
  // .img-row-container / white-space: normal;
  // .img-row img / height: 12vh; margin: 0 10px 23px 10px;
  $(".alt-sm-view-button").click(function() {
    $(".img-row-container").attr("style", "white-space: normal;");
    $(".mCSB_container").attr("style", "width: 100%;");
    $(".img-row img").attr("style", "height: 12vh; margin: 0 10px 23px 10px;");
    $(".alt-sm-view-button").attr("style", "display: none;");
    $(".alt-lg-view-button").attr("style", "display: block;");
  });
  $(".name").click(function() {
    $(".img-row-container").attr("style", "white-space: nowrap;");
    $(".mCSB_container").attr("style", "width: auto; position: relative;");
    $(".img-row img").attr("style", "height: 40vh; margin: 0 10px;");
    $(".alt-lg-view-button").attr("style", "display: none;");
    $(".alt-sm-view-button").attr("style", "display: block;");
  });

  $(".alt-lg-view-button").click(function() {
    $(".img-row-container").attr("style", "white-space: nowrap;");
    $(".mCSB_container").attr("style", "width: auto; position: relative;");
    $(".img-row img").attr("style", "height: 40vh; margin: 0 10px;");
    $(".alt-lg-view-button").attr("style", "display: none;");
    $(".alt-sm-view-button").attr("style", "display: block;");
  });
});
