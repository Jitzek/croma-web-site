function global_include() {
    document.write(`
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="/static/favicon.ico">
        <link rel="stylesheet" href="/static/css/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/css/icons.css" />
        <script src="/static/js/jquery/jquery-3.5.1.min.js"></script>
        <script src="/static/js/bootstrap/bootstrap.min.js"></script>
    `);
}

function navbar_include() {
    document.write(`
        <link rel="stylesheet" href="/static/css/NavBar.css">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/home.html">
                <img id="logo" src="/static/imgs/officieel-logo.png" alt="Croma logo">
            </a>
            <button class="navbar-toggler btn-hamburger" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="hamburger-menu"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav nav-center">
                    <a class="nav-item nav-link active" id="active" href="/home.html">Home<span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/about.html">Over ons</a>
                    <a class="nav-item nav-link" href="/metingen.html">Metingen</a>
                    <a class="nav-item nav-link" href="/live.html">Live</a>
                    <a class="nav-item nav-link" href="/updates.html">Updates</a>
                    <a class="nav-item nav-link" href="/contact.html">Contact</a>
                </div>
            </div>
        </nav>
    `);
}

function stream_include() {
    document.write(`
        <link rel="stylesheet" href="/static/css/Live.css" />
        <link type="text/css" rel="stylesheet" href='https://www.cyberbotics.com/wwi/R2020a/wwi.css' />
        <script src='https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'
            integrity='sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=' crossorigin='anonymous'></script>
        <script src='https://www.cyberbotics.com/jquery-dialogextend/2.0.4/jquery.dialogextend.min.js'></script>
        <script src='https://cdn.jsdelivr.net/ace/1.2.6/min/ace.js'></script>
        <script src="https://www.cyberbotics.com/wwi/R2020a/webots.min.js"></script>
        <script src="/static/js/webots_setup.js"></script>

        <div style="padding-left:10px">
            <p>
                <input hidden id="IPInput" type="text" value="localhost" />
                <input hidden id="PortInput" type="text" value="2222" />
                <input id="ConnectButton" type="button" value="Connect" onclick="connect()" />
            </p>
        </div>
        <div id="playerDiv"></div>
    `);
}