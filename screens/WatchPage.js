import React, { Component } from 'react'
import { StyleSheet, TouchableWithoutFeedback, Slider } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';
import { Block, Text, PanSlider } from '../components';
import mocks from '../settings';

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
    direction: 45,
    speed: 12,
  }

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

  render() {
    const { navigation, settings } = this.props;
    const name = navigation.getParam('name');
    const Icon = settings[name].icon;
    
    return (
      <Block flex={1} style={styles.settings}>
        <Block flex={0.5} row>
          <Block column>
            <Icon size={theme.sizes.font * 4} color={theme.colors.gray2} />
            
            <Text caption>Watch</Text>
          </Block>
        </Block>
        <Block flex style={{ paddingTop: theme.sizes.base * 2 }}>
          
          
          
        </Block>
      </Block>
    )
  }
}

Settings.defaultProps = {
  settings: mocks,
}

export default Settings;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
  slider: {

  }
})