import React from 'react';

import PostItem from './postItem';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 className="not_found_posts">Posts not found!</h1>;
  }

  return (
    <div>
      <h1 className="list_title">{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={index + 1} key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
