import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component 
{
	render() 
	{
		return (
			<View style={styles.container}>
				<Text style={styles.title}>WeeaBooze 🍶</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create(
{
	container: 
	{
		marginBottom:15,
	    alignItems: 'center',
	    justifyContent: 'center'
  	},
  	title:
  	{
  		fontFamily: 'Avenir',
  		textShadowColor: 'rgb(134, 0, 43)',
        textShadowOffset: {width: 1, height: 3},
        textShadowRadius: 3,
  		fontStyle:'italic',
  		fontWeight:'bold',
  		fontSize: 30,
  		color: '#fff'
  	}
});

export default Header;