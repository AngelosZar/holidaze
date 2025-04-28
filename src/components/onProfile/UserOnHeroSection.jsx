import { useEffect } from 'react';
import useProfileStore from '../../stores/profileStore';

export function UserOnHeroSection() {
  const {
    accessToken,
    user,
    userName,
    setUserData,
    getUser,
    getUserNameFromStorage,
    userData,
  } = useProfileStore.getState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fetchUsername = getUserNameFromStorage();
        console.log(fetchUsername);
        // const data = await getUser(fetchUsername);
        // const { data } = await getUser(fetchUsername);
        // console.log('data', data);
        // return data;
        const {
          data: {
            name: userName,
            email,
            bio,
            avatar: { url: avatarUrl, alt: avatarAlt },
            banner: { url: bannerUrl, alt: bannerAlt },
            venueManager,
          },
        } = await getUser(fetchUsername);

        setUserData({
          userName,
          email,
          bio,
          avatarUrl,
          avatarAlt,
          bannerUrl,
          bannerAlt,
          venueManager,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [getUser, getUserNameFromStorage, setUserData]);
  return (
    <section className="w-full mt-[90px] mb-64">
      <div className="relative w-full h-48">
        <img
          src={userData.bannerUrl}
          alt={userData.bannerAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-16 left-12">
          <div className="rounded-full w-32 h-32 border-4 border-white overflow-hidden">
            <img
              src={userData.avatarUrl}
              alt={userData.avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-22 px-12 sm:mt-12 flex justify-between ">
          <div></div>
          <div className="mr-4 ">
            <h6 className="text-xl font-medium">{userData.userName}</h6>
            {/* find this mess from api */}
            <p className="">{userData.venueManager ? 'Manager Account' : ''}</p>
            <button className="text-sm mt-1">Manage my account</button>
          </div>
        </div>
      </div>
    </section>
  );
}
