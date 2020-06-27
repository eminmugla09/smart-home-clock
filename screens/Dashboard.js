import React, { Component } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart, Path } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import * as theme from '../theme';
import { Block, Text } from '../components';
import mocks from '../settings';



class Dashboard extends Component {
  static navigationOptions = {
    headerShown: false
  }

  
  render() {
    const { navigation, settings } = this.props;
    const WatchIcon = settings['clock'].icon;
    const TimerIcon = settings['timer'].icon;
    const WeatherIcon = settings['weather'].icon;
    const AniIcon = settings['animation'].icon;
    const SettingsIcon = settings['settings'].icon;
    const FireIcon = settings['fire-alarm'].icon;

    return (
      <Block style={styles.dashboard}>
        <Block column style={{ marginVertical: theme.sizes.base * 2, }}>
          
          <Text name>LED APP</Text>
        
        </Block>
        
        <Block row style={{ paddingVertical: 10 }}>
          <Block flex={1.5} row style={{ alignItems: 'flex-end', }}>
            
          </Block>
         
        </Block>

        <ScrollView contentContainerStyle={styles.buttons} showsVerticalScrollIndicator={false}>
          <Block column space="between">
            <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('ClockPage', { name: 'clock' })}
              >
                <Block center middle style={styles.button}>
                  <WatchIcon size={60} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['clock'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
              
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('TimerPage', { name: 'timer' })}
              >
                <Block center middle style={styles.button}>
                  <TimerIcon size={60} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['timer'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
            
            <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('WeatherPage', { name: 'weater' })}
              >
                <Block center middle style={styles.button}>
                  <WeatherIcon size={60} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['weather'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
              
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('AnimationPage', { name: 'animation' })}
              >
                <Block center middle style={styles.button}>
                  <AniIcon size={60} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['animation'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>

            <Block row space="around" style={{ marginVertical: theme.sizes.base }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Settings', { name: 'settings' })}
              >
                <Block center middle style={styles.button}>
                  <SettingsIcon size={60} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['settings'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
              
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('AlarmPage', { name: 'fire-alarm' })}
              >
                <Block center middle style={styles.button}>
                  <FireIcon size={60} />
                  <Text
                    button
                    style={{ marginTop: theme.sizes.base * 0.5 }}
                  >
                    {settings['fire-alarm'].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    )
  }
}

Dashboard.defaultProps = {
  settings: mocks,
}

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: theme.sizes.base * 2,
    marginBottom: -theme.sizes.base * 6,
    backgroundColor: theme.colors.gray,
    
   
  },
 
  
  
  buttons: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6,
  },
  button: {
    backgroundColor: theme.colors.button,
    width: 151,
    height: 151,
    borderRadius: 151 / 2,
  }
})
