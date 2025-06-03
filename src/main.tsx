import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { PetlyApp } from './PetlyApp';
import './styles.css';

createRoot(document.getElementById('root')!).render(
	<HashRouter>
		<StrictMode>
			<PetlyApp />
		</StrictMode>
	</HashRouter>
);
