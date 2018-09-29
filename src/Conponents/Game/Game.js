import React, { Component } from 'react';
import { connect } from 'react-redux';
import Progress from './Progress';
import ContentGame from './ContentGame';
import Message from './Message';
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            websocket: new WebSocket("ws://192.168.43.102:8091"),
            objTmp: null
        }
    }

    componentDidMount() {
        var ws = this.state.websocket;
        ws.onerror = () => {
            alert("Không thể kết nối đến server game");
        }
        ws.onopen = () => {
            var mess = {
                mess_type: 'set_name_resource',
                name: this.props.StateInfoUser.name
            }
            console.log('Connection is established!');
            ws.send(JSON.stringify(mess))
        };
        ws.onmessage = (event) => {
            var Data = JSON.parse(event.data);
            var { dispatch } = this.props;
            switch (Data.message_type) {
                case 'chat_message':
                    var item = {
                        'message': Data.message,
                        'chat_user': Data.chat_user,
                    }
                    dispatch({
                        type: 'ADD_NEW_CHAT',
                        item: item
                    });
                    break;
                case 'system_game':
                    switch (Data.command) {
                        case 'begin_game':
                            let item = { ...this.props.StateGame, isPlayGame: true }
                            dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: item });
                            break;
                        case 'cuoc':
                            break;
                        case 'waiting_user':
                            alert('Chờ người khác đã nhé');
                            break;
                        case 'ta':
                            // alert('Bắt đầu tả');
                            break;
                        case 'error':
                            alert(Data.message);
                            break;
                        case 'notcredit':
                            if (this.props.StateInfoUser.name === this.props.StateGame.chuPhong) {
                                alert(Data.message);
                                window.location.reload();
                            }
                            break;
                        default:
                            break
                    }
                    break;
                case 'updatecuoc':
                    if (this.props.StateGame.isCloseGame === false) {
                        let item1 = { ...this.props.StateGame, objCuoc: Data.data }
                        dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: item1 });
                    }
                    break;
                case 'xucxac':
                    dispatch({
                        type: 'RESET_XI_NGAU',
                    });

                    let item2 = { ...this.props.StateGame, isXiNgau: true }
                    dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: item2 });

                    setTimeout(function () {
                        var obj = {
                            xingau1: '/img/xingau/' + Data.data.xx1 + '.png',
                            xingau2: '/img/xingau/' + Data.data.xx2 + '.png',
                            xingau3: '/img/xingau/' + Data.data.xx3 + '.png',
                        };
                        dispatch({
                            type: 'ADD_XI_NGAU',
                            item: obj
                        });

                        // let item3 = { ...this.props.StateGame, isCloseGame: true, isPlayGame: false }
                        // dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: item3 });
                    }, 2000);
                    break;
                case 'persent_time':
                    let item4 = { ...this.props.StateGame, persent: Data.data }
                    dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: item4 });
                    break;
                case 'updateClient':
                    if (Data.data.isGame === true && this.props.StateGame.isPlayGame === true) {
                        console.log(Data.data);
                        //new redux
                        let item5 = { ...this.props.StateGame, isCloseGame: true, isPlayGame: false, lstAvatar: Data.data.lstavt, chuPhong: Data.data.chuphong }
                        this.setState({ objTmp: item5 });
                        setTimeout(function () {
                            if (this.state.objTmp !== null) {
                                //reset
                                item5 = { ...this.props.StateGame, lstAvatar: [], }
                                dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: item5 });
                                //
                                dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: this.state.objTmp });
                                this.setState({ objTmp: null });
                            } else {
                                console.log("Có lổi xảy ra, vui lòng tải tại trang!");
                            }
                        }.bind(this), 2000);
                    } else {
                        //new redux
                        let item5 = { ...this.props.StateGame, lstAvatar: [], }
                        dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: item5 });

                        item5 = { ...this.props.StateGame, lstAvatar: Data.data.lstavt, chuPhong: Data.data.chuphong }
                        dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: item5 });
                    }
                    break;
                default:
                    break;
            }
        };
    }

    handleSendMessage(mess_chat) {
        let ws = this.state.websocket;
        var messageJson = {
            mess_type: 'send_message',
            chat_user: this.props.StateInfoUser.name,
            chat_message: mess_chat
        }
        ws.send(JSON.stringify(messageJson));
    }

    handlePlayGame() {
        var mess = {
            mess_type: 'start_game'
        }
        let ws = this.state.websocket;
        ws.send(JSON.stringify(mess));
    }

    handleTick(quanCo) {
        if (this.props.StateGame.isTa === false) {
            var mess = {
                mess_type: 'dat_cuoc',
                name: this.props.StateInfoUser.name,
                quanco: quanCo
            }

            let ws = this.state.websocket;
            ws.send(JSON.stringify(mess));
        } else if (this.props.StateGame.isTa === true) {

        }
    }

    handleKetThucGame() {
        // new redux
        var { dispatch } = this.props;
        let item = { ...this.props.StateGame, isXiNgau: false, isCloseGame: false, objCuoc: { nai: null, bau: null, ga: null, ca: null, cua: null, tom: null } }
        dispatch({ type: 'CHANGE_ITEM_INFO_GAME', item: item });
    }

    render() {
        return (
            <div className="content_game">
                <Progress persent={this.state.persent}></Progress>
                <ContentGame handleKetThucGame={this.handleKetThucGame.bind(this)} handlePlayGame={this.handlePlayGame.bind(this)} handleTick={this.handleTick.bind(this)} objCuoc={this.state.objCuoc} lstAvatar={this.state.lstAvatar} isXiNgau={this.state.isXiNgau} isPlayGame={this.state.isPlayGame} isCloseGame={this.state.isCloseGame} chuPhong={this.state.chuPhong}></ContentGame>
                <Message handleSendMessage={this.handleSendMessage.bind(this)} heightChat={this.state.heightChat} StateChat={this.props.StateChat}></Message>
            </div>
        );

    }
}


export default connect(function (state) {
    return { StateInfoUser: state.StateInfoUser, StateChat: state.StateChat, StateGame: state.StateGame }
})(Game);