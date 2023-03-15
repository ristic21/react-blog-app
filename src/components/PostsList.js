import { postsService } from "../services/postsService";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export function PostsList({ posts, setPosts }) {

  const history = useHistory()

  return (
    <div>
         {posts.map((post) => {
          return (
          <div key={post.id}>
            <h1 className="display-6 fst-italic">{post.title}</h1>
      <p className="lead my-3">{post.text}</p>
      
                <br />
                <Link className="navbar-brand" to={`/posts/${post.id}`}>View post</Link>
           <hr />
            </div>
            )
            }
         )}           
    </div>
  )
}
     


