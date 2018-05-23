import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  GiftedChat
} from 'react-native-gifted-chat';

export default class Chat extends Component {

  state = {
    messages:[],
  };

  onSend = (messages = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
          name: 'Taro',
        }}
      />
    )
  }
}
