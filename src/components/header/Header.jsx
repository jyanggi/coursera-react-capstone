import logo from "./Logo.svg";
import "./Header.scss";
import { handleClick, SECTIONS } from "../../util/Utils";

function Header() {
  return (
    <header id="header-nav">
      <img className="logo" src={logo} alt="header logo" />
      <nav>
        <ul>
          {SECTIONS.map((p) => (
            <li key={"header-" + p.id}>
              <a
                href={p.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(p.id);
                }}
              >
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
