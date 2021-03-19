import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Typography, Hidden, TextField } from '@material-ui/core';
import {
  CommentIcon,
  LikeIcon,
  MoreIcon,
  RemoveIcon,
  SaveIcon,
  ShareIcon,
  UnlikeIcon
} from '../../icons';
import { usePostStyles } from '../../styles';
import UserCard from '../shared/UserCard';
import PostSkeleton from './PostSkeleton';
import OptionsDialog from '../shared/OptionsDialog';
import { defaultPost } from '../../data';


function Post() {
  const classes = usePostStyles();
  const [loading, setLoading] = React.useState(true);
  const [showOptionsDialog, setOptionsDialog] = React.useState(false);
  const { id, media, likes, user, caption, comments } = defaultPost;

  setTimeout(() => setLoading(false), 2000);
  if (loading) return <PostSkeleton />

  return (
    <div className={classes.postContainer}>
      <article className={classes.article}>
        {/* POST HEADER */}
        <div className={classes.postHeader}>
          <UserCard user={user} avatarSize={32} />
          <MoreIcon className={classes.MoreIcon} onClick={() => setOptionsDialog(true)} />
        </div>
        {/* POST IMAGE */}
        <div className={classes.postImage}>
          <img src={media} alt='Post media' className={classes.image} />
        </div>
        {/* POST BUTTONS */}
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton />
          </div>
          <Typography className={classes.likes} variant='subtitle2'>
            <span>{likes === 1 ? '1 like' : `${likes} likes`}</span>
          </Typography>
          <div className={classes.postCaptionContainer}>
            <Typography
              variant='body2'
              component='span'
              className={classes.postCaption}
              dangerouslySetInnerHTML={{ __html: caption }}
            />
            {comments.map((comment) => (
              <div key={comment.id}>
                <Link to={`/${comment.user.username}`}>
                  <Typography
                    variant='subtitle2'
                    component='span'
                    className={classes.commentUsername}
                  >
                    {comment.user.username}
                  </Typography>{' '}
                  <Typography variant='body2' component='span'>
                    {comment.content}
                  </Typography>
                </Link>
              </div>
            ))}            
          </div>
          <Typography color='textSecondary' className={classes.datePosted}>
            5 DAYS AGO
          </Typography>
          <Hidden xsDown>
            <div className={classes.comment}>
              <Divider />
              <Comment />
            </div>
          </Hidden>
        </div>
      </article>
      {showOptionsDialog && <OptionsDialog onClose={() => setOptionsDialog(false)} />}
    </div>
  );
}

function LikeButton() {
  const classes = usePostStyles();
  const [liked, setLiked] = React.useState(false);
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.liked : classes.like;
  const onClick = liked ? handleUnlike : handleLike;

  function handleLike() {
    console.log('Liked');
    setLiked(true);
  }

  function handleUnlike() {
    console.log('Liked');
    setLiked(false);
  }

  return <Icon className={className} onClick={onClick} />;
}

function SaveButton() {
  const classes = usePostStyles();
  const [saved, setSaved] = React.useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;
  const onClick = saved ? handleRemove : handleSave;

  function handleSave() {
    console.log('Saved');
    setSaved(true);
  }

  function handleRemove() {
    console.log('Removed');
    setSaved(false);
  }

  return <Icon className={classes.saveIcon} onClick={onClick} />;
}

function Comment() {
  const classes = usePostStyles();
  const [content, setContent] = React.useState('');

  return (
    <div className={classes.commentContainer}>
      <TextField
        placeholder='Add a comment...'
        value={content}
        rowsMax={2}
        rows={1}
        className={classes.textField}
        onChange={(event) => setContent(event.target.value)}
        InputProps={{
          classes: {
            root: classes.root,
            underline: classes.underline,
          },
        }}
        multiline
        fullWidth
      />
      <Button
        color='primary'
        className={classes.commentButton}
        disabled={!content.trim()}
      >
        Post
      </Button>
    </div>
  );
}

export default Post;
