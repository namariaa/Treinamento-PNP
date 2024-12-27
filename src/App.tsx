import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Autocadastro from './pages/HU001'
import Login from './pages/HU002'
import NovaPublicacao from './pages/HU003'
import Feed from './pages/HU004'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/cadastro' element={<Autocadastro/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/NovaPublicacao' element={<NovaPublicacao/>} />
          <Route path='/' element={<Feed/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
