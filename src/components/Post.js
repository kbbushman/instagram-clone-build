import React from 'react';

function Post({ image, content, user }) {
  return (
    <React.Fragment>
      {image && (
        <img
          style={{height: 100, width: 100, objectFit: 'cover'}}
          src={URL.createObjectURL(image)}
          alt='Post Cover'
        />
      )}
      <p>{content}</p>
      <div>{user}</div>
    </React.Fragment>
  );
}

export default Post;
