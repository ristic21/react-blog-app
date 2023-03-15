import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page } from './layout/Page';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Page>
    <Router />
  </Page>
    </BrowserRouter>
    
  );
}

export default App;
