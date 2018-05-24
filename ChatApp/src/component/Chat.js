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
    messages: []
  };

  componentWillMount() {
    var data = require('../../data/message');
    var msg = data.get();
    setTimeout(() => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.prepend(previousState.messages, msg.reverse()),
        };
      });
    }, 1000);
  }
  onSend = (messages = []) => {
    fetch('http://localhost:3000/rooms', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages
      }),
    });

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
