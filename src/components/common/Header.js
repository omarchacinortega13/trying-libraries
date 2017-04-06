import React from 'react';
import { View, Text } from 'react-native';

const Header = ({headerText}) => {
  const {
    viewStyle,
    textStyle
  } = styles
  
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  )
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
  
};

export { Header };