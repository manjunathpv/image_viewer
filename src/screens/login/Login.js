import React, { Component } from 'react';
import "./Login.css";
import Header from '../../common/header/Header';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            usernameRequired: 'dispNone',
            passwordRequired: 'dispNone',
            invalidLogin: 'dispNone'
        }
    }

    loginFieldsChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginButtonHandler = () => {
        const usernameCred = 'Abhishek';
        const passwordCred = 'Abhishek';
        this.setState({
            usernameRequired: 'dispNone',
            passwordRequired: 'dispNone',
            invalidLogin: 'dispNone'
        })
        this.state.username === '' ? this.setState({ usernameRequired: 'dispBlock' }) : this.setState({ usernameRequired: 'dispNone' });
        this.state.password === '' ? this.setState({ passwordRequired: 'dispBlock' }) : this.setState({ passwordRequired: 'dispNone' });
        if (this.state.username !== '' && this.state.password !== '') {
            (usernameCred === this.state.username && passwordCred === this.state.password) ? this.props.history.push('/home') : this.setState({ invalidLogin: 'dispBlock' });
            return;
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="login">
                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                LOGIN
                            </Typography><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" name="username" type="text" value={this.state.username} onChange={this.loginFieldsChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" name="password" type="password" value={this.state.password} onChange={this.loginFieldsChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                                <FormHelperText className={this.state.invalidLogin}>
                                    <span className="red">Incorrect username and/or password</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br /><br />

                            <Button variant="contained" onClick={this.loginButtonHandler} color="primary">
                                LOGIN
                            </Button>

                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;