import React, { useState, useEffect } from 'react'
import {
  FiMenu,
  FiPlus,
  FiMessageSquare,
  FiHelpCircle,
  FiClock,
  FiSettings,
  FiSun,
  FiMoon
} from 'react-icons/fi'
import './Sidebar.css'

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedExpand = localStorage.getItem('expand')
    if (savedTheme === 'dark') setDarkMode(true)
    if (savedExpand === 'false') setIsExpanded(false)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('expand', isExpanded)
  }, [darkMode, isExpanded])

  const toggleTheme = () => setDarkMode(prev => !prev)
  const toggleSidebar = () => setIsExpanded(prev => !prev)

  return (
    <div className={`sidebar ${darkMode ? 'dark' : ''} ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-top">
        <div className="menu-icon-wrapper" onClick={toggleSidebar} title="Toggle Sidebar">
          <FiMenu className="icon" />
        </div>

        {isExpanded && (
          <div className="new-chat">
            <FiPlus className="icon" />
            <p>New Chat</p>
          </div>
        )}

        {isExpanded && (
          <div className="recent-section">
            <p className="section-title">Recents</p>
            <div className="recent-entry">
              <FiMessageSquare className="icon" />
              <p>What is React...</p>
            </div>
            <div className="recent-entry">
              <FiMessageSquare className="icon" />
              <p>Explain Flexbox</p>
            </div>
          </div>
        )}
      </div>

      <div className="sidebar-bottom">
        <SidebarItem icon={<FiHelpCircle />} label="Help" isExpanded={isExpanded} />
        <SidebarItem icon={<FiClock />} label="Activity" isExpanded={isExpanded} />
        <SidebarItem icon={<FiSettings />} label="Settings" isExpanded={isExpanded} />
        <SidebarItem
          icon={darkMode ? <FiSun /> : <FiMoon />}
          label={darkMode ? 'Light Mode' : 'Dark Mode'}
          onClick={toggleTheme}
          isExpanded={isExpanded}
        />
      </div>
    </div>
  )
}

const SidebarItem = ({ icon, label, onClick, isExpanded }) => (
  <div className="sidebar-item" onClick={onClick} title={label}>
    {icon}
    {isExpanded && <p>{label}</p>}
  </div>
)

export default Sidebar
