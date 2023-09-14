import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Analysis from '../Analysis';
import Summary from '../Summary';

function Result() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  });

  return (
    <>
      <Summary />
      <Analysis />
    </>
  );
}

export default Result;
