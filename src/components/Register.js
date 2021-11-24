import axios from 'axios';
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import { checkResponseStatus } from '../lib/request';
import ErrorMessage from './ErrorMessage';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            errorMessage: '',
            severity: ''
        }
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleRegisterSubmit(e) {
        e.preventDefault();
        const { username, email, password } = this.state;

        axios({
            method: 'POST',
            data: {
                username,
                password,
                email
            },
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            },
            url: 'http://localhost:3001/register'
        }).then(res => {
            console.log(res);
            this.setState({
                // username: '',
                // email: '',
                // password: '',
                errorMessage: '',
                severity: ''
            })
            if (checkResponseStatus(res.data)) {
                this.setState({
                    username: '',
                    email: '',
                    password: '',
                })
                this.props.history.push('/login');
            } else {
                console.log(res.data)
                // this.setState({ errorMessage: res.data.body.errorMessage, severity: res.data.body.severity });
            }
        })
    }

    render() {
        return (
            <section className="login-section">
                <h1>Register (or <Link to='/login'>login</Link>)</h1>
                <form className="login-form" onSubmit={this.handleRegisterSubmit}>
                    <input type="email" placeholder="Es. gigi@gmail.com" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} required />
                    <input type="text" placeholder="Username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} required />
                    <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} required />
                    <button type="submit" className="login-button" >Submit</button>
                </form>
                <ErrorMessage severity={this.state.severity} errorMessage={this.state.errorMessage} />
            </section>
        )
    }
}

export default withRouter(Register);