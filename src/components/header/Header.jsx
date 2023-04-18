import logo from "./Logo.svg";
import "./Header.scss";

const SECTIONS = [
  { title: "HOME", id: "#hero-section" },
  { title: "ABOUT", id: "#about" },
  { title: "MENU", id: "#menu-section" },
  { title: "ORDER ONLINE", id: "#home" },
  { title: "LOGIN", id: "#home" },
];
function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="header logo" />
      <nav>
        <ul>
          {SECTIONS.map((p) => (
            <li key={p.id}>
              <a href={p.id}>{p.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
