import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Illustration from '../Illustration';
import LoginForm from '../LoginForm';

function Login() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  function goBack() {
    navigate('/');
  }

  useEffect(() => {
    if (currentUser) {
      goBack();
    }
  });

  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
