$$(document).on('DOMContentLoaded', function(){
	$.ajax({
		url: 'http://appsenderos.sanjuan.gov.ar/api/Guias/',
		cache: false,
		type: 'get',
		dataType: "json",
		success: function (response) {    
			FillGuiasData(response.Guias)
		}
	});   
});

function FillGuiasData(data){
	var tmp_guias = '';
	tmp_guias = '<ul>';
	for(var i in data){
		tmp_guias = tmp_guias + 
		'<li>' + 
			'<a href="#" class="item-content">' + 
				'<div class="item-media"><i class="icon f7-icons">phone_round_fill</i></div>' + 
				'<div class="item-inner">' + 
					'<div class="item-title">' + 
						'<div class="item-header guianombre">'+ data[i].Nombre +'</div>' + 
						'<span class="phone guianumero">' + data[i].Telefono + '</span>' + 
					'</div>' + 
				'</div>' + 
			'</a>' + 
		'</li>';
	}
	tmp_guias = tmp_guias + '</ul>';	
	console.log(tmp_guias);	
	$$("#ListGuias").append(tmp_guias);
}