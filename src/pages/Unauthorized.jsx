import { useEffect } from 'react';
import unauthorizedImg from '../assets/images/unauthorizedImg.jpg';
import { Navigate } from 'react-router-dom';

function Unauthorized() {
  const navigate = Navigate();
  const delay = 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate, delay]);
  return (
    <Layout>
      <div class="flex flex-col items-center justify-center min-h-screen">
        <img
          src={unauthorizedImg}
          alt="page not found"
          class="object-cover  max-h-[70vh] rounded-lg shadow-lg"
        />
        <h1 className="">
          Redirecting to the login page in {delay / 1000} seconds...
        </h1>
      </div>
    </Layout>
  );
}

export default Unauthorized;
