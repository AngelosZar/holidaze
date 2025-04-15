import { useState } from 'react';

function AuthContainer({ children, action }) {
  return (
    <section className="bg-bodyLight dark:bg-bodyDark w-full h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h4 className="font-semibold leading-tight tracking-tight md:text-2xl dark:text-white">
              {action}
            </h4>
            <div className="flex items-center justify-between">
              <span className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500">
                Google
              </span>
              <span className="bg-richBlack text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:hover:bg-charcoal">
                Apple
              </span>
              <span className="bg-blue-500 px-4 text-white py-2 rounded-lg hover:bg-blue-600">
                Facebook
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
export default AuthContainer;
