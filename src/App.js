import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movielist from './component/Movielist';
import MovieDetail from './component/MovieDetail';
import Watchlist from './component/Watchlist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/movielist' element={<Movielist />} />
        <Route path="movielist/:id" element={<MovieDetail />} /> 
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
