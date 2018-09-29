import React, { Component } from 'react';

class LstAvatar extends Component {
    render() {
        return (
            <span className="avatar_uer" style={{ backgroundImage: 'url(' + this.props.avatar + ')' }}>
                <p className="avatar_uer_name">{this.props.name}</p>
                <p className="avatar_uer_credit">({this.props.credit})</p>
                <p style={{ color: this.props.color }} className="avatar_uer_kqGame">{this.props.kqGame}</p>
                <span className="avatar_uer_color" style={{ backgroundColor: this.props.color }}></span>
            </span>
        );
    }
}

export default LstAvatar;
