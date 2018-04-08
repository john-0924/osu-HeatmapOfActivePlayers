// Define the needed api (GeoChart) and api key
packages = {'packages':['geochart'],
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'}

// Load the chart and ???
google.charts.load('current', packages);
google.charts.setOnLoadCallback(drawRegionsMap);

// Use DOMParser to convert the html files into DOM (document) files that allow for searching by elements
var parser = new DOMParser();

// Access the saved html files from the osu! game website that contains information
// about each country (number of active players, and more statistics)
var rankings = [
	parser.parseFromString("countryPage1.html", "text/html"),
	parser.parseFromString("countryPage2.html", "text/html"),
	parser.parseFromString("countryPage3.html", "text/html"),
]
/*
window.onload = function(){
    var iframe = document.createElement('iframe');
    iframe.id = 'iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    iframe.src = "countryPage1.html";
    setTimeout(function(){
        var text = document.getElementById('iframe').contentDocument.body.firstChild.innerHTML;
        alert(text);
    }, 1000);*/

// Contains data about each country.  50 countries for each html
// ranking-page-table__user-link gets the country name
// ranking-page-table__column ranking-page-table__column--dimmed gets the country's statistics
var countryInfo = [
	rankings[0].getElementsByClassName('ranking-page-table__user-link'),
	rankings[0].getElementsByClassName('ranking-page-table__column ranking-page-table__column--dimmed'),
	rankings[1].getElementsByClassName('ranking-page-table__user-link'),
	rankings[1].getElementsByClassName('ranking-page-table__column ranking-page-table__column--dimmed'),
	rankings[2].getElementsByClassName('ranking-page-table__user-link'),
	rankings[2].getElementsByClassName('ranking-page-table__column ranking-page-table__column--dimmed')
]

// Select only the data about the number of active players per country and define loop variables
var activePlayers, i, j, k;

// i represents the countryInfo index for rankings
for (i = 0; i < 3; i++)
{
	// j represents the index within rankings[i] that contains the relevant data (number of active players)
	for (j = 0; j < 50; j++)
	{
		// the index for the active players ranges from 0 to 149, with i serving as the multiplier
		// The first array element is the name of the country
		// The second array element is the number of active players in that country (uses commas and suffixes)
		
		//activePlayers[i * 50 + j] = [(countryInfo[i*2][i * 50 + j]).innerText, (countryInfo[i*2+1][i * 50 + j]).innerText.split(',').join('')]
	}
}

// Define the array that will contain the data to pass to Google Charts
var mapData = [];
for(i = 1; i < 150; i++)
{
	if (i == 0)
		mapData[0] = ['Country', 'Popularity'];
	else
		mapData[i] = activePlayers[i-1];
}


/*
function testConnection(url)
{
	var xmlhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	   // Action to be performed when the document is read;
	   }
	}
	xmlhttp.onload = function() { alert("Connected!"); }
	xmlhttp.onerror = function() { alert("Not Connected"); }
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

testConnection("https://www.google.com/")

function actionListener()
{
	if (this.readyState == 4 && this.status == 200)
	{
		var obj = JSON.parse(this.responseXML);
		console.log(1);
	}
}
*/

/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = actionListener;
xmlhttp.addEventListener("load",  actionListener());
xmlhttp.responseType = "json";
xmlhttp.open("GET", "https://osu.ppy.sh/rankings/osu/country?page=1#jump-target");
xmlhttp.send(); 
*/


/*
function NameAFunctionName() {
        $.ajax({
          url: 'https://osu.ppy.sh/rankings/osu/country?page=1#jump-target',
          type: 'GET',
          dataType: 'document',
          headers: {
            //WRITE IF THEIR HAVE SOME HEADER REQUEST OR DATA
          },
          crossDomain: true,
          success: function (data, textStatus, xhr) {
            console.log(data);
          },
          error: function (xhr, textStatus, errorThrown) {
            console.log(errorThrown);
          }
        });
    } 
    NameAFunctionName();
*/

/*
var result;
function jsonparser()
{
	$.ajax({
  	type: "POST",
    url: "https://www.w3schools.com/js/js_json_parse.asp",
    dataType: "jsonp",
    success: function (xml) {
    	console.log(xml.Data[0]);
      result = xml.code;
    }
  })
}
*/

// Draw the countries based on a color gradient scaled to number of active users
function drawRegionsMap() 
{
  var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 100],
          ['France', 100],
          ['RU', 700],
          ['China', 500]
        ]);

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}