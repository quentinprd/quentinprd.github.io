$(document).ready(function() {
	$.ajax({
		url : "https://bitcoin.mubiz.com/info",
		dataType : "json",
	
		type : "GET",
		timeout: "5000",
		async : true,
	
		success : function(data) {
			console.log(data);
			$('#bitcoin_block_number').append(data.blocks);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
           
		}
	});
});




$(document).ready(function() {
	$.ajax({
		url : "http://blockchain.info/fr/ticker?cors=true",
		dataType : "json",
		
		type : "GET",
		timeout: "5000",
		async : true,

		success : function(data) {
			$('#bitcoin_usd_price').append(data.EUR["15m"]+' '+data.EUR.symbol);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_usd_price').append(err+" N/A");
		}
	});
});





$(document).ready(function() {
	$.ajax({
		url : "https://api.blockchain.info/stats?cors=true",
		dataType : "json",
		type : "GET",
		timeout: "5000",
		async : true,

		success : function(data) {
			$('#bitcoin_blocks').append(data.minutes_between_blocks+" min");
			$('#bitcoin_network_hash').append(data.difficulty);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_blocks').append(err+" N/A");
			$('#bitcoin_network_hash').append(err+" N/A");
		}
	});


	
});


function titreHover(){
		$('#titre').text("INFO - Blockchain");
	}

function titreNoHover(){

		$('#titre').text("Bitcoin");
	}
