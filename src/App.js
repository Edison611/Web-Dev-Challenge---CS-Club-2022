import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Tasks from './pages/Tasks'
import Socials from './pages/Socials'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Socials" element={<Socials />} />
      </Routes>
    </div>
  );
}

export default App;
