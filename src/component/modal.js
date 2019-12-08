//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,Dimensions,Modal,Share } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { WebView } from 'react-native-webview';
// create a component
class ModalComponent extends Component {
    constructor(props){
        super(props);
        
    }

    handleClose=()=>{
        return this.props.onClose();

    }
    handleShare=()=>{
      
    }
    render() {
        const {showModal,articleData} = this.props;
        const {url}=articleData;
        return (
         <Modal
         animationType="slide"
         transparent
         visible={showModal}
         onRequestClose={this.handleClose}
         >
             <Container style={{margin:15,marginBottom:0,backgroundColor:'#ffffff'}}>
                 <Header style={{backgroundColor:'#3366cc'}}>
                     <Left>
                         <Button onPress={this.handleClose}>
                             <Icon name="close" style={{color:'white',fontSize:12}}/>
                         </Button>
                     </Left>
                     <Body><Title children={articleData.title} style={{color:'white'}}></Title></Body>
                     <Right>
                        <Button onPress={this.handleShare}>
                             <Icon name="share" style={{color:'white',fontSize:12}}/>
                         </Button>
                     </Right>
                 </Header>
                 <Content>
                <WebView source={{uri:url}} style={{flex:1}}
                     onError={this.handleClose} startInLoading
                     
                     />
 
           

                 </Content>
             </Container>
             
         </Modal>
        );
    }
}

//make this component available to the app
export default ModalComponent;
