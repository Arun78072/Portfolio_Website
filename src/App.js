import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import Projects from './components/Project';

function App() {
  return (
  <>
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage/>}></Route>
        <Route path='/test' element={<HomePage/>}></Route>
        <Route path="/project/:name" element={<Projects />} />
      </Routes>
    </Layout>
  </>

  );
}

export default App;
