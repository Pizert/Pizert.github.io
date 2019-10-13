$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

$('.page-header__button').click(function() {
    var targetOffset = $('.services__list').offset().top-225;
    $('html,body').animate({scrollTop: targetOffset}, 1200);
  });