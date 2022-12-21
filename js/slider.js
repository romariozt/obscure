// !Portfolio
$('.bxslider').bxSlider({
  mode: 'horizontal',
  controls: false,
  auto: true,
  pause: 5000,
  autoHover: true,
  hideControlOnEnd: false,
  pager: false,
  touchEnabled: true,
  infiniteLoop: true,
  controls: false,
  minSlides: 1,
  
});

$('.button--prev').click((e) => {
  e.preventDefault();
  bxslider.goToPrevSlide();
});

$('.button--next').click((e) => {
  e.preventDefault();
  bxslider.goToNextSlide();
});


// !Testimonial
$('.bxslider').bxSlider({
  mode: 'horizontal',
  controls: false,
  auto: true,
  pause: 5000,
  autoHover: true,
  hideControlOnEnd: true,
  pager: false,
  touchEnabled: true,
  infiniteLoop: true,
});

$('.button--prev').click((e) => {
  e.preventDefault();
  bxslider.goToPrevSlide();
});

$('.button--next').click((e) => {
  e.preventDefault();
  bxslider.goToNextSlide();
});