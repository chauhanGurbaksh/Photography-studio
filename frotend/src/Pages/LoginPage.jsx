import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Define allowed email (you can move this to env or config later)
  const allowedEmail = 'abcd@gmail.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is allowed
    if (formData.email !== allowedEmail) {
      setAlertType('danger');
      setMessage('Access denied. Only authorized user can login.');
      return;
    }

    try {
      const res = await axios.post('https://photography-studio.onrender.com/api/user_login', formData);

      if (res.status === 200) {
        setAlertType('success');
        setMessage('Login successful! Redirecting to dashboard...');

        localStorage.setItem('email', formData.email);

        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Invalid email or password.';
      setAlertType('danger');
      setMessage(errorMsg);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center mb-5">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 text-dark">Login</h3>

        {message && (
          <div className={`alert alert-${alertType}`} role="alert">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-dark">Email address</label>
            <input
              placeholder='Enter email'
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-dark">Password</label>
            <input
              placeholder='Enter password'
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPasswordCheck"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="form-check-label text-dark" htmlFor="showPasswordCheck">
              Show Password
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Log In</button>
        </form>

        <div className="mt-3 text-center">
          <p className="text-dark">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
