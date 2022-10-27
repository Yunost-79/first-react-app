import React, { useMemo, useState } from 'react';
import './style/App.css';

import PostList from './componets/postList';

import PostForm from './componets/postForm';

import PostFilter from './componets/postFilter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aaaa', body: 'eeee' },
    { id: 2, title: 'bbbb', body: 'dddd' },
    { id: 3, title: 'cccc', body: 'cccc' },
    { id: 4, title: 'dddd', body: 'bbbb' },
    { id: 5, title: 'eeee', body: 'aaaa' },
  ]);

  //Фильтрация

  const [filter, setFilter] = useState({ sort: '', query: '' });

  //Сортировка постов
  const sortedPosts = useMemo(() => {
    console.log('work func getSortedPost');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  //Сортировка и поиск постов

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  //Создание постов

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  //Удаление постов

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove={removePost} posts={sortedAndSearchedPost} title={'Post list JS'} />
    </div>
  );
}

export default App;
