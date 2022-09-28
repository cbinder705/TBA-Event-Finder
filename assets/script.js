// initial commit

// Use of the Maps API
const geocoder = new google.maps.Geocoder();

function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
submitButton.addEventListener("click", () =>
  geocode({ address: inputText.value })
);

// Use of the Events API

function events(city) {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?size=1&city=" +
      city + // added string to be able to search for any city
      "&apikey=25HXWz0Ao4txUIjAm8EGenva5u1M7pt0"
  )
    .then((response) => response.json())
    .then((data) => this.DisplayEvents(data));
}
events();
function DisplayEvents(data) {}
//
// Local Storage

// functioning search and defined input buttons
