import logo from "./footerlogo.png";
import "./Footer.scss";

const SECTIONS = [
  { title: "HOME", id: "#hero-section" },
  { title: "ABOUT", id: "#about" },
  { title: "MENU", id: "#menu-section" },
  { title: "ORDER ONLINE", id: "#home" },
  { title: "LOGIN", id: "#home" },
];

const CONTACTS = [
  { title: "Address", url: "https://maps.google.com/?q=Chicago" },
  { title: "Phone Number", url: "tel:1234567890" },
  { title: "Email", url: "mailto:test@littlelemon.com" },
];

const SOCIALS = [
  { title: "Facebook", url: "https://facebook.com" },
  { title: "Instagram", url: "https://instagram.com" },
  { title: "Youtube", url: "https://youtube.com" },
  { title: "Twitter", url: "twitter" },
];
function Footer() {
  return (
    <footer>
      <section>
        <img className="logo" src={logo} alt="footer logo" />
      </section>
      <section>
        <ul>
          <h2>Navigation</h2>
          {SECTIONS.map((p) => (
            <li key={p.id}>
              <a href={p.id}>{p.title}</a>
            </li>
          ))}
        </ul>
        <ul>
          <h2>Contact</h2>
          {CONTACTS.map((p) => (
            <li key={p.title}>
              <a href={p.url} target="__blank">
                {p.title}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <h2>Social Media</h2>
          {SOCIALS.map((p) => (
            <li key={p.title}>
              <a href={p.url} target="__blank">
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
