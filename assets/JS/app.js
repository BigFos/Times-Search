var apiKey = "35e7b53551b84d66a5645c1dbef40c72"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$.ajax({
  url: queryURL,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});