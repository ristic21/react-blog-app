import { useState, useEffect } from "react";
import { postsService } from "../services/postsService";
import { PostsList } from "../components/PostsList";

export const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  const handleGetPosts = async () => {
    const response = await postsService.getAll()
    setPosts(response.data)
    // console.log(posts)
  }

  useEffect(() => {
    handleGetPosts()
  }, []);

    return (
      <div>
        <h3>Posts stranica</h3>
         <PostsList posts={posts} setPosts={setPosts} />
      </div>
    );
  };