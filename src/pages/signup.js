import React from 'react';
import {
  Button,
  Card,
  TextField,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSignUpPageStyles } from '../styles';
import SEO from '../components/shared/Seo';
import { LoginWithFacebook } from './login';

function SignUpPage() {
  const classes = useSignUpPageStyles();

  return (
    <div>
      <SEO title='Sign Up' />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <div className={classes.cardHeader} />
            <Typography className={classes.cardHeaderSubHeader}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <LoginWithFacebook color='primary' iconColor='white' variant='contained' />
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant='body2' color='textSecondary'>
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>
            <form>
              <TextField
                variant='filled'
                label='Email'
                type='email'
                margin='dense'
                className={classes.textField}
                fullWidth
              />
              <TextField
                variant='filled'
                label='Full Name'
                margin='dense'
                className={classes.textField}
                fullWidth
              />
              <TextField
                variant='filled'
                label='Username'
                margin='dense'
                autoComplete='username'
                className={classes.textField}
                fullWidth
              />
              <TextField
                variant='filled'
                label='Password'
                type='password'
                autoComplete='new-password'
                margin='dense'
                className={classes.textField}
                fullWidth
              />
              <Button
                variant='contained'
                color='primary'
                type='submit'
                className={classes.button}
                fullWidth
              >
                Sign Up
              </Button>
            </form>
          </Card>
          <Card className={classes.loginCard}>
            <Typography align='right' variant='body2'>
              Have an account?
            </Typography>
            <Link to='/accounts/login'>
              <Button color='primary' className={classes.loginButton}>
                Log In
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </div>
  );
}

export default SignUpPage;
