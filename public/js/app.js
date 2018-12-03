// require('dotenv').config();
// const accessToken = process.env.A_TOKEN;
// let artOne, artTwo;
let artistArray = [];

const getApiArtist = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const name = "aerosmith";
  const FETCH_URL = BASE_URL + 'q=' + name + '&type=artist&market=US&limit=10';
  // "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=12345&popularity:8-100"
  // console.log(year);
  const accessToken = 'BQC4BlkaLifg42Oi0VLVMsAW_buUHtDofb5nQbjl-JlUU_5wf-AqFm6tsK6SKTkOTqtRvVuxLzyuNfpfBwTb7ZpNhI_uZUUNh8K32mcBhqc3soZ3lDERiLGtPBtpKZ9yR2PXeuuMayqpV0gVcgFSfAa326at7Y4B&refresh_token=AQBPDDVqO440PZW5U2cNVFu6PvQrsdEc3ODpdg5dmzf-thQ0hZgxcavnEUFlwxRllOENqv1TqFswrxSQeBL0MfFYrM9I2GRK09Z5BaHAGZuSjk4Qg-bZ2Dfl2GuHL4LJfvnz8g';

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

function renderTwo(array) {
  for(let i = 0; i < array.length; i++){
    render_data(array.shift());  
  }
}

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

//Several artists.
// getSeveralApi();
// getApi();
// setTimeout( function() {
//   getApi();
// }, 9 );
getApiArtist();
setTimeout( function() {
  getApiArtist();
}, 90 );


document.onkeyup = function(event) {
  const key = event.key;
  document.getElementById("artist").innerHTML = "";
  document.getElementById("answer").innerHTML = "";
  renderTwo(artistArray);
  console.log(key);
};
