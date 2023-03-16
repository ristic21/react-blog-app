import { AddFormComponent } from "../components/AddFormComponent"
import { postsService } from "../services/postsService";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const EditPost = () => {


    const history = useHistory()
    const { id } = useParams()
    const [newPost, setNewPost] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();

        await postsService.edit(id, newPost);;

        history.push('/posts');
    };

    const handleReset = () => {
        setNewPost({
            title: '',
            text: '',
        });
    };

    useEffect(() => {
        const fetchPost = async () => {
            const { id: _, ...restData } = await postsService.get(id);

            setNewPost({ ...restData });
        };


        fetchPost();


    }, [id]);

    return (
        <div>
            <AddFormComponent handleSubmit={handleSubmit} newPost={newPost} setNewPost={setNewPost} handleReset={handleReset} />
        </div>
    )
}