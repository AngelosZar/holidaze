function AuthDecision() {
  return (
    <section className="bg-bodyLight dark:bg-bodyDark w-full h-screen mx-auto pt-24">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col gap-8 ">
              <h5 className="font-semibold leading-tight tracking-tight md:text-2xl dark:text-white">
                Sign In as Manager
              </h5>
              <button className="btn-primary w-40 self-center">Sign In</button>
            </div>
            <hr className="bg-white my-12" />
            <div className="flex flex-col gap-8 ">
              <h5 className="font-semibold leading-tight tracking-tight md:text-2xl dark:text-white">
                Sign In as User
              </h5>
              <button className="btn-secondary max-w-40 self-center w-40">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthDecision;
