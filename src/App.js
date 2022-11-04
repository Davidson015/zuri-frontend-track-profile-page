import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import Links from './components/Links';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Links />,
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
