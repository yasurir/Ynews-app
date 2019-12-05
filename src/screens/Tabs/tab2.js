import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
       
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg' }} />
              </Left>
              <Body>
                <Text>news 1</Text>
                <Text note numberOfLines={2}>Its time to build a difference . .Its time to build a difference . .Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg' }} />
              </Left>
              <Body>
                <Text>news 1</Text>
                <Text note numberOfLines={2}>Its time to build a difference . .Its time to build a difference . .Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg' }} />
              </Left>
              <Body>
                <Text>news 1</Text>
                <Text note numberOfLines={2}>Its time to build a difference . .Its time to build a difference . .Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg' }} />
              </Left>
              <Body>
                <Text>news 1</Text>
                <Text note numberOfLines={2}>Its time to build a difference . .Its time to build a difference . .Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}