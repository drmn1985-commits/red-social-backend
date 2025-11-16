// src/components/Feed.js
import React, { useEffect, useState } from "react";
// Si usas Firestore, importa lo necesario. Si no quieres probar Firestore ahora, comenta estas líneas
import { db } from "../firebase"; // asegúrate que la ruta es correcta
import { collection, query, orderBy, onSnapshot, getDocs } from "firebase/firestore";

const EXAMPLE_POSTS = [
  { id: "ex1", author: "Profa. García", content: "Ejemplo: ¡Buen trabajo hoy!", date: "07/11/2025" },
  { id: "ex2", author: "Estudiante A", content: "Ejemplo: Subí el proyecto de ciencias.", date: "06/11/2025" }
];

export default function Feed() {
  const [posts, setPosts] = useState(EXAMPLE_POSTS);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(""); // guarda error de red o permisos

  useEffect(() => {
    // Intentamos suscribirnos a Firestore (si db está disponible)
    let unsubscribe = null;

    async function startListening() {
      try {
        if (!db) throw new Error("Firestore no configurado");

        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setPosts(items.length ? items : EXAMPLE_POSTS);
            setLoading(false);
            setErrorMsg("");
          },
          (err) => {
            // Error en la subscripción (network / permission / rules)
            console.error("Firestore onSnapshot error:", err);
            setErrorMsg("Error de conexión con el servidor. Mostrando datos de ejemplo.");
            setPosts(EXAMPLE_POSTS);
            setLoading(false);
          }
        );
      } catch (err) {
        console.error("No se pudo conectar a Firestore:", err);
        setErrorMsg("No se pudo conectar a la base de datos. Mostrando datos de ejemplo.");
        setPosts(EXAMPLE_POSTS);
        setLoading(false);

        // Intento de fallback: si quieres, puedes intentar getDocs una vez:
        try {
          // const snapshot = await getDocs(collection(db, "posts"));
          // ...process...
        } catch (_) { /* ignorar */ }
      }
    }

    startListening();

    return () => { if (unsubscribe) unsubscribe(); };
  }, []);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {errorMsg && (
        <div className="bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500 p-3 rounded">
          {errorMsg}
        </div>
      )}

      {loading ? (
        <div className="text-center text-gray-500">Cargando publicaciones…</div>
      ) : (
        posts.map(post => (
          <article key={post.id} className="bg-white p-4 rounded shadow">
            <div className="font-semibold">{post.author}</div>
            <div className="text-gray-700 mt-2">{post.content}</div>
            <div className="text-sm text-gray-400 mt-2">{post.date || (post.createdAt && post.createdAt.toDate && post.createdAt.toDate().toLocaleString())}</div>
          </article>
        ))
      )}
    </div>
  );
}
