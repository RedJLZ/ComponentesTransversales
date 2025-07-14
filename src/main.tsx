/*src/main.tsx*/
import {HeroUIProvider} from '@heroui/react';
import '@ppm/frontend-toolkit-ui/dist/frontend-toolkit-ui.css';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css'; // aquí salen todas las utilidades

createRoot(document.getElementById('root')!).render(
  <HeroUIProvider>
    <App/>
  </HeroUIProvider>
);