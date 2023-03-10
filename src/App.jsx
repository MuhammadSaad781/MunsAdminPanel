import React from "react"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Valet from "./pages/Valet"
import Stats from "./pages/Stats"
import IncidentReports from "./pages/IncidentReports"

function App() {
 

  return (
   
      <Routes>
        <Route path="/" element={<Dashboard/>} >

          <Route path="Valet" element={<Valet/>}/>
          <Route path="Stats" element={<Stats/>}/>
          <Route path="IncidentReports" element={<IncidentReports/>}/>
        
        </Route>

      </Routes>
    
  )
}

export default App
