// Magic to get react-scripts to pick up stylesheet
import './style.css';

import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
