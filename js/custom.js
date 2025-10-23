$(document).ready(function () {
  $(document).delegate(".open", "click", function (event) {
    $(this).addClass("oppenned");
    event.stopPropagation();
  });
  $(document).delegate("body", "click", function (event) {
    $(".open").removeClass("oppenned");
    event.stopPropagation();
  });
  $(document).delegate(".cls", "click", function (event) {
    $(".open").removeClass("oppenned");
    event.stopPropagation();
  });
});

$(function () {
  $("#Container").mixItUp({
    load: {
      filter: ".category-b",
    },
  });
});

$(".pop-link").click(function () {
  document.getElementById("pop-form").style.display = "block";
  document.getElementById("light-bg").style.display = "block";

  document.getElementById("pop-in").style.display = "block";
  $("body").css({ height: "400px", overflow: "hidden" });
});

$(".num-likes").click(function () {
  $(this).toggleClass("red-heart");
});

$(".close-pop").click(function () {
  $("#pop-form,#light-bg").css("display", "none");
  $("body").css({ height: "auto", overflow: "visible" });
});

$(document).mouseup(function (e) {
  var $container = $(".pop-det");
  // if the target of the click isn't the container nor a descendant of the container
  if (
    !$container.is(e.target) &&
    $container.has(e.target).length === 0 &&
    e.target !== $("#pop-form").get(0)
  ) {
    $container.hide();
    $("#pop-form,#light-bg").css("display", "none");
    $("body").css({ height: "auto", overflow: "visible" });
  }
});
$(".p-name > a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#pop-form").offset().top,
    },
    500
  );
  return false;
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

$(".parent-name li span").click(function () {
  $(this).parent(".one-chi").toggleClass("chi-rem");
  $(this).toggleClass("arrow-down");
  $(this).parent().find("ul").slideToggle();
});

$(".parent-name > li").each(function () {
  var $this = $(this);
  if ($this.find(".father-name > li").length === 1) {
    //if looking for direct descendants then do .children('div').length
    $this.addClass("one-chi");
  }
});

$(".parent-name > li").each(function () {
  var $this = $(this);
  if ($this.find(".father-name,.son-name").length >= 1) {
    //if looking for direct descendants then do .children('div').length
    $this.addClass("chi-el");
  }
});

$(".father-name").each(function () {
  var $this = $(this);
  if ($this.find(".son-name").length >= 1) {
    //if looking for direct descendants then do .children('div').length
    $this.find(".son-name").parent().addClass("chi-elm");
  }
});

$(function () {
  var $win = $(window); // or $box parent container
  var $box = $(".op-mn,#sidenav");
  $win.on("click.Bst", function (event) {
    if (
      $box.has(event.target).length === 0 && //checks if descendants of $box was clicked
      !$box.is(event.target) //checks if the $box itself was clicked
    ) {
      $(".sidenav").css("width", "0");
    }
  });
});

$(function () {
  /* initiate the plugin */
  $("div.holder1").jPages({
    containerID: "itemContainer1",
  });
  $("div.holder2").jPages({
    containerID: "itemContainer2",
  });
  $("div.holder3").jPages({
    containerID: "itemContainer3",
    perPage: 4,
  });
  $("div.holder4").jPages({
    containerID: "itemContainer4",
    perPage: 9,
  });
  $("div.holder5").jPages({
    containerID: "itemContainer5",
    perPage: 12,
  });
});

// Get the element with id="defaultOpen" and click on it

function openCity(evt, cityName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.opacity = "0";
    tabcontent[i].style.height = "0";
    tabcontent[i].style.display = "block";
  }

  document.getElementById(cityName).style.opacity = "1";
  document.getElementById(cityName).style.height = "auto";
  document.getElementById(cityName).style.dispaly = "none";

  evt.currentTarget.className += " dones";
}

$(".n-link").click(function () {
  $(".n-link").removeClass("active");
  // $(".tab").addClass("active"); // instead of this do the below
  $(this).addClass("active");
});

document.getElementById("defaultOpen").click();
/* when document is ready */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".search-box").forEach((box) => {
    const btn = box.querySelector("button");
    const input = box.querySelector("input");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (input.style.display === "block") {
        input.style.display = "none";
        input.value = "";
      } else {
        input.style.display = "block";
        input.focus();
      }
    });
  });
});
