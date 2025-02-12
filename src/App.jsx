import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  

  return (
        <Router>
              <Routes>

                {/* RUTAS PUBLICAS */}
                <Route path="/" element={<Home/>} />  
                <Route path="/register" element={<Register/>} />  
                <Route path="/login" element={<Login/>} />  


                {/* RUTAS PRIVADAS */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile/>
                    </ProtectedRoute>
                  }
                />

              </Routes>
        </Router>
  )
}

export default App
