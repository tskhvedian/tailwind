function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="px-8 py-12 max-w-md mx-auto">
        <img className="h-10" src="/logo.svg" alt="workcation" />
        <img
          className="mt-6 rounded-lg shadow-xl"
          src="/beach-work.jpg"
          alt=""
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          You can work from everywhere.
          <span className="text-indigo-500"> Take advantage of it. </span>
        </h1>
        <p className="mt-2 text-gray-600">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <button className="mt-4 px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm">Book your escape</button>
      </div>
    </div>
  );
}

export default App;
