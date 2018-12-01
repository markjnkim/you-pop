// require('dotenv').config();
// const accessToken = process.env.A_TOKEN;
let artOne, artTwo;
const getApi = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  // let artOne, artTwo;
  //randomly selects from 1962 - 2018  year = [1962-2019)
  const year = Math.floor(Math.random()*(2019-1962+1)+1962);
  // const yr = 2001;
  const FETCH_URL = BASE_URL + 'q=year:' + year + '&type=artist&market=US&limit=1';
  // "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=12345&popularity:8-100"
  console.log(year);
  const accessToken = 'BQB9tHHo8BW_aP-32JSIaj6msgEjUh1WwXicKX_76rD5SNpaMWXGcr-jtixWMYkiuj9w3IrbSdZC2Gar2U7jOTopr32wj_D7nH9Zg1yOEXZqOeD5N4vKY591PyzdCJIzW0iSmry6ULUnm76vFbeU7SQcVdrPHbqB&refresh_token=AQBkxyNEvOU7qU7Y_8gKiAzK53PDCpcAXJIBFpvzWiNZbvK9NNZP47EsVAkeoaGq6yWqm2Qoz8Bt1UHKHJwBIdPZCnvlKqp3CUL4bI0vIbmR8ojTjx3h05bY3hD6HlWA7MGPBw';

  var myOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    mode: 'cors',
    cache: 'default'
  };
  
  // Loop to capture 2 artists
    fetch(FETCH_URL, myOptions)
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];        
      // console.log(artist);
      render_data(artist);
      return artist;
    });
  
    
  };
function render_data(artist) {
  
  const artist_container = document.getElementById("artist");
  const div = document.createElement("div");
  div.classList.add("images");
  const img = document.createElement("img");
  // const hr = document.createElement("hr");
  // const pop = document.createElement("p");

  img.classList.add("rounded-circle");
  img.classList.add("img-fluid");
  img.src = `${artist.images[0].url}`;

  if (!document.getElementById("artist-1")) {
    img.setAttribute("id","artist-1");
    img.setAttribute("name", artist.popularity);
    
  }else {
    img.setAttribute("id","artist-2");
    img.setAttribute("name", artist.popularity);
  }
  img.setAttribute("onclick", "getPop(this)");
  // const onePop=artist.popularity;
  // console.log(onePop);

  // div.append(`${artist.name}`);
  // pop.append(`${artist.popularity}`);

  artist_container.appendChild(div);
  div.appendChild(img);
  // div.appendChild(pop);
  // div.appendChild(hr);
};


function getPop(artist) {
  // If you choose the first image/artist
  if (artist.id === "artist-1"){
    const artOne = artist;
    artTwoPop = document.getElementById("artist-2").getAttribute("name");
    console.log(`artTwoPop: ${artTwoPop}`);
    console.log(`artOnePop: ${artOne.name}`);
    const answer = document.getElementById("answer");
    if( parseInt(artOne.name) > parseInt(artTwoPop) ) {
      const answerDiv = document.createElement('div');
      answerDiv.innerHTML("Winner Winner Chicken Dinner!");
      answer.append(answerDiv);
    }else{
      document.getElementById("answer").textContent("Loser Loser We Got a Snoozer!");
    }
  }else { 
    const artTwo = pop;
    let artOne = {};
    artOne.id = document.getElementById("artist-2").getAttribute("id");
    artOne.name = document.getElementById("artist-2").getAttribute("name");
    console.log(artOne);
  }
  

  // console.log(pop);
  // // const artOneId = pop.id;
  // // const artOne;
  // console.log(pop.id);
  // console.log(pop.name);
  // console.log(parseInt(pop.name) + parseInt(pop.name));
  // if(a)
  // window.onload = function() {
  //   const answer = document.getElementById("answer");answer.innerHTML("Winner");  
  //   document.getElementById("artist-1").addEventListener( 'click', function() {
  //     alert("Hello");
  //   });

  //   document.getElementById("artist-2").addEventListener( 'click', function() {
  //     alert("GoodBye");
  //   });
  // };

  // document.getElementById("answer").innerHTML("Winner!");
}

const artistOne = getApi();
console.log(artistOne);

const artistTwo = setTimeout( function() {
  getApi();
}, 100 );
console.log(artistTwo);

// setTimeout( function() {
//   window.onload = function() {
//     document.getElementById("artist-1").addEventListener( 'click', function() {
//       alert("Hello");
//     });

//     document.getElementById("artist-2").addEventListener( 'click', function() {
//       alert("GoodBye");
//     });
//   };
// }, 1000 );
