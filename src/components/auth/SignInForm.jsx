import { NavLink } from 'react-router-dom';
function SignInForm() {
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
          autocomplete="email"
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
          autocomplete="current-password"
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
      <button type="submit" className=" btn-primary">
        Log in
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
