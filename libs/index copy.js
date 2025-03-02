$(document).ready(function () {
  $('.name').click(function () {
    var x = $('.img-row').hasClass('show');
    if (x) {
      $('.img-row').removeClass('show');
    }
    
    var y = $('.name-footer').hasClass('show');
    if (y) {
      $('.name-footer').removeClass('show');
    }

    var z = $('.name').hasClass('highlight');
    if (z) {
      $('.name').removeClass('highlight');
    }
  });
});

$(document).ready(function () {
  $('#button-BunthengBat').click(function () {
    var element = document.getElementById("item-bat1");
    element.classList.toggle("show");

    var element = document.getElementById("item-bat2");
    element.classList.toggle("show");

    var element = document.getElementById("button-BunthengBat");
    element.classList.toggle("highlight");
  });

  $('#button-KhievKanel').click(function () {
    var element = document.getElementById("item-kanel1");
    element.classList.toggle("show");

    var element = document.getElementById("item-kanel2");
    element.classList.toggle("show");

    var element = document.getElementById("button-KhievKanel");
    element.classList.toggle("highlight");
  });

  $('#button-AyeKo').click(function () {
    var element = document.getElementById("item-AyeKo1");
    element.classList.toggle("show");

    var element = document.getElementById("item-AyeKo2");
    element.classList.toggle("show");

    var element = document.getElementById("button-AyeKo");
    element.classList.toggle("highlight");
  });

  $('#button-Mayco').click(function () {
    var element = document.getElementById("item-Mayco1");
    element.classList.toggle("show");

    var element = document.getElementById("item-Mayco2");
    element.classList.toggle("show");

    var element = document.getElementById("button-Mayco");
    element.classList.toggle("highlight");
  });

  $('#button-PoPo').click(function () {
    var element = document.getElementById("item-PoPo1");
    element.classList.toggle("show");

    var element = document.getElementById("item-PoPo2");
    element.classList.toggle("show");

    var element = document.getElementById("button-PoPo");
    element.classList.toggle("highlight");
  });

  $('#button-SaiHtinLinnHtet').click(function () {
    event.stopPropagation();
    var imgSaiHtinLinnHtet = $(".img-SaiHtinLinnHtet");
    for (var i = 0; i < imgSaiHtinLinnHtet.length; i++) {
      var target = Math.floor(Math.random() * imgSaiHtinLinnHtet.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgSaiHtinLinnHtet.length - 1) + 1;
      imgSaiHtinLinnHtet.eq(target).before(imgSaiHtinLinnHtet.eq(target2));
    }

    var x = $('#item-SaiHtinLinnHtet1').hasClass('show');
    if (x) {
      $('#item-SaiHtinLinnHtet1').removeClass('show');
      event.stopPropagation();
    } else {
      $('#item-SaiHtinLinnHtet1').addClass('show');
    }

    $('#item-SaiHtinLinnHtet2').toggleClass('show');

    $('#button-SaiHtinLinnHtet').toggleClass('highlight');

  });

  $('#button-SanMinn').click(function () {
    var element = document.getElementById("item-SanMinn1");
    element.classList.toggle("show");

    var element = document.getElementById("item-SanMinn2");
    element.classList.toggle("show");

    var element = document.getElementById("button-SanMinn");
    element.classList.toggle("highlight");
  });

  $('#button-EijiSumi').click(function () {
    var element = document.getElementById("item-EijiSumi1");
    element.classList.toggle("show");

    var element = document.getElementById("item-EijiSumi2");
    element.classList.toggle("show");

    var element = document.getElementById("button-EijiSumi");
    element.classList.toggle("highlight");
  });

  $('#button-TunWinAung').click(function () {
    var imgTunWinAung = $(".img-TunWinAung");
    for (var i = 0; i < imgTunWinAung.length; i++) {
      var target = Math.floor(Math.random() * imgTunWinAung.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgTunWinAung.length - 1) + 1;
      imgTunWinAung.eq(target).before(imgTunWinAung.eq(target2));
    }
    
    if ($('#item-TunWinAung1').hasClass('show')) {
      $('#item-TunWinAung1').removeClass('show');
    } else {
      $('#item-TunWinAung1').addClass('show');
    }

    $('#item-TunWinAung2').toggleClass('show');
    $('#button-TunWinAung').toggleClass('highlight');
  });


  $('#button-YuYuMyintThan').click(function () {
    var element = document.getElementById("item-YuYuMyintThan1");
    element.classList.toggle("show");

    var element = document.getElementById("item-YuYuMyintThan2");
    element.classList.toggle("show");

    var element = document.getElementById("button-YuYuMyintThan");
    element.classList.toggle("highlight");
  });

  $('#button-ZarMinHtike').click(function () {
    var element = document.getElementById("item-ZarMinHtike1");
    element.classList.toggle("show");

    var element = document.getElementById("item-ZarMinHtike2");
    element.classList.toggle("show");

    var element = document.getElementById("button-ZarMinHtike");
    element.classList.toggle("highlight");
  });
});

$(".name").after(" / ");

$(document).ready(function () {
  $('.name').click(function () {
    var imgAyeKo = $(".img-AyeKo");
    for (var i = 0; i < imgAyeKo.length; i++) {
      var target = Math.floor(Math.random() * imgAyeKo.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgAyeKo.length - 1) + 1;
      imgAyeKo.eq(target).before(imgAyeKo.eq(target2));
    }

    var imgMayco = $(".img-Mayco");
    for (var i = 0; i < imgMayco.length; i++) {
      var target = Math.floor(Math.random() * imgMayco.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgMayco.length - 1) + 1;
      imgMayco.eq(target).before(imgMayco.eq(target2));
    }

    var imgPoPo1 = $(".img-PoPo1");
    for (var i = 0; i < imgPoPo1.length; i++) {
      var target = Math.floor(Math.random() * imgPoPo1.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgPoPo1.length - 1) + 1;
      imgPoPo1.eq(target).before(imgPoPo1.eq(target2));
    }
    var imgPoPo2 = $(".img-PoPo2");
    for (var i = 0; i < imgPoPo2.length; i++) {
      var target = Math.floor(Math.random() * imgPoPo2.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgPoPo2.length - 1) + 1;
      imgPoPo2.eq(target).before(imgPoPo2.eq(target2));
    }

    var imgSaiHtinLinnHtet = $(".img-SaiHtinLinnHtet");
    for (var i = 0; i < imgSaiHtinLinnHtet.length; i++) {
      var target = Math.floor(Math.random() * imgSaiHtinLinnHtet.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgSaiHtinLinnHtet.length - 1) + 1;
      imgSaiHtinLinnHtet.eq(target).before(imgSaiHtinLinnHtet.eq(target2));
    }

    var imgSanMinn = $(".img-SanMinn");
    for (var i = 0; i < imgSanMinn.length; i++) {
      var target = Math.floor(Math.random() * imgSanMinn.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgSanMinn.length - 1) + 1;
      imgSanMinn.eq(target).before(imgSanMinn.eq(target2));
    }

    var imgEijiSumi = $(".img-EijiSumi");
    for (var i = 0; i < imgEijiSumi.length; i++) {
      var target = Math.floor(Math.random() * imgEijiSumi.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgEijiSumi.length - 1) + 1;
      imgEijiSumi.eq(target).before(imgEijiSumi.eq(target2));
    }

    var imgYuYuMyintThan = $(".img-YuYuMyintThan");
    for (var i = 0; i < imgYuYuMyintThan.length; i++) {
      var target = Math.floor(Math.random() * imgYuYuMyintThan.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgYuYuMyintThan.length - 1) + 1;
      imgYuYuMyintThan.eq(target).before(imgYuYuMyintThan.eq(target2));
    }

    var imgZarMinHtike = $(".img-ZarMinHtike");
    for (var i = 0; i < imgZarMinHtike.length; i++) {
      var target = Math.floor(Math.random() * imgZarMinHtike.length - 1) + 1;
      var target2 = Math.floor(Math.random() * imgZarMinHtike.length - 1) + 1;
      imgZarMinHtike.eq(target).before(imgZarMinHtike.eq(target2));
    }
  });
});

