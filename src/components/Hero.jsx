import './Hero.css';

const Hero = () => {
  return (
    <section id="topo" className="hero">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">Torra artesanal desde 2016</p>
          <h1 className="hero__title">
            Café que carrega
            <br />
            <em>a história do grão</em>
          </h1>
          <p className="hero__text">
            Selecionamos lotes de pequenos produtores, torramos em pequenos
            lotes toda semana e servimos cada xícara no ponto exato da
            colheita. Sem pressa, sem atalho.
          </p>
          <div className="hero__actions">
            <a href="#cardapio" className="btn btn--primary">
              Explorar cardápio
            </a>
            <a href="#sobre" className="btn btn--ghost">
              Conhecer a torrefação
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <svg
            viewBox="0 0 320 320"
            className="cup-illustration"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="160" cy="245" rx="92" ry="14" fill="var(--color-line-dark)" />
            <path
              d="M75 120 h150 l-14 108 a20 20 0 0 1-20 18 h-82 a20 20 0 0 1-20-18 Z"
              fill="var(--color-caramel)"
            />
            <path
              d="M75 120 h150 l-3 24 h-144 Z"
              fill="var(--color-espresso-soft)"
            />
            <path
              d="M220 132 c26 -4 42 16 34 38 c-7 20 -30 26 -46 20"
              fill="none"
              stroke="var(--color-caramel)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <g className="steam">
              <path
                className="steam__wisp steam__wisp--1"
                d="M130 110 C120 90 145 78 132 58"
                fill="none"
                stroke="var(--color-sage)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                className="steam__wisp steam__wisp--2"
                d="M165 110 C155 88 180 74 167 50"
                fill="none"
                stroke="var(--color-caramel-soft)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                className="steam__wisp steam__wisp--3"
                d="M200 110 C190 90 215 78 202 58"
                fill="none"
                stroke="var(--color-sage)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;