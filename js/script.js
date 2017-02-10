var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();

function homePageLoading() {
    url = 'apiUrl';
    elementID = 'idDeVotreElementHtml';
    fonctionRequeteApi(url, elementID);

    ...
}
var isAddress = /^[0-9a-zA-Z]{34}$/.test(data);

function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&').replace(//g, '>');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

output(str);
output(syntaxHighlight(str));
data = `<a href="javascript:appelFonction('${data}')">"${data}"</a>`

var block_number;
var displayed_blocks_number = 10;

$(document).ready(function(){
	$.ajax({
		url: 		"http://bitcoin.mubiz.com/info",
		dataType:	"json",
		contentType: "application/json; charset=utf-8",
		type:  		"GET",
		//timeout:	"5000",
		async:		false,
		
		success: function(data){
			$('#bitcoin_block_number').append(data.blocks);
			$('#bitcoin_network_hash').append(data.difficulty);
			
			block_number=data.blocks;
		},
		
		error: function(xhr, status, err){
			$('#bitcoin_block_number').append("N/A");
			$('#bitcoin_network_hash').append("N/A");
		}
	});
	
	// TODO - Faire une seule fois l'appel du hash, puis utiliser la valeur "previous_block_hash" de chaque bloc !
	// Permet d'éviter un appel à block_index par bloc !
	
	
	for(var i=0 ; i < displayed_blocks_number ; i++){
		var block_index = block_number-i;
		
		$.ajax({
			url: 		"http://bitcoin.mubiz.com/block_index/"+block_index+"/",
			dataType:	"json",
			contentType: "application/json; charset=utf-8",
			type:  		"GET",
			//timeout:	"5000",
			async:		false,
			
			success: function(data_index){
				// Si récupération du hash, alors appel des données des données du bloc
				$.ajax({
					url: 		"http://bitcoin.mubiz.com/block_hash/"+data_index.block_hash+"/",
					dataType:	"json",
					contentType: "application/json; charset=utf-8",
					type:  		"GET",
					//timeout:	"5000",
					async:		false,
					
					success: function(data_hash){
						var delta_time=Date.now()-parseInt(data_hash.time)*1000;
						
						$('#block_list').append(	'<tr class="block_summary" id="'+block_index+'">'
														+'<td><a href="http://mubiz.com/bitcoin/block/'+block_index+'/">'+block_index+'</a></td>'
														+'<td>'+data_index.block_hash+'</td>'
														+'<td>'+unixtime_to_date(data_hash.time)+'<br/>('+unixtime_to_delay(delta_time)+' ago)</td>'
														+'<td>'+number_format((data_hash.size/1024),2,'.',' ')+' Ko</td>'
													+'</tr>');
					},
				
					error: function(xhr, status, err){
						//$('#block_list').append("N/A");
					}
				});
			},
			
			error: function(xhr, status, err){
				//$('#block_list').append("N/A");
			}
		});
		
	}
});
