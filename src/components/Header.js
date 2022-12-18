import Sun from "../images/sun.png";
import Moon from "../images/half-moon.png";

function Header() {
  return (
    <header className="header nes-container with-title is-centered is-rounded">
      <h1 className="title">Hi! I'm Nadia!</h1>
      <h2>Welcome to my portfolio</h2>
      <nav>
        <ul className="header__menu">
          <li className="header__menu--list">
            <a href="#presentation">Do you wanna know about me?</a>
          </li>
          <li className="header__menu--list">
            <a href="#skills">What can I do?</a>
          </li>
          <li className="header__menu--list">
            <a href="#projects">What about my projects?</a>
          </li>
          <li className="header__menu--list">
            <a href="#contact">Contact me!</a>
          </li>
        </ul>
        <ul>
          <li className="nes-btn is-primary">
            Light mode <img className="icon" alt="sun icon" src={Sun} />
          </li>
          <li className="nes-btn is-dark">
            Dark mode <img className="icon" alt="half moon icon" src={Moon} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
