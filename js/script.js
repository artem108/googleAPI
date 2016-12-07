function GoogleCallback(jqueryObj, data) {
  console.log(data, 'data');
}
(function() {
  $.ajax({
        url:'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=AIzaSyCN13FKhms1ozL-hO3InUkJmNYQg8dzJWM=' +'test'+'&callback=GoogleCallback&context=?',
        dataType: 'jsonp'
});
});
