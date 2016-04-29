var COLORS_TO_HEX = {
  '#green': '00CC00',
  '#red': 'CC0000',
  '#yellow': 'FFFF00',
  '#cyan': '03C0C6',
  '#blue': '0000CC',
  '#purple': '762CA7',
  '#pink': 'FF98BF',
  '#white': 'FFFFFF',
  '#orange': 'FB940B',
  '#brown': '885418'
}

$('#green').on('click', function() {
  filterByColor('#green')
})

$('#red').on('click', function() {
  filterByColor('#red')
})

$('#yellow').on('click', function() {
  filterByColor('#yellow')
})

$('#cyan').on('click', function() {
  filterByColor('#cyan')
})

$('#blue').on('click', function() {
  filterByColor('#blue')
})

$('#purple').on('click', function() {
   filterByColor('#purple')
})
$('#pink').on('click', function() {
   filterByColor('#pink')
})

$('#white').on('click', function() {
   filterByColor('#white')
})

$('#orange').on('click', function() {
   filterByColor('#orange')
})

$('#brown').on('click', function() {
   filterByColor('#brown')
})

function filterByColor(color) {
  $("#images").empty()
  $.ajax({
    type: 'GET',
    url: "https://demo.tandemvault.com/api/v1/assets?api_key=de71634ae846de6ddc729dc6828c0981231743e721a5a416d0e47bfb3e4dc657&color=" + COLORS_TO_HEX[color],
    success: function(data) {
      $.each(data, function(i, data){
        $images.append(Mustache.render(galleryTemplate, data))
      })
    }
  })
}
