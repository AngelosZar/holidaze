import Layout from '../components/layout/Layout';
import AuthContainer from '../components/layout/AuthContainer';
import SignInForm from '../components/auth/SignInForm';
function LogInPage() {
  return (
    <Layout>
      <AuthContainer action="Log In">
        <SignInForm />
      </AuthContainer>
    </Layout>
  );
}

export default LogInPage;
