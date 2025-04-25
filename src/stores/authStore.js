import { create } from 'zustand';
import { SIGN_IN_URL } from '../components/Constants';
import { REGISTER_URL } from '../components/Constants';

const useAuthStore = create(set => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: [],

  signin: async (email, password) => {
    set({ isLoading: true });
    // loading spinner
    try {
      const response = await fetch(SIGN_IN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
        const error = data.errors[0];
        set({ error: [error.message], isLoading: false });
        alert(`${error.message}`);
      }

      set({ user: data.user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: [error.message], isLoading: false });
    }
  },

  // register user
  register: async userData => {
    set({ isLoading: true });
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userData }),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors.map(error => error.message);
          set({ error: errorMessages.join(', '), isLoading: false });
          throw new Error(errorMessages.join(', '));
        }
      }
      // use local session and if remember this device save on local storage
      // create modal window to congratulate and redirect to log in page
      //
      // where to keep this data ? local storage or session storage
      // how to set the venue manager to true or false
      // once password ..display additional window for the rest information
      return data;

      // create modal for this and all other alerts
    } catch (error) {
      set({ error: error.message, isLoading: false });
      //   alert(error.message);
      alert(error);
    }
  },

  // log out user\
  logout: async () => {
    // clear local storage and session storage
  },
  // check if password and repeat password is same
  //   confirmPassword: function(){
  //     if(password === confirmPassword)
  //   }
  //   init auth proceess check if user is authenticated and logged in
}));

export default useAuthStore;
