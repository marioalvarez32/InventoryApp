import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './Styles/signIn.css';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // userSeller: {
      //   username: 'seller',
      //   password: 'seller1',
      //   error: '',
      // },
    };
  }

  // Method to handle the submission of the form
  handleSubmit = (e) => {
    const { username, password } = this.state;
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    const hardcodedCred = {
      username: 'seller',
      password: 'seller1',
    };
    if (username === hardcodedCred.username && password === hardcodedCred.password) {
      <Redirect to="/SellerPage" />;
      // eslint-disable-next-line no-console
      console.log(password);
    }
  };

  // method to handle the changes in the form

  myChangeHandler = (e) => {
    // const { username, password } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Method to reset form after submission

  resetForm() {
    this.setState({
      password: '',
      username: '',
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="sign-in">
        <div className="sign-in__container">
          <div className="sign-in__box">
            <Container component="main" maxWidth="xs">
              <div className="sign-in__avatar">
                <Avatar />
              </div>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={username}
                  id="email"
                  label="Email Address"
                  name="username"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => this.myChangeHandler(e)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => this.myChangeHandler(e)}
                  autoComplete="current-password"
                />
                {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px' }}
                  onSubmit={(e) => {
                    this.handleSubmit(e);
                  }}
                >
                  Sign In
                </Button>
              </form>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
