const WEBOTS_IP = '192.168.0.118';
const WEBOTS_PORT = 2222;
const SOCKET_IP = 'localhost';
const SOCKET_PORT = 4444;

function global_include() {
    document.write(`
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="./static/favicon.ico">
        <link rel="stylesheet" href="./static/css/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="./static/css/icons.css" />
        <link rel="stylesheet" href="./static/css/global.css" />
        <script src="./static/js/jquery/jquery-3.5.1.min.js"></script>
        <script src="./static/js/bootstrap/bootstrap.min.js"></script>
        <script src="./static/js/socket/ping.js"></script>
        <script>
            document.addEventListener("DOMContentLoaded", function (event) {
                ping('${WEBOTS_IP}', ${WEBOTS_PORT}, function() {
                    document.getElementsByClassName("live-tab")[0].innerHTML += '<span class="live-dot live-dot-inner"></span><span class="live-dot live-dot-outer"></span>';
                });
            });
        </script>
    `);
}

function navbar_include(page = "") {
    /**
     * [0] = Name of HTML file, doubles as class name ([0]-tab)
     * [1] = Display name for Navbar, doubles as Active identifier
     */
    const HOME = ['home', 'Home'];
    const ABOUT = ['about', 'About'];
    const LIVE = ['live', 'Live'];
    const UPDATES = ['updates', 'Updates'];
    const CONTACT = ['contact', 'Contact'];
    var const_arr = [HOME, ABOUT, LIVE, UPDATES, CONTACT];
    document.write(`
        <link rel="stylesheet" href="./static/css/NavBar.css">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="./home.html">
                <img id="logo" src="./static/imgs/officieel-logo.png" alt="Croma logo">
            </a>
            <button class="navbar-toggler btn-hamburger" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="hamburger-menu"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav nav-center">`);
                    const_arr.forEach(element => {
                        var id = page == element[1] ? "active" : "";
                        document.write(`<a class="nav-item nav-link ${element[0]}-tab" id="${id}" href="./${element[0]}.html">${element[1]}</a>`);
                    });
                    document.write(`
                </div>
            </div>
        </nav>
    `);
}

function stream_include() {
    document.write(`
        <link type="text/css" rel="stylesheet" href='https://www.cyberbotics.com/wwi/R2020a/wwi.css' />
        <script src='https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'
            integrity='sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=' crossorigin='anonymous'></script>
        <script src='https://www.cyberbotics.com/jquery-dialogextend/2.0.4/jquery.dialogextend.min.js'></script>
        <script src='https://cdn.jsdelivr.net/ace/1.2.6/min/ace.js'></script>
        <script src="https://www.cyberbotics.com/wwi/R2020a/webots.min.js"></script>
        <script src="./static/js/webots_setup.js"></script>
        <link rel="stylesheet" href="./static/css/Live.css" />

        <div style="padding-left:10px">
            <p>
                <input hidden id="IPInput" type="text" value="${WEBOTS_IP}" />
                <input hidden id="PortInput" type="text" value="${WEBOTS_PORT}" />
                <input id="ConnectButton" type="button" value="Connect" onclick="connect()" />
            </p>
        </div>
        <div id="msgDiv"></div>
        <div id="playerDiv"></div>
    `);
}