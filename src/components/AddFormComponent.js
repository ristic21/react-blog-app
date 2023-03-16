import { useHistory } from "react-router-dom"


export function AddFormComponent({ handleSubmit, newPost, setNewPost, handleReset }) {

    const history = useHistory()

    return (
        <div>
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
        </div>
    )
}
