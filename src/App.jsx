import './App.css'
import AboutMain from './components/AboutMain'
import Achievements from './components/Achievements'
import AIConclave from './components/Achievements/AIConclave'
import Apex from './components/Achievements/Apex'
import Genesis25 from './components/Achievements/Genesis25'
import HackFest from './components/Achievements/HackFest'
import HackTrain from './components/Achievements/HackTrain'
import Innoverse from './components/Achievements/Innoverse'
import Contact from './components/Contact'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Resume from './components/Resume'

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/aboutme' element={<AboutMain />}/>
          <Route path='/achievements' element={<Achievements />}/>
          <Route path='/apex2k24' element={<Apex />}/>
          <Route path='/innoverse2k24' element={<Innoverse />}/>
          <Route path='/hacktrain' element={<HackTrain />}/>
          <Route path='/genesis25' element={<Genesis25 />}/>
          <Route path='/hackfest' element={<HackFest />}/>
          <Route path='/aiconclave' element={<AIConclave />}/>
          <Route path='/resume' element={<Resume />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
    </div>
  )
}

export default App
