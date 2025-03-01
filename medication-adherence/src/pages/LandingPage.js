const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Medication Adherence</h1>
      <div className="mt-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
        <button className="ml-2 px-6 py-2 bg-green-500 text-white rounded">
          Signup
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
