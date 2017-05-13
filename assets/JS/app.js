var apiKey = "664e215dd5a34926b033d389481d8095"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$.ajax({
  url: queryURL,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});