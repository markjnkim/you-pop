// require('dotenv').config();
// const accessToken = process.env.A_TOKEN;

const getApi = function() {
  const BASE_URL = 'https://api.spotify.com/v1/search?';
  //randomly selects from 1962 - 2018  year = [1962-2019)
  const year = Math.floor(Math.random()*(2019-1962+1)+1962);
  // const yr = 2001;
  const FETCH_URL = BASE_URL + 'q=year:' + year + '&type=artist&market=US&limit=1';
  // "https://api.spotify.com/v1/search?q=year%3A2001&type=artist&market=US&limit=1&offset=12345&popularity:8-100"
  console.log(year);
  const accessToken = 'BQBMJzIvq8bA8aMYt5DlERHskre_wBLXYF6fqIVZVvZaKzQqbExSrTjj1BEiJ048ABPwHdFTjjO8QSduDxDBfYrAvQ0Trtrpyg-DbkKlEvxUWUtRxzM-wPqrD3gUInWhIhDPVGqt_oQs8xSK86B6YaA0e-hKWNxU&refresh_token=AQA4X6-vG8vee-EMLrut6Hft-yrAkZD8lJ1t99qtSCYNJvb3zpWslr1RurvvbegbLExSUxhxCHFNjbRR7Pjw4Jzk0zm8JCNPPzRnE-QmkRv3LRwGjWKfhEzq_2ih9o_KDErvVg';

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
      console.log(artist);
      render_data(artist);
      return artist;
    });
  
  const render_data = function(artist) {
    
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
      img.setAttribute("value", artist.popularity);
      
    }else {
      img.setAttribute("id","artist-2");
      img.setAttribute("value", artist.popularity);
    }
    img.setAttribute("onclick", "getPop(this.id)");
    // const onePop=artist.popularity;
    // console.log(onePop);

    // div.append(`${artist.name}`);
    // pop.append(`${artist.popularity}`);

    artist_container.appendChild(div);
    div.appendChild(img);
    // div.appendChild(pop);
    // div.appendChild(hr);
  };
  return artist;
};


function getPop(artist_id) {
  console.log(artist_id);
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
setTimeout( function() {
  getApi();
}, 100 );

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
