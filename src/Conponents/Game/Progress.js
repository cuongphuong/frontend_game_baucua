import React, { Component } from 'react';
import { connect } from 'react-redux';

class Progress extends Component {
    render() {
        return (
            <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={this.props.StateGame.persent} aria-valuemin={0} aria-valuemax={100} style={{ width: this.props.StateGame.persent + '%' }}>
                </div>
            </div>
        );
    }
}

export default connect(function (state) {
    return { StateGame: state.StateGame }
})(Progress);