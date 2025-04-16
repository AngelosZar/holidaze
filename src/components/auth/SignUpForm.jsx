function SignUpForm() {
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
          placeholder="username@noroff.no"
          required=""
          className="formInput"
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
          maxlength="30"
          pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
          title="Email must be a valid noroff email ending with @stud.noroff.no"
          autocomplete="email"
        ></input>
      </div>
      <div>
        <label htmlFor="confirm-password" className="formLabel">
          Confirm your password
        </label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
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
            autoComplete="current-password"
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
      <button type="submit" className=" btn-primary">
        Create an account
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?
        <a
          href="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          <span className="m-2"> Login here</span>
        </a>
      </p>
    </form>
  );
}
export default SignUpForm;
