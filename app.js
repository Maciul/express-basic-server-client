$(document).ready(function(){
  $.ajax({
    url: "http://localhost:3000/someanimal",
    dataType: 'jsonp',
    success: function (data) {
      console.log(data);
    }
  });
});
