let artistArray = [];
// Gets an array.length = 50; of artists from 1980 to 2018
const getApiArtists = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const FETCH_URL = BASE_URL + 'q=year:1980-2018&type=artist&market=US&limit=50';
  const accessToken = 'BQAsUFYUPGzSvcVOzk7k4vuH5eK1Hi-3aIp_DwcjP5N5u__60tYNV2nJU2KtX6axhdRn6Lx-EJ39QnpMn6ao0e1sgYy04ny9StM1JmdTUpuwfE28X3htsltUCSe6K5bazs-ex2RMRF8etnDym6fYASlIinjnUNDE&refresh_token=AQDT0L81xatlsqGSRCbGHQOJfjwjLRzyIWpX5uKYw9Hos1obLODq3ceW8QDU6ROtPVvjgque4jBy9JIVnKOkBKbMu-PUU0YEzVOOVzQkG4IIlZueozwTvdyceZRm6FNOL39IYQ';

  var myOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    mode: 'cors',
    cache: 'default'
  };

  fetch(FETCH_URL, myOptions)
  .then(response => response.json())
  .then(json => {
    artistArray = json.artists.items;
    console.log(json.artists.items);
    renderTwo();
  });
};

//Renders two randomly selected artists from artistArray
function renderTwo() {
  document.getElementById("artist").innerHTML = "";
  document.getElementById("answer").innerHTML = "";
  for(let i = 0; i < 2; i++){
    const random_element = artistArray[Math.floor(Math.random() * artistArray.length)];
    render_data(random_element);
  } // for loop
}

function render_data(artist) {
  const artist_container = document.getElementById("artist");
  const div = document.createElement("div");
  div.classList.add("images");
  const img = document.createElement("img");
  const name = document.createElement("p");

  img.classList.add("rounded-circle");
  img.classList.add("img-fluid");
  img.src = `${artist.images[0].url}`;
  name.innerHTML = artist.name;
  name.classList.add("align");

  if (!document.getElementById("artist-1")) {
    img.setAttribute("id","artist-1");
    img.setAttribute("name", artist.popularity);
    
  }else {
    img.setAttribute("id","artist-2");
    img.setAttribute("name", artist.popularity);
  }
  img.setAttribute("onclick", "getPop(this)");
  artist_container.appendChild(div);
  div.appendChild(img);
  div.appendChild(name);
};

function getPop(artist) {
  // If you choose the first image/artist
  if (artist.id === "artist-1"){
    const artOne = artist;
    const artTwoPop = document.getElementById("artist-2").getAttribute("name");
    console.log(`artTwoPop: ${artTwoPop}`);
    console.log(`artOnePop: ${artOne.name}`);
    const answer = document.getElementById("answer");
    if( parseInt(artOne.name) > parseInt(artTwoPop) ) {
      console.log(typeof artOne.name);
      answer.innerHTML = "Winner Winner Chicken Dinner!";
    }else{
      answer.innerHTML = "Loser Loser We Got a Snoozer!";
    }

    // You picked artist 2
  }else { 
    const artTwo = artist;
    const artOnePop = document.getElementById("artist-1").getAttribute("name");;
    if( parseInt(artTwo.name) > parseInt(artOnePop) ) {
      // console.log(typeof artOne.name);
      answer.innerHTML = "Winner Winner Chicken Dinner!";
    }else{
      answer.innerHTML = "Loser Loser We Got a Snoozer!";
    }
  }
  playAgain();
}

const playAgain = function() {
  document.getElementById("artist").onclick = function(event) {
    if (document.getElementById("answer")) {
      event.preventDefault();
      
      setTimeout( function() {
        renderTwo();
      }, 1700 );
    }
  };
};

// Initial Api Call and Render
getApiArtists();

