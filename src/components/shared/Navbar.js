import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Avatar, Hidden, InputBase } from '@material-ui/core';
import {
  LoadingIcon,
  AddIcon,
  LikeIcon,
  LikeActiveIcon,
  ExploreIcon,
  ExploreActiveIcon,
  HomeIcon,
  HomeActiveIcon,

} from '../../icons';
import { useNavbarStyles } from '../../styles';
import logo from '../../images/logo.png';
import { defaultCurrentUser } from '../../data';

function Navbar({ minimalNavbar }) {
  const classes = useNavbarStyles();
  const history = useHistory();
  const path = history.location.pathname;

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
        {!minimalNavbar && (
          <>
            <Search />
            <Links path={path} />
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

function Links({ path }) {
  const classes = useNavbarStyles();
  const [showList, setList] = React.useState(false);

  function handleToggleList() {
    setList((prev) => !prev);
  }

  return (
    <div className={classes.linksContainer}>
      <div className={classes.linksWrapper}>
        <Hidden xsDown>
          <AddIcon />
        </Hidden>
        <Link to='/'>
          {path === '/' ? <HomeActiveIcon /> : <HomeIcon />}
        </Link>
        <Link to='/explore'>
          {path === '/explore' ? <ExploreActiveIcon /> : <ExploreIcon />}
        </Link>
        <div className={classes.notifications} onClick={handleToggleList}>
          {showList ? <LikeActiveIcon /> : <LikeIcon />}
        </div>
        <Link to={`/${defaultCurrentUser.username}`}>
          <div className={path === `/${defaultCurrentUser.username}` ? classes.profileActive : ''}>
          </div>
          <Avatar
            src={defaultCurrentUser.profile_image}
            className={classes.profileImage}
          />
        </Link>
      </div>
    </div>
  );
}


export default Navbar;
