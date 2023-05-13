
import './App.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Login } from './pages'

function App() {


  return (
    <div className='w-screen h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
