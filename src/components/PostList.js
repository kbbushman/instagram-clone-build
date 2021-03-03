import Post from './Post';

function PostList({ posts }) {
  return posts.map((post, index) => <Post key={index} {...post} />);
}

export default PostList;
