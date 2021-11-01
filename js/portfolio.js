$(function() {

  $("#drawerToggle").click(function(){
    $(this).toggleClass("open");
    $(".spNav,.blackBg").toggleClass("sideOpen");

  });

  $('.blackBg').click(function() {                                         //黒い背景をクリックしたら
      $("#drawerToggle").toggleClass("open");　　　　　　　　　　　　　　　　//ハンバーガーメニューが閉じる
      $(".spNav,.blackBg").removeClass("sideOpen");
      $('body,html').css({"overflow":"visible","height":"auto"})　　　　　//画面スクロールできるようになる
  });

  $(window).scroll(function () {
    $(".carreer dt,.carreer dd").each(function () {
      var elemPos = $(this).offset().top;                               //要素の位置を取得
      var scroll = $(window).scrollTop();                               //スクロール位置を取得
      var windowHeight = $(window).height();                            //画面幅を取得（画面の下側に入ったときに動作させるため)
      if (scroll > elemPos - windowHeight) {
        $(this).css("opacity","1");
      }
    });
  });
  jQuery(window).scroll();


  $(window).on("resize", function() {
    var w = $(window).width();
    if(w > 600) {
      $("#drawerToggle").removeClass("open");
      $(".spNav,.blackBg").removeClass("sideOpen");
      $('body,html').css({"overflow":"visible","height":"auto"});
    }
  });


});
