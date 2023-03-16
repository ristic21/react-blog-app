import { postsService } from "../services/postsService";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export function PostsList({ posts, setPosts, handleDelete }) {

  const history = useHistory()

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p className="h3 fst-italic">{post.title}</p>
            <p className="lead my-3">{post.text}</p>
            <Link style={{ padding: 10 }} className="navbar-brand" to={`/posts/${post.id}`}>View post</Link>
            <Link style={{ padding: 10 }} className="navbar-brand" to={`/edit/${post.id}`}>Edit</Link>
            <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>Delete</button>
            <hr />
          </div>
        )
      }
      )}
    </div>
  )
}



