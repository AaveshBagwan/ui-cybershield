import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center bg-yellow-100" style={{ minHeight: '90vh' }}>
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl border border-orange-300">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-orange-700 font-medium">Email:</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-yellow-50"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-orange-700 font-medium">Password:</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-yellow-50"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 transition font-semibold">
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-orange-700 font-medium">Or sign in with</div>
        <div className="flex justify-center gap-10 mt-4">
          {/* <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            <FaGoogle /> Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
            <FaGithub /> GitHub
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <FaFacebook /> Facebook
          </button> */}
          <img src="/google-logo.png" alt="google-logo.png" className="w-11 h-11 rounded-lg hover: transition" />
          <img src="/github-logo.png" alt="github-logo.png" className="w-10 h-10 rounded-lg hover: transition" />
          <img src="/facebook-logo.png" alt="facebook-logo.png" className="w-10 h-10 rounded-lg hover: transition" />
        </div>
        <p className="text-center mt-4 text-orange-700">
          Not a member? <NavLink to="/auth/register" className="text-orange-500 hover:underline">Register now</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
