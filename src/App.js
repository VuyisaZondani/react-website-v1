
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar.js';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';

import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <NavBar />
        <Routes>
            <Route path = '/' exact element = {<Home />} />
            <Route path = '/services' exact element = {<Services />} />
            <Route path = '/products' exact element = {<Products />} />
            <Route path = '/sign-up' exact element = {<SignUp />} />
          
        </Routes>
    </Router>
  </>
  );
}

export default App;
