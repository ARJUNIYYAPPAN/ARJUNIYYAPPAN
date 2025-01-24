import React, { useEffect, useState } from 'react';

function Apps() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((response) => response.json())
      .then((data) => {
        const posts = data.data.children.map((child) => child.data);
        setPosts(posts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>React js Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
            <p>By {post.score }</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Apps;
