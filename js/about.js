$(function () {
  /* txt */
  $('#txtani').simplyScroll({
    speed: 100,
    // direction: 'backwards',
    pauseOnHover: false,
    frameRate: 10, //기본값이 24인데 10으로 줄임
  });
  $('.nav-tabs .tab').click(function () {
    $('.nav-tabs .tab').removeClass('active')
    $(this).addClass('active');
    let i = $(this).index();
    $('.nav-container .bg').css('left', i * (270));
  });
});