
import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList'
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle'
import { useContext } from 'react';
import { ThemeContext } from './context';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import Post from "./components/Post"
import NavBar from './components/NavBar';
import Project from './components/Project';
import Home from './components/Home';



const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    
    <div style={{ backgroundColor: darkMode ? "#222" : "white",color: darkMode &&"white", }} >
        
   
       <BrowserRouter>
       <NavBar/> 
      <Routes>
        <Route element={<Post/>} path='/post'/>
        <Route element={<Home/>} path='/home'/>

        <Route element={<Project/>} path='/project'/>

      </Routes>
      </BrowserRouter>
     
     {/* <Post/> */}
     <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />

    </div>
  );
}

export default App;
