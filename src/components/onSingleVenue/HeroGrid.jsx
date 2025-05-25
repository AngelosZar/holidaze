function HeroGrid({ venueGallery }) {
  return (
    <section className="mt-28 mb-14 relative ">
      <div
        className={`relative overflow-hidden h-auto shadow-md rounded-lg gap-4 ${
          venueGallery.length > 1 ? 'grid grid-cols-1 lg:grid-cols-2' : ''
        }`}
      >
        <div
          className={`flex flex-col gap-4 p-4 h-[400px] md:h-[500px] w-full${
            venueGallery.length > 1 ? 'h-[600px] ' : ''
          }`}
        >
          <img
            src={venueGallery[0]?.url}
            alt={venueGallery[0]?.alt || 'img'}
            className="rounded-lg w-full h-auto object-cover object-center overflow-hidden "
            style={{ aspectRatio: '1/1' }}
            loading="lazy"
            width="100%"
            height="auto"
          />
          <div
            className={`flex flex-col absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md overflow-hidden ${
              venueGallery.length > 1 ? '' : 'hidden'
            }`}
          >
            <button className="flex self-end mr-4">See more</button>
          </div>
        </div>

        <div className=" flex-row gap-4 p-4 bg-white shadow-md rounded-lg justify-around relative hidden overflow-hidden sm:flex">
          {venueGallery.slice(1, 5).map((image, index) => (
            <div className="gap-4 hidden sm:grid" key={index + 1}>
              <SingleImgOnGrid
                img={image.url}
                alt={image.alt || 'Venue image'}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div
        className={`flex flex-col absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md overflow-hidden ${
          venueGallery.length >= 5 ? '' : 'hidden'
        } `}
      >
        <button className="flex self-end mr-4">See more</button>
      </div> */}
    </section>
  );
}

export default HeroGrid;

function SingleImgOnGrid({ img, alt, index }) {
  return (
    <div className="flex flex-col gap-4 p-4s rounded-lg max-w-sm" key={index}>
      <img
        src={img}
        alt={alt}
        className="rounded-lg w-full h-auto object-cover"
        style={{ aspectRatio: '1/1' }}
        loading="lazy"
        width="100%"
        height="auto"
      />
    </div>
  );
}
