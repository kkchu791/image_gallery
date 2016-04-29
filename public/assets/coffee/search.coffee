$('#search').on 'keyup', ->
  keyword = $(this).val()
  $('#images').empty()
  $.ajax
    type: 'GET'
    url: 'https://demo.tandemvault.com/api/v1/assets?api_key=de71634ae846de6ddc729dc6828c0981231743e721a5a416d0e47bfb3e4dc657&q=' + keyword
    success: (data) ->
      $.each data, (i, data) ->
        $images.append Mustache.render(galleryTemplate, data)
        return
      return
  return