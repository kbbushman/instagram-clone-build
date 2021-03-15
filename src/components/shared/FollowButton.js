import React from 'react';
import { Button } from '@material-ui/core';
import { useFollowButtonStyles } from '../../styles';

function FollowButton({ side }) {
  const classes = useFollowButtonStyles({ side });
  const [isFollowing, setFollowing] = React.useState(false);

  const followButton = (
    <Button
      color='primary'
      variant={side ? 'text' : 'contained'}
      className={classes.button}
      onClick={() => setFollowing(true)}
      fullWidth
    >
      Follow
    </Button>
  );

  const followingButton = (
    <Button
      variant={side ? 'text' : 'outlined'}
      className={classes.button}
      onClick={() => setFollowing(false)}
      fullWidth
    >
      Following
    </Button>
  );

  return isFollowing ? followingButton : followButton;
}

export default FollowButton;
