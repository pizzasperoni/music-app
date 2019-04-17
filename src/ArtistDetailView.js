import React, {Component} from 'react';
import ArtistBox from './ArtistBox'
import { View, StyleSheet } from 'react-native';

class ArtistDetailView extends Component {

  render() {
    const artist = this.props.artist
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 10
  }
})

export default ArtistDetailView

