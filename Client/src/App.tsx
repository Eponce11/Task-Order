
import './App.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Login, Register, Home } from './pages'

function App() {


  return (
    <div className='App w-screen h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
