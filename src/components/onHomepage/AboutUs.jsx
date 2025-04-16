function AboutUs() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg max-w-5xl relative mx-auto">
      <div>
        <img
          src="https://images.unsplash.com/photo-1735615479490-237b941e996a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="rounded-lg w-full h-auto object-cover "
          style={{ aspectRatio: '16/9' }}
          loading="lazy"
          width="100%"
          height="auto"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea{' '}
      </p>
      <div>
        {' '}
        <img
          src="https://images.unsplash.com/photo-1735615479490-237b941e996a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="rounded-lg w-full h-auto object-cover "
          style={{ aspectRatio: '16/9' }}
          loading="lazy"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
}

export default AboutUs;
