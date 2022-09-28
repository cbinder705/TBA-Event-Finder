// initial commit

// Use of the Maps API

// Use of the Events API

function events(city) {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?&city=" +
      city + // added string to be able to search for any city
      "&apikey=25HXWz0Ao4txUIjAm8EGenva5u1M7pt0"
  )
    .then((response) => response.json())
    .then((data) => this.DisplayEvents(data));
}
events();
function DisplayEvents(data) {
  const location = data;
  const name = data.eventName;
  const url = data.link;
}
//
// Local Storage

// functioning search and defined input buttons
