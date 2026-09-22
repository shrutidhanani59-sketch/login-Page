
import { Routes , Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Logout from './Logout.jsx'
import Ragister from './Ragister.jsx'
function App() {
 

  return (
    <>
      <Header/>

      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/ragister' element={<Ragister/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
