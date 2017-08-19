onDeviceReady: function() {
  app.receivedEvent('deviceready');
},
  // Update DOM on a Received Event
receivedEvent: function(id) {
  var parentElement = document.getElementById(id);
  var listeningElement = parentElement.querySelector('.listening');
  var receivedElement = parentElement.querySelector('.received');

  listeningElement.setAttribute('style', 'display:none;');
  receivedElement.setAttribute('style', 'display:block;');

  console.log('Haviv Family ACE Received Event: ' + id);
}
