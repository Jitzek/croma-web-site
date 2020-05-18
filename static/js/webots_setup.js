/* global webots: false */

var view = null;
var ipInput = null;
var portInput = null;
var connectButton = null;
var mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (mobileDevice) {
  var head = document.getElementsByTagName('head')[0];
  var jqueryTouch = document.createElement('script');
  jqueryTouch.setAttribute('type', 'text/javascript');
  jqueryTouch.setAttribute('src', 'https://www.cyberbotics.com/jquery-ui/1.11.4/jquery.ui.touch-punch.min.js');
  head.appendChild(jqueryTouch);

  var mobileCss = document.createElement('link');
  mobileCss.setAttribute('rel', 'stylesheet');
  mobileCss.setAttribute('type', 'text/css');
  mobileCss.setAttribute('href', 'https://www.cyberbotics.com/wwi/R2020a/wwi_mobile.css');
  head.appendChild(mobileCss);
}

function init() {
  ipInput = document.getElementById('IPInput');
  portInput = document.getElementById('PortInput');
  connectButton = document.getElementById('ConnectButton');
  /* Requires https://www.cyberbotics.com/jquery-ui-layout/1.4.4/jquery.layout.js */
  /*$('body').layout({
    center__maskContents: true,
    south__size: 128,
    north__resizable: false
  });*/
}

function connect() {
  var playerDiv = document.getElementById('playerDiv');
  playerDiv.style.height = "750px";
  view = new webots.View(playerDiv, mobileDevice);
  view.broadcast = true;
  console.log('ws://' + ipInput.value + ':' + portInput.value);
  view.open('ws://' + ipInput.value + ':' + portInput.value);

  connectButton.value = 'Disconnect';
  connectButton.onclick = disconnect;
  ipInput.disabled = true;
  portInput.disabled = true;

  // FIXME, make the webotsProgress div remove itself reliably
  if (document.getElementById('webotsProgress')) {
    document.getElementById('webotsProgress').style.display = "none";
  }
  connect_socket('ws://localhost:4444');
}

function onerror() {
  // OnError Logic
  displayMSG('Connection failed <br> No WeBots Simulation running', '#c70000');
};

function disconnect() {
  playerDiv = document.getElementById('playerDiv');
  playerDiv.style.height = "0px";
  view.close();
  view = null;
  var playerDiv = document.getElementById('playerDiv');
  playerDiv.innerHTML = null;
  connectButton.value = 'Connect';
  connectButton.onclick = connect;
  ipInput.disabled = false;
  portInput.disabled = false;
  disconnect_socket();
}

window.addEventListener('load', init, false);
