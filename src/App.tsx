
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './pages/form'

function App() {
 

  return (
    <>
      <BrowserRouter>
<Routes>
  <Route path='/' element={<Form/>}/>
</Routes>
      </BrowserRouter>
    </>
  )
}

export default App
