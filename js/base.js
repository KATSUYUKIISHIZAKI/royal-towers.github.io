
//bodyフェードイン
$(document).ready(function() {
  $('body').fadeIn(1400);
  });
  
  
  // スライダー記述
  $(document).ready(function(){
      $('.bxslider').bxSlider();
  });
  
  
  // ソーシャルボタン配置
  $(function() {
      $('.tweet').socialbutton('service');
  });
  
  
  
  $(function() {
  $("#socialbuttons .twitter").socialbutton("twitter", {
  button : "horizontal",
  text : "このツイートをつぶやくと先着でドリンクが一杯無料になります。",
  url : "http://xxxxxxx.jp/",
  via:'xxxxxxxx'
  }).width(85);
  
  $("#socialbuttons .facebook").socialbutton("facebook_like", {
  button : "button_count",
  url : "http://xxxxxxx.jp/",
  }).width(100);
  
  
  });
  
  
  
  /*TOPポタン配置*/
  $(function() {
      var topBtn = $('.pagetop');    
      topBtn.hide();
      //スクロールが100に達したらボタン表示
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              topBtn.fadeIn();
          } else {
              topBtn.fadeOut();
          }
      });
      //スクロールしてトップ
      topBtn.click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 500);
          return false;
      });
  });
  
  $(function(){
      $('#menu li').hover(function(){
          $("ul:not(:animated)", this).slideDown();
      }, function(){
          $("ul.child",this).slideUp();
      });
  });
  
  
  
  
  
  
  $(function() {
      var snsBtn = $('.snstop');    
      snsBtn.hide();
      //スクロールが100に達したらボタン表示
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              snsBtn.fadeIn();
          } else {
              snsBtn.fadeOut();
          }
      });
  });
  
  
  $(function(){
    $("#tabArea li").click(function(){
      var num = $("#tabArea li").index(this);
      $(".boxtab").addClass("hide");
      $(".boxtab").eq(num).removeClass("hide");
      $("#tabArea li").removeClass("select");
      $(this).addClass("select");
    });
  });