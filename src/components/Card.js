import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Card extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style = {styles.text}>{this.props.cardText}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: 
	{
	    alignItems: 'center',
	    justifyContent: 'center',
	    marginBottom:30
  	},
	card: 
	{
	    padding: 24,
	    height: 350,
	    width: 250,
	    backgroundColor: '#fff',
	    elevation:4,
		shadowOffset: { width: 0, height: 8 },
		shadowColor: "#000",
		shadowOpacity: 0.25,
		shadowRadius: 8,
		borderRadius: 3
	},
	text:
	{
		fontWeight:'bold',
		fontSize: 20
	}
});

export default Card;