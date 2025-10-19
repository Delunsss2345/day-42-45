import { setCurrentUser } from "@/features/auth";
import { useCurrentUser } from "@/features/auth/hook";
import * as authService from "@/services/auth";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/product", label: "Product" },
  { path: "/auth", label: "Login / Register" },
];

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useCurrentUser();

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
    } finally {
      localStorage.clear();
      dispatch(setCurrentUser(null));
      navigate("/auth");
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Logo
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-blue-500 ${
                      currentUser && link.path === "/auth"
                        ? "hidden"
                        : "visible"
                    } ${isActive ? "font-bold text-blue-600" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {currentUser && (
              <div>
                <p>{currentUser?.email}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
