import React, { Component } from 'react';
import { connect } from 'react-redux';

class LacXiNgau extends Component {

    render() {
        return (
            <div className="lacxingau">
                <span><img alt="xx1" src={this.props.StateXiNgau.xingau1} width="65px" height="65px"></img></span>
                <span><img alt="xx2" src={this.props.StateXiNgau.xingau2} width="65px" height="65px"></img></span>
                <span><img alt="xx3" src={this.props.StateXiNgau.xingau3} width="65px" height="65px"></img></span>
            </div>
        );
    }
}

export default connect(function(state){
    return { StateXiNgau : state.StateXiNgau }
})(LacXiNgau);
