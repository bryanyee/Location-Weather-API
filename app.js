function getLocationInfo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentCoordinates);
    } else {
        $("#coordinatesInfo").html("Geolocation is not supported by this browser.");
    }
}

function getCurrentCoordinates(position){
    var latitude = Number(position.coords.latitude.toFixed(6));
    var longitude = Number(position.coords.longitude.toFixed(6));

    showMap(latitude,longitude);
}

function showMap(latitude, longitude) {
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

    getWeatherData(latitude, longitude);
}

function getWeatherData(latitude, longitude){
    var forecastURL = "https://api.forecast.io/forecast/<INSERT YOUR API KEY>/" + latitude + "," + longitude; 
    
    var temp = "<div class='large'>", 
        summary = "Summary: ", 
        precipitation = "Precipitation: ", 
        humidity = "Humidity: ";

    $.ajax({
        url: forecastURL,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: appendWeatherData,
        error: function(e) {
           console.log(e.message);
        }
    });

    function appendWeatherData(response){
        console.log(response);

        temp += Math.round(response.currently.temperature);
        summary += response.currently.icon;
        precipitation += response.currently.precipProbability;
        humidity += response.currently.humidity;

        $("#weatherInfo").append(temp + "&#176;F</div><br>")
                        .append(summary + "<br>")
                        .append(precipitation + "<br>")
                        .append(humidity + "<br>");
    }
}

function chooseLocation(){
    //use geocoding API to retrieve coordinates of the specified location
}