import React from 'react';
import { UserContext } from '../App';

function Post({ image, content, user }) {
  const currentUser = React.useContext(UserContext);
  const isCurrentUser = currentUser === user;

  return (
    <>
      {image && (
        <img
          style={{height: 100, width: 100, objectFit: 'cover'}}
          src={URL.createObjectURL(image)}
          alt='Post Cover'
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && 'green' }}>{user}</div>
    </>
  );
}

export default Post;
