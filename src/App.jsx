
import './App.css'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import {
  Navbar,
  Produccion,
  Inventario,
  Compras,
  Main
} from './components'

function App() {


  return (
    <div className="App">
           <BrowserRouter>
      <Navbar/>

 
      <Routes>
    <Route path='/' element={<Main/>}></Route>

    <Route path='/compras' element={<Compras/>}></Route>
    <Route path='/inventario' element={<Inventario/>}></Route>
    <Route path='/produccion' element={<Produccion/>}></Route>

    <Route
          path="*"
          element={
            <Navigate replace to="/" />
          }
          />



      </Routes>
      
     
      </BrowserRouter>
    </div>  
  )
}

export default App
