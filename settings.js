import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as theme from './theme';

export default {
  'watch': {
    name: 'Watch',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="clock"
        {...props}
      />
    ),
  },
  'timer': {
    name: 'Timer',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="pause-circle"
        {...props}
      />
    ),
  },
  'weater': {
    name: 'Weater',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="temperature-celsius"
        {...props}
      />
    ),
  },
  'animation': {
    name: 'Animation',
    icon: ({size, color, ...props}) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="animation"
        {...props}
      />
    ),
  },
  'settings': {
    name: 'Settings',
    icon: ({size, color, ...props}) => (
      <FontAwesome
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="gears"
        {...props}
      />
    ),
  },
  'games': {
    name: 'Games',
    icon: ({size, color, ...props}) => (
      <MaterialIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="gamepad"
        {...props}
      />
    ),
  
},


};