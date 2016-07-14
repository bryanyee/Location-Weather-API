# Location-Weather-API
This site uses multiple APIs to provide location and weather data to the user.


# APIs
1) [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)<br>
Provides an interface to use the user's location.<br>
2) [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/)<br>
Provides an interface to deploy a custom map. Requires API key<br>
3) [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro)<br>
Provides geocoding and reverse geocoding services. Requires API key<br>
4) [Forecast.io API](https://developer.forecast.io/)<br>
Provides current, forecasted and historical weather data. Requires API key

# Before using this code:
1) Several of the APIs require an API key. Refer to the documentation for each API to obtain the required keys.<br>
2) As of April 2016, ["Chrome no longer supports obtaining the user’s location using the HTML5 Geolocation API from pages delivered by non-secure connections"](https://developers.google.com/web/updates/2016/04/geolocation-on-secure-contexts-only?hl=en). The Geolocation API call must be served from a secure context such as HTTPS (or localhost).