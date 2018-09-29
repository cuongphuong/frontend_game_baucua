import React, { Component } from 'react';
import { connect } from 'react-redux';

class Logout extends Component {
    componentDidMount() {
        document.cookie = 'baucua_username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        var { dispatch } = this.props;

        var obj = {
            'login': false,
            'name': null
        };

        dispatch({
            type: 'ADD_INFO_USER',
            item: obj
        });
        window.location = "/login";
    }

    handleLogout() {

    }

    render() {
        return (
            <div className="logout">
                <button className="btn_logout" onClick={() => this.handleLogout()}>Logout</button>
            </div>
        );
    }
}

export default connect(function (state) {
    return { StateInfoUser: state.StateInfoUser }
})(Logout);