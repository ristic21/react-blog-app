import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { postsService } from "../services/postsService";
import { AddComment } from "./AddComment";

function SinglePostComp({ }) {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({});

  const fetchPost = async () => {
    try {
      const data = await postsService.get(id);
      setPost(data);
      console.log(data.comments);
      setComments(data.comments);
    } catch (error) {
      console.error(error);
    };

  };

  // const fetchComments = async () => {
  //   const data = await postsService.get(id);
  //   setPost(data);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postsService.addComment(newComment, id);


    history.push(`/posts`);
  };

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  return (
    <div>
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
      <AddComment handleSubmit={handleSubmit} newComment={newComment} setNewComment={setNewComment} comments={comments} />
    </div>
  );
}

export default SinglePostComp;
