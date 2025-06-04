import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PetlyApp } from './PetlyApp';
import './styles.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<PetlyApp />
	</StrictMode>
);
