import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

export class Signin extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  myChangeHandler = (e) => {
    const { username } = this.state;
    this.setState({
      [username]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Avatar style={{ marginLeft: '170px', backgroundColor: 'blue', marginTop: '300px' }} />
        <Typography component="h1" variant="h5" style={{ textAlign: 'center', marginTop: '10px' }}>
          Sign in
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this.myChangeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={this.myChangeHandler}
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
          >
            Sign In
          </Button>
        </form>
      </Container>
    );
  }
}

export default Signin;
