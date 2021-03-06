import React, { Component } from 'react'
import '../css/Login.css'
import axios from 'axios'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { checkResponseStatus } from '../lib/request';
import ErrorMessage from './ErrorMessage';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            severity: ''
        }
        this.handleSubmitLoginForm = this.handleSubmitLoginForm.bind(this);
    }

    handleSubmitLoginForm(e) {
        e.preventDefault();
        axios({
            method: 'POST',
            data: {
                username: this.state.username,
                password: this.state.password
            },
            withCredentials: true,
            url: 'http://localhost:3001/login'
        }).then(res => {
            if (checkResponseStatus(res.data)) {
                this.props.history.push({
                    pathname: '/',
                    state: { authenticated: true }
                });
            } else {
                // console.error(res.data);
                this.setState({ errorMessage: res.data.body.errorMessage, severity: res.data.body.severity.toLowerCase() });
            }
        })

    }

    render() {

        return (
            <section className="login-section">
                <h1>Login (or <Link to='/register'>register</Link>)</h1>
                <form className="login-form" onSubmit={this.handleSubmitLoginForm}>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                    <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    <button type="submit" className="login-button" >Submit</button>
                </form>
                <ErrorMessage severity={this.state.severity} errorMessage={this.state.errorMessage} />
            </section>
        )
    }
}

export default withRouter(Login);