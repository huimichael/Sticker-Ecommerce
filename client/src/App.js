import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
