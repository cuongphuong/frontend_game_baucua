import React, { Component } from 'react';
import ItemChat from './ItemChat';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value_mess: '',
            heightChat: '25px'
        }
    }

    handleChangeValueMess(evt) {
        this.setState({
            value_mess: evt.target.value
        });
    }

    handleSendChat() {
        if (this.state.value_mess.length > 1) {
            this.props.handleSendMessage(this.state.value_mess);
            this.setState({
                value_mess: '',
                heightChat: '25px'
            })
        }
    }

    handleKeyDownSendChat(event) {
        if (event.keyCode === 13) {
            this.handleSendChat()
        }
    }

    handleClickShowChat() {
        if (this.state.heightChat === '25px') {
            this.setState({
                heightChat: 'calc(50vh)'
            });
        } else {
            this.setState({
                heightChat: '25px'
            });
        }
    }

    render() {
        return (
            <div className="messages">
                <div className="list_mess" onClick={() => this.handleClickShowChat()} style={{ height: this.state.heightChat }}>
                    {
                        this.props.StateChat != null ? this.props.StateChat.map((e, i) => <ItemChat key={i} chatname={e.chat_user} chattext={e.message}></ItemChat>) : 'Chưa có tin nhắn nào.'
                    }
                </div>
                <input value={this.state.value_mess} onChange={evt => this.handleChangeValueMess(evt)} onKeyDown={(event) => this.handleKeyDownSendChat(event)} ref="mess_chat" placeholder="Nhập nội dung chat" className="input_chat"></input>
                <button onClick={() => this.handleSendChat()} className="w3-button w3-teal submit_chat">Send</button>
            </div>
        );
    }
}

export default Message;