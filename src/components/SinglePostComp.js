import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { postsService } from "../services/postsService";

function SinglePostComp({}) {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});
 
  const fetchPost = async () => {
    const data = await postsService.get(id);
    setPost(data);
  };

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <li
      style={{
        border: "1px solid black",
        marginBottom: "5px",
        padding: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span className="h3">{post?.title}</span>
      <span className="lead my-3">{post?.text}</span>
    </li>
  );
}

export default SinglePostComp;
