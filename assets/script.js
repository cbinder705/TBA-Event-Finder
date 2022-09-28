// initial commit

// Use of the Maps API
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1f20e52452mshd76596b35a6ea62p1e8fecjsnb06971f2d618",
    "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
  },
};
var apiURL =
  "https://google-maps28.p.rapidapi.com/maps/api/place/details/json?fields=address_component%2Cadr_address%2Cbusiness_status%2Cformatted_address%2Cgeometry%2Cicon%2Cicon_mask_base_uri%2Cicon_background_color%2Cname%2Cpermanently_closed%2Cphoto%2Cplace_id%2Cplus_code%2Ctype%2Curl%2Cutc_offset%2Cvicinity%2Cformatted_phone_number%2Cinternational_phone_number%2Copening_hours%2Cwebsite%2Cprice_level%2Crating%2Creview%2Cuser_ratings_total&place_id=ChIJ37HL3ry3t4kRv3YLbdhpWXE&language=en&region=en";
fetch(apiURL, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

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
