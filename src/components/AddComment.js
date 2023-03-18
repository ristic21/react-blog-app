

export const AddComment = ({ handleSubmit, newComment, setNewComment, comments }) => {




    return (
        <div>
            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p className="lead my-3 text-muted">{comment.id}</p>
                        <p className="lead my-3">{comment.text}</p>
                        <hr />
                    </div>
                )
            }
            )}

            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 200,
                    marginLeft: 15,
                }}
            >
                <br />
                <input
                    required
                    minLength={2}
                    type='text'
                    value={newComment.text}
                    placeholder='Share your comment'
                    onChange={({ target }) =>
                        setNewComment({ ...newComment, text: target.value })
                    }
                />
                <br />
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
            <br />
        </div>
    )
}