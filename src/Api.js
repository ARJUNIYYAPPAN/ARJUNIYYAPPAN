import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import './Api.css'

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then(ans => {
        console.log(ans, 'api 1');
        setData(ans);
      })
      .catch(error => {
        console.log(error, 'error');
      });
  }, []);

  return (
    <div className='main'>
      <div className='container'>
      <table border={FiX}>
        <thead className='tab'>
          <tr>
            <th>ID</th><br></br>
            <th>Name</th><br></br>
            <th>Username</th><br></br>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(post => (
            <tr key={post.id} className='elem'>
              <td>{post.id}</td><br></br>
              <td>{post.name}</td><br></br>
              <td>{post.username}</td><br></br>
              <td>{post.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div> 
  );
}

export default Api;
