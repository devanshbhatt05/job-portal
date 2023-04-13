import logo from './logo.svg';
import './App.css';
import { Provider, createStoreHook } from 'react-redux';


import store from './store';
import Posts from './components/Posts';

import Navbar from './components/Navbar';
import Search from './components/Search';
import Menu from './components/Menu';
import Food from './components/Food';
import Post from './components/Post'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';




function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Post" element={<Post size={"25rem"} />} />
            
            <Route path="/food" element={<Food />} />
            <Route path="/Cart" element={<Cart />} />


            


          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
