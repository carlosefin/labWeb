import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Grid, Container } from '@material-ui/core';
import { Email, Lock } from '@material-ui/icons';
import useStyles from './AuthStyles'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext'
import Register from './Register/Register';

export const AuthContext = React.createContext();

export const SignIn = () => {

  const history = useHistory();

  const [data, setData] = useState({
    email: '',
    name: '',
    lastName: '',
    city: '',
    country: '',
    gender: '',
    bday: '',
    password: '',
    LADA: '',
    phoneNumber: ''
  });

  const [registerB, setRegisterB] = useState({
    showUser: false,
  });

  const [loading, setLoading] = useState(false);

  let classChange = false;

  const { signUp, login } = useAuth();

  const handleSuccessfulAuth = () => {
    history.push("/");
  }

  const classes = useStyles();

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value })
  };

  const registerContent = (e) => {
    e.preventDefault();
    setRegisterB({ showUser: true })
  }

  const loginContent = (e) => {
    e.preventDefault();
    setRegisterB({ showUser: false })
  }

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signUp(data);
      handleSuccessfulAuth();
    }
    catch { console.log('error when creating an account') }
    setLoading(false);
  }

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(data);
      handleSuccessfulAuth();
    }
    catch { console.log('error al iniciar sesion') };
    setLoading(false);
  }

  let content = null;

  let register = null;

  let nevermind = null;

  let loginButton = (
    <Grid item xs='8'>
      <Button
        type="submit"
        onClick={onLoginSubmit}
        fullWidth
        color="primary"
        variant="outlined"
        className={classes.submit}
      >
        Log In
    </Button>
    </Grid>
  );

  let donthave = (
    <Grid item xs='8'>
      <Button
        onClick={registerContent}
        type="submit"
        fullWidth
        color="secondary"
        variant="outlined"
        className={classes.submit}
      >
        Create Account
    </Button>
    </Grid>
  );

  if (registerB.showUser) {
    classChange = true;
    content = (
      <Register
        handleChange={handleChange}
        data={data}
      />
    );
    loginButton = null;
    donthave = null;
    register =
      <Grid item xs='8'>
        <Button
          type="submit"
          disabled={loading}
          fullWidth
          color="primary"
          variant="outlined"
          onClick={onRegisterSubmit}
          className={classes.submit}
        >
          Register
        </Button>
      </Grid>;

    nevermind =
      <Grid item xs='8'>
        <Button
          onClick={loginContent}
          type="submit"
          fullWidth
          color="secondary"
          variant="outlined"
          size="small"
          className={classes.submit}
        >
          I have an account
        </Button>
      </Grid>
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classChange ? classes.paper2 : classes.paper}>
        <form className={classes.form} noValidate>
          <div className={classes.margin}>
            <Grid
              container spacing={1}
              alignItems="flex-end"
              justify="center"
            >
              {content}
              <Grid item xs='1'>
                <Email />
              </Grid>
              <Grid item xs='11'>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs='1'>
                <Lock />
              </Grid>
              <Grid item xs='11'>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={data.password}
                  onChange={handleChange}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid >
                {loginButton}
                {register}
                {donthave}
                {nevermind}
            </Grid>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;