$('.accordion-panel').slideUp()

$('.collapse-all').on('click', function() {
  $('.accordion-panel').slideUp()
})

$('.expand-all').on('click', function() {
  $('.accordion-panel').slideDown()
})

$('.accordion').on('click', '.accordion-control', function(e){
  e.preventDefault();
  $(this)
    .next('.accordion-panel')
    .not(':animated')
    .slideToggle()
})

