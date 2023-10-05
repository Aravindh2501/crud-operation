import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import { Delete } from './components/Crud/Delete';
import { Update } from './components/Crud/Update';
import { Create } from './components/Crud/Create';
import { Read } from './components/Crud/Read';

function App() {
  return (
    <BrowserRouter>
      <div className="main">

        <Link style={{ textDecoration: "none" }} to="/create">
          <h2>Crud Operation <span> <img src="Assets/angle-small-right.png" alt="" /> </span></h2>
        </Link>


        <Routes>
          <Route exact path="/create" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
          <Route exact path="/delete" element={<Delete />}></Route>
        </Routes>



      </div >

    </BrowserRouter>
  );
}

export default App;
