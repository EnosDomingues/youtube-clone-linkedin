import React from 'react';

import { Container } from './styles';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';

const layout: React.FC = () => {
  return (
    <Container>
      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
}

export default layout;