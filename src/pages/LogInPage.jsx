import Layout from '../components/layout/Layout';
import AuthContainer from '../components/layout/AuthContainer';
import SignInForm from '../components/auth/SignInForm';
import useAuthStore from '../stores/authStore';
//
import AuthDecision from '../components/layout/AuthDecision';
import { useState } from 'react';

function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin, isLoading, error, isAuthenticated } = useAuthStore();

  // useEffect(() => {
  //   if (isAuthenticated) navigate to homepage or profile{}
  //   if (!isAuthenticated) navigate to log in page{}
  return (
    <Layout>
      <AuthContainer action="Log In">
        <SignInForm />
      </AuthContainer>
      {/* <AuthDecision /> */}
    </Layout>
  );
}

export default LogInPage;
