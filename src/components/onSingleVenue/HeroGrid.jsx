import { useState } from 'react';

export default function HeroGrid({ venueGallery }) {
  const [showAll, setShowAll] = useState(false);
  const mainImg = venueGallery[0];
  const restImgs = venueGallery.slice(1, 5);

  function handleShowMore() {
    setShowAll(true);
  }
  const handleCloseModal = () => {
    setShowAll(false);
  };
  return (
    <section className="mt-28 mb-14 relative overflow-y-auto ">
      <div className="relative overflow-hidden shadow-md rounded-lg gap-4">
        <div
          className={`grid ${
            restImgs.length > 0 ? 'lg:grid-cols-2' : 'grid-cols-1'
          } gap-4`}
        >
          <div className="relative h-[400px] md:h-[500px]">
            {mainImg && (
              <img
                src={mainImg?.url}
                alt={mainImg?.alt || 'Main venue image'}
                className="rounded-lg w-full h-full object-cover object-center"
                loading="lazy"
                width="100%"
                height="auto"
              />
            )}
            {venueGallery.length > 1 && (
              <div className="absolute bottom-4 left-4 right-4 rounded-lg shadow-md flex justify-end">
                <button className="btn-primary" onClick={handleShowMore}>
                  See more
                </button>
              </div>
            )}
          </div>

          {restImgs.length > 0 && (
            <div className="hidden sm:grid gap-4 grid-cols-2 h-[400px] md:h-[500px]">
              {restImgs.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg"
                >
                  <SingleImgOnGrid
                    img={image?.url}
                    alt={image?.alt || `Venue image ${index + 2}`}
                  />
                </div>
              ))}

              {venueGallery.length > 5 && (
                <div className="absolute bottom-4 right-4 flex justify-end">
                  <button className="btn-primary" onClick={handleShowMore}>
                    See more
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <GalleryPopUp
        isOpen={showAll}
        images={venueGallery}
        onClose={handleCloseModal}
      />
    </section>
  );
}

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

function GalleryPopUp({ isOpen, images, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto ">
      <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          className="absolute top-4 right-4 text-primary hover:text-primary60 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h4 className="mb-4">Gallery</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={image?.url}
                alt={image?.alt || `Gallery image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
