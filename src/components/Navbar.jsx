import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={
            ({ isActive }) =>
              isActive
                ? "text-tawny-olive font-bold border-b-2 border-tawny-olive" // Aktivní (zlatá)
                : "text-gray-400 hover:text-white" // Neaktivní (šedá)
          }
        >
          Domů
        </NavLink>
        <NavLink
          to="/popular"
          className={
            ({ isActive }) =>
              isActive
                ? "text-tawny-olive font-bold border-b-2 border-tawny-olive" // Aktivní (zlatá)
                : "text-gray-400 hover:text-white" // Neaktivní (šedá)
          }
        >
          Populární filmy
        </NavLink>
      </nav>
    </header>
  );
};
export default Navbar;
