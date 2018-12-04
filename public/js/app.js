let artistArray = [];
let correct = 0;
// Gets an array.length = 50; of artists from 1980 to 2018
const getApiArtists = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const FETCH_URL = BASE_URL + 'q=year:1980-2018&type=artist&market=US&limit=50';
  const accessToken = 'BQCW4gOV_NXS_VlaZ42DVkv4r98zzYqrpTDidr6XwqaNyObxsLczpvUSLijHEIWPWVM-UCjzU-L4FLMfAAeOWfinOpnYYWTiOD7byh3NH9sc3S_y4bgOf8cmSq4yZJ0P3lCWL5VXKwe7CLaQfYeNXWgA4nR089zj&refresh_token=AQDncrIviVBPIFYnszHgq9XKXtJPJJn-bnwGTr6L43qKm6QoZB_BPRSREqyjDYSvm7hrgrdXsiko4knKr_hE9uxg25YxYtpo8LWd58mGG8Ud6Xe68YmFB4rKSM-mDgkQjWkQzw';

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
    randomTwo();
  });
};

//Renders two randomly selected artists from artistArray
function randomTwo() {
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
  img.src = artist.images[0].url;
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

// reset score and gets a new set of artists
function startOver() {
  correct = 0;
  document.getElementById("artist").innerHTML = "";
  getApiArtists();
}

// Post Score
function scoreBoard() {
  // renders final score
  // play Again? option
  const score = document.getElementById("artist");
  score.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `Your score ${correct}`;
  const reset = document.createElement("div");
  reset.setAttribute("id", "reset");
  reset.innerHTML = "play Again?";
  score.append(div);
  score.append(reset);
  startOver();
}
// compare popularity b/n artists
function getPop(artist) {
  const correct_img = document.createElement("img");
  correct_img.setAttribute("src", "./public/images/blue_check.svg");
  correct_img.classList.add("answer-img");
  const wrong_img = document.createElement("img");
  wrong_img.setAttribute("src", "./public/images/blue_x.png");
  wrong_img.classList.add("answer-img");
  const answer = document.getElementById("artist");
  answer.innerHTML="";
  // If you choose the first image/artist
  if( artist.id === "artist-1" ) {
    const artOne = artist;
    const artTwoPop = document.getElementById("artist-2").getAttribute("name");
    if( parseInt(artOne.name) > parseInt(artTwoPop) ) {
      answer.append(correct_img);
      correct++;
      playAgain();
      // answer.innerHTML = "Winner Winner Chicken Dinner!";
    }else {
      // Wrong Answer
      answer.append(wrong_img);
      scoreBoard();
    }
    // You picked artist 2
  }else { 
    const artTwo = artist;
    const artOnePop = document.getElementById("artist-1").getAttribute("name");
    if( parseInt(artTwo.name) > parseInt(artOnePop) ) {
      answer.append(correct_img);
      correct++;
      playAgain();
    }else {
      answer.append(wrong_img);
      scoreBoard();
    }
  }
}

const playAgain = function() {
  document.getElementById("artist").onclick = function(event) {
    if (document.getElementById("answer")) {
      event.preventDefault();
      
      setTimeout( function() {
        randomTwo();
      }, 1700 );
    }
  };
};

// Initial Api Call and Render
getApiArtists();

