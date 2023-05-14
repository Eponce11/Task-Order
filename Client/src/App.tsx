
import './App.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Login, Register } from './pages'

function App() {


  return (
    <div className='w-screen h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
