$(document).ready(function() {
  //// Scroll for About window
  //var WIDTH_LIMIT = 650;
  //var windowWidth = window.innerWidth;

  //if (windowWidth >= WIDTH_LIMIT) {
  //$(".container-about").mCustomScrollbar({
  // axis: "y",
  //mouseWheel: { axis: "y" },
  //scrollInertia: 200,
  //live: true
  //});
  //}

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  var jmediaquery = window.matchMedia("(min-width: 650px)");
  if (jmediaquery.matches) {
    $(function() {
      $("#no-01")
        .find(".about-box")
        .draggable({
          containment: ".container-about"
        });
    });
    /* Click to bring to front */
    $(".about-box").click(function() {
      this.parentNode.appendChild(this);
    });

    /* Drag to bring to front */
    $(".about-box").on("dragstart", function() {
      this.parentNode.appendChild(this);
    });
  }
});
