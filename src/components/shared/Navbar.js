import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Hidden, InputBase } from '@material-ui/core';
import { LoadingIcon } from '../../icons';
import { useNavbarStyles } from "../../styles";
import logo from '../../images/logo.png';

function Navbar({ minimalNavbar }) {
  const classes = useNavbarStyles();

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
        {!minimalNavbar && (
          <>
            <Search />
            <Links />
          </>
        )}
      </section>
    </AppBar>
  );
}

function Logo() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.logoContainer}>
      <Link to='/'>
        <div className={classes.logoWrapper}>
          <img src={logo} alt='Instagram' className={classes.logo} />
        </div>
      </Link>
    </div>
  );
}

function Search() {
  const classes = useNavbarStyles();
  const [query, setQuery] = React.useState('');

  let loading = false;

  function handleClearInput() {
    setQuery('');
  }

  return (
    <Hidden xsDown>
      <InputBase
        placeholder='search'
        className={classes.input}
        onChange={(event) => setQuery(event.target.value)}
        startAdornment={<span  className={classes.searchIcon} />}
        endAdornment={
          loading ? (
            <LoadingIcon />
          ) : (
            <span className={classes.clearIcon} onClick={handleClearInput} />
          )
        }
        value={query}
      />
    </Hidden>
  );
}

function Links() {
  return (
    <div>Links</div>
  );
}


export default Navbar;
