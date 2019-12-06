import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content,Text, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import moment from 'moment';
// create a component
class Time extends Component {
    constructor(props){
        super(props);
        this.date=props.time;

    }
	render() {
        const time=moment(this.date || moment.now()).fromNow();
		return (
			<Text note>{time}</Text>
		);
	}
}


//make this component available to the app
export default Time;