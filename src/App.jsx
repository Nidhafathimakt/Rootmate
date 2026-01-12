
import './App.css'
import Planresults from './pages/Planresults'
import {Routes, Route } from 'react-router-dom' 
import Savedtrip from './pages/Savedtrip'
function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Savedtrip />}/>
      <Route path='/Planresults' element={<Planresults />}/>
     </Routes>
    </>
  )
}

export default App
