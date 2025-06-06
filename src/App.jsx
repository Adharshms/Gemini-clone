import React, { useState } from 'react'
import Sidebar from './component/Sidebar/Sidebar'
import Main from './component/Main/Main'
import './index.css'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isInputVisible, setIsInputVisible] = useState(true)

  return (
    <div className="app-container" style={{ display: 'flex', width: '100%' }}>
      {isSidebarOpen && (
        <Sidebar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      )}
      <Main
        isInputVisible={isInputVisible}
        toggleInput={() => setIsInputVisible(!isInputVisible)}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
    </div>
  )
}

export default App
