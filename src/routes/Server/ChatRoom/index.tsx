import React, { Component } from "react";

export class ChatRoom extends Component {
  componentDidMount() {
    const ws = new WebSocket("ws://127.0.0.1:4810/websocket");
    ws.onopen = this.onOpen;

    ws.onerror = evt => {
      console.log(evt);
    };
    ws.send("hello");
  }

  onOpen = () => {
    console.log("connected");
  };

  render() {
    return <div>ChatRoom</div>;
  }
}

export default ChatRoom;
