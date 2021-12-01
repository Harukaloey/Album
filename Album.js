

const idBar = document.getElementById("idBar");
let display = [];
const albumList = document.getElementById("albumList");

idBar.addEventListener("click", function (e) {
  e.preventDefault();

  fetch(
    "https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200"
  )
    .then((res) => res.json())
    .then((album) => {
      console.log(album.results);
      display=album.results.map((item) => {
        return item.artworkUrl100
      });
      for(let i = 0; i < display.length; i++){
        albumList.innerHTML +=`<li><img src=${display[i]}></img></li>`
      }
    });
});




