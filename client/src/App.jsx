import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Create from './pages/Create';
import Entity from './pages/Entity';
import NewEntity from './pages/NewEntity';

function App() {
  
  

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Entity} />
        <Route path='/create' Component={Create} />
        <Route path='entity/:id' Component={NewEntity} />

      </Routes>
    </BrowserRouter>
     </div>
  )
}

export default App
