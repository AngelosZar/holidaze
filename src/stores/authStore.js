import { create } from 'zustand';
import { SIGN_IN_URL } from '../components/Constants';
import { REGISTER_URL } from '../components/Constants';

const useAuthStore = create(set => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: [],
  isManager: false,

  setIsManager: isManager => {
    set({ isManager });
  },

  signin: async (
    email,
    password,
    rememberDevice = false,
    isManager = false
  ) => {
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
      const { errors, data: userData } = await response.json();
      if (errors && Array.isArray(errors) && errors.length > 0) {
        const error = errors[0];
        set({ error: [error.message], isLoading: false });
        alert(`${error.message}`);
        throw new Error(error.message);
      }
      //
      console.log('data', userData);
      console.log('data', userData.accessToken);
      const storage = rememberDevice ? localStorage : sessionStorage;
      storage.setItem('user', JSON.stringify(userData));
      storage.setItem('accessToken', userData.accessToken);

      set({
        user: userData,
        isAuthenticated: true,
        isLoading: false,
        isManager,
      });
      return userData;
      //
    } catch (error) {
      set({ error: [error.message], isLoading: false });
      throw error;
    }
  },

  // register user
  register: async userData => {
    set({ isLoading: true });
    // loading spinner
    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      // console.log('data', data);
      if (!response.ok) {
        // console.log('response', response);
        if (data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors.map(error => error.message);
          set({ error: errorMessages.join(', '), isLoading: false });
          throw new Error(errorMessages.join(', '));
        }
      }
      set({ isLoading: false });
      return data;

      // create modal for this and all other alerts
    } catch (error) {
      set({ error: error.message, isLoading: false });
      //   alert(error.message);
      alert(error);
    }
  },

  // log out user\
  logout: () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('profile-storage');
  },
  // check if password and repeat password is same
  //   confirmPassword: function(){
  //     if(password === confirmPassword)
  //   }

  initAuth: () => {
    const user =
      JSON.parse(localStorage.getItem('user')) ||
      JSON.parse(sessionStorage.getItem('user') || null);
    if (user) {
      set({ user, isAuthenticated: true });
    }
  },
  //
}));

export default useAuthStore;
