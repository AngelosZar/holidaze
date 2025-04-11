import Layout from '../components/layout/Layout';
function RegisterPage() {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
}

export default RegisterPage;

function RegisterForm() {
  return <h1>Register form</h1>;
}
