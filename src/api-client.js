const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=0e1b6e784945cdd711da482f77d63b12&format=json'

const getArtists = () => {
  return fetch(URL)
  .then(res => res.json())
  .then(data => data.topartists.artist)
  .then(artists => artists.map((artist)=>({
      name: artist.name,
      image: artist.image[3]['#text'],
      likes: 200,
      comments: 140
    }
  )))
}

export { getArtists }