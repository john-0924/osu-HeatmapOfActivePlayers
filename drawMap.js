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


// Draw the countries based on a color gradient scaled to number of active users
function drawRegionsMap() 
{
  var data = google.visualization.arrayToDataTable([
        ['Country', 'Active Players'],
        ['United States', 1041661],
		['Russian Federation', 631844],
		['Germany', 382131],
		['Japan', 438317],
		['Poland', 306408],
		['France', 334427],
		['China', 438178],
		['Canada', 216183],
		['South Korea', 293391],
		['Brazil', 395077],
		['Taiwan', 350697],
		['United Kingdom', 176566],
		['Australia', 128979],
		['Chile', 195641],
		['Indonesia', 206514],
		['Ukraine', 118699],
		['Finland', 59602],
		['Argentina', 127640],
		['Philippines', 118981],
		['Sweden', 76819],
		['Mexico', 145646],
		['Netherlands', 68709],
		['Spain', 140757],
		['Singapore', 56787],
		['Hong Kong', 105429],
		['Italy', 98492],
		['Malaysia', 76401],
		['Vietnam', 79197],
		['Thailand', 118927],
		['Norway', 41763],
		['Czech Republic', 59208],
		['Austria', 35421],
		['Turkey', 91664],
		['Belgium', 41034],
		['Belarus', 38184],
		['Portugal', 43417],
		['Denmark', 35292],
		['Lithuania', 23597],
		['New Zealand', 26761],
		['Hungary', 31397],
		['Romania', 28435],
		['Colombia', 48354],
		['Peru', 42378],
		['Switzerland', 23252],
		['Kazakhstan', 26035],
		['Venezuela', 35935],
		['Israel', 18657],
		['Estonia', 13137],
		['Greece', 20407],
		['Bulgaria', 16001],
		['Slovakia', 20177],
		['Latvia', 12018],
		['Serbia', 12455],
		['Uruguay', 14684],
		['Croatia', 9992],
		['Ireland', 9040],
		['South Africa', 11034],
		['Saudi Arabia', 10948],
		['Ecuador', 13399],
		['Slovenia', 6772],
		['United Arab Emirates', 7019],
		['Costa Rica', 9452],
		['Morocco', 7475],
		['Macau', 7856],
		['India', 4796],
		['Dominican Republic', 6278],
		['Brunei', 3391],
		['Moldova', 4891],
		['Panama', 5409],
		['Mongolia', 4170],
		['Egypt', 4460],
		['Reunion', 3061],
		['El Salvador', 4365],
		['Tunisia', 4192],
		['Algeria', 3571],
		['Kuwait', 2342],
		['Paraguay', 2983],
		['Puerto Rico', 3939],
		['Bolivia', 4025],
		['Luxembourg', 2116],
		['Qatar', 1829],
		['Guatemala', 3900],
		['Uzbekistan', 2426],
		['Macedonia, the Former Yugoslav Republic of', 1822],
		['Iceland', 2044],
		['Kyrgyzstan', 1723],
		['Bosnia and Herzegovina', 2351],
		['Georgia', 1700],
		['Honduras', 2393],
		['Trinidad and Tobago', 1557],
		['Jordan', 1448],
		['Nicaragua', 1922],
		['Cyprus', 1531],
		['Guam', 1055],
		['French Polynesia', 954],
		['Pakistan', 1187],
		['Maldives', 556],
		['Bangladesh', 849],
		['New Caledonia', 751],
		['Guadeloupe', 818],
		['Bahrain', 999],
		['Cambodia', 916],
		['Albania', 853],
		['Malta', 1060],
		['Azerbaijan', 819],
		['Martinique', 698],
		['Jamaica', 761],
		['Armenia', 759],
		['Lebanon', 711],
		['Iran, Islamic Republic of', 881],
		['Iraq', 794],
		['Nepal', 450],
		['Myanmar', 515],
		['Montenegro', 498],
		['Faroe Islands', 385],
		['Mauritius', 486],
		['Oman', 534],
		['Lao People\'s Democratic Republic', 523],
		['Palestinian Territory Occupied', 321],
		['Barbados', 368],
		['Isle of Man', 270],
		['French Guiana', 416],
		['Jersey', 232],
		['Sri Lanka', 302],
		['Northern Mariana Islands', 266],
		['Syrian Arab Republic', 324],
		['Liechtenstein', 195],
		['Guernsey', 220],
		['Europe', 572],
		['Suriname', 209],
		['Aland Islands', 191],
		['Sudan', 182],
		['Aruba', 296],
		['Bermuda', 103],
		['Libya', 231],
		['Bahamas', 316],
		['Belize', 209],
		['Greenland', 75],
		['Gibraltar', 94],
		['Guyana', 120],
		['Andorra', 208],
		['Saint Lucia', 112],
		['Kenya', 121],
		['Saint Pierre and Miquelon', 62],
		['Virgin Islands, U.S.', 83],
		['Antigua and Barbuda', 74],
		['Madagascar', 179],
		['Cote D\'Ivoire', 107],
		['Tajikistan', 61],
		['Senegal', 95]
        ]);

  var options = {};

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}

// We attempted to use varoius methods of obtaining the html directly from the live page.
// However, since we are running the javscript from a mondern web browser, we are locked to our
// current domain.  In a future implementation, we would like to request live information via
// a library like 