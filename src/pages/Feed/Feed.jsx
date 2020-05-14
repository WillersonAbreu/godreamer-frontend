import React, { useState, useEffect } from 'react';

// Components
import NetworkContentLayout from '~/components/NetworkContentLayout/NetworkContentLayout';
import { Container } from './FeedStyles';
import PostForm from './components/PostForm/PostForm';
import Post from './components/Post/Post';

// Services
import FeedService from '~/services/api/Feed';
import { useSelector } from 'react-redux';

export default function Feed() {
  const userId = useSelector(state => state.user.id);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const response = await FeedService.index(userId);
      if (response.posts.length > 0) {
        setPostList(response.posts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NetworkContentLayout>
      <Container>
        <PostForm />
        {postList &&
          postList.map((post, index) => (
            <Post
              key={post.id}
              id={post.id}
              str_post={post.str_post}
              url_image={post.url_post}
              url_video={post.url_video}
              createdAt={post.createdAt}
              User={post.User}
            ></Post>
          ))}
      </Container>
    </NetworkContentLayout>
  );
}
