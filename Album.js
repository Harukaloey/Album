
//onChange value
const idBar = document.getElementById("idBar");
let display = [{}];
const searchBar = document.getElementById("searchBar");
const albumList = document.getElementById("albumList");
let searchInput = "";

searchBar.addEventListener("change", (e) => {
  searchInput = e.target.value;
})


idBar.addEventListener("click", function (e) {
  e.preventDefault();
  let result=[];
  console.log("searchInput is", searchInput);
  fetch(
    "https://itunes.apple.com/search?term=$%7BARTIST_NAME%7D&media=music&entity=album&attribute=artistTerm&limit=50"
  )
    .then((res) => res.json())
    .then((album) => {
      result=album.results.filter((item) => {
        return !item.artistName.includes(searchInput);
      })
      console.log("result is ", result)
      display = result.map((item) => {
        return {artistName:item.artistName, img: item.artworkUrl100}
      });
      console.log("display is ", display);
      albumList.innerHTML = "";
      for(let i = 0; i < result.length; i++){
        albumList.innerHTML +=`<li><img src=${result[i].artworkUrl100}></img><p>${result[i].artistName}</p></li>`
      }
    });
});



