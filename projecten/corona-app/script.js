
function searchCountry() {

var provincie = document.getElementById("provincies").value;

fetch("https://covid-19-statistics.p.rapidapi.com/reports?region_province=" + provincie + "&iso=NLD", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
		"x-rapidapi-key": "5397231f14msh245c1383297c610p117943jsnb11fbbaf4b52"
	}
})
.then((response) => {
  //console.log(response)
  return response.json()
})
.then((data) => {
  // doe iets met de json data hier
  //var data = JSON.parse(this.response)
  document.getElementById("resultaat").innerHTML = "<div data-aos='fade-up' data-aos-duration='3000'>" +
  "Corona Gevallen: " + data.data[0].confirmed + "<br>" + " Herstellende: " + data.data[0].recovered + "<br>" +
  "Laatste Update: " + data.data[0].last_update + "</div>";

  console.log(data)
})
.catch((err) => {
  // Doe iets met de error hier
  console.log(err);
})
}