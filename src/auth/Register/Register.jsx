function Register() {
  return (
    <div className="flex items-center justify-center  bg-yellow-100" style={{minHeight:'90vh'}}>
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl border border-orange-300">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Register</h2>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          <div>
            <label className="block text-orange-700 font-medium">Username*:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-yellow-50"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-orange-700 font-medium">Password*:</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-yellow-50"
              placeholder="Enter password"
            />
          </div>
          <div>
            <label className="block text-orange-700 font-medium">Confirm Password*:</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-yellow-50"
              placeholder="Confirm password"
            />
          </div>
          <div>
            <label className="block text-orange-700 font-medium">Mobile Number:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-yellow-50"
              placeholder="Enter mobile number"
            />
          </div>
          <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition font-semibold">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
