import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './LandingPage/Screens/Home';
import About from './LandingPage/Screens/About';
import Course from './LandingPage/Screens/Course';
import Enroll from './LandingPage/Screens/Enroll';
import Contact from './LandingPage/Screens/Contact';
import Courses from './LandingPage/Screens/Courses';
import Graphics from './LandingPage/Screens/Graphics';
import Product from './LandingPage/Screens/Product';
import Marketing from './LandingPage/Screens/Marketing';
import Data from './LandingPage/Screens/Data';
import Mobile from './LandingPage/Screens/Mobile';
import Web from './LandingPage/Screens/Web';
import Blockchain from './LandingPage/Screens/Blockchain';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/blockchain' element={<Blockchain/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/enroll' element={<Enroll/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/graphics' element={<Graphics/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/marketing' element={<Marketing/>} />
        <Route path='/data' element={<Data/>} />
        <Route path='/mobile' element={<Mobile/>} />
        <Route path='/web' element={<Web/>} />

      </Routes>

    </div>
  );
}

export default App;
