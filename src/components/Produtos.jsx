import { useEffect, useState } from 'react';
import { getProdutos } from '../services/api';
import './Produtos.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | success | error

  useEffect(() => {
    let ativo = true;

    const carregarProdutos = async () => {
      try {
        const dados = await getProdutos();
        if (ativo) {
          setProdutos(dados);
          setStatus('success');
        }
      } catch (erro) {
        console.error('Falha ao buscar produtos:', erro);
        if (ativo) setStatus('error');
      }
    };

    carregarProdutos();

    return () => {
      ativo = false;
    };
  }, []);

  return (
    <section id="cardapio" className="produtos">
      <div className="wrap">
        <p className="produtos__eyebrow">Cardápio do dia</p>
        <h2 className="produtos__title">O que está torrado agora</h2>

        {status === 'loading' && (
          <div className="produtos__estado" role="status">
            Carregando o cardápio...
          </div>
        )}

        {status === 'error' && (
          <div className="produtos__estado produtos__estado--erro" role="alert">
            Não foi possível carregar o cardápio agora. Verifique se o
            backend está rodando e tente novamente em instantes.
          </div>
        )}

        {status === 'success' && produtos.length === 0 && (
          <div className="produtos__estado">
            Nenhum item disponível no cardápio no momento.
          </div>
        )}

        {status === 'success' && produtos.length > 0 && (
          <div className="produtos__grid">
            {produtos.map((produto) => (
              <article className="produto-card" key={produto.id}>
                <div className="produto-card__imagem">
                  {produto.imagem ? (
                    <img src={produto.imagem} alt={produto.nome} />
                  ) : (
                    <span className="produto-card__imagem-fallback">☕</span>
                  )}
                </div>
                <div className="produto-card__corpo">
                  <div className="produto-card__cabecalho">
                    <h3>{produto.nome}</h3>
                    <span className="produto-card__preco">
                      {Number(produto.preco).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </div>
                  {produto.descricao && <p>{produto.descricao}</p>}
                  {produto.categoria && (
                    <span className="produto-card__tag">{produto.categoria}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Produtos;