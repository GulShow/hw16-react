import React, { useState, useEffect } from "react";
import Post from './Post'
export default function PostCatalog() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  },[]);
  return (
    <div className="posts">
         <ul className="posts__list">
            {data.map(item => (
                <Post key={item.id} id={item.id} title={item.title} body={item.body}></Post>
            ))}
         </ul>
    </div>
  )
}
