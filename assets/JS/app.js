var apiKey = "664e215dd5a34926b033d389481d8095";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=";
searchTerm = "india";
var x = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + searchTerm;
console.log(x);
// numResults = 5;

$.ajax({
  url: x,
  method: 'GET',
}).done(function(result) {
	var numResults = $('.numResults').attr('value');
  console.log(result);
  for (var i=0; i<numResults; i++) {
  console.log(result.response.docs[i].headline.main);
}
}).fail(function(err) {
  throw err;
});