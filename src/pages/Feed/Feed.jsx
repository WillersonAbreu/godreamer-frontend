import React, { useState, useEffect } from 'react';

// Components
import NetworkContentLayout from '~/components/NetworkContentLayout/NetworkContentLayout';
import { Container } from './FeedStyles';
import PostForm from './components/PostForm/PostForm';
import Post from './components/Post/Post';

// Services
import FeedService from '~/services/api/Feed';
import { useSelector } from 'react-redux';

// Socket IO Imports
// import io from 'socket.io-client';

// Url import
import { GLOBAL_URL } from '~/global/shared/config';

export default function Feed() {
  const userId = useSelector(state => state.user.id);
  const [postList, setPostList] = useState([]);
  const [refresh] = useState(false);

  useEffect(() => {
    fetchPosts();

    // const socket = io(GLOBAL_URL);

    // socket.on('disconnect', () => {
    //   console.log('desconectando');
    //   socket.disconnect();
    // });

    // socket.on('receivedNewPost', async newPost => {
    //   setRefresh(!refresh);
    // });
  }, [refresh]);

  async function fetchPosts() {
    try {
      const response = await FeedService.index(userId);
      if (response.posts.length > 0) {
        const transformedPostList = [];

        // Modifying the image url and video url
        response.posts.map(post => {
          transformedPostList.push({
            User: {
              ...post.User,
              ProfileImage:
                post.User.ProfileImage === null
                  ? null
                  : `${GLOBAL_URL}static/profile/${post.User.ProfileImage.image_source}`
            },
            createdAt: post.createdAt,
            id: post.id,
            str_post: post.str_post,
            url_image:
              post.url_image === null
                ? null
                : `${GLOBAL_URL}static/post/${post.url_image}`,

            url_video:
              post.url_video === null
                ? null
                : `${GLOBAL_URL}static/post/${post.url_video}`,
            user_id: post.user_id
          });
          return null;
        });
        setPostList(transformedPostList);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NetworkContentLayout>
      <Container>
        <PostForm getPosts={fetchPosts} />
        {postList &&
          postList.map(post => (
            <Post
              key={post.id}
              id={post.id}
              str_post={post.str_post}
              url_image={post.url_image}
              url_video={post.url_video}
              createdAt={post.createdAt}
              User={post.User}
              getPosts={fetchPosts}
            ></Post>
          ))}
      </Container>
    </NetworkContentLayout>
  );
}
