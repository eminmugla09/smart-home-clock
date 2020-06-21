import React, { Component } from 'react'
import { StyleSheet,View,KeyboardAvoidingView,Platform,StatusBar,ImageBackground,ActivityIndicator, TouchableWithoutFeedback, Slider } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';
import { Block, Text, PanSlider } from '../components';
import mocks from '../settings';
import {fetchLocationId,fetchWeather,} from '../utils/api';
import getImageForWeather from '../utils/getImageForWeather';

import SearchInput from '../components/SearchInput';

class Settings extends Component {
  static navigationOptions = {
    headerLeft: ({ onPress }) => (
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <FontAwesome size={theme.sizes.font * 1.5} color={theme.colors.black} name="arrow-left" />
      </TouchableWithoutFeedback>
    ),
    headerLeftContainerStyle: {
      paddingLeft: theme.sizes.base * 2
    },
    headerStyle: {
      borderBottomColor: 'transparent',
    }
  };

  state = {
    loading:false,
    error:false,
    location: '',
    temperature:0,
    weather:'',
};


  renderController() {
    return (
      <Block flex={1} right style={styles.controller}>
        <Block center style={styles.controllerValue}>
          <Text color="white">34</Text>
        </Block>
        <Block flex={0.8} style={[styles.controllerOverlay]} />
      </Block>
    )
  }

  state = {
    loading:false,
    error:false,
    location: '',
    temperature:0,
    weather:'',
};

componentDidMount() {
  this.handleUpdateLocation('Miami');
}

handleUpdateLocation = async city => {
if(!city) return;

this.setState({loading:true}, async ()=>{
  try {
   const locationId= await fetchLocationId(city);
   const{location,weather,temperature} =await fetchWeather(
     locationId,
   );

   this.setState({
    loading:false,
    error:false,
    location,
    weather,
    temperature,
   });
  } catch (e){
    this.setState({
      loading: false,
      error:true,
    });
  }
});
};
toFahrenheit() {
  return (temperature * 9 / 5) + 32;
}


  render() {
    const { navigation, settings } = this.props;
    const name = navigation.getParam('name');
    const Icon = settings[name].icon;
    const {location} = this.state;
    const {loading,error,weather,temperature} = this.state;
  
    
    return (
      <Block flex={1} style={styles.settings}>
       <KeyboardAvoidingView style={styles.container} behavior="padding">
        
        <ImageBackground 
            source={getImageForWeather(weather)}
            style={styles.imageContainer}
            imageStyle={styles.image} 
            >

            <View style={styles.detailsContainer}>
              
            <StatusBar barStyle="light-content" />
              <ActivityIndicator animating={loading} color="white" size="large" />
              
              {!loading && (
                <View>
                  {error && (
                    <Text style={[styles.smallText,styles.textStyle]}>Could not load weather, please try a different city.</Text>
                  )}
                  {!error && (
                    <View>
                      <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
                      <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                      <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}°F`}</Text>
                    </View>
                  )}
                  

                  <SearchInput
                    placeholder="Search a city" 
                    onSubmit={this.handleUpdateLocation} 
                  />
                </View>
              )}
            </View>
        </ImageBackground>
      </KeyboardAvoidingView>
      </Block>
    )
  }
}

Settings.defaultProps = {
  settings: mocks,
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS==='ios' ? 'AvenirNext-Regular' : 'Roboto',
    color:'white',
},
  largeText:{
    fontSize: 44,
  },
  smallText:{
    fontSize: 18,
  },
  settings: {
    padding: theme.sizes.base * 2,
  },
  slider: {

  }
  
})

