import React, { useState, useEffect } from 'react';

const App = () => {
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  const handlePostsFetched = (posts) => {
    setPosts(posts);
  };

  useEffect(() => {
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=IGQVJXUVJmc0t0dDV4cjNxSDZAWYko5SUdpd1ZAmdkZAnZA0dESjhMS1IxaFZAtQ21KVlpfVVhEWldEb212S2FEOTZAKeU9Jbkd6d3hBNlRkb1RVMHRRWERnLW9WTzdjQllUZAVM3U1UwTUF3`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.error(data.error);
        } else {
          setProfile(data);
          handlePostsFetched(data.data);
        }
      });
  }, []);

  if (!profile) return <div>Loading...</div>;

  const renderPost = post => (
    <div key={post.id} className="post">
      <img src={post.media_url} alt={post.caption} width="250" />
      <p className="caption">{post.caption}</p>
      <p>Likes: {post.like_count || 0}</p>
      <p>Followers: {profile.followers_count || 0}</p>
      <p>Following: {profile.following_count || 3}</p>
    </div>
  );

  // const handlePostsClick = () => {
  //   // Show the posts in a vertical manner
  //   const postsContainer = document.querySelector(".posts");
  //   postsContainer.classList.add("vertical");
  // };

  return (
    <div className="App" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <h1>{profile.username}</h1>
      <div className="posts">
        <div className="reels-container">
          {posts.map(renderPost)}
        </div>
      </div>
     
    </div>
  );
};

export default App;