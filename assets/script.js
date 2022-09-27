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
    "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=KDhnCyJ8Hg2vSizuLF0Xs4WtQFp2wQQo&city=" +
      city + // user inputs location
      ""
  )
    .then((response) => response.json())
    .then((data) => this.DisplayEvents(data));
}
events();
function DisplayEvents(data) {
  // links to html
  const name = data;
  const type = data.events;
  console.log(name, type);
}

// Local Storage

// functioning search and defined input buttons
