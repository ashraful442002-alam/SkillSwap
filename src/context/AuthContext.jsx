import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Register with email & password
  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Login with email & password
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Login with Google
  const loginWithGoogle = () =>
    signInWithPopup(auth, new GoogleAuthProvider());

  // Logout
  const logout = () => signOut(auth);

  // Update display name / photo
  const updateUserProfile = (profile) =>
    updateProfile(auth.currentUser, profile);

  // Forgot password
  const resetPassword = (email) =>
    sendPasswordResetEmail(auth, email);

  const value = {
    user,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
    updateUserProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
