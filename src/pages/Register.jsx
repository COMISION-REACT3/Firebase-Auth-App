import { useState } from "react";
import {auth} from '../firebase';
import {createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import {Container, Form, Button, Alert} from 'react-bootstrap';

function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async(e) => {
      e.preventDefault();
      setError('');
      try {

        await createUserWithEmailAndPassword(auth, email, password)
        navigate('/profile')
        
      } catch (error) {
        setError('Error al registrarse:', error.message)
      }
  } 

  const handleGoogleLogin = async() => {
    const provider = new GoogleAuthProvider();
    try {

      await signInWithPopup(auth, provider);
      navigate('/profile')
      
    } catch (error) {
      setError('Error al iniciar sesión con Google :', error.message)
    }
  }



  return (
    <Container className="mt-5">
    <h2 className="mb-4">Registro</h2>
    {error && <Alert variant="danger">{error}</Alert>}

    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="success" className="w-100 mb-2">
        Registrarse
      </Button>
      <Button variant="danger" className="w-100" onClick={handleGoogleLogin}>
        Iniciar Sesión con Google
      </Button>
      <Link to="/login" className="btn text-primary fw-bold">¿Ya tienes una cuenta?</Link>
    </Form>
  </Container>
  )
}

export default Register