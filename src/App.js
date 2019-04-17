import React, {Component} from 'react';
import HomeView from './HomeView'
import { Scene, Router } from 'react-native-router-flux'
import { Platform } from 'react-native'
import ArtistDetailView from './ArtistDetailView'

class App extends Component {


  render() {
    const isAndroid = Platform.OS === 'android'
    return(
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeView} hideNavBar/>
          <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAndroid}/>        
        </Scene>
      </Router>
    )
  }
}

export default App

