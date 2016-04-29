$('.accordion-panel').slideUp()
$('.collapse-all').on 'click', ->
  $('.accordion-panel').slideUp()
  return
$('.expand-all').on 'click', ->
  $('.accordion-panel').slideDown()
  return
$('.accordion').on 'click', '.accordion-control', (e) ->
  e.preventDefault()
  $(this).next('.accordion-panel').not(':animated').slideToggle()
  return