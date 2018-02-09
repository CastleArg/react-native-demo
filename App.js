import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';
export default class App extends React.Component {
  state = {
    places: []
  };

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: this.state.places.concat(placeName)
      }
    });
  };

  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((x, i) => {
          return i !== index;
        })
      }
    }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput onPlaceAdded={this.placeAddedHandler} />
        <PlacesList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
