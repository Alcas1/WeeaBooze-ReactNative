import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class NextCardButton extends Component {
	render() 
	{
		return (
			<TouchableHighlight onPress={this.props.action}>
				<View style={styles.container}>
					<Text style={styles.title}>Next 💛 Card</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create(
{
	container: 
	{
  		backgroundColor: 'rgb(134, 0, 43)',
  		paddingHorizontal:32,
  		paddingVertical: 8,
  		width:170,
  		borderRadius:64,
	    alignItems: 'center',
	    justifyContent: 'center',
	    elevation:4,
	    shadowOffset: { width: 0, height: 8 },
		shadowColor: "#000",
		shadowOpacity: 0.25,
		shadowRadius: 8

  	},
  	title:
  	{
  		fontFamily: 'Avenir',
  		fontSize: 17,
  		color: '#fff'
  	}
});

export default NextCardButton;