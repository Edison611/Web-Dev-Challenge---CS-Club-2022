import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Teams from './pages/Add'
import Guides from './pages/Tasks'
import Socials from './pages/Socials'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Add" element={<Teams />} />
        <Route path="/Tasks" element={<Guides />} />
        <Route path="/Socials" element={<Socials />} />
      </Routes>
    </div>
  );
}

export default App;
