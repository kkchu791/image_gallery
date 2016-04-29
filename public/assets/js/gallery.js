var galleryTemplate =
  "<a href='#{{id}}'>" +
    "<div class='col-xs-3 outer-layer'>" + 
      "<div class='img'>" +
        "<img class='grid-image' src='{{grid_url}}'>" +
        "<span class='fa fa-picture-o'> JPG</span>" +
      "</div>" +
    "</div>" + 
  "</a>" +

  "<div class='lightbox' id='{{id}}'>" +
    "<div class='box'>" + 
      "<a class='close' href='#'>X</a>" +
      "<h4>Caption</h4>" +
      "<h6>{{to_s}}</h6>" +
      "<h4>Admin Rating</h4>" +
      "<h6>{{admin_rating}}</h6>" +
      "<div class='image'>" +
        "<img src='{{permalink_url}}'>" +
      "</div>" + 
    "</div>" +
  "</div>"

var $images = $('#images')

var currentPage = 1
loadImageData(currentPage)
$(window).scroll(function(){
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    currentPage += 1
    loadImageData(currentPage)
  }
})

function loadImageData() {
  $.ajax({
    type: 'GET',
    url: 'https://demo.tandemvault.com/api/v1/assets?api_key=de71634ae846de6ddc729dc6828c0981231743e721a5a416d0e47bfb3e4dc657',
    success: function(data) {
      $.each(data, function(i, image){
        $images.append(Mustache.render(galleryTemplate, image))
      })
    }
  })
}