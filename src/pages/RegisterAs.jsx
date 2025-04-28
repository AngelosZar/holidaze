import Layout from '../components/layout/Layout';
import AuthDecision from '../components/layout/AuthDecision';
import { useEffect } from 'react';
import useAuthStore from '../stores/authStore';
function RegisterAs() {
  const { setIsManager } = useAuthStore();
  useEffect(() => {
    return () => {
      setIsManager(false);
    };
  }, []);
  return <Layout>{<AuthDecision />}</Layout>;
}

export default RegisterAs;
