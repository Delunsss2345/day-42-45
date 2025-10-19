import { useEffect } from "react";
import AppRoutes from "./components/AppRoutes";
import AuthProvider from "./components/AuthProvider";
import { axiosInstance } from "./utils/http";

function App() {
  useEffect(() => {
    axiosInstance.get("/auth/devices");
  }, []);
  
  return (
    <>
      <AuthProvider />
      <AppRoutes />
    </>
  );
}

export default App;
