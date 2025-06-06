import { create } from 'zustand';
import { SIGN_IN_URL } from '../components/Constants';
import { REGISTER_URL } from '../components/Constants';
import returnToken from '../components/utilities/returnToken';
import returnUser from '../components/utilities/returnUser';
import useProfileStore from './profileStore';

const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: [],
  isManager: false,

  setIsManager: isManager => {
    set({ isManager });
  },

  signin: async (email, password = false) => {
    set({ isLoading: true });
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
        set({
          error: [error.message],
          isLoading: false,
          isAuthenticated: true,
        });
        alert(`${error.message}`);
        throw new Error(error.message);
      }

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('accessToken', userData.accessToken);
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      set({
        user: userData,
        isAuthenticated: true,
        isLoading: false,
      });
      return userData;
    } catch (error) {
      set({ error: [error.message], isLoading: false });
      throw error;
    }
  },

  register: async userData => {
    set({ isLoading: true });

    try {
      const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors.map(error => error.message);
          set({ error: errorMessages.join(', '), isLoading: false });
          throw new Error(errorMessages.join(', '));
        } else {
          set({ error: [data.status || 'Request failed'], isLoading: false });
          throw new Error(data.status || 'Registration failed');
        }
      }
      set({ isLoading: false });
      return data;
    } catch (error) {
      set({ error: error.message, isLoading: false });

      alert(error);
    }
  },

  logout: () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('profile-storage');
    localStorage.removeItem('isManager');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('undefined');
    set({
      user: null,
      isAuthenticated: false,
      isManager: false,
      error: [],
    });
  },

  initAuth: () => {
    const user =
      JSON.parse(localStorage.getItem('user')) ||
      JSON.parse(sessionStorage.getItem('user') || 'null');

    let isManager = false;
    try {
      const storedIsManager =
        localStorage.getItem('isManager') ||
        sessionStorage.getItem('isManager');
      if (storedIsManager) {
        isManager = JSON.parse(storedIsManager);
      }
    } catch (e) {
      console.error('Error parsing isManager from storage:', e);
    }

    if (user) {
      set({
        user,
        isAuthenticated: true,
        isManager: Boolean(isManager),
      });
    }
  },

  isInitialized: false,

  initUser: async () => {
    set({ isInitialized: false });

    try {
      const { getUser } = useProfileStore.getState();
      const user = returnUser();
      const token = returnToken();

      if (user && token) {
        const data = await getUser(user.name);

        let status = Boolean(data.data.venueManager);

        localStorage.setItem('isManager', JSON.stringify(status));
        localStorage.setItem('isAuthenticated', JSON.stringify(status));

        set({
          isManager: status,
          isInitialized: true,
        });
      } else {
        set({ isInitialized: true });
      }
    } catch (error) {
      console.error('Error in initUser:', error);
      set({
        isManager: false,
        isInitialized: true,
        error: [error.message || 'Failed to load user data'],
      });
    }
  },
  //
}));

export default useAuthStore;
