function ChooseHolidays() {
  return (
    <aside className="flex flex-col gap-4 px-6 mt-22 py-12 mb-12 bg-white shadow-xl rounded-lg max-w-7xl mx-auto">
      <h4 className="pt-6 pb-4"> Why Choose Holidaze?</h4>
      <div>
        <img
          src="https://images.unsplash.com/photo-1663464775968-d305e6465ee5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="rounded-lg w-full h-auto object-cover aspect-square sm:aspect-[16/9] "
          loading="lazy"
          width="100%"
          height="auto"
        />

        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="grid grid-rows-subgrid row-span-2 ">
              <h6 className="my-2  text-primary80 font-bold border-l-2 border-primary60 pl-2">
                Easy check-in
              </h6>
              <p className="md:mb-8">
                Skip the hassle of traditional hotel lobbies. With Holidaze,
                enjoy seamless digital check-in straight from your phone,
                letting you start your vacation the moment you arrive.
              </p>
            </div>
            <div className="grid grid-rows-subgrid row-span-2">
              <h6 className="my-2 text-primary80 font-bold border-l-2 border-primary60 pl-2">
                Free cancellations
              </h6>
              <p className="md:mb-8">
                Plans change, and we understand. Book with confidence knowing
                you have a full 48-hour window to modify or cancel your
                reservation without any penalties.
              </p>
            </div>
            <div className="grid grid-rows-subgrid row-span-2">
              <h6 className="my-2 text-primary80 font-bold border-l-2 border-primary60 pl-2">
                Sustainable stays
              </h6>
              <p className="md:mb-8">
                Rest easy knowing your getaway supports our planet. All Holidaze
                venues meet our eco-friendly standards, with environmentally
                conscious practices that don't compromise on comfort or luxury.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ChooseHolidays;
