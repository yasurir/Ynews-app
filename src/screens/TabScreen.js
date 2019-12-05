import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Left, Body, Right, Title} from 'native-base';
import Tab1 from './Tabs/tab1';
import Tab2 from './Tabs/tab2';
import Tab3 from './Tabs/tab3';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#3366cc'}}hasTabs>
        <Left/>
          <Body>
            <Title>YNews App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab tabStyle={{backgroundColor:'#3366cc'}} activeTabStyle={{backgroundColor:'#193366'}} heading="Entertainment">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#3366cc'}} activeTabStyle={{backgroundColor:'#193366'}} heading="Sports">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#3366cc'}} activeTabStyle={{backgroundColor:'#193366'}} heading="whether">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}