import React, { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Usuario registrado exitosamente.");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Inicio de sesión exitoso.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>{isRegistering ? "Registro" : "Iniciar Sesión"}</h1>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isRegistering ? "Registrar" : "Entrar"}</button>
      </form>
      <p>{error}</p>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Ya tengo cuenta" : "Crear una cuenta"}
      </button>
    </div>
  );
};

export default Auth;