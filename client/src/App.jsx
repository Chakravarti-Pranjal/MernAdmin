import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {Services} from './Pages/Services';
import {Register} from './Pages/Register';
import {Login} from './Pages/Login';


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App ;