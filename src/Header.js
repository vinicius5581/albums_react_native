import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Header extends Component {
  render() {
    const {viewStyle, textStyle} = styles;
    const {headerText} = this.props;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: .2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20
  }
}
