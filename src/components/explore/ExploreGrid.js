import React from 'react';
import { Typography } from '@material-ui/core';
import GridPost from '../shared/GridPost';
import { useExploreGridStyles } from '../../styles';
import { LoadingLargeIcon } from '../../icons';
import { getDefaultPost } from '../../data';

function ExploreGrid() {
  const classes = useExploreGridStyles();

  let loading = false;

  return (
    <>
      <Typography
        color='textSecondary'
        variant='subtitle2'
        component='h2'
        className={classes.typography}
        gutterBottom
      >
        Explore
      </Typography>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <article className={classes.article}>
          <div className={classes.postContainer}>
            {Array.from({ length: 20 }, () => getDefaultPost()).map((post) => (
              <GridPost key={post.id} post={post} />
            ))}
          </div>
        </article>
      )}
    </>
  );
}

export default ExploreGrid;
