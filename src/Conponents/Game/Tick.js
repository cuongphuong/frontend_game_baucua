import React, { Component } from 'react';

class Tick extends Component {
    render() {
        return (
            <span style={{ backgroundColor: this.props.color }} className="tick">{this.props.soLuong}</span>
        );
    }
}

export default Tick;
