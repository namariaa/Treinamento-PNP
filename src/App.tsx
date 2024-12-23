import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Autocadastro from './pages/HU001'
import Login from './pages/HU002'
import Perfil from './pages/HU003/perfil'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/cadastro' element={<Autocadastro/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/perfil' element={<Perfil/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
