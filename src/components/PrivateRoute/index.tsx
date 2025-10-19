import { useCurrentUser } from "@/features/auth/hook";
import type { RootStateReduce } from "@/types/store.type";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";

const PrivateRoute = () => {
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const fetching = useSelector((state: RootStateReduce) => state.auth.fetching);

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to={`/login?continue=${encodeURIComponent(pathname)}`} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
