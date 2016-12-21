importScripts("./plus.js");

var t = 0;

onconnect = function(e) {
  var port = e.ports[0];

   port.addEventListener('message', function(e) {
	  t = plus(Number(e.data),t);
	  port.postMessage(t);
	});

    port.start();

}