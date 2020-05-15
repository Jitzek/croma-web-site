var player = document.getElementById('playerDiv');

function displayMSG( msg, color, code=null) {
    player.innerHTML = '';
    if (code) {player.innerHTML =+ `<h2>${code ? code : ''}</h2><br>`; }
    player.innerHTML +=
        `<p style="color: ${color}">${msg}</p>`;
}