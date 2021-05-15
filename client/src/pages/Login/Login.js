import React, {Component} from 'react';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import {login} from '../../store/actions/auth';
import {connect} from 'react-redux';

import './Login.scss';


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


class Login extends Component {

    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: '',
            password: '',
            loading: false,
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    async handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });

        this.form.validateAll();

        const {dispatch, history} = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(await login(this.state.email, this.state.password))
                .then(() => {
                    // history.push('');
                    // window.location.reload();
                })
                .catch(() => {
                    this.setState({
                        loading: false,
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
    }


    render() {
        const {message} = this.props;

        const {email, password, loading} = this.state


        return (
            <div className="login">
                <Form className="loginForm"
                      onSubmit={this.handleLogin}
                      ref={(c) => {
                          this.form = c;
                      }}
                >
                    <h2>КРОК</h2>
                    <span>Атворизуйтесь для работы с приложением</span>
                    <label htmlFor="email">E-mail</label>
                    <Input
                        type="email"
                        id="emailInput"
                        name="email"
                        value={email}
                        onChange={this.onChangeEmail}
                        validations={[required]}
                    />
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        id="passwordInput"
                        name="password"
                        value={password}
                        onChange={this.onChangePassword}
                        validations={[required]}
                    />
                    <button id="loginBtn" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                    </button>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{display: 'none'}}
                        ref={(c) => {
                            this.checkBtn = c;
                        }}
                    />
                </Form>
            </div>
        );
    }
};

function mapStateToProps(state) {
    const {isLoggedIn} = state.auth;
    const {message} = state.message;
    return {
        isLoggedIn,
        message,
    };
}

export default connect(mapStateToProps)(Login);
