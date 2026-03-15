import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const registerUser = async (name, email, password) => {
  const res = await api.post('api/auth/register', { name, email, password });
  return res.data;
};

export const loginUser = async (email, password) => {
  const res = await api.post('api/auth/login', { email, password });
  return res.data;
};

export const logoutUser = async () => {
  const res = await api.post('api/auth/logout');
  return res.data;
};

// ✅ Added Google OAuth functions
export const initiateGoogleLogin = () => {
  window.location.href = `${API_BASE}api/auth/google`;
};

export const handleGoogleCallback = async (code) => {
  const res = await api.get(`api/auth/google/callback?code=${code}`);
  return res.data;
};