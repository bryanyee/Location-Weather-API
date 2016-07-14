function getInfo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap);
    } else {
        $("#coordinatesInfo").html("Geolocation is not supported by this browser.");
    }
}

function showMap(position) {
    var latitude = Number(position.coords.latitude.toFixed(6));
    var longitude = Number(position.coords.longitude.toFixed(6));
    $("#coordinatesInfo").html("Latitude: " + latitude + "<br>Longitude: " + longitude + "<br><br>"); 

    function initMap() {
      // Create a map object and specify the DOM element for display.
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        scrollwheel: false,
        zoom: 10
      });
    }

    initMap();
}