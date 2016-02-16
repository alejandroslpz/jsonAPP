function doClick(e) {
    alert($.label.text);
}

$.index.open();

var url = "http://www.tvazteca.com/historico/index/more/format/json?program=272&string=&category=0&type=2&page=-2&numItems=100&imgW=65&imgH=65";
var json; 

var xhr = Ti.Network.createHTTPClient({
	onload: function(e)	{
		json = JSON.parse(this.responseText);
		Ti.API.info(this.responseText);
		JSON.stringify(json);
	},
	
	onerror: function(e) {
		Ti.API.info(e.error);
	},
	
	timeout: 5000
});

xhr.open('GET', url);
xhr.send();

for(var i=0,j=json.items.length; i<j; i++){
	var row = Ti.UI.
  datos:json.items[i];
};