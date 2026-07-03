import './Sobre.css';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="wrap sobre__inner">
        <div className="sobre__texto">
          <p className="sobre__eyebrow">Nossa torrefação</p>
          <h2>
            Da fazenda para o pilão, do pilão para a sua xícara
          </h2>
          <p>
            Trabalhamos direto com cooperativas do Sul de Minas e do
            Cerrado Mineiro. Cada lote é catado à mão, torrado em pequenas
            bateladas e provado antes de chegar ao balcão — assim garantimos
            que cada café conte a história real da fazenda de onde veio.
          </p>
        </div>

        <dl className="sobre__fatos">
          <div>
            <dt>Origem</dt>
            <dd>Sul de Minas & Cerrado Mineiro</dd>
          </div>
          <div>
            <dt>Torra</dt>
            <dd>Semanal, em pequenos lotes</dd>
          </div>
          <div>
            <dt>Método</dt>
            <dd>Espresso, coado e prensa francesa</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Sobre;