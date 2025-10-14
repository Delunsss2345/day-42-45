import { configRoutes } from "@/configs/configRoutes";
import { useRoutes } from "react-router";

const AppRoutes = () => {
  const routes = useRoutes(configRoutes);
  return <>{routes}</>;
};

export default AppRoutes;
