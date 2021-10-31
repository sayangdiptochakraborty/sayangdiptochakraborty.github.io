function initMap() {
    var rutaN = { lat: 6.2648627, lng: -75.566595 };

    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 16.1,
            center: rutaN,
            disableDefaultUI: true,
            styles: [{
                stylers: [{
                    saturation: -100
                }]
            }]
        });

    map.setOptions({ draggable: true, zoomControl: false, scrollwheel: true, disableDoubleClickZoom: true });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: rutaN, map: map});

    var infowindow = new google.maps.InfoWindow({
        content: 'Ruta N'
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}

