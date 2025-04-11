function QuickSearch() {
  return (
    <section>
      <h3>Quick Search</h3>
      <div>
        <ul className="flex flex-col md:flex-row gap-4">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
        </ul>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <h2>cards</h2>
          <h2>cards</h2>
          <h2>cards</h2>
          <h2>cards</h2>
          <h2>cards</h2>
        </div>
      </div>
    </section>
  );
}

export default QuickSearch;
