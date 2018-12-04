// require('dotenv').config();
// const accessToken = process.env.A_TOKEN;
// let artOne, artTwo;
// const _ = require('lodash/array');
// import { array } from 'lodash';

let artistArray = [];
// Gets an array.length = 50; of artists from 1980 to 2018
const getApiArtists = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const FETCH_URL = BASE_URL + 'q=year:1980-2018&type=artist&market=US&limit=50';
  const accessToken = 'BQCNdkm2y8ZnN811dqI61jl4RpX3Mc-OGuTmZ9ZOSaV_33fZeJxgB0GqjOakvq0aCrJsmLxpD_IHCeLQUqGTQk6_sSw9zs0UWn-62Wg6ouPD-FdN6PZNxe2moUBhIo9niYMXQthv_NYUTXO3r5ijWLW-lFozGFwi&refresh_token=AQDyKIEijgfzia2USma7KIywon17-JZxFhFQhW4keA8kSXXat_R2tKWq76OqRureSiu1c9BuqIW9OBAFe42VSPMRb8nfya7gE-542WN9mRCvcqUjWGueMJw4fNfbXAYdvV5wrQ';

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
    // const artists = json.artists;        
    // console.log(json.artists);
    artistArray = json.artists.items;
    console.log(json.artists.items);
    renderTwo();
  });
};

const renderArtists = function(array) {
  render_data(artistArray.shift());
//   document.onclick = function() {
// const [artist1, artist2, ...rest] = array;
// };
};

// Gets a single artist
const getApiArtist = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const name = "aerosmith";
  const FETCH_URL = BASE_URL + 'q=' + name + '&type=artist&market=US&limit=10';
  // "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=12345&popularity:8-100"
  // console.log(year);
  const accessToken = 'BQCiB15JN2LRusjzt9GzmcOS1vgrMEMSgxDMSjVt6KP_egDzOXcLJUCU5NYstEsAcaW82RooK933JVcnWfPYWQsLDLHl7_LVYBa8Uj0jD1LWE14ycRjRDpUsovfA1a5fgkDsnNIQ-ohwMJWeWC8oZkkhp6niHOAm&refresh_token=AQAm-oBi5f-u-0GgyyChnwrumeDPwNx-Qhz1LUORWb7OYaO_Y0FYTHTMRoOpZPwQsBZMygZLFwl5iNt71OoA5hK9y0Lyn8XgtjwGsVuziur9B1sChwLbbH6u4cTZLWsHPASERw';

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
      const artist = json.artists.items[0];        
      console.log(json.artists);
      // render_data(artist);
      return artist;
    });
  
    
};

// Gets most popular artist by random year
const getApi = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  // let artOne, artTwo;
  //randomly selects from 1962 - 2018  year = [1962-2019)
  const year = Math.floor(Math.random()*(2019-1962+1)+1962);
  // const yr = 2001;
  const FETCH_URL = BASE_URL + 'q=year:' + year + '&type=artist&market=US&limit=1';
  // "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=12345&popularity:8-100"
  console.log(year);
  const accessToken = 'BQC4BlkaLifg42Oi0VLVMsAW_buUHtDofb5nQbjl-JlUU_5wf-AqFm6tsK6SKTkOTqtRvVuxLzyuNfpfBwTb7ZpNhI_uZUUNh8K32mcBhqc3soZ3lDERiLGtPBtpKZ9yR2PXeuuMayqpV0gVcgFSfAa326at7Y4B&refresh_token=AQBPDDVqO440PZW5U2cNVFu6PvQrsdEc3ODpdg5dmzf-thQ0hZgxcavnEUFlwxRllOENqv1TqFswrxSQeBL0MfFYrM9I2GRK09Z5BaHAGZuSjk4Qg-bZ2Dfl2GuHL4LJfvnz8g';

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

// Gets several related artists by artist id
const getSeveralApi = function() {
  const BASE_URL = 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/related-artists';
  // let artOne, artTwo;
  //randomly selects from 1962 - 2018  year = [1902-2019)
  const year = Math.floor(Math.random()*(2019-1902+1)+1962);
  // const yr = 2001;
  const FETCH_URL = BASE_URL + 'q=year:' + year + '&type=artist&market=US&limit=1';
  // "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=12345&popularity:8-100"
  console.log(year);
  const accessToken = 'BQC4BlkaLifg42Oi0VLVMsAW_buUHtDofb5nQbjl-JlUU_5wf-AqFm6tsK6SKTkOTqtRvVuxLzyuNfpfBwTb7ZpNhI_uZUUNh8K32mcBhqc3soZ3lDERiLGtPBtpKZ9yR2PXeuuMayqpV0gVcgFSfAa326at7Y4B&refresh_token=AQBPDDVqO440PZW5U2cNVFu6PvQrsdEc3ODpdg5dmzf-thQ0hZgxcavnEUFlwxRllOENqv1TqFswrxSQeBL0MfFYrM9I2GRK09Z5BaHAGZuSjk4Qg-bZ2Dfl2GuHL4LJfvnz8g';

  var myOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    mode: 'cors',
    cache: 'default'
  };
  
  // Loop to capture 2 artists
    fetch(BASE_URL, myOptions)
    .then(response => response.json())
    .then(json => {
      artistArray = json.artists;        
      renderTwo(artistArray);
      // return artists;
      console.log(artistArray);
    });
};

//Renders two randomly selected artists from artistArray
function renderTwo() {
  document.getElementById("artist").innerHTML = "";
  document.getElementById("answer").innerHTML = "";
  for(let i = 0; i < 2; i++){
    const random_element = artistArray[Math.floor(Math.random() * artistArray.length)];
    render_data(random_element);
    // var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    // const random_index = Math.floor(Math.random() * artistArray.length);
    // 
    // render_data(random_element);  
    // array.remove(artistArray, function(n) {
    //   return n === random_element;
    // }); // lodash remove method
  } // for loop
}

function render_data(artist) {
  
  const artist_container = document.getElementById("artist");
  const div = document.createElement("div");
  div.classList.add("images");
  const img = document.createElement("img");
  // const hr = document.createElement("hr");
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
  // const onePop=artist.popularity;
  // console.log(onePop);

  // div.append(`${artist.name}`);
  // pop.append(`${artist.popularity}`);

  artist_container.appendChild(div);
  div.appendChild(img);
  div.appendChild(name);
  // div.appendChild(pop);
  // div.appendChild(hr);
};

function getPop(artist) {
  // If you choose the first image/artist
  if (artist.id === "artist-1"){
    const artOne = artist;
    const artTwoPop = document.getElementById("artist-2").getAttribute("name");
    console.log(`artTwoPop: ${artTwoPop}`);
    console.log(`artOnePop: ${artOne.name}`);
    const answer = document.getElementById("answer");
    // answer.innerHTML= "Winner Winner Chicken Dinner!";
    // const answerDiv = document.createElement('div');
    if( parseInt(artOne.name) > parseInt(artTwoPop) ) {
      console.log(typeof artOne.name);
      answer.innerHTML = "Winner Winner Chicken Dinner!";
    }else{
      answer.innerHTML = "Loser Loser We Got a Snoozer!";
    }
    // answer.append(answerDiv);

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

getApiArtists();


// document.onkeyup = function() {
//   document.getElementById("artist").innerHTML = "";
//   document.getElementById("answer").innerHTML = "";
//   renderTwo();
// };
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
