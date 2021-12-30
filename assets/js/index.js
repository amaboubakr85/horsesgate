$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  rtl: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
})

$('.months ul li').on('click', function (e) {
  e.preventDefault()
  $(this).addClass('active').siblings().removeClass('active')

  let cat = $(this).data('class')
  $('.calender-events ul li').show()
  $('.calender-events ul li')
    .not('.' + cat)
    .hide()
})
