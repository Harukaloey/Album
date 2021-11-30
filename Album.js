import "./styles.css";

const searchBar = document.getElementById("searchBar");
const albumList = document.getElementById("albumList");


  fetch('https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50')
   .then(response => response.json())
   .then(album => console.log(album.results));
