//= require jquery
//= require jquery.cookie

$(document).ready(function() {
  if !$.cookie('cookie_eu_consented') {
    $('a').click(function(e) {
      $.cookie('cookie_eu_consented', 'true', { path: '/'});
      $('.cookies-eu').remove();
    });
  }
});