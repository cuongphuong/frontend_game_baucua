import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Register extends Component {

    handleRegister(e) {
        e.preventDefault();
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        var repassword = this.refs.repassword.value;

        if (password === repassword) {
            var formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);
            formData.append('repassword', repassword);

            fetch('http://192.168.43.102/chat2/function/register.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(response => {
                    alert(response.message);
                })
                .catch(error => console.log('Không thể kết nối đến server'));
        } else {
            alert('Xác nhận mật khẩu không khớp');
        }
    }
    render() {
        return (
            <div className="login-form">
                <form>
                    <h2 className="text-center">Register</h2>
                    <div className="form-group">
                        <input ref="username" type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input ref="password" type="password" className="form-control" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group">
                        <input ref="repassword" type="password" className="form-control" placeholder="RePassword" required="required" />
                    </div>
                    {/* <div className="form-group">
                        <input ref="avatar" type="file" className="form-control" name="avatar"/>
                    </div> */}
                    <div className="form-group">
                        <button onClick={this.handleRegister.bind(this)} className="btn btn-primary btn-block">Register</button>
                    </div>
                    <div className="clearfix">
                        {/* <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label> */}
                        {/* <a href="/" className="pull-right">Forgot Password?</a> */}
                    </div>
                </form>
                <p className="text-center"><Link to="/login">I have a account</Link></p>
            </div>
        );
    }
}

export default Register;