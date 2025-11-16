import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL; // URL del backend desde .env

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Ejemplo: obtener posts desde backend
        const response = await axios.get(`${API_URL}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    };

    fetchPosts();
  }, [API_URL]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📰 Feed de Publicaciones</h2>
      {posts.length === 0 ? (
        <p>No hay publicaciones aún.</p>
      ) : (
        posts.map((post, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
