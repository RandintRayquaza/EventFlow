import { useDispatch, useSelector } from "react-redux";
import {
  authStart,
  authSuccess,
  authFailure,
  logout as logoutAction,
  clearError,
} from "../State/auth.slice";
import {
  registerUser,
  loginUser,
  logoutUser,
  initiateGoogleLogin,
} from "../Api/auth.api";

// ─── Selectors ───────────────────────────────────────────────
export const useAuthState = () =>
  useSelector((state) => state.auth);

// ─── Thunk actions ───────────────────────────────────────────
export const useAuthActions = () => {
  const dispatch = useDispatch();

  const register = async (name, email, password) => {
    dispatch(authStart());
    try {
      const res = await registerUser(name, email, password);
      dispatch(authSuccess(res));
    } catch (error) {
      dispatch(authFailure(error.response?.data?.message || "Registration failed"));
    }
  };

  const login = async (email, password) => {
    dispatch(authStart());
    try {
      const res = await loginUser(email, password);
      dispatch(authSuccess(res));
    } catch (error) {
      dispatch(authFailure(error.response?.data?.message || "Login failed"));
    }
  };

  const logoutAsync = async () => {
    dispatch(authStart());
    try {
      await logoutUser();
      dispatch(logoutAction());
    } catch (error) {
      console.log(error)
      dispatch(logoutAction());
    }
  };

  const loginWithGoogle = () => {
    initiateGoogleLogin();
  };

  const dismissError = () => {
    dispatch(clearError());
  };

  return { register, login, logoutAsync, loginWithGoogle, dismissError };
};