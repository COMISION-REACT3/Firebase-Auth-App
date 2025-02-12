import {Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="mt-5 text-center">
    <h1>Bienvenido a la App</h1>
    <p>Por favor, inicia sesión o regístrate para continuar.</p>
    <div>
      <Link to="/register">
        <Button variant="success" className="m-2">
          Registrarse
        </Button>
      </Link>
      <Link to="/login">
        <Button variant="primary" className="m-2">
          Iniciar Sesión
        </Button>
      </Link>
    </div>
  </Container>
  )
}

export default Home