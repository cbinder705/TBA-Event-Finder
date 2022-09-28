// initial commit

// Use of the Maps API

// Use of the Events API

function events(city) {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?size=1&city=" +
      city +
      "&apikey=25HXWz0Ao4txUIjAm8EGenva5u1M7pt0"
  )
    .then((response) => response.json())
    .then((data) => this.DisplayEvents(data));
}
events();
function DisplayEvents(data) {
  // links to html
  var name = data;
  var type = data.events;
  console.log(name, type);
}
//
// Local Storage

// functioning search and defined input buttons
