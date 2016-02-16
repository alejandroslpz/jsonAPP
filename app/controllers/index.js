function doClick(e) {
    alert($.label.text);
}

$.index.open();

var url = "http://www.tvazteca.com/historico/index/more/format/json?program=272&string=&category=0&type=2&page=-2&numItems=100&imgW=65&imgH=65";
var json; 

var xhr = Ti.Network.createHTTPClient({
	onload: function(e)	{
		json = JSON.parse(this.responseText);
		//alert(json);
		Ti.API.info(this.responseText);
		JSON.stringify(json);
		//alert(JSON.stringify(json));
	//Ciclo for para la creacion de los segmentos
	for(var i=0; i<json.items.length; i++){
			
			//creacion de datos
			var row = Ti.UI.createTableViewRow({
				
				datos:json.items[i],
			
			});
			
			//Donde se va a ver
			var view = Ti.UI.createView({
						
			});	
			
			//label que va a llevar cada seccion		
			var titulo = Ti.UI.createLabel({
						
			});	
			
			//imagen que va a llevar cada seccion		
			var imagen = Ti.UI.createImageView({
						
						
			});

	};
},
	
	onerror: function(e) {
		Ti.API.info(e.error);
	},
	
	timeout: 5000
});

xhr.open('GET', url);
xhr.send();

//$.tabla.setData(datos);
