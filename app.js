let scrollBtn = $(".scroll-top");

scrollBtn.hide(100);
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    scrollBtn.show(300);
  } else {
    scrollBtn.hide(300);
  }
});
scrollBtn.click(function () {
  $("html").animate({ scrollTop: 0 }, 1000);
});
