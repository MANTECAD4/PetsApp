import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { PetlyApp } from './PetlyApp';
import './styles.css'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <StrictMode>
          <PetlyApp />
      </StrictMode>,
    </BrowserRouter>
)
