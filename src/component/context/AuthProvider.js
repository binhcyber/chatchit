import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../fireBase/config";
import { CircularProgress, LinearProgress } from "@mui/material";
export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        const { displayName, uid, email, photoURL } = user;
        setUser({ displayName, uid, email, photoURL });
        setLoading(false);
        history.push("/chat");
        return;
      }
      setLoading(false);
      history.push("/");
    });
    return () => {
      unsub();
    };
  }, [history]);
  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <LinearProgress color="secondary" /> : children}
    </AuthContext.Provider>
  );
}
