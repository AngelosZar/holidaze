//
import HeroSearchBar from './HeroSearchBar';

export function HomeHero() {
  return (
    <div className="h-overflow-hidden  h-screen relative">
      <video
        src="https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_25fps.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />

      <div className="absolute inset-x-0 bottom-[12%] flex justify-center">
        <HeroSearchBar />
      </div>
    </div>
  );
}
