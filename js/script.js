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

{
    "hash160": "45767f9638b28ae5ad86062879c024f04b3e7c90",
    "address": "17LHaecYMc9682FSG911f2Vk574NmUKUWR",
    "n_tx": 1,
    "total_received": 5500,
    "total_sent": 0,
    "final_balance": 5500,
    "txs": [
        {
            "ver": 1,
            "inputs": [
                {
                    "sequence": 4294967295,
                    "prev_out": {
                        "spent": true,
                        "tx_index": 155538923,
                        "type": 0,
                        "addr": "1L9qgkHGqR6eY4kBVBvJHiL8d3iuY3Py9P",
                        "value": 26500,
                        "n": 1,
                        "script": "76a914d2165ba6998876027eb72af07b3b44bba9a2a1c488ac"
                    },
                    "script": "483045022100ab2ffab61590b0913618b32c691036bdb55782e0a3178bb0b04291f2b55529a10220394ea29e0dd9f340fc3af8ae9c348ec98c1652125855f0c81f1f4307789d32dc012103bd7aee5a9d2efa57b473d07e2f5985f67b43adf85b309dabcedb8230bad7cfee"
                },
                {
                    "sequence": 4294967295,
                    "prev_out": {
                        "spent": true,
                        "tx_index": 155525630,
                        "type": 0,
                        "addr": "1L9qgkHGqR6eY4kBVBvJHiL8d3iuY3Py9P",
                        "value": 3211100,
                        "n": 1,
                        "script": "76a914d2165ba6998876027eb72af07b3b44bba9a2a1c488ac"
                    },
                    "script": "48304502210096a7c3d7d65c94fe5bbf13ff23d7a023b5c77eabb53a737057a21ddfbd06c6870220707c3eef2ae6bfe7a90a6cd8ed1ce210c9f2053a07cbd6e0eb14c5222d627b3f012103bd7aee5a9d2efa57b473d07e2f5985f67b43adf85b309dabcedb8230bad7cfee"
                }
            ],
            "block_height": 416758,
            "relayed_by": "192.254.76.218",
            "out": [
                {
                    "spent": false,
                    "tx_index": 155542614,
                    "type": 0,
                    "value": 0,
                    "n": 0,
                    "script": "6a2469643e3e58363d3b482857f4caee7589cf2a5cd3b644c7e819197cfc961d346421e48ac2"
                },
                {
                    "spent": false,
                    "tx_index": 155542614,
                    "type": 0,
                    "addr": "17LHaecYMc9682FSG911f2Vk574NmUKUWR",
                    "value": 5500,
                    "n": 1,
                    "script": "76a91445767f9638b28ae5ad86062879c024f04b3e7c9088ac"
                },
                {
                    "spent": true,
                    "tx_index": 155542614,
                    "type": 0,
                    "addr": "1L9qgkHGqR6eY4kBVBvJHiL8d3iuY3Py9P",
                    "value": 3200100,
                    "n": 2,
                    "script": "76a914d2165ba6998876027eb72af07b3b44bba9a2a1c488ac"
                }
            ],
            "lock_time": 0,
            "result": 0,
            "size": 421,
            "time": 1466193304,
            "tx_index": 155542614,
            "vin_sz": 2,
            "hash": "259fe258a88e22b79d00b19fb479f94c40f7ec6b8c6c45d31a41ba1d265171c3",
            "vout_sz": 3
        }
    ]
}
