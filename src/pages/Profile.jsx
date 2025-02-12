import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import {Button, Container, Image} from 'react-bootstrap';

function Profile() {

  const user = auth.currentUser;

  console.log(auth.currentUser);
  

  const logout = async() => {
    try {
      await signOut(auth);
      console.log("Sesión cerrada con éxito");     
    } catch (error) {
      console.log("Error al cerrar sesión:", error.message);
      
    }
  }


  return (
 <Container className="mt-5">

    <h1>Hola, {user.displayName || user.email}. ¡Bienvenido a tu perfil!</h1>
    {
      user.photoURL && (
        <Image src={user.photoURL} roundedCircle width="100" height="100" className="mb-3"/>
      )
    }
    <p>Correo electrónico: {user.email}</p>
    <Button variant="danger" onClick={logout}>
      Cerrar Sesión
    </Button>

 </Container>
  )
}

export default Profile