import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/api/posts/${id}/`)
      .then(response => {
        if (!response.ok) {
          navigate(`/NotFound`);
        }
        return response.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    this.navigate(`/NotFound`);
  }

  if (!post.id) {
    navigate(`/NotFound`);
  }

  return (
    <div>
      <h2>Post Detail</h2>
      <h3>Title: {post.title}</h3>
      <p>Id: {post.id}</p>
      <p>Content: {post.content}</p>
      <p>Author: {post.author}</p>
    </div>
  );
}

export default PostDetail;