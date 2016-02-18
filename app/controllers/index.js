function doClick(e) {
    alert($.label.text);
}

$.index.open();

var url = "http://www.tvazteca.com/historico/index/more/format/json?program=272&string=&category=0&type=2&page=-2&numItems=100&imgW=65&imgH=65";
var json; 

var datos = [];

var xhr = Ti.Network.createHTTPClient({
	onload: function(e)	{
		json = JSON.parse(this.responseText);
		//alert(json);
		Ti.API.info(this.responseText);
		//JSON.stringify(json);
		//alert(JSO.stringify(json));
	
	//Ciclo for para la creacion de los segmentos
		for(var i=0; i<json.items.length; i++){
				
				//creacion de datos
				var row = Ti.UI.createTableViewRow({
					
					height:100,
				    width: 320, 
				    
				});
				
				//label que va a llevar cada seccion		
				var label = Ti.UI.createLabel({
							color: 'black',
							right: 20,
							top: 10,
							text: json.items[i].title,
							width: 200,
				});	
				
				//imagen que va a llevar cada seccion		
				var imagen = Ti.UI.createImageView({
							left:10,
							borderColor: 'black',
							borderRadius: 2,
							image: json.items[i].img, 
							height: 60,
							width: 60,
							
				});
				//envio de label e imagen a mi fila y push de datos hacia mi fila
				row.add(label);
	         	row.add(imagen);
	         	datos.push(row);
		};
		//envio de datos a mi tableview
		$.tabla.setData(datos);
	},
	
	onerror: function(e) {
		Ti.API.info(e.error);
	},
	
	timeout: 5000
});

xhr.open('GET', url);
xhr.send();


