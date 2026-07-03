import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="#topo" className="header__brand">
          Grão <span>&</span> Brasa
        </a>

        <nav className="header__nav">
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#cardapio" className="header__cta">
          Ver cardápio
        </a>
      </div>
    </header>
  );
};

export default Header;