import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
    setCookie = (cname, cvalue, exdays) => {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    login = (e) => {
        e.preventDefault();
        var username = this.refs.username.value;
        var pass = this.refs.password.value;
        var fromData = new FormData();
        fromData.append('username', username);
        fromData.append('password', pass);
        fetch('http://192.168.43.102/chat2/function/login.php', {
            method: 'POST',
            body: fromData
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === true) {
                    console.log(response);
                    var infoUser = JSON.parse(response.info);

                    this.setCookie("baucua_username", infoUser[0].user_name, 1);

                    var { dispatch } = this.props;

                    var obj = {
                        'login': true,
                        'name': infoUser[0].user_name
                    };

                    dispatch({
                        type: 'ADD_INFO_USER',
                        item: obj
                    });
                    window.location = "/game";
                }
            })
            .catch(error => console.log("Không thể kết nối tới server"));
    }

    componentWillMount() {
        if (this.props.StateInfoUser.login === true) {
            window.location = "/game";
        }
    }

    render() {
        return (
            <div className="login-form">
                <form>
                    <h2 className="text-center">Log in</h2>
                    <div className="form-group">
                        <input ref="username" type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input ref="password" type="password" className="form-control" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group">
                        <button onClick={this.login.bind(this)} className="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div className="clearfix">
                        {/* <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label> */}
                        <a href="/" className="pull-right">Forgot Password?</a>
                    </div>
                </form>
                <p className="text-center"><Link to="/register">Create an Account</Link></p>
            </div>
        );
    }
}

export default connect(function (state) {
    return { StateInfoUser: state.StateInfoUser }
})(Login);
