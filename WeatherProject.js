import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from "react-native";

import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", forecast: null };
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      this.setState({ forecast: forecast });
    });
  };

  render() {
    let content = null;
    if (this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      );
    }
    return (
     
     <ImageBackground
  source={require('./wonosobo.jpg')}
  style={{width: '100%', height: '100%'}}
> 
<Text style={[styles.largeText, styles.textStyle]}>Tugas 2 Weather App</Text>
          <View style={styles.overlay}>
            <View style={styles.row}>
                 <TextInput
          autoCorrect={false}
          placeholder="Silahkan masukkan lokasi"
          placeholderTextColor="#bdc3c7"
          style={[styles.textInput, styles.opa]}
          onSubmitEditing={this._handleTextChange}
          clearButtonMode="always"
          />
              <View style={styles.zipContainer}>
               
              </View>
            </View>
            {content}
          </View>
<Text style={[styles.largeText2, styles.textStyle, styles.black]}>Ikhsan Andriyawan 😎</Text>
<Text style={[styles.largeText2, styles.textStyle, styles.black]}>2015150086</Text>    
      </ImageBackground>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 30 },
  backdrop: { flex: 1, flexDirection: "column" },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 50
  },
  submitButton: {
      backgroundColor: '#fff',
      borderBottomColor: '#4CAF50',
      padding: 10,
      margin: 15,
      height: 40,
      width: 300,
      alignSelf: 'center',
   },
   submitButtonText:{
      color: '#000',
      alignSelf: 'center',
   },

  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },

  textStyle: {
    backgroundColor: '#000000',
    opacity: 0.5,
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: 'white',
    paddingTop: 30,
  },
   largeText2: {
    fontSize: 30,
  },

  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: { flex: 1, flexBasis: 1, width: 50, height: baseFontSize },
  mainText: { fontSize: baseFontSize, color: "#FFFFFF" }
});

export default WeatherProject;
