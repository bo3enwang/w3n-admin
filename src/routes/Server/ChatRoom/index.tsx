import React, { Component } from "react";
import { Button } from "antd";

export class ChatRoom extends Component {
  state = {
    messages: [""]
  };
  ws: WebSocket;
  // componentDidMount() {}

  openWebSocket = () => {
    this.ws = new WebSocket("ws://localhost:4810");

    this.ws.onopen = this.onOpen;
    this.ws.onerror = this.onError;
    this.ws.onmessage = this.onMessage;
  };

  onOpen = () => {
    this.ws.send("Hello websocket!");
    console.log("connected");
  };
  onError = evt => {
    console.log(evt);
  };
  onMessage = event => {
    console.log("Received data: " + event.data);
    const messages = this.state.messages;
    messages.push(event.data);
    this.setState({ messages });
  };

  sendLove = () => {
    if (this.ws.readyState) {
      this.ws.send("Hello my love!");
    }
  };

  render() {
    return (
      <div>
        <div>
          {this.state.messages.map(m => (
            <p key={m}>{m}</p>
          ))}
        </div>
        <div>
          <Button onClick={this.openWebSocket}>Test Connection</Button>
        </div>
        <div>
          <Button onClick={this.sendLove}>Send My Love</Button>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
