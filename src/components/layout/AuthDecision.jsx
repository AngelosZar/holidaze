import { useNavigate, NavLink } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';

function AuthDecision() {
  const { setIsManager, isManager } = useAuthStore();
  const navigate = useNavigate();

  const handleManagerSignUp = () => {
    setIsManager(true);
    navigate('/register/manager');
  };
  const handleUserSignUp = () => {
    setIsManager(false);
    navigate('/register/user');
  };

  return (
    <section className="bg-bodyLight dark:bg-bodyDark w-full h-screen mx-auto pt-24">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col gap-8 ">
              <h5 className="font-semibold leading-tight tracking-tight md:text-2xl dark:text-white">
                Sign up as Manager
              </h5>
              <button
                className="btn-primary w-40 self-center"
                onClick={handleManagerSignUp}
              >
                Sign up
              </button>
            </div>
            <hr className="bg-white my-12" />
            <div className="flex flex-col gap-8 ">
              <h5 className="font-semibold leading-tight tracking-tight md:text-2xl dark:text-white">
                Sign up as User
              </h5>
              <button
                className="btn-secondary max-w-40 self-center w-40"
                onClick={handleUserSignUp}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-8 p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 self-end">
              Already have an account?
              <NavLink
                to={'/login'}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                <span className="m-2"> Login here</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthDecision;
