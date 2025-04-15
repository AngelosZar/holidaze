import Layout from '../components/layout/Layout';
import AuthContainer from '../components/layout/AuthContainer';
import SignUpForm from '../components/auth/SignUpForm';

export default function RegisterPage() {
  return (
    <Layout>
      <AuthContainer action="Sign up">
        <SignUpForm />
      </AuthContainer>
    </Layout>
  );
}
