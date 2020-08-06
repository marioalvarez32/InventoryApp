import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './Styles/signIn.css';
import Container from '@material-ui/core/Container';

export class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  // Method to handle the submission of the form

  handleSubmit = (e) => {
    // const { username, password } = this.state;
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
    // eslint-disable-next-line no-console
    console.log(this.state);
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
      <Container component="main" maxWidth="xs">
        <Avatar className="sign-avatar" />
        <Typography component="h1" variant="h5" className="sign-topography">
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
    );
  }
}

export default Signin;
