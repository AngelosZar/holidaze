function IsLoadingContainer({ isLoading }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {isLoading && (
        <h5 class="text-center text-xl font-semibold text-gray-700">
          Loading...
        </h5>
      )}
    </div>
  );
}

export default IsLoadingContainer;
