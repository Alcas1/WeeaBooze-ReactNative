import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet } from 'react-native';
import Card from './Card';
import Header from './Header';
import NextCardButton from './buttons/NextCardButton';
import CARDS from './../data/cardData.js'

class MainView extends Component {
	constructor(props) 
	{
		super(props);
		this.state = 
		{
			cards: CARDS,
			cardText: 'Click the "Next Card" button to start!'
		};
		this.changeNextCard = this.changeNextCard.bind(this);
	}

	changeNextCard(event)
	{
		if(this.state.cards.length>0)
		{
			randomCardIndex = Math.floor(Math.random()*this.state.cards.length);
			randomCard = this.state.cards.splice(randomCardIndex, 1)[0];
			cardText = this.generateCardText(randomCard);
		}
		else
		{
			cardText = 'No more cards left!'
		}
		this.setState(
		{
			cardText: cardText
		});
	}

	generateCardText(card)
	{
		return `${card.condition}, ${card.cost}`;
	}

	render()
	{
		return (
			<View style={styles.container}>
				<Header/>
				<Card cardText = {this.state.cardText}/>
				<NextCardButton action = {this.changeNextCard}/>
			</View>
		);
	}
}

const styles = StyleSheet.create(
{
	container: 
	{
		flex: 1,
		alignItems: 'center',
		paddingTop: 150,
		backgroundColor: 'rgb(255, 68, 127)'
	}
});

export default MainView;