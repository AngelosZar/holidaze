import useUserData from '../../hooks/useUserData';
import IsLoadingContainer from '../utilities/IsLoadingContainer';
export function UserOnHeroSection() {
  const { userData, isLoading, error } = useUserData();

  if (isLoading) return <IsLoadingContainer />;

  if (error)
    return (
      <div>
        <h5>error promt :{error.message}</h5>
      </div>
    );

  return (
    <section className="w-full mt-[90px]  mb-32 ">
      <div className="relative w-full h-48  ">
        <img
          src={userData?.bannerUrl || 'img'}
          alt={userData?.bannerAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-16 left-12">
          <div className="rounded-full w-32 h-32 border-4 border-white overflow-hidden">
            <img
              src={userData?.avatarUrl || 'img'}
              alt={userData?.avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-22 px-12 sm:mt-12 flex justify-between ">
          <div></div>
          <div className="mr-4 ">
            <h6 className="text-xl font-medium">{userData?.userName}</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
