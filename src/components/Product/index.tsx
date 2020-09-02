import React from 'react';
import tshirtImage from '../../assets/tshirt.png';
import Info from '../Info';
import WarrantSection from '../WarrantSection';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import { Container, Row, Panel, Column, Gallery } from './styles';


const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="/">Compartilhar</a>
        <a href="/">Venderum igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt"/>
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantSection />
          <WarrantSection />
          <WarrantSection />
        </Column>
      </Panel>
    </Container>
  );
};

export default Product;
