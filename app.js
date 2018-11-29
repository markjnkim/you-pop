const BASE_URL = 'https://api.spotify.com/v1/search?';
const FETCH_URL = BASE_URL + 'q=' + 'the+killers' + '&type=artist&limit=1';
var accessToken = 'BQDOyifD2HvNHCvOAk7xIVDRpWEKj_1XFIjNWrRGSkLAoYxljYQd5n2Ek9Bq5jKy_5ew6O-k5bixxbCfdtDWDsJdybZxS4dpcMlhEFoWLk04cn3M_p-GoheLMCxe6Z3oP82ORTvm8bUPhvvc7y2mnLSrPugYa5_O&refresh_token=AQD4-snxY43G0W1-mBZ5-LMyZPGES7cLGn2lL16T95weuJtwRZ0IVAZ0_rBiBKVYy9QWEQEQWEWXO95uNgM78wCOBFnIgwmqBiXElu_pDDRU48pg2IDVihnwQeYbYIphqDIkFYzq00aczg';

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
    // const res = json;     
    console.log(artist);
    const artist_name = document.getElementById('artist-name');
    const artist_image = document.getElementById('artist-image');
    const p = document.createElement("p");
    const img = document.createElement("img");
    const pop = document.createElement("p");
    img.src = `${artist.images[2].url}`;
    p.append(`${artist.name}`);
    pop.append(`${artist.popularity}`);
    artist_name.append(p);
    artist_image.append(img);
    artist_image.append(pop);
  });