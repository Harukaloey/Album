//onChange value
// let display = [{}];
// const searchButton = document.getElementById("searchBar");
// const albumList = document.getElementById("albumList");
// let searchInput = "";

// searchButton.addEventListener("click", (e) => {
//   searchInput = e.target.value;
// })

// let search = e.target.parentElement;
// let searchText = form.children[0].value;

// if(searchText === "") {
//   alert("Please Enter Text")
//   return;
// }


// searchButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   let result=[];
//   // console.log("searchInput is", searchInput);
//   fetch(
//     "https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50"
//   )
//     .then((res) => res.json())
//     .then((album) => {
//       result=album.results.filter((item) => {
//         return !item.artistName.includes(ARTIST_NAME);
//       })
//     // console.log("result is ", result)  
//       display = result.map((item) => {
//         return {artistName:item.artistName, img: item.artworkUrl100}
//       });
//       // console.log("display is ", display);
//       albumList.innerHTML = "";
//       for(let i = 0; i < result.length; i++){
//         albumList.innerHTML +=`<li><img src=${result[i].artworkUrl100}></img><p>${result[i].artistName}</p></li>`
//       }
//     });
// });
function postFetch() {
  const fm = document.search;
  const input = fm.input.value;
  const url = 'https://itunes.apple.com/search?term=' + input + '&media=music&entity=album&attribute=artistTerm&limit=50';
  const str = '';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content' : 'application',
    },
    body: JSON.stringify()
  }).then(res => res.json()).then((data) => {
    const arr = data.results;

    const info = arr.length + 'result for' + input + '';

    document.getElementById('info').innerHTML = info;

    arr.forEach(function(value, index) {
      str += '<li><img src = "' + value.artworkUrl100+' "><p>' + value.collectionCensoredName + '<p><li>';
    });
    document.getElementById('data').innerHTML = str;
  });
  return false;
}






