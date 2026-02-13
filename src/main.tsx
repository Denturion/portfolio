import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { LightModeProvider } from './context/LightModeContext.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LightModeProvider>
			<App />
		</LightModeProvider>
	</StrictMode>
);
