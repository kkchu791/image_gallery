$('.nav-toggle-btn').on 'click', (e) ->
  $('body').toggleClass 'active-nav'
  e.preventDefault()
  return