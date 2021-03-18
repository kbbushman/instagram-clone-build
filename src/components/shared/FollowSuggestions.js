import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from '@material-ui/core';
import Slider from 'react-slick';
import FollowButton from './FollowButton';
import { LoadingLargeIcon } from '../../icons';
import { useFollowSuggestionsStyles } from '../../styles';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getDefaultUser } from '../../data';

function FollowSuggestions() {
  const classes = useFollowSuggestionsStyles();

  let loading = false;

  return (
    <div className={classes.container}>
      <Typography
        color='textSecondary'
        variant='subtitle2'
        className={classes.typography}
      >
        Suggestions For You
      </Typography>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <Slider
          className={classes.slide}
          dots={false}
          speed={1000}
          touchThreshold={1000}
          slidesToScroll={3}
          easing='ease-in-out'
          variableWidth
          swipeToSlide
          arrows
          infinite
        >
          {Array.from({ length: 10 }, () => getDefaultUser()).map((user) => (
            <FollowSuggestionsItem key={user.id} user={user} />
          ))}
        </Slider>
      )}
    </div>
  );
}

function FollowSuggestionsItem({ user }) {
  const classes = useFollowSuggestionsStyles();
  const { profile_image, username, name } = user;

  return  (
    <div>
      <div className={classes.card}>
        <Link to={`/${username}`}>
          <Avatar
            src={profile_image}
            alt={`${username}'s profile`}
            classes={{
              root: classes.avatar,
              img: classes.avatarImg,
            }}
          />
        </Link>
        <Link to={`/${username}`}>
          <Typography
            variant='subtitle2'
            align='center'
            className={classes.text}
          >
            {username}
          </Typography>
        </Link>
        <Typography
          color='textSecondary'
          variant='body2'
          align='center'
          className={classes.text}
        >
          {name}
        </Typography>
        <FollowButton side={false} />
      </div>
    </div>
  );
}

export default FollowSuggestions;
