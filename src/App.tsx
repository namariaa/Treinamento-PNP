import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Autocadastro from './pages/HU001'
import Login from './pages/HU002'
import NovaPublicacao from './pages/HU003'
import Feed from './pages/HU004'
import { AutenticProvider } from './context/Autenticar'

function App() {
  //O <AutenticProvider> e o Login estiver fora do escopo do AutenticProvider, o contexto não estará disponível, e o autenticar não será encontrado. 
  return (
    <>
    <AutenticProvider> 
      <BrowserRouter>
      <Routes>
          <Route path='/cadastro' element={<Autocadastro/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/NovaPublicacao' element={<NovaPublicacao/>} />
          <Route path='/feed' element={<Feed/>} />
      </Routes>
      </BrowserRouter>
      </AutenticProvider>
    </>
  )
}

export default App
