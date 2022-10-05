import './App.scss';
import {Routes} from 'react-router-dom';
import Layout from './components/layout';

function App() {
  return (
    <>
    <Routes>
      <route path="/" element={<layout />} ></route>
    </Routes>
    </>
  );
}

export default App;
