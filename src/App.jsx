import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroPage from './components/Pages/IntroPage/IntroPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import MainNav from './components/Navs/MainNav';

function App() {

  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path='/' element={<IntroPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
