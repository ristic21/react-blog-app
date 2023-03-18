import { useState, useEffect } from "react";
import { postsService } from "../services/postsService";
import { PostsList } from "../components/PostsList";

export const AppPosts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const handleGetPosts = async () => {
    const response = await postsService.getAll()
    setPosts(response.data)
  }
  const handleGetComments = async (id) => {
    const response = await postsService.getComments(id)
    setComments(response.data)
  }

  const handleDelete = async (postId) => {

    const data = await postsService.delete(postId);

    if (data.count > 0) {
      setPosts(posts.filter((post) => post.id !== postId));
    }
  };

  useEffect(() => {
    handleGetPosts()
  }, []);

  return (
    <div>
      <p className="display-6">Posts list</p>
      <hr />
      <PostsList posts={posts} setPosts={setPosts} handleDelete={handleDelete} handleGetComments={handleGetComments} comments={comments} />
    </div>
  );
};