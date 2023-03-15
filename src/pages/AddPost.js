import { postsService } from "../services/postsService";
import { useHistory } from "react-router-dom";
import { useState } from "react";

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
 
return (<div>
<h2>Add post</h2>
<form
  onSubmit={handleSubmit}
  style={{
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    marginLeft: 15,
  }}
>
  <input
    required
    minLength={2}
    type='text'
    value={newPost.title}
    placeholder='Title'
    onChange={({ target }) =>
      setNewPost({ ...newPost, title: target.value })
    }
  />
  <input
    required
    maxLength={300}
    type='text'
    value={newPost.text}
    placeholder='Text'
    onChange={({ target }) =>
    setNewPost({ ...newPost, text: target.value })
    }
  />
  <button type="submit" className="btn btn-primary">Submit</button>
  <button className="btn btn-secondary" type='button' onClick={handleReset}>
            Reset
          </button>
  </form>
  </div>)
}

export default AddPost;