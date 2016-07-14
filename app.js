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

    getWeatherData(latitude, longitude);
}

function getWeatherData(latitude, longitude){
    var forecastURL = "https://api.forecast.io/forecast/0f8520f4c584450445574a286536215b/" + latitude + "," + longitude; 
    
    var temp = "Temperature: ", 
        summary = "Summary: ", 
        precipitation = "Precipitation: ", 
        humidity = "Humidity: "; //location, time

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
        temp += response.currently.temperature;
        summary += response.currently.icon;
        // $("#current_temp").html(Math.round(json.currently.temperature)+"&#176;F");
        // $("#current_summary").html(json.currently.summary);

        $("#weatherInfo").append(temp + "<br>")
                        .append(summary);
    }
}