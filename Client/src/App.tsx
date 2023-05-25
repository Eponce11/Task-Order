
import './App.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Login, Register, Home, Workspace } from './pages'

function App() {


  return (
    <div className='App w-screen h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/workspace' element={<Workspace/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
