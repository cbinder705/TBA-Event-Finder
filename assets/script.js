// initial commit

// Use of the Maps API

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
  const description = data.events[0];
  console.log(name, description);
}

// Local Storage

// functioning search and defined input buttons
