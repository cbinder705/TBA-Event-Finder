// initial commit

// Use of the Maps API

// Use of the Events API
function events(city) {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?&city=Philadelphia&apikey=25HXWz0Ao4txUIjAm8EGenva5u1M7pt0"
  )
    .then((response) => response.json())
    .then(DisplayEvents)
    .then(initMap);
}
events();
function DisplayEvents(data) {
  //Need to display on page
  let eventName0 = data._embedded.events[0].name;
  let eventLink0 = data._embedded.events[0].url;
  let eventName1 = data._embedded.events[1].name;
  let eventLink1 = data._embedded.events[1].url;
  let eventName2 = data._embedded.events[2].name;
  let eventLink2 = data._embedded.events[2].url;
  let eventName3 = data._embedded.events[3].name;
  let eventLink3 = data._embedded.events[3].url;
  let eventName4 = data._embedded.events[4].name;
  let eventLink4 = data._embedded.events[4].url;

  let evtLatitude0 =
    data._embedded.events[0]._embedded.venues[0].location.latitude;
  let evtLongitude0 =
    data._embedded.events[0]._embedded.venues[0].location.longitude;
  let eventLatitude0 = parseFloat(evtLatitude0);
  let eventLongitude0 = parseFloat(evtLongitude0);
  let evtLatitude1 =
    data._embedded.events[1]._embedded.venues[0].location.latitude;
  let evtLongitude1 =
    data._embedded.events[1]._embedded.venues[0].location.longitude;
  let eventLatitude1 = parseFloat(evtLatitude1);
  let eventLongitude1 = parseFloat(evtLongitude1);
  let evtLatitude2 =
    data._embedded.events[2]._embedded.venues[0].location.latitude;
  let evtLongitude2 =
    data._embedded.events[2]._embedded.venues[0].location.longitude;
  let eventLatitude2 = parseFloat(evtLatitude2);
  let eventLongitude2 = parseFloat(evtLongitude2);
  let evtLatitude3 =
    data._embedded.events[3]._embedded.venues[0].location.latitude;
  let evtLongitude3 =
    data._embedded.events[3]._embedded.venues[0].location.longitude;
  let eventLatitude3 = parseFloat(evtLatitude3);
  let eventLongitude3 = parseFloat(evtLongitude3);
  let evtLatitude4 =
    data._embedded.events[6]._embedded.venues[0].location.latitude;
  let evtLongitude4 =
    data._embedded.events[6]._embedded.venues[0].location.longitude;
  let eventLatitude4 = parseFloat(evtLatitude4);
  let eventLongitude4 = parseFloat(evtLongitude4);

  localStorage.setItem("Latitude0", eventLatitude0);
  localStorage.setItem("Longitude0", eventLongitude0);
  localStorage.setItem("Latitude1", eventLatitude1);
  localStorage.setItem("Longitude1", eventLongitude1);
  localStorage.setItem("Latitude2", eventLatitude2);
  localStorage.setItem("Longitude2", eventLongitude2);
  localStorage.setItem("Latitude3", eventLatitude3);
  localStorage.setItem("Longitude3", eventLongitude3);
  localStorage.setItem("Latitude4", eventLatitude4);
  localStorage.setItem("Longitude4", eventLongitude4);
}

// Instantiate a map and platform object:
function initMap() {
  // The location of Uluru
  let lat0 = localStorage.getItem("Latitude0");
  let lng0 = localStorage.getItem("Longitude0");
  let lat1 = localStorage.getItem("Latitude1");
  let lng1 = localStorage.getItem("Longitude1");
  let lat2 = localStorage.getItem("Latitude2");
  let lng2 = localStorage.getItem("Longitude2");
  let lat3 = localStorage.getItem("Latitude3");
  let lng3 = localStorage.getItem("Longitude3");
  let lat4 = localStorage.getItem("Latitude4");
  let lng4 = localStorage.getItem("Longitude4");

  var location = new google.maps.LatLng(lat0, lng0);

  var location0 = new google.maps.LatLng(lat0, lng0);
  var location1 = new google.maps.LatLng(lat1, lng1);
  var location2 = new google.maps.LatLng(lat2, lng2);
  var location3 = new google.maps.LatLng(lat3, lng3);
  var location4 = new google.maps.LatLng(lat4, lng4);
  // The map, centered at  Set to search box results | Axios
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: location,
  });
  // The markers 1-5
  const marker0 = new google.maps.Marker({
    position: location0,
    map: map,
  });
  const marker1 = new google.maps.Marker({
    position: location1,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: location2,
    map: map,
  });
  const marker3 = new google.maps.Marker({
    position: location3,
    map: map,
  });
  const marker4 = new google.maps.Marker({
    position: location4,
    map: map,
  });
}

// Use of the Events API
// Instantiate a map and platform object:
