const get_api = function(talent) {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  const FETCH_URL = BASE_URL + 'q=' + talent + '&type=artist&limit=1';
  const accessToken = process.env.A_TOKEN;
  
  // 'BQBKd7G9JCFlSW55EPMdwF1NNr4ja1UTB-Z04GoskVC06bQMkhfrD_bsMoYgNUnAQ7sFOaPhBRDUpS59MwunKxCRyz1xW1HoTtHV82wmgXY3LwvF7efNp0qyChiWcYurSGLytslM6flghD7RxfArNd9hv-BBk-d4&refresh_token=AQBBDcUL8P_abNn2FQxU1TGLrekhZ6jfkZ6HyC2x8ps3uiQW1DX61djJv7IK8lTd244R7q4IZmF4u4m7U5DpMz4NmGHZ9f-j7mPWYj--XImzAaQKOWBoSNpabTw4-6YezHqs9g';

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
  const artist_name = document.getElementById('artist-name');
  const artist_image = document.getElementById('artist-image');
  const p = document.createElement("p");
  const hr = document.createElement("hr");
  const img = document.createElement("img");
  const pop = document.createElement("p");
  img.src = `${artist.images[0].url}`;
  p.append(`${artist.name}`);
  pop.append(`${artist.popularity}`);
  artist_name.append(p);
  artist_name.appendChild(img);
  artist_name.appendChild(pop);
  artist_name.appendChild(hr);
};

get_api('Pearl Jam');
get_api('Sound Garden');
