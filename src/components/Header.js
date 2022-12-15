function Header() {
  return (
    <header className="header nes-container with-title is-centered is-rounded">
      <h1 className="title">Hi! I'm Nadia!</h1>
      <h2>Welcome to my portfolio</h2>
      <nav>
        <ul className="header__menu nes-list is-disc">
          <li className="header__menu--list">
            <a href="#presentation" alt="I'll tell you about me">
              About me
            </a>
          </li>
          <li className="header__menu--list">
            <a href="#skills">Skills</a>
          </li>
          <li className="header__menu--list">
            <a href="#projects">Projects</a>
          </li>
          <li className="header__menu--list">
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
