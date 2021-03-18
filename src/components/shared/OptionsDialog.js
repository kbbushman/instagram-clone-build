import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dialog, Divider, Zoom } from '@material-ui/core';
import { useOptionsDialogStyles } from '../../styles';
import { defaultPost } from '../../data';

function OptionsDialog({ onClose }) {
  const classes = useOptionsDialogStyles();

  return (
    <Dialog
      classes={{
        scrollPaper: classes.dialogScrollPaper
      }}
      onClose={onClose}
      TransitionComponent={Zoom}
      open
    >
      <Button className={classes.redButton}>
        Unfollow
      </Button>
      <Divider />
      <Button className={classes.button}>
        <Link to={`/p/${defaultPost.id}`}>
          Go to post
        </Link>
      </Button>
      <Divider />
      <Button className={classes.button}>
        Share
      </Button>
      <Divider />
      <Button className={classes.button}>
        Copy Link
      </Button>
      <Button className={classes.button} onClick={onClose}>
        Cancel
      </Button>
    </Dialog>
  );
}

export default OptionsDialog;
