function ChooseHolidays() {
  return (
    <aside className="flex flex-col gap-4 py-8 px-4 my-8 mt-22 bg-white shadow-xl rounded-lg max-w-6xl mx-auto">
      <h5 className="pt-6 pb-2"> Why Choose Holidaze?</h5>
      <div>
        <img
          src="https://images.unsplash.com/photo-1735615479490-237b941e996a?q=80&w=1332&auto=format&https://images.unsplash.com/photo-1619467416348-6a782839e95f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="rounded-lg w-full h-auto object-cover aspect-square sm:aspect-[16/9] "
          loading="lazy"
          width="100%"
          height="auto"
        />

        <div className="py-6 max-w-xl mx-auto">
          <h5 className="pt-6 pb-2"> Benefits choosing Holidaze</h5>
          <h6 className="my-2">Easy check-in</h6>
          <p className="mb-8">
            Skip the hassle of traditional hotel lobbies. With Holidaze, enjoy
            seamless digital check-in straight from your phone, letting you
            start your vacation the moment you arrive.
          </p>
          <h6 className="my-2">Free cancellations for 48 hours</h6>
          <p className="mb-8">
            Plans change, and we understand. Book with confidence knowing you
            have a full 48-hour window to modify or cancel your reservation
            without any penalties.
          </p>
          <h6 className="my-2"> Sustainable stays </h6>
          <p className="mb-8">
            Rest easy knowing your getaway supports our planet. All Holidaze
            venues meet our eco-friendly standards, with environmentally
            conscious practices that don't compromise on comfort or luxury.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default ChooseHolidays;
