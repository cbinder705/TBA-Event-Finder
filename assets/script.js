// initial commit

// Use of the Maps API

// Use of the Events API

function events(city) {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?&city=Philadelphia&apikey=25HXWz0Ao4txUIjAm8EGenva5u1M7pt0"
  )
    .then((response) => response.json())
    .then(DisplayEvents);
}
events();
function DisplayEvents(data) {
  let eventName = data._embedded.events[0].name;
  let eventLink = data._embedded.events[0].url;
  console.log(eventName, eventLink);
}

//
// Local Storage

// functioning search and defined input buttons
