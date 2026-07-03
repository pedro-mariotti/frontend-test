import { useEffect, useState } from 'react';
import { getInfoLoja } from '../services/api';
import './Footer.css';

const Footer = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    let ativo = true;

    getInfoLoja()
      .then((dados) => {
        if (ativo) setInfo(dados);
      })
      .catch(() => {
        // Falha silenciosa: o footer tem valores padrão de reserva
        if (ativo) setInfo(null);
      });

    return () => {
      ativo = false;
    };
  }, []);

  return (
    <footer id="contato" className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="footer__brand">Grão & Brasa</p>
          <p className="footer__endereco">
            {info?.endereco || 'Rua das Palmeiras, 214 — Centro'}
          </p>
        </div>

        <div className="footer__coluna">
          <p className="footer__label">Horário</p>
          <p>{info?.horario || 'Seg a sáb, 7h às 19h'}</p>
        </div>

        <div className="footer__coluna">
          <p className="footer__label">Contato</p>
          <p>{info?.telefone || '(31) 99999-0000'}</p>
        </div>
      </div>

      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} Grão & Brasa. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;