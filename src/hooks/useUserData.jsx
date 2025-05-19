import { useEffect } from 'react';
import useProfileStore from '../stores/profileStore';
// import
function useUserData() {
  const {
    setUserData,
    getUser,
    getUserNameFromStorage,
    userData,
    error,
    isLoading,
    setError,
    setIsLoading,
  } = useProfileStore(state => state);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fetchUsername = getUserNameFromStorage();

        const { data } = await getUser(fetchUsername);

        setUserData({
          userName: data.name,
          email: data.email,
          bio: data.bio,
          avatarUrl: data.avatar.url,
          avatarAlt: data.avatar.alt,
          bannerUrl: data.banner.url,
          bannerAlt: data.banner.alt,
          venueManager: data.venueManager,
        });
        setError(null);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error || 'Error fetching user data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, [getUser, getUserNameFromStorage, setUserData, setError, setIsLoading]);

  return {
    setUserData,
    getUser,
    getUserNameFromStorage,
    userData,
    error,
    isLoading,
    setError,
    setIsLoading,
  };
}

export default useUserData;
