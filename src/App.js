import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Header from './components/Header';
import Links from './components/Links';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path='/'
            element={<>
              <Header />
              < Links />
            </>}
          />
          
          <Route
            exact
            path='/contact'
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
