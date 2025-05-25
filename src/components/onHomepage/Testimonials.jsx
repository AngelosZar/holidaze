function TestimonialsSection() {
  return (
    <section className="bg-white shadow-md rounded-lg mb-12 py-12">
      <h4 className="mx-12 mb-4">Testimonials</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white shadow-md rounded-lg max-w-7xl mx-auto w-full height-full">
        {testimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.id}
            text={testimonial.text}
            name={testimonial.name}
            location={testimonial.location}
            imgUrl={testimonial.imgUrl}
          />
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    id: 1,
    name: 'Sarah T.',
    location: 'Oslo',
    text: 'Holidaze made our family vacation effortless! The easy check-in process saved us valuable time, and the apartment exceeded our expectations. Will definitely book through them again.',
    imgUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Marcus L.',
    location: 'Bergen',
    text: "I had to unexpectedly change my travel plans, and Holidaze's 48-hour cancellation policy was a lifesaver. Their customer service team was incredibly responsive and helpful.",
    imgUrl:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Emma H.',
    location: 'Trondheim',
    text: 'As someone who prioritizes sustainable travel, I appreciate that Holidaze venues meet high eco-standards. My coastal cabin stay was both luxurious and environmentally responsible.',
    imgUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
  },
];

function TestimonialCard({ text, name, location, imgUrl }) {
  return (
    <div className="rounded-lg overflow-hidden relative h-auto max-w-sm">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="w-full h-full object-cover rounded-lg"
          style={{ aspectRatio: '1/1' }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center p-6 mx-auto my-22 bg-white max-w-xs">
        <div className="w-22 h-22 mb-2 rounded-full border-4 border-white overflow-hidden ">
          <img
            src={imgUrl}
            alt="Profile"
            className="rounded-lg w-full h-auto object-cover "
            loading="lazy"
          />
        </div>
        <div>
          <h6 className="text-center">{name}</h6>

          <p className="text-start my-4 text-sm">{text}</p>
        </div>
        <div className="flex justify-center">
          <span className="text-primary">★</span>
          <span className="text-primary">★</span>
          <span className="text-primary">★</span>
          <span className="text-primary">★</span>
          <span className="text-primary">★</span>
        </div>
      </div>
    </div>
  );
}
export { TestimonialsSection };
