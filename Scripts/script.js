$(function(){
  $(window).on("load resize", function(){
    $(".fill-screen").css("height", window.innerHeight);
  });

  $("#video-wallpaper").wallpaper({
    source: {
      poster: "images/bikes.png",
      video: "//www.youtube.com/embed/plW58zpcmpk"
    }
  });

  //$("#video-wallpaper").background("load", { "poster": "../images/bikes.png", "mp4": "../images/bikes.mp4"});

});



