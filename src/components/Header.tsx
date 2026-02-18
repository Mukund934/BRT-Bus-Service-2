import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  title: string;
  navLinks: { label: string; to: string }[];
}

const Header = ({ title, navLinks }: HeaderProps) => {
  const location = useLocation();

  return (
    <header className="brt-header">
      <h1>{title}</h1>
      <nav className="brt-nav">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
