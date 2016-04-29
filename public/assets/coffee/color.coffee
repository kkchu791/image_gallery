COLORS_TO_HEX = 
  '#green': '00CC00'
  '#red': 'CC0000'
  '#yellow': 'FFFF00'
  '#cyan': '03C0C6'
  '#blue': '0000CC'
  '#purple': '762CA7'
  '#pink': 'FF98BF'
  '#white': 'FFFFFF'
  '#orange': 'FB940B'
  '#brown': '885418'

filterByColor = (color) ->
  $('#images').empty()
  $.ajax
    type: 'GET'
    url: 'https://demo.tandemvault.com/api/v1/assets?api_key=de71634ae846de6ddc729dc6828c0981231743e721a5a416d0e47bfb3e4dc657&color=' + COLORS_TO_HEX[color]
    success: (data) ->
      $.each data, (i, data) ->
        $images.append Mustache.render(galleryTemplate, data)
        return
      return
  return

$('#green').on 'click', ->
  filterByColor '#green'
  return
$('#red').on 'click', ->
  filterByColor '#red'
  return
$('#yellow').on 'click', ->
  filterByColor '#yellow'
  return
$('#cyan').on 'click', ->
  filterByColor '#cyan'
  return
$('#blue').on 'click', ->
  filterByColor '#blue'
  return
$('#purple').on 'click', ->
  filterByColor '#purple'
  return
$('#pink').on 'click', ->
  filterByColor '#pink'
  return
$('#white').on 'click', ->
  filterByColor '#white'
  return
$('#orange').on 'click', ->
  filterByColor '#orange'
  return
$('#brown').on 'click', ->
  filterByColor '#brown'
  return
