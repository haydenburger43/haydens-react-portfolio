import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import About from './components/About';
import Contact from './components/contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/haydens-react-portfolio/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
