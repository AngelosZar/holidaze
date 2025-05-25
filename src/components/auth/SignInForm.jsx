import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuthStore from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';
//

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin } = useAuthStore();
  const navigate = useNavigate();
  const [rememberDevice, setRememberDevice] = useState(false);

  function toggleRememberDevice() {
    setRememberDevice(prev => !prev);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if (!email || !password) {
      !email
        ? alert('Email is required 1')
        : !password
        ? alert('Password is required')
        : alert('All fields are required');
      return;
    }

    try {
      const data = await signin(email, password);
      navigate('/');
      return data;
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <form action="#" className="space-y-4 md:space-y-6">
      <div>
        <label htmlFor="email" className="formLabel">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="user@noroff.no"
          required=""
          className="formInput"
          autoComplete="email"
          onChange={e => setEmail(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="password" className="formLabel">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          required=""
          className="formInput"
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            required=""
            onClick={toggleRememberDevice}
          ></input>
        </div>
        <div className="ml-3 text-sm flex flex-row gap-2 justify-between w-full">
          <a
            className="font-light text-gray-500 dark:text-gray-300 text-primary-600 hover:underline dark:text-primary-500"
            href="#"
          >
            Remember this device
          </a>
          <a
            className="font-light text-gray-500 dark:text-gray-300 text-primary-600 hover:underline dark:text-primary-500 self-end"
            href="#"
          >
            Forgot you password ?
          </a>
        </div>
      </div>
      <button type="submit" className="btn-primary" onClick={handleSubmit}>
        Sign in
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Not registered yet?
        <NavLink
          to="/register"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          <span className="m-2"> Register an account</span>
        </NavLink>
      </p>
    </form>
  );
}

export default SignInForm;
