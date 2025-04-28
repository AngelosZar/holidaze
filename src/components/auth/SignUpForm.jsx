import { useState } from 'react';
import useAuthStore from '../../stores/authStore';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();
  const { register, error, setError } = useAuthStore();
  console.log(name, email, password, confirmPassword, acceptTerms);
  function toggleAcceptTerms() {
    setAcceptTerms(prev => !prev);
  }
  function handleData() {
    return {
      name, // Required
      email, // Required
      password, // Required
      // create another component for this after the
      bio: '', // Optional
      avatar: {
        url: 'https://img.service.com/avatar.jpg', // Optional
        alt: 'My avatar alt text', // Optional
      },
      banner: {
        url: 'https://img.service.com/banner.jpg', // Optional
        alt: 'My banner alt text', // Optional
      },
      venueManager: true, // Optional
    };
  }
  async function handleSubmit(e) {
    e.preventDefault();

    if (!acceptTerms) {
      alert('You must accept the terms and conditions');
      return;
    }
    if (!name || !email || !password || !confirmPassword) {
      alert('All fields are required');

      // create modal for this and all other alerts
      return;
    }
    if (password !== confirmPassword) {
      alert('Password and Confirm Password must be the same');
      return;
    }
    //
    const userData = handleData();

    try {
      const response = await register(userData);
      console.log('data', response);

      if (response && !error) {
        navigate('/LogInPage');
      }
    } catch (error) {
      console.error(error);
      setError(error.message || 'Registration failed');
    }
  }
  return (
    <form action="#" className="space-y-4 md:space-y-6">
      <div>
        <label htmlFor="name" className="formLabel">
          Username
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="formInput"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="formLabel">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="username@noroff.no"
          required=""
          className="formInput"
          pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
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
          maxLength="30"
          title="Email must be a valid noroff email ending with @stud.noroff.no"
          autoComplete="email"
          onChange={e => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="confirmPassword" className="formLabel">
          Confirm your password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="••••••••"
          required=""
          className="formInput"
          autoComplete="current-password"
          onChange={e => setConfirmPassword(e.target.value)}
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
            autoComplete="current-password"
            onChange={toggleAcceptTerms}
          ></input>
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{' '}
            <a
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="#"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <button type="submit" className=" btn-primary" onClick={handleSubmit}>
        Create an account
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?
        <NavLink
          to={'/login'}
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          <span className="m-2"> Login here</span>
        </NavLink>
      </p>
    </form>
  );
}
export default SignUpForm;
