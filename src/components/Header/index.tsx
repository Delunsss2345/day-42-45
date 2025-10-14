import { Link, NavLink } from "react-router";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/product", label: "Product" },
  { path: "/auth", label: "Login / Register" },
];

const Header = () => {
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
                      isActive ? "font-bold text-blue-600" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
