function initMap() {
    // Coordonnées géographiques exactes de l'IUT Montpellier
    var myLatLng = {lat: 43.6353393, lng: 3.8480947};  // Coordonnées de l'IUT de Montpellier

    // Création de la carte centrée sur l'IUT
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,  // Niveau de zoom proche
        center: myLatLng,  // Centrage de la carte sur l'IUT
        mapTypeId: google.maps.MapTypeId.ROADMAP  // Type de carte : classique
    });

    // Création du marker (curseur) à la position exacte de l'IUT
    var marker = new google.maps.Marker({
        position: myLatLng,  // Position exacte du marker
        map: map,
        title: 'IUT Montpellier'  // Titre affiché lors du survol du marker
    });

    // Optionnel : Infobulle avec plus d'infos sur l'IUT
    var infowindow = new google.maps.InfoWindow({
        content: '<h3>IUT Montpellier</h3><p>Voici l\'emplacement de l\'IUT de Montpellier.</p>'
    });

    // Ouvrir l'infobulle lors du clic sur le marker
    marker.addListener('click', function() {
        infowindow.open(map, marker);  // Ouvrir l'infobulle au clic
    });
}
