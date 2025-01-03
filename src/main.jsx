
import { createRoot } from 'react-dom/client'
import './index.css'
import './Responsive.css'
import './pages.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import Store from './Store.jsx';
import { Provider } from 'react-redux';

{
    /* The following line can be included in your src/index.js or App.js file */
  }
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
 
  <Provider store={Store}>
    <App />
    </Provider>
 


)
