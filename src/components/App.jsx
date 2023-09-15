import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import '../styles/App.css';
import Layout from './Layout';
import Nav from './Nav';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Nav />
          <Layout>
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route index element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
              </Route>
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
