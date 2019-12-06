import React, { Component } from 'react';
import { Container, Header, Content,Text, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import {Alert,View} from 'react-native';
import TimeAgo from '../component/time'
class DataItem extends Component{
    constructor(props){
        super(props);
        this.data=props.data;
    }
    render(){
        return(
            <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: this.data.urlToImage !=null? this.data.urlToImage:'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg'}} />
            </Left>
            <Body>
              <Text numberOfLines={2}>{this.data.title}</Text>
              <Text note numberOfLines={2}>{this.data.description}</Text>
              <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                  <Text note>{this.data.source.name} </Text>
                  <TimeAgo time={this.data.publishedAt}/>

              </View>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
            </ListItem>
              

        )
    }
}
export default DataItem;