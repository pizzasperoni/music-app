import React, {Component} from 'react';
import ArtistList from './ArtistList'
import { getArtists } from './api-client'

class HomeView extends Component {
  state = {
    artists: []
  }

  componentDidMount() {
    getArtists().then((data)=> this.setState({ artists: data }))
  }

  render() {
    const artists = this.state.artists
    return (
      <ArtistList artists={artists} />
    )
  }
}

export default HomeView

