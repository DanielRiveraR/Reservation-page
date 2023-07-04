
import './App.css';
// import { Header, Nav, Main, Footer } from './components';
// import Header from './components/Header';
// import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
