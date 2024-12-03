import React, { useState } from "react";
import { auth, db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    setError("");

    if (!auth.currentUser) {
      setError("Debes estar autenticado para publicar.");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        userId: auth.currentUser.uid,
        createdAt: new Date(),
      });
      setTitle("");
      setContent("");
      alert("Post publicado con éxito.");
    } catch (err) {
      setError("Error al publicar el post: " + err.message);
    }
  };

  return (
    <div>
      <h1>Nuevo Post</h1>
      <form onSubmit={handlePost}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Publicar</button>
      </form>
      <p>{error}</p>
    </div>
  );
};

export default PostForm;