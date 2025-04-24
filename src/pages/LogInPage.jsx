import Layout from '../components/layout/Layout';
import AuthContainer from '../components/layout/AuthContainer';
import SignInForm from '../components/auth/SignInForm';
//
import AuthDecision from '../components/layout/AuthDecision';
function LogInPage() {
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
