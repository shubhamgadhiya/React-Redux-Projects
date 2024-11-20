import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addpost, deletepost, editpost } from '../Reducer/Crud';

function Crud() {
  const dispatch = useDispatch();
  const postdata = useSelector((state) => state.Crud);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    if (title.trim() && content.trim()) {
      if (isEditing) {
        dispatch(editpost({ id: editId, title, content }));
        setIsEditing(false);
      } else {
        const newPost = {
          id: postdata.length + 1,
          title,
          content,
        };
        dispatch(addpost(newPost));
      }

      setTitle(''); 
      setContent('');
    } else {
      alert('All fields are required');
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditId(post.id);
    setIsEditing(true);
  };

  const postlist = postdata.map((post, index) => (
    <div key={post.id} className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">
          {index + 1}. {post.title}
        </h5>
        <p className="card-text">{post.content}</p>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deletepost(post.id))}
        >
          Delete
        </button>
        <button
          className="btn btn-secondary ms-2"
          onClick={() => handleEdit(post)}
          data-bs-toggle="modal"
          data-bs-target="#postModal"
        >
          Edit
        </button>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <h2 className="mb-3">CRUD Operation</h2>

      <button
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#postModal"
      >
        {isEditing ? 'Edit Post' : 'Add Post'}
      </button>

      <div
        className="modal fade"
        id="postModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="postModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="postModalLabel">
                {isEditing ? 'Edit Post' : 'New Post'}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Content:
                  </label>
                  <input
                    type="text"
                    id="content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  {isEditing ? 'Update Post' : 'Save Post'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>{postlist}</div>
    </div>
  );
}

export default Crud;
