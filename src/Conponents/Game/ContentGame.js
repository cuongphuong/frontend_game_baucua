import React, { Component } from 'react';
import LacXiNgau from './LacXiNgau';
import { connect } from 'react-redux';
import LstAvatar from './LstAvatar';
import Tick from './Tick';

class ContentGame extends Component {
    handleKeyKetThucGame(event) {
        if (event.keyCode === 27) {
            this.props.handleKetThucGame()
        }
    }

    handleKeyPlayGame(event) {
        if (event.keyCode === 32) {
            this.props.handlePlayGame()
        }
    }

    render() {
        return (
            <div className="container" style={{ position: 'relative' }}>
                <div className="row">
                    <div className="col-md-12 content_avatar" style={{ textAlign: 'center' }}>
                        {this.props.StateGame.lstAvatar != null ? this.props.StateGame.lstAvatar.map((e, i) => <LstAvatar key={i} avatar={e.avatar} name={e.name} color={e.color} credit={e.credit} kqGame={e.kqGame}></LstAvatar>) : console.log()}
                    </div>
                    <div className="col-md-12">
                        <div className="banco">
                            <div className="line">
                                <span onClick={() => this.props.handleTick('nai')} className="co_nai"><img alt="" src="/img/nai.png" />
                                    <div className="tick-block">
                                        {
                                            this.props.StateGame.objCuoc.nai !== null ? this.props.StateGame.objCuoc.nai.map((e, i) => <Tick color={e.color} key={i} soLuong={e.soluong}></Tick>) : console.log()
                                        }
                                    </div>
                                </span>
                                <span onClick={() => this.props.handleTick('bau')} className="co_bau"><img alt="" src="/img/bau.jpg" />
                                    <div className="tick-block">
                                        {
                                            this.props.StateGame.objCuoc.bau !== null ? this.props.StateGame.objCuoc.bau.map((e, i) => <Tick color={e.color} key={i} soLuong={e.soluong}></Tick>) : console.log()
                                        }
                                    </div>
                                </span>
                                <span onClick={() => this.props.handleTick('ga')} className="co_ga"><img alt="" src="/img/ga.png" />
                                    <div className="tick-block">
                                        {
                                            this.props.StateGame.objCuoc.ga !== null ? this.props.StateGame.objCuoc.ga.map((e, i) => <Tick color={e.color} key={i} soLuong={e.soluong}></Tick>) : console.log()
                                        }
                                    </div>
                                </span>
                            </div>
                            <div className="line">
                                <span onClick={() => this.props.handleTick('ca')} className="co_tom"><img alt="" src="/img/ca.png" />
                                    <div className="tick-block">
                                        {
                                            this.props.StateGame.objCuoc.ca !== null ? this.props.StateGame.objCuoc.ca.map((e, i) => <Tick color={e.color} key={i} soLuong={e.soluong}></Tick>) : console.log()
                                        }
                                    </div>
                                </span>
                                <span onClick={() => this.props.handleTick('cua')} className="co_cua"><img alt="" src="/img/cua.jpg" />
                                    <div className="tick-block">
                                        {
                                            this.props.StateGame.objCuoc.cua !== null ? this.props.StateGame.objCuoc.cua.map((e, i) => <Tick color={e.color} key={i} soLuong={e.soluong}></Tick>) : console.log()
                                        }
                                    </div>
                                </span>
                                <span onClick={() => this.props.handleTick('tom')} className="co_ca"><img alt="" src="/img/tom.png" />
                                    <div className="tick-block">
                                        {
                                            this.props.StateGame.objCuoc.tom !== null ? this.props.StateGame.objCuoc.tom.map((e, i) => <Tick color={e.color} key={i} soLuong={e.soluong}></Tick>) : console.log()
                                        }
                                    </div>
                                </span>
                            </div>
                        </div>
                        {this.props.StateGame.isXiNgau === true ? <LacXiNgau></LacXiNgau> : console.log()}
                    </div>
                </div>
                {this.props.StateGame.isPlayGame === false && this.props.StateGame.isCloseGame === false ? this.props.StateGame.chuPhong === this.props.StateInfoUser.name ? <span className="playgame" onKeyDown={(event) => this.handleKeyPlayGame(event)} onClick={() => this.props.handlePlayGame()}><img alt="" src="/img/tap.png"></img></span> : <span className="playgame"><img alt="" src="/img/waiting.png"></img></span> : console.log()}
                {this.props.StateGame.isCloseGame === true ? <span className="playgame" onKeyDown={(event) => this.handleKeyKetThucGame(event)} onClick={() => this.props.handleKetThucGame()}><img alt="" src="https://endgamebastrop.com/wp-content/uploads/2017/08/Endgame-Logo-Blue-Black-01-1.png"></img></span> : console.log()}
            </div>

        );
    }
}

export default connect(function (state) {
    return { StateInfoUser: state.StateInfoUser, StateGame: state.StateGame }
})(ContentGame);