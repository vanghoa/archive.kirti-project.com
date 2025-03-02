$(document).ready(function () {
  var pdfApollo = ["doc/Apollo.pdf#view=FitH"]
  var pdfBeautyAsControl = ["doc/BeautyAsControl.pdf#view=FitH"]
  var pdfBurma = ["doc/Burma.pdf#view=FitH"]
  var pdfBurmaPamphlets = ["doc/BurmaPamphlets.pdf#view=FitH"]
  var pdfCambodia = ["doc/Cambodia.pdf#view=FitH"]
  var pdfGhostMothers = ["doc/GhostMothers.pdf#view=FitH"]
  var pdfModernViews = ["doc/ModernViews.pdf#view=FitH"]
  var pdfNamingChaos = ["doc/NamingChaos.pdf#view=FitH"]
  var pdfNeoGeomancy = ["doc/NeoGeomancy.pdf#view=FitH"]
  var pdfNewPolitical = ["doc/NewPolitical.pdf#view=FitH"]
  var pdfProgress = ["doc/Progress.pdf#view=FitH"]
  var pdfSongAndDance = ["doc/SongAndDance.pdf#view=FitH"]
  var pdfSouthVietnam = ["doc/SouthVietnam.pdf#view=FitH"]
  var pdfThailand = ["doc/Thailand.pdf#view=FitH"]
  var pdfTheBoss = ["doc/TheBoss.pdf#view=FitH"]
  var pdfTheContestedCorners = ["doc/TheContestedCorners.pdf#view=FitH"]
  var pdfTheState = ["doc/TheState.pdf#view=FitH"]

  $('#button-Apollo').click(function () {
    if ($('#item-Apollo').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfApollo);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-Apollo").appendChild(pdf);

      $('.txt-col').not($('#item-Apollo')).removeClass('show').addClass('hide');
      $('#item-Apollo').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-Apollo').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-Asias2').hasClass('hide')) {
      $('.name-footer').not($('#item-Asias2')).removeClass('show').addClass('hide');
      $('#item-Asias2').removeClass('hide').addClass('show');
    } else {
      $('#item-Asias2').removeClass('show').addClass('hide');
    }

    if ($('#button-Apollo').hasClass('no-highlight')) {
      $('.name').not($('#button-Apollo')).removeClass('highlight').addClass('no-highlight');
      $('#button-Apollo').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-Apollo').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-BeautyAsControl').click(function () {
    if ($('#item-BeautyAsControl').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfBeautyAsControl);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-BeautyAsControl").appendChild(pdf);

      $('.txt-col').not($('#item-BeautyAsControl')).removeClass('show').addClass('hide');
      $('#item-BeautyAsControl').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-BeautyAsControl').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-BeautyAsControl2').hasClass('hide')) {
      $('.name-footer').not($('#item-BeautyAsControl2')).removeClass('show').addClass('hide');
      $('#item-BeautyAsControl2').removeClass('hide').addClass('show');
    } else {
      $('#item-BeautyAsControl2').removeClass('show').addClass('hide');
    }

    if ($('#button-BeautyAsControl').hasClass('no-highlight')) {
      $('.name').not($('#button-BeautyAsControl')).removeClass('highlight').addClass('no-highlight');
      $('#button-BeautyAsControl').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-BeautyAsControl').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-Burma').click(function () {
    if ($('#item-Burma').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfBurma);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-Burma").appendChild(pdf);

      $('.txt-col').not($('#item-Burma')).removeClass('show').addClass('hide');
      $('#item-Burma').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-Burma').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-Burma2').hasClass('hide')) {
      $('.name-footer').not($('#item-Burma2')).removeClass('show').addClass('hide');
      $('#item-Burma2').removeClass('hide').addClass('show');
    } else {
      $('#item-Burma2').removeClass('show').addClass('hide');
    }

    if ($('#button-Burma').hasClass('no-highlight')) {
      $('.name').not($('#button-Burma')).removeClass('highlight').addClass('no-highlight');
      $('#button-Burma').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-Burma').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-BurmaPamphlets').click(function () {
    if ($('#item-BurmaPamphlets').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfBurmaPamphlets);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-BurmaPamphlets").appendChild(pdf);

      $('.txt-col').not($('#item-BurmaPamphlets')).removeClass('show').addClass('hide');
      $('#item-BurmaPamphlets').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-BurmaPamphlets').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-BurmaPamphlets2').hasClass('hide')) {
      $('.name-footer').not($('#item-BurmaPamphlets2')).removeClass('show').addClass('hide');
      $('#item-BurmaPamphlets2').removeClass('hide').addClass('show');
    } else {
      $('#item-BurmaPamphlets2').removeClass('show').addClass('hide');
    }

    if ($('#button-BurmaPamphlets').hasClass('no-highlight')) {
      $('.name').not($('#button-BurmaPamphlets')).removeClass('highlight').addClass('no-highlight');
      $('#button-BurmaPamphlets').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-BurmaPamphlets').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-Cambodia').click(function () {
    if ($('#item-Cambodia').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfCambodia);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-Cambodia").appendChild(pdf);

      $('.txt-col').not($('#item-Cambodia')).removeClass('show').addClass('hide');
      $('#item-Cambodia').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-Cambodia').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-Cambodia2').hasClass('hide')) {
      $('.name-footer').not($('#item-Cambodia2')).removeClass('show').addClass('hide');
      $('#item-Cambodia2').removeClass('hide').addClass('show');
    } else {
      $('#item-Cambodia2').removeClass('show').addClass('hide');
    }

    if ($('#button-Cambodia').hasClass('no-highlight')) {
      $('.name').not($('#button-Cambodia')).removeClass('highlight').addClass('no-highlight');
      $('#button-Cambodia').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-Cambodia').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-GhostMothers').click(function () {
    if ($('#item-GhostMothers').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfGhostMothers);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-GhostMothers").appendChild(pdf);

      $('.txt-col').not($('#item-GhostMothers')).removeClass('show').addClass('hide');
      $('#item-GhostMothers').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-GhostMothers').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-GhostMothers2').hasClass('hide')) {
      $('.name-footer').not($('#item-GhostMothers2')).removeClass('show').addClass('hide');
      $('#item-GhostMothers2').removeClass('hide').addClass('show');
    } else {
      $('#item-GhostMothers2').removeClass('show').addClass('hide');
    }

    if ($('#button-GhostMothers').hasClass('no-highlight')) {
      $('.name').not($('#button-GhostMothers')).removeClass('highlight').addClass('no-highlight');
      $('#button-GhostMothers').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-GhostMothers').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-ModernViews').click(function () {
    if ($('#item-ModernViews').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfModernViews);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-ModernViews").appendChild(pdf);

      $('.txt-col').not($('#item-ModernViews')).removeClass('show').addClass('hide');
      $('#item-ModernViews').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-ModernViews').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-ModernViews2').hasClass('hide')) {
      $('.name-footer').not($('#item-ModernViews2')).removeClass('show').addClass('hide');
      $('#item-ModernViews2').removeClass('hide').addClass('show');
    } else {
      $('#item-ModernViews2').removeClass('show').addClass('hide');
    }

    if ($('#button-ModernViews').hasClass('no-highlight')) {
      $('.name').not($('#button-ModernViews')).removeClass('highlight').addClass('no-highlight');
      $('#button-ModernViews').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-ModernViews').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-NamingChaos').click(function () {
    if ($('#item-NamingChaos').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfNamingChaos);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-NamingChaos").appendChild(pdf);

      $('.txt-col').not($('#item-NamingChaos')).removeClass('show').addClass('hide');
      $('#item-NamingChaos').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-NamingChaos').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-NamingChaos2').hasClass('hide')) {
      $('.name-footer').not($('#item-NamingChaos2')).removeClass('show').addClass('hide');
      $('#item-NamingChaos2').removeClass('hide').addClass('show');
    } else {
      $('#item-NamingChaos2').removeClass('show').addClass('hide');
    }

    if ($('#button-NamingChaos').hasClass('no-highlight')) {
      $('.name').not($('#button-NamingChaos')).removeClass('highlight').addClass('no-highlight');
      $('#button-NamingChaos').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-NamingChaos').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-NeoGeomancy').click(function () {
    if ($('#item-NeoGeomancy').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfNeoGeomancy);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-NeoGeomancy").appendChild(pdf);

      $('.txt-col').not($('#item-NeoGeomancy')).removeClass('show').addClass('hide');
      $('#item-NeoGeomancy').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-NeoGeomancy').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-NeoGeomancy2').hasClass('hide')) {
      $('.name-footer').not($('#item-NeoGeomancy2')).removeClass('show').addClass('hide');
      $('#item-NeoGeomancy2').removeClass('hide').addClass('show');
    } else {
      $('#item-NeoGeomancy2').removeClass('show').addClass('hide');
    }

    if ($('#button-NeoGeomancy').hasClass('no-highlight')) {
      $('.name').not($('#button-NeoGeomancy')).removeClass('highlight').addClass('no-highlight');
      $('#button-NeoGeomancy').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-NeoGeomancy').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-NewPolitical').click(function () {
    if ($('#item-NewPolitical').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfNewPolitical);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-NewPolitical").appendChild(pdf);

      $('.txt-col').not($('#item-NewPolitical')).removeClass('show').addClass('hide');
      $('#item-NewPolitical').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-NewPolitical').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-NewPolitical2').hasClass('hide')) {
      $('.name-footer').not($('#item-NewPolitical2')).removeClass('show').addClass('hide');
      $('#item-NewPolitical2').removeClass('hide').addClass('show');
    } else {
      $('#item-NewPolitical2').removeClass('show').addClass('hide');
    }

    if ($('#button-NewPolitical').hasClass('no-highlight')) {
      $('.name').not($('#button-NewPolitical')).removeClass('highlight').addClass('no-highlight');
      $('#button-NewPolitical').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-NewPolitical').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-Progress').click(function () {
    if ($('#item-Progress').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfProgress);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-Progress").appendChild(pdf);

      $('.txt-col').not($('#item-Progress')).removeClass('show').addClass('hide');
      $('#item-Progress').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-Progress').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-Progress2').hasClass('hide')) {
      $('.name-footer').not($('#item-Progress2')).removeClass('show').addClass('hide');
      $('#item-Progress2').removeClass('hide').addClass('show');
    } else {
      $('#item-Progress2').removeClass('show').addClass('hide');
    }

    if ($('#button-Progress').hasClass('no-highlight')) {
      $('.name').not($('#button-Progress')).removeClass('highlight').addClass('no-highlight');
      $('#button-Progress').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-Progress').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-SongAndDance').click(function () {
    if ($('#item-SongAndDance').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfSongAndDance);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-SongAndDance").appendChild(pdf);

      $('.txt-col').not($('#item-SongAndDance')).removeClass('show').addClass('hide');
      $('#item-SongAndDance').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-SongAndDance').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-SongAndDance2').hasClass('hide')) {
      $('.name-footer').not($('#item-SongAndDance2')).removeClass('show').addClass('hide');
      $('#item-SongAndDance2').removeClass('hide').addClass('show');
    } else {
      $('#item-SongAndDance2').removeClass('show').addClass('hide');
    }

    if ($('#button-SongAndDance').hasClass('no-highlight')) {
      $('.name').not($('#button-SongAndDance')).removeClass('highlight').addClass('no-highlight');
      $('#button-SongAndDance').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-SongAndDance').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-SouthVietnam').click(function () {
    if ($('#item-SouthVietnam').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfSouthVietnam);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-SouthVietnam").appendChild(pdf);

      $('.txt-col').not($('#item-SouthVietnam')).removeClass('show').addClass('hide');
      $('#item-SouthVietnam').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-SouthVietnam').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-SouthVietnam2').hasClass('hide')) {
      $('.name-footer').not($('#item-SouthVietnam2')).removeClass('show').addClass('hide');
      $('#item-SouthVietnam2').removeClass('hide').addClass('show');
    } else {
      $('#item-SouthVietnam2').removeClass('show').addClass('hide');
    }

    if ($('#button-SouthVietnam').hasClass('no-highlight')) {
      $('.name').not($('#button-SouthVietnam')).removeClass('highlight').addClass('no-highlight');
      $('#button-SouthVietnam').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-SouthVietnam').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-Thailand').click(function () {
    if ($('#item-Thailand').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfThailand);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-Thailand").appendChild(pdf);

      $('.txt-col').not($('#item-Thailand')).removeClass('show').addClass('hide');
      $('#item-Thailand').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-Thailand').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-Thailand2').hasClass('hide')) {
      $('.name-footer').not($('#item-Thailand2')).removeClass('show').addClass('hide');
      $('#item-Thailand2').removeClass('hide').addClass('show');
    } else {
      $('#item-Thailand2').removeClass('show').addClass('hide');
    }

    if ($('#button-Thailand').hasClass('no-highlight')) {
      $('.name').not($('#button-Thailand')).removeClass('highlight').addClass('no-highlight');
      $('#button-Thailand').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-Thailand').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-TheBoss').click(function () {
    if ($('#item-TheBoss').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfTheBoss);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-TheBoss").appendChild(pdf);

      $('.txt-col').not($('#item-TheBoss')).removeClass('show').addClass('hide');
      $('#item-TheBoss').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-TheBoss').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-TheBoss2').hasClass('hide')) {
      $('.name-footer').not($('#item-TheBoss2')).removeClass('show').addClass('hide');
      $('#item-TheBoss2').removeClass('hide').addClass('show');
    } else {
      $('#item-TheBoss2').removeClass('show').addClass('hide');
    }

    if ($('#button-TheBoss').hasClass('no-highlight')) {
      $('.name').not($('#button-TheBoss')).removeClass('highlight').addClass('no-highlight');
      $('#button-TheBoss').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-TheBoss').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-TheContestedCorners').click(function () {
    if ($('#item-TheContestedCorners').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfTheContestedCorners);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-TheContestedCorners").appendChild(pdf);

      $('.txt-col').not($('#item-TheContestedCorners')).removeClass('show').addClass('hide');
      $('#item-TheContestedCorners').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-TheContestedCorners').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-TheContestedCorners2').hasClass('hide')) {
      $('.name-footer').not($('#item-TheContestedCorners2')).removeClass('show').addClass('hide');
      $('#item-TheContestedCorners2').removeClass('hide').addClass('show');
    } else {
      $('#item-TheContestedCorners2').removeClass('show').addClass('hide');
    }

    if ($('#button-TheContestedCorners').hasClass('no-highlight')) {
      $('.name').not($('#button-TheContestedCorners')).removeClass('highlight').addClass('no-highlight');
      $('#button-TheContestedCorners').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-TheContestedCorners').removeClass('highlight').addClass('no-highlight');
    }
  });

  $('#button-TheState').click(function () {
    if ($('#item-TheState').hasClass('hide')) {
      var pdf = document.createElement("object");
      pdf.setAttribute("data", pdfTheState);
      pdf.setAttribute("type", "application/pdf");
      document.getElementById("item-TheState").appendChild(pdf);

      $('.txt-col').not($('#item-TheState')).removeClass('show').addClass('hide');
      $('#item-TheState').removeClass('hide').addClass('show');
      $('header, .container-text, footer').removeClass('full').addClass('reduced');
    } else {
      $('#item-TheState').removeClass('show').addClass('hide');
      $('header, .container-text, footer').removeClass('reduced').addClass('full');
    }

    if ($('#item-TheState2').hasClass('hide')) {
      $('.name-footer').not($('#item-TheState2')).removeClass('show').addClass('hide');
      $('#item-TheState2').removeClass('hide').addClass('show');
    } else {
      $('#item-TheState2').removeClass('show').addClass('hide');
    }

    if ($('#button-TheState').hasClass('no-highlight')) {
      $('.name').not($('#button-TheState')).removeClass('highlight').addClass('no-highlight');
      $('#button-TheState').removeClass('no-highlight').addClass('highlight');
    } else {
      $('#button-TheState').removeClass('highlight').addClass('no-highlight');
    }
  });

  //// Pdf Header Close Button
  $('.button-pdfClose').click(function () {
    $('.txt-col').removeClass('show').addClass('hide');
    $('.txt-col').removeClass('full').addClass('reduced');
    $('.button-full').removeClass('button-hide').addClass('button-show');
    $('.button-minimize').removeClass('button-show').addClass('button-hide');
    $('header, .container-text, footer').removeClass('reduced').addClass('full');
  });
  //// Full Screen Button - ArachaCholitgul
  $('.button-full').click(function () {
    $('.txt-col').removeClass('reduced').addClass('full');
    $('#info-tag-ArachaCholitgul').removeClass('info-tag-open').addClass('info-tag-full');
    $('.button-full').removeClass('button-show').addClass('button-hide');
    $('.button-minimize').removeClass('button-hide').addClass('button-show');
  });
  //// Minimize Button - ArachaCholitgul
  $('.button-minimize').click(function () {
    $('.txt-col').removeClass('full').addClass('reduced');
    $('#info-tag-ArachaCholitgul').removeClass('info-tag-full').addClass('info-tag-open');
    $('.button-full').removeClass('button-hide').addClass('button-show');
    $('.button-minimize').removeClass('button-show').addClass('button-hide');
  });

  //// Scroll for entire window
  $('.container-text').mCustomScrollbar({
    axis: "y",
    mouseWheel: { axis: "y" },
    live: true
  });
});
