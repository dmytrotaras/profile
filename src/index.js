import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'
import { ModelProvider } from './context/model-context';
import { ThemeProvider } from './context/theme-context';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <ThemeProvider>
    <ModelProvider>
        <App/>
    </ModelProvider>
    </ThemeProvider>
)