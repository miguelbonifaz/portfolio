import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#home" className="logo">
            Portfolio
          </a>
          <ul className="nav-links">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
