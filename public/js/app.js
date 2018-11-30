// require('dotenv').config();
// const accessToken = process.env.A_TOKEN;

const getApi = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const year = Math.floor(Math.random()*(2018-1962+1)+1962);
  const yr = 2001;
  const FETCH_URL = BASE_URL + 'q=year:' + year + '&type=artist&market=US&limit=1';
  // "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=12345&popularity:8-100"
  const accessToken = 'BQCS2_DujNPaeVUErfUNxDZI0LfYMG4Yj1Ee0d5OpvOkMdjPsozIhnh7hTLniPE1mzzne_FvkWrc63htz7m5l4exzYhIHHnLs0i1P8T7EcYRQvGxw4e68XK204_5B-3ggQNITzINgauEZElggHzy4z_fB4RYrYBK&refresh_token=AQAUqFQIKeiuM76QsO-9pxUBAF7ezO57DI4OxVcTCRL8AsdXCR6Yt6rp8SFJ3thYLYdOZAm9ybZ2Aq4CL5MfrGSFM5bXenBvsK7d-BwgQ8cysahDul_-WI0-LgnMYF0s40Fa-w';

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
    console.log(artist);
    render_data(artist);
  });

};

const render_data = function(artist) {
  const artist_name = document.getElementById('artist');
  // const artist_image = document.getElementById('artist-image');
  const p = document.createElement("p");
  const hr = document.createElement("hr");
  const img = document.createElement("img");
  img.classList.add("rounded-circle");
  const pop = document.createElement("p");
  img.src = `${artist.images[0].url}`;
  p.append(`${artist.name}`);
  pop.append(`${artist.popularity}`);
  artist_name.append(p);
  artist_name.appendChild(img);
  artist_name.appendChild(pop);
  artist_name.appendChild(hr);
};

getApi();
setTimeout( () => {
  getApi(); 
}, 3000 );
setTimeout( () => {
  getApi(); 
}, 6000 );


