import React, { Component } from 'react'
import '../css/Login.css'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <section className="login-section">
                <h1>Login</h1>
                <form className="login-form">
                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                    <button type="button">Submit</button>
                </form>
            </section>
        )
    }
}
