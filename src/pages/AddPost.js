import { postsService } from "../services/postsService";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { AddFormComponent } from "../components/AddFormComponent";

const AddPost = () => {
  const history = useHistory()
  const [newPost, setNewPost] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postsService.add(newPost);


    history.push('/posts');
  };

  const handleReset = () => {
    setNewPost({
      title: '',
      text: '',
    });
  };

  return (
    <AddFormComponent handleSubmit={handleSubmit} newPost={newPost} setNewPost={setNewPost} handleReset={handleReset} />
  )
}

export default AddPost;