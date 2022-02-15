
import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList'
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle'
import { useContext } from 'react';
import { ThemeContext } from './context';


const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white",color: darkMode &&"white", }} >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />

    </div>
  );
}

export default App;
