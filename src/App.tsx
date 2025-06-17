import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1
      </Heading>
      <Heading>Olá mundo 2</Heading>
      <Heading>Olá mundo 3</Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nesciunt
        illum recusandae excepturi nam perferendis. Eligendi possimus, nulla
        harum dignissimos, nihil, magni molestias officia vel voluptate commodi
        minima velit fugit.
      </p>
    </>
  );
}
