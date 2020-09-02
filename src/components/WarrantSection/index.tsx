import React from 'react';

import { Container, Section } from './styles';

const WarrantSection: React.FC = () => {
  return (
    <Container>
      <Section>
        <h4>Garantia</h4>

        <div>
          <span>
            <p className="title">Compra garantida com o Lorem Ipsum</p>
            <p className="description">Receba o produto que você está esperando ou devolvemos o seu dinheiro</p>
          </span>
          <span>
            <p className="title">Garantida do vendedor</p>
            <p className="description">Sem garantia</p>
          </span>
        </div>

        <a href="/">Saiba mais sobre garantia</a>
      </Section>

    </Container>
  );
};

export default WarrantSection;
