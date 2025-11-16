import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    };
    getPosts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(post => (
        <div key={post.id} className="bg-white shadow-lg rounded-2xl p-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover rounded-xl"
          />
          <h2 className="text-xl font-bold mt-3">{post.title}</h2>
          <p className="text-gray-700">{post.description}</p>
          <p className="text-sm text-gray-500 mt-2">Autor: {post.author}</p>
          <p className="text-sm text-gray-400">Fecha: {post.date}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
