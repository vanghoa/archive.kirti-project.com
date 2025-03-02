$(document).ready(function() {
  // Empty all Img in #row
  $.fn.removeObject = function() {
    //// Close Info
    $(".info-row")
      .removeClass("info-show")
      .addClass("info-hide");
    $(".info-row")
      .removeClass("full")
      .addClass("reduced");
    $(".button-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
    $("header, .container-index, footer")
      .removeClass("reduced")
      .addClass("full");
  };

  $("#button-Apollo1").click(function() {
    $.fn.removeObject();
    var pdfApollo1 = ["doc/Apollo.pdf#view=FitH"];

    if ($("#item-Apollo1").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-Apollo1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Apollo1")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-Apollo1")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-Apollo1").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-Apollo1"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-Apollo1")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Apollo1")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-Apollo").click(function() {
    $.fn.removeObject();

    if ($("#item-Apollo").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-Apollo"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Apollo")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-Apollo")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-Apollo").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-Apollo"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-Apollo")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Apollo")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-AtHomeDuhoang").click(function() {
    $.fn.removeObject();

    if ($("#item-AtHomeDuhoang").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/358316107?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-AtHomeDuhoang").appendChild(vdo);

      $(".txt-col")
        .not($("#item-AtHomeDuhoang"))
        .removeClass("show")
        .addClass("hide");
      $("#item-AtHomeDuhoang")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-AtHomeDuhoang")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-AtHomeDuhoang").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-AtHomeDuhoang"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-AtHomeDuhoang")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-AtHomeDuhoang")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-AtHomePheSophon").click(function() {
    $.fn.removeObject();

    if ($("#item-AtHomePheSophon").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/357534068?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-AtHomePheSophon").appendChild(vdo);

      $(".txt-col")
        .not($("#item-AtHomePheSophon"))
        .removeClass("show")
        .addClass("hide");
      $("#item-AtHomePheSophon")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-AtHomePheSophon")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-AtHomePheSophon").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-AtHomePheSophon"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-AtHomePheSophon")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-AtHomePheSophon")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-AtThasnai").click(function() {
    $.fn.removeObject();

    if ($("#item-AtThasnai").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359478384?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-AtThasnai").appendChild(vdo);

      $(".txt-col")
        .not($("#item-AtThasnai"))
        .removeClass("show")
        .addClass("hide");
      $("#item-AtThasnai")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-AtThasnai")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-AtThasnai").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-AtThasnai"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-AtThasnai")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-AtThasnai")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-AtTheStudioDuHoang").click(function() {
    $.fn.removeObject();

    if ($("#item-AtTheStudioDuHoang").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/358323972?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-AtTheStudioDuHoang").appendChild(vdo);

      $(".txt-col")
        .not($("#item-AtTheStudioDuHoang"))
        .removeClass("show")
        .addClass("hide");
      $("#item-AtTheStudioDuHoang")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-AtTheStudioDuHoang")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-AtTheStudioDuHoang").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-AtTheStudioDuHoang"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-AtTheStudioDuHoang")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-AtTheStudioDuHoang")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-BunthengDraws").click(function() {
    if ($("#item-BunthengDraws").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359470327?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-BunthengDraws").appendChild(vdo);

      $(".txt-col")
        .not($("#item-BunthengDraws"))
        .removeClass("show")
        .addClass("hide");
      $("#item-BunthengDraws")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-BunthengDraws")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-BunthengDraws").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-BunthengDraws"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-BunthengDraws")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BunthengDraws")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-Burma").click(function() {
    $.fn.removeObject();
    var pdfBurma = ["doc/Burma.pdf#view=FitH"];

    if ($("#item-Burma").hasClass("hide")) {
      //var pdf = document.createElement("object");
      //pdf.setAttribute("data", pdfBurma);
      //pdf.setAttribute("width", "100%");
      //pdf.setAttribute("height", "100%");
      //pdf.setAttribute("type", "application/pdf");
      //document.getElementById("item-Burma").appendChild(pdf);

      $(".txt-col")
        .not($("#item-Burma"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Burma")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-Burma")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-Burma").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-Burma"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-Burma")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Burma")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-BurmaPamphlets").click(function() {
    $.fn.removeObject();
    var pdfBurmaPamphlets = ["doc/BurmaPamphlets.pdf#view=FitH"];

    if ($("#item-BurmaPamphlets").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-BurmaPamphlets"))
        .removeClass("show")
        .addClass("hide");
      $("#item-BurmaPamphlets")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-BurmaPamphlets")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-BurmaPamphlets").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-BurmaPamphlets"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-BurmaPamphlets")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-BurmaPamphlets")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-Calligraphy").click(function() {
    $.fn.removeObject();

    if ($("#item-Calligraphy").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/357525500?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-Calligraphy").appendChild(vdo);

      $(".txt-col")
        .not($("#item-Calligraphy"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Calligraphy")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-Calligraphy")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-Calligraphy").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-Calligraphy"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-Calligraphy")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Calligraphy")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-Cambodia").click(function() {
    $.fn.removeObject();
    var pdfCambodia = ["doc/Cambodia.pdf#view=FitH"];

    if ($("#item-Cambodia").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-Cambodia"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Cambodia")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-Cambodia")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-Cambodia").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-Cambodia"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-Cambodia")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Cambodia")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-InTheBathroom").click(function() {
    $.fn.removeObject();

    if ($("#item-InTheBathroom").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/357526794?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-InTheBathroom").appendChild(vdo);

      $(".txt-col")
        .not($("#item-InTheBathroom"))
        .removeClass("show")
        .addClass("hide");
      $("#item-InTheBathroom")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-InTheBathroom")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-InTheBathroom").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-InTheBathroom"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-InTheBathroom")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-InTheBathroom")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-InterviewManitSriwanichpoom").click(function() {
    $.fn.removeObject();

    if ($("#item-InterviewManitSriwanichpoom").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-InterviewManitSriwanichpoom"))
        .removeClass("show")
        .addClass("hide");
      $("#item-InterviewManitSriwanichpoom")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-InterviewManitSriwanichpoom")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-InterviewManitSriwanichpoom").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-InterviewManitSriwanichpoom"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-InterviewManitSriwanichpoom")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-InterviewManitSriwanichpoom")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-InterviewSaiHtinLinnHtet").click(function() {
    $.fn.removeObject();

    if ($("#item-InterviewSaiHtinLinnHtet").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-InterviewSaiHtinLinnHtet"))
        .removeClass("show")
        .addClass("hide");
      $("#item-InterviewSaiHtinLinnHtet")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-InterviewSaiHtinLinnHtet")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-InterviewSaiHtinLinnHtet").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-InterviewSaiHtinLinnHtet"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-InterviewSaiHtinLinnHtet")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-InterviewSaiHtinLinnHtet")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-InterviewYuYuMyintThan").click(function() {
    $.fn.removeObject();

    if ($("#item-InterviewYuYuMyintThan").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-InterviewYuYuMyintThan"))
        .removeClass("show")
        .addClass("hide");
      $("#item-InterviewYuYuMyintThan")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-InterviewYuYuMyintThan")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-InterviewYuYuMyintThan").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-InterviewYuYuMyintThan"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-InterviewYuYuMyintThan")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-InterviewYuYuMyintThan")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-KirtiWebDraft").click(function() {
    $.fn.removeObject();

    if ($("#item-KirtiWebDraft").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359474027?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-KirtiWebDraft").appendChild(vdo);

      $(".txt-col")
        .not($("#item-KirtiWebDraft"))
        .removeClass("show")
        .addClass("hide");
      $("#item-KirtiWebDraft")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-KirtiWebDraft")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-KirtiWebDraft").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-KirtiWebDraft"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-KirtiWebDraft")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KirtiWebDraft")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-KirtiPrototype").click(function() {
    $.fn.removeObject();
    var pdfKirtiPrototype = ["doc/KirtiPrototype.pdf#view=FitH"];

    if ($("#item-KirtiPrototype").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-KirtiPrototype"))
        .removeClass("show")
        .addClass("hide");
      $("#item-KirtiPrototype")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-KirtiPrototype")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-KirtiPrototype").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-KirtiPrototype"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-KirtiPrototype")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-KirtiPrototype")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-LuxuryAndRubble1").click(function() {
    $.fn.removeObject();
    var pdfLuxuryAndRubble = ["doc/LuxuryAndRubble.pdf#view=FitH"];

    if ($("#item-LuxuryAndRubble1").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-LuxuryAndRubble1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-LuxuryAndRubble1")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-LuxuryAndRubble1")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-LuxuryAndRubble1").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-LuxuryAndRubble"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-LuxuryAndRubble1")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LuxuryAndRubble1")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-LuxuryAndRubble").click(function() {
    $.fn.removeObject();
    var pdfLuxuryAndRubble = ["doc/LuxuryAndRubble.pdf#view=FitH"];

    if ($("#item-LuxuryAndRubble").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-LuxuryAndRubble"))
        .removeClass("show")
        .addClass("hide");
      $("#item-LuxuryAndRubble")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-LuxuryAndRubble")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-LuxuryAndRubble").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-LuxuryAndRubble"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-LuxuryAndRubble")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-LuxuryAndRubble")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-MitJaiInnStudio").click(function() {
    $.fn.removeObject();

    if ($("#item-MitJaiInnStudio").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359481252?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-MitJaiInnStudio").appendChild(vdo);

      $(".txt-col")
        .not($("#item-MitJaiInnStudio"))
        .removeClass("show")
        .addClass("hide");
      $("#item-MitJaiInnStudio")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-MitJaiInnStudio")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-MitJaiInnStudio").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-MitJaiInnStudio"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-MitJaiInnStudio")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MitJaiInnStudio")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-MusicVideo").click(function() {
    $.fn.removeObject();

    if ($("#item-MusicVideo").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/357538683?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-MusicVideo").appendChild(vdo);

      $(".txt-col")
        .not($("#item-MusicVideo"))
        .removeClass("show")
        .addClass("hide");
      $("#item-MusicVideo")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-MusicVideo")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-MusicVideo").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-MusicVideo"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-MusicVideo")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-MusicVideo")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-NewPolitical").click(function() {
    $.fn.removeObject();
    var pdfNewPolitical = ["doc/NewPolitical.pdf#view=FitH"];

    if ($("#item-NewPolitical").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-NewPolitical"))
        .removeClass("show")
        .addClass("hide");
      $("#item-NewPolitical")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-NewPolitical")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-NewPolitical").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-NewPolitical"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-NewPolitical")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-NewPolitical")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-Performance").click(function() {
    $.fn.removeObject();

    if ($("#item-Performance").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/355815851?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-Performance").appendChild(vdo);

      $(".txt-col")
        .not($("#item-Performance"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Performance")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-Performance")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-Performance").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-Performance"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-Performance")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Performance")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-PharePonleuSelpak1").click(function() {
    $.fn.removeObject();

    if ($("#item-PharePonleuSelpak1").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359474165?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-PharePonleuSelpak1").appendChild(vdo);

      $(".txt-col")
        .not($("#item-PharePonleuSelpak1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PharePonleuSelpak1")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-PharePonleuSelpak1")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-PharePonleuSelpak1").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-PharePonleuSelpak1"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PharePonleuSelpak1")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PharePonleuSelpak1")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-PharePonleuSelpak").click(function() {
    $.fn.removeObject();

    if ($("#item-PharePonleuSelpak").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359474165?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-PharePonleuSelpak").appendChild(vdo);

      $(".txt-col")
        .not($("#item-PharePonleuSelpak"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PharePonleuSelpak")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-PharePonleuSelpak")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-PharePonleuSelpak").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-PharePonleuSelpak"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PharePonleuSelpak")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PharePonleuSelpak")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-PhuongDucPlays").click(function() {
    $.fn.removeObject();

    if ($("#item-PhuongDucPlays").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/357528819?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-PhuongDucPlays").appendChild(vdo);

      $(".txt-col")
        .not($("#item-PhuongDucPlays"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PhuongDucPlays")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-PhuongDucPlays")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-PhuongDucPlays").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-PhuongDucPlays"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PhuongDucPlays")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PhuongDucPlays")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-PornchaiChaimaMural").click(function() {
    $.fn.removeObject();

    if ($("#item-PornchaiChaimaMural").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359480810?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-PornchaiChaimaMural").appendChild(vdo);

      $(".txt-col")
        .not($("#item-PornchaiChaimaMural"))
        .removeClass("show")
        .addClass("hide");
      $("#item-PornchaiChaimaMural")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-PornchaiChaimaMural")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-PornchaiChaimaMural").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-PornchaiChaimaMural"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-PornchaiChaimaMural")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-PornchaiChaimaMural")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-ProposedGardening").click(function() {
    $.fn.removeObject();

    if ($("#item-ProposedGardening").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/358324342?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-ProposedGardening").appendChild(vdo);

      $(".txt-col")
        .not($("#item-ProposedGardening"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ProposedGardening")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-ProposedGardening")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-ProposedGardening").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-ProposedGardening"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-ProposedGardening")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ProposedGardening")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-SanMinnStreet").click(function() {
    $.fn.removeObject();

    if ($("#item-SanMinnStreet").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/350646598?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-SanMinnStreet").appendChild(vdo);

      $(".txt-col")
        .not($("#item-SanMinnStreet"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SanMinnStreet")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-SanMinnStreet")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-SanMinnStreet").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-SanMinnStreet"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-SanMinnStreet")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SanMinnStreet")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-SanMinnStudio").click(function() {
    $.fn.removeObject();

    if ($("#item-SanMinnStudio").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/355814469?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-SanMinnStudio").appendChild(vdo);

      $(".txt-col")
        .not($("#item-SanMinnStudio"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SanMinnStudio")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-SanMinnStudio")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-SanMinnStudio").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-SanMinnStudio"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-SanMinnStudio")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SanMinnStudio")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-Slideshow").click(function() {
    $.fn.removeObject();

    if ($("#item-Slideshow").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/358326573?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-Slideshow").appendChild(vdo);

      $(".txt-col")
        .not($("#item-Slideshow"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Slideshow")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-Slideshow")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-Slideshow").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-Slideshow"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-Slideshow")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Slideshow")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-SmallTalk").click(function() {
    $.fn.removeObject();

    if ($("#item-SmallTalk").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359478564?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-SmallTalk").appendChild(vdo);

      $(".txt-col")
        .not($("#item-SmallTalk"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SmallTalk")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-SmallTalk")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-SmallTalk").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-SmallTalk"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-SmallTalk")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SmallTalk")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-SongAndDance").click(function() {
    $.fn.removeObject();
    var pdfSongAndDance = ["doc/SongAndDance.pdf#view=FitH"];

    if ($("#item-SongAndDance").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-SongAndDance"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SongAndDance")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-SongAndDance")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-SongAndDance").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-SongAndDance"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-SongAndDance")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SongAndDance")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-SouthVietnam").click(function() {
    $.fn.removeObject();
    var pdfSouthVietnam = ["doc/SouthVietnam.pdf#view=FitH"];

    if ($("#item-SouthVietnam").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-SouthVietnam"))
        .removeClass("show")
        .addClass("hide");
      $("#item-SouthVietnam")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-SouthVietnam")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-SouthVietnam").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-SouthVietnam"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-SouthVietnam")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-SouthVietnam")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-Thailand").click(function() {
    $.fn.removeObject();
    var pdfThailand = ["doc/Thailand.pdf#view=FitH"];

    if ($("#item-Thailand").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-Thailand"))
        .removeClass("show")
        .addClass("hide");
      $("#item-Thailand")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-Thailand")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-Thailand").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-Thailand"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-Thailand")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-Thailand")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-TheContestedCorners").click(function() {
    $.fn.removeObject();
    var pdfTheContestedCorners = ["doc/TheContestedCorners.pdf#view=FitH"];

    if ($("#item-TheContestedCorners").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-TheContestedCorners"))
        .removeClass("show")
        .addClass("hide");
      $("#item-TheContestedCorners")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-TheContestedCorners")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-TheContestedCorners").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-TheContestedCorners"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-TheContestedCorners")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TheContestedCorners")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-TheState1").click(function() {
    $.fn.removeObject();
    var pdfTheState = ["doc/TheState.pdf#view=FitH"];

    if ($("#item-TheState1").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-TheState1"))
        .removeClass("show")
        .addClass("hide");
      $("#item-TheState1")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-TheState1")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-TheState1").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-TheState1"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-TheState1")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TheState1")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-TheState").click(function() {
    $.fn.removeObject();
    var pdfTheState = ["doc/TheState.pdf#view=FitH"];

    if ($("#item-TheState").hasClass("hide")) {
      $(".txt-col")
        .not($("#item-TheState"))
        .removeClass("show")
        .addClass("hide");
      $("#item-TheState")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-TheState")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-TheState").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-TheState"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-TheState")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-TheState")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-VeryStrange").click(function() {
    $.fn.removeObject();

    if ($("#item-VeryStrange").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/357526556?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-VeryStrange").appendChild(vdo);

      $(".txt-col")
        .not($("#item-VeryStrange"))
        .removeClass("show")
        .addClass("hide");
      $("#item-VeryStrange")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-VeryStrange")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-VeryStrange").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-VeryStrange"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-VeryStrange")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-VeryStrange")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-VIPParty").click(function() {
    $.fn.removeObject();

    if ($("#item-VIPParty").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/357528404?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-VIPParty").appendChild(vdo);

      $(".txt-col")
        .not($("#item-VIPParty"))
        .removeClass("show")
        .addClass("hide");
      $("#item-VIPParty")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-VIPParty")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-VIPParty").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-VIPParty"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-VIPParty")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-VIPParty")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-VisitPhuongDuc").click(function() {
    $.fn.removeObject();

    if ($("#item-VisitPhuongDuc").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/365083261?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-VisitPhuongDuc").appendChild(vdo);

      $(".txt-col")
        .not($("#item-VisitPhuongDuc"))
        .removeClass("show")
        .addClass("hide");
      $("#item-VisitPhuongDuc")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-VisitPhuongDuc")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-VisitPhuongDuc").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-VisitPhuongDuc"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-VisitPhuongDuc")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-VisitPhuongDuc")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-WalkingToTheStudio").click(function() {
    $.fn.removeObject();

    if ($("#item-WalkingToTheStudio").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/358323737?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-WalkingToTheStudio").appendChild(vdo);

      $(".txt-col")
        .not($("#item-WalkingToTheStudio"))
        .removeClass("show")
        .addClass("hide");
      $("#item-WalkingToTheStudio")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-WalkingToTheStudio")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-WalkingToTheStudio").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-WalkingToTheStudio"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-WalkingToTheStudio")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-WalkingToTheStudio")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-ZarMinHtikeShows").click(function() {
    $.fn.removeObject();

    if ($("#item-ZarMinHtikeShows").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359473137?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-ZarMinHtikeShows").appendChild(vdo);

      $(".txt-col")
        .not($("#item-ZarMinHtikeShows"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ZarMinHtikeShows")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-ZarMinHtikeShows")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-ZarMinHtikeShows").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-ZarMinHtikeShows"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-ZarMinHtikeShows")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ZarMinHtikeShows")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  $("#button-ZarMinHtikeHome").click(function() {
    $.fn.removeObject();

    if ($("#item-ZarMinHtikeHome").hasClass("hide")) {
      var vdo = document.createElement("iframe");
      vdo.setAttribute(
        "src",
        "https://player.vimeo.com/video/359473728?loop=1"
      );
      vdo.setAttribute(
        "style",
        "background-color:black;position:absolute;top:0;left:0;width:100%;height:100%;margin-top:28px;"
      );
      vdo.setAttribute("frameborder", "0");
      vdo.setAttribute("allow", "autoplay; fullscreen");
      document.getElementById("item-ZarMinHtikeHome").appendChild(vdo);

      $(".txt-col")
        .not($("#item-ZarMinHtikeHome"))
        .removeClass("show")
        .addClass("hide");
      $("#item-ZarMinHtikeHome")
        .removeClass("hide")
        .addClass("show");
      $("header, .container-documents, footer")
        .removeClass("full")
        .addClass("reduced");
    } else {
      $("#item-ZarMinHtikeHome")
        .removeClass("show")
        .addClass("hide");
      $("header, .container-documents, footer")
        .removeClass("reduced")
        .addClass("full");
    }

    if ($("#button-ZarMinHtikeHome").hasClass("no-highlight")) {
      $(".channel-name")
        .not($("#button-ZarMinHtikeHome"))
        .removeClass("highlight")
        .addClass("no-highlight");
      $("#button-ZarMinHtikeHome")
        .removeClass("no-highlight")
        .addClass("highlight");
    } else {
      $("#button-ZarMinHtikeHome")
        .removeClass("highlight")
        .addClass("no-highlight");
    }
  });

  //// Pdf Header Close Button
  $(".button-pdfClose").click(function() {
    $(".txt-col")
      .removeClass("show")
      .addClass("hide");
    $(".txt-col")
      .removeClass("doc-full")
      .addClass("doc-reduced");
    $(".button-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
    $("header, .container-documents, footer")
      .removeClass("reduced")
      .addClass("full");
  });
  //// Full Screen Button
  $(".button-full").click(function() {
    $(".txt-col")
      .removeClass("doc-reduced")
      .addClass("doc-full");
    $(".info-tag")
      .removeClass("info-tag-open")
      .addClass("info-tag-full");
    $(".button-full")
      .removeClass("button-show")
      .addClass("button-hide");
    $(".button-minimize")
      .removeClass("button-hide")
      .addClass("button-show");
  });
  //// Minimize Button
  $(".button-minimize").click(function() {
    $(".txt-col")
      .removeClass("doc-full")
      .addClass("doc-reduced");
    $(".info-tag")
      .removeClass("info-tag-full")
      .addClass("info-tag-open");
    $(".button-full")
      .removeClass("button-hide")
      .addClass("button-show");
    $(".button-minimize")
      .removeClass("button-show")
      .addClass("button-hide");
  });
});
