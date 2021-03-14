import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  TextField,
  Typography
} from '@material-ui/core';
import SEO from '../components/shared/Seo';
import { useLoginPageStyles } from '../styles';
import FacebookIconBlue from '../images/facebook-icon-blue.svg';
import FacebookIconWhite from '../images/facebook-icon-white.png';

function LoginPage() {
  const classes = useLoginPageStyles();

  return (
    <>
      <SEO title='Login' />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} />
            <form>
              <TextField
                variant='filled'
                label='Username'
                margin='dense'
                className={classes.textField}
                autoComplete='username'
                fullWidth
              />
              <TextField
                variant='filled'
                label='Password'
                type='password'
                margin='dense'
                className={classes.textField}
                autoComplete='current-password'
                fullWidth
              />
              <Button
                variant='contained'
                color='primary'
                type='submit'
                className={classes.button}
                fullWidth
              >
                Login
              </Button>
            </form>
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant='body2' color='textSecondary'>
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>
            <LoginWithFacebook color='secondary' iconColor='blue' />
            <Button color='secondary' fullWidth>
              <Typography variant='caption'>
                Forgot Password?
              </Typography>
            </Button>
          </Card>
          <Card className={classes.signUpCard}>
            <Typography align='right' variant='body2'>
              Don't have an account?
            </Typography>
            <Link to='/accounts/emailsignup'>
              <Button color='primary' className={classes.signupButton}>
                Sign Up
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export function LoginWithFacebook({ color, iconColor, variant }) {
  const classes = useLoginPageStyles();
  const facebookIcon = iconColor === 'blue'
    ? FacebookIconBlue
    : FacebookIconWhite;

  return (
    <Button color={color} variant={variant} fullWidth>
      <img
        alt='Facebook Icon'
        src={facebookIcon}
        className={classes.facebookIcon}
      />
      Log In with Facebook
    </Button>
  );
}

export default LoginPage;
