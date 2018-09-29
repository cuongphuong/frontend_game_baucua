import React, { Component } from 'react';

class ItemChat extends Component {
    render() {
        return (
            <div>
                <span className="chat_name">{this.props.chatname}</span> : <span className="chat_text">{this.props.chattext}</span>
            </div>
        );
    }
}

export default ItemChat;