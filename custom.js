if (Modernizr.geolocation) {
  // supported 
  console.log("supported")
} else {
  // not-supported
  console.log("unsupported")
} 
console.log(Modernizr)

if (Modernizr.progressbar.meter) {
  // supported
  console.log("supported")
} else {
  // not-supported
  console.log("unsupported")
}
console.log(Modernizr)

// maps code===================================================Maps code

function showPosition(){
  
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showMap, showError)
      alert("Name of province: Ontario\nname of premier: Doug Ford\nattraction 1: http://www.harbourfrontcentre.com/\nattraction 2:https://www.centreisland.ca/ \nprovincial tax rate: 13%");
  } else{
    var x = document.createElement("IMG");
    x.setAttribute("src", "https://maps.googleapis.com/maps/api/staticmap?center=Ontario+Provincial+Parliment,Ontario,Canada&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C43.662555,-79.391166&key=AIzaSyBtF59z8Ud9f_jPHPgaZJAaDAfjhBxg7ek");
    var MapHtmlElement = document.getElementById("embedMap")
    MapHtmlElement.appendChild(x)
    
  }
}

  // Define callback function for successful attempt
  function showMap(position){
    // Get location data
    lat = position.coords.latitude;
    long = position.coords.longitude;
    var latlong = new google.maps.LatLng(lat, long);
    
    var myOptions = {
        center: latlong,
        zoom: 16,
        mapTypeControl: true,
        navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL}
    }
    
    var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
    var marker = new google.maps.Marker({position:latlong, map:map, title:"You are here!"});
  }

  // Define callback function for failed attempt
  function showError(error){
    if(error.code == 1){
        result.innerHTML = "Could you share your coordinates with us? Where are you?";
    } else if(error.code == 2){
        result.innerHTML = "The network is down or the positioning service can't be reached.";
    } else if(error.code == 3){
        result.innerHTML = "The attempt timed out before it could get the location data.";
    } else{
        result.innerHTML = "Geolocation failed due to unknown error.";
    }
  }

// maps code ENDS===================================================Maps code ENDS


//hammer.js gestures
var myElement = document.getElementById('myElement');
console.log(myElement)

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
mc.on("panleft panright panup pandown tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});


//FOR BATTRY STATUS
var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

function logBattery(battery) {
    console.log(battery.level);
    console.log(battery.charging);
    console.log(dischargingTime);

    battery.addEventListener('chargingchange', function() {
        console.log('Battery chargingchange event: ' + battery.charging);
    }, false);
}

if (navigator.getBattery) {
    navigator.getBattery().then(logBattery);
} else if (battery) {
    logBattery(battery);
}
