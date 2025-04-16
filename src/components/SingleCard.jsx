function SingleCard() {
  return (
    <div>
      <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm">
        <div>
          <img
            src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            className="w-full h-48 object-cover rounded-t-xl"
            style={{ aspectRatio: '1/1' }}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </div>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <hp className="font-medium text-base">Oslo, Norway</hp>
            <div className="flex items-center">
              <span className="mr-1">★</span>
              <span>4</span>
            </div>
          </div>
          <p className="text-sm font-medium mt-1">1000 kr per night</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
