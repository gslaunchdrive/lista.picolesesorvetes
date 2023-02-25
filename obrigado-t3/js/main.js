
$(document).ready(function () {

    let groupWhats = '';

    function loadConfigs() {
        $.get( "https://glcdn.githack.com/ddmlaunch/configs/-/raw/omestredosabor/obrigado.json",  function( data ) {
            var config = data[0];
            groupWhats = config.invitationLink;
            $('#whatsapp').attr("href", config.invitationLink);
        });
    }

    function redirectWhatsApp() {
        setTimeout(function () {
            window.location.href = groupWhats;
        }, 20000);
    }

    loadConfigs();
    redirectWhatsApp();
});