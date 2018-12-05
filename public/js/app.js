let artistArray = [];
let correct = 0;
// Gets an array.length = 50; of artists from 1980 to 2018
const getApiArtists = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const FETCH_URL = BASE_URL + 'q=year:1980-2018&type=artist&market=US&limit=50';
  const accessToken = 'BQB6VKUNX331tVVS1sdHb5Jp0sJ4a25tGkWXzM4DPV83-_UCvpf8JKUZ3Kdu4Xaj2NBf9OO4KhxC0DGdNM6ztjw_2ijuqOD1JGbMXvbE95K9GRKK2dnAHiW37JlZonYa_QU4oUzgWD9XS6yCxyAQWBWcb4Dj5Jtg&refresh_token=AQDkPGGw1FkfUjgJw0LpZ39rUThP9jvSMEUeWsE8XI07mDUMmPX83dzAT6AjlNHyhGCaKK4KKawj9D_dC8XlrILQjYsuhiBS84i9T4OWIWzEKOhucEhW-gVa9BZtvuLmKFIJ0g';

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

// Renders two randomly selected artists from artistArray
// Also clears
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

function startOver() {
  const reset = document.getElementById("reset");
  reset.onclick = function() {
    correct = 0;
    randomTwo();
    setTimeout( function() {reset.innerHTML = "";}, 200);
  };
}

// Post Score
function scoreBoard() {
  // renders final score
  // play Again? option
  const content = document.getElementById("artist");
  content.innerHTML = "";
  const score = document.getElementById("subtitle");
  score.setAttribute("style", "background-color:white;");
  score.setAttribute("style", "padding: 20px;");
  score.innerHTML = "";
  const div = document.createElement("div");
  div.setAttribute("id", "score-board");
  div.innerHTML = `Your score: ${correct}`;
  correct = 0;
  const reset = document.createElement("div");
  reset.setAttribute("id", "reset");
  reset.innerHTML = "Play Again?";
  score.append(div);
  div.appendChild(reset);
  startOver();
}
// compare popularity
function getPop(artist) {
  const correct_img = document.createElement("img");
  correct_img.setAttribute("src", "./public/images/blue_check.svg");
  correct_img.classList.add("answer-img");
  const wrong_img = document.createElement("img");
  wrong_img.setAttribute("src", "./public/images/blue_x.png");
  wrong_img.classList.add("answer-img");
  const answer = document.getElementById("artist");
  // If you choose the first image/artist
  if (artist.id === "artist-1") {
    const artOne = artist;
    const artTwoPop = document.getElementById("artist-2").getAttribute("name");
    if( parseInt(artOne.name) > parseInt(artTwoPop) ) {
      answer.innerHTML="";
      answer.append(correct_img);
      correct++;
      console.log(`correct: ${correct}`);
      scoreTracker();
      playAgain();
    }else {
      // Wrong Answer
      answer.innerHTML="";
      answer.append(wrong_img);
      setTimeout( function() { 
        scoreBoard();
      }, 2500 );
    }

    // You picked artist 2
  }else { 
    const artTwo = artist;
    const artOnePop = document.getElementById("artist-1").getAttribute("name");
    // Correct Answer
    if( parseInt(artTwo.name) > parseInt(artOnePop) ) {
      answer.innerHTML="";
      answer.append(correct_img);
      correct++;
      scoreTracker();
      console.log(`correct: ${correct}`);
      playAgain();
    }else{
      // Wrong Answer
      answer.innerHTML="";
      answer.append(wrong_img);
      setTimeout( function() { 
        scoreBoard();
      }, 2500 );
    }
  }
}

const scoreTracker = function() {
  const update = document.getElementById("score-board");
  const div = document.createElement("div");
  div.setAttribute("id", "current-score");
  update.innerHTML = "";
  update.innerHTML = `Current Score: ${correct}`;
};

const playAgain = function() {
  document.getElementById("artist").onclick = function(event) {
    if (document.getElementById("answer")) {
      event.preventDefault();
      
      setTimeout( function() {
        randomTwo();
      }, 1800 );
    }
  };
};

// Initial Api Call and Render
getApiArtists();

