
webSocket = new WebSocket("wss://gcj1z4m8ta.execute-api.us-west-1.amazonaws.com/depolyment/");

webSocket.onmessage = (event) => {
    document.getElementById('count').innerHTML = event['data']
}
