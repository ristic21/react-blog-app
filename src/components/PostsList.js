import { postsService } from "../services/postsService";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export function PostsList({ posts, setPosts }) {

  const history = useHistory()

  return (
    <div>
         {posts.map((post) => {
          return (
          <li key={post.id}>
            <h1 className="display-4 fst-italic">{post.title}</h1>
      <p className="lead my-3">{post.text}</p>
      
                <br />
           <hr />
            </li>
            )
            }
         )}           
    </div>
  )
}
     


