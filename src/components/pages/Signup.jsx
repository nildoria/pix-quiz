import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Illustration from '../Illustration';
import SignupForm from '../SignupForm';

function Signup() {
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
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}

export default Signup;
