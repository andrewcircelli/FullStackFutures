var unirest = require("unirest");

var req = unirest("GET", "https://university-college-list-and-rankings.p.rapidapi.com/api/top-universities/northamerica");

req.headers({
	"x-rapidapi-key": "09d06cecffmsh87ca121083d57d0p1ebd57jsn0be05f50ffbf",
	"x-rapidapi-host": "university-college-list-and-rankings.p.rapidapi.com",
	"useQueryString": true
});

console.log("API response check")
req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});