import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nesciunt
        illum recusandae excepturi nam perferendis. Eligendi possimus, nulla
        harum dignissimos, nihil, magni molestias officia vel voluptate commodi
        minima velit fugit.
      </p>
    </>
  );
}
