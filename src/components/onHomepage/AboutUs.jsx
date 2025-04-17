function AboutUs() {
  return (
    <section className=" px-4 pt-4 mb-12 w-full flex flex-col justify-center items-center  bg-amber-100 shadow-md rounded-lg contain-content">
      <h5 className="self-start">About us</h5>
      <div
        className="px-4 max-w-7xl relative w-full bg-amber-50 pt-20 mb-20 "
        style={{
          minHeight: '400px',
        }}
      >
        <div
          className="absolute top-0 left-0,
        max-w-[45%]"
        >
          <img
            src="https://images.unsplash.com/photo-1735615479490-237b941e996a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            className="rounded-lg w-full max-h-[400px] object-cover"
            style={{ aspectRatio: '1/1' }}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </div>
        <p className="absolute top-10 right-6 max-w-[30%] bg-white/90 shadow-md rounded-lg p-4 z-30">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea{' '}
        </p>
        <div className="absolute bottom-0 right-0 max-w-[45%]">
          <img
            src="https://images.unsplash.com/photo-1735615479490-237b941e996a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            className="rounded-lg w-full h-auto object-cover z-10"
            style={{ aspectRatio: '16/9' }}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
