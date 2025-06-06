import React, { useState, useEffect, useRef } from 'react'
import './Main.css'
import { FaArrowUp } from 'react-icons/fa'

const Main = ({ isInputVisible }) => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const handleSend = () => {
    if (!input.trim()) return
    setMessages(prev => [
      ...prev,
      { type: 'user', text: input },
      {
        type: 'bot',
        text: `Hi! Here's a Gemini-style response to:\n"${input}"\n\nLet me know if you'd like more info!`
      }
    ])
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="main-screen">
      {/* Header */}
      <div className="chat-header">
        <h1 className="chat-title">Gemini</h1>
      </div>

      {/* Chat Container */}
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.type}`}>
              {msg.type === 'bot' ? (
                <>
                  <div className="bot-avatar">G</div>
                  <div className="bot-content">{msg.text}</div>
                </>
              ) : (
                msg.text
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      {isInputVisible && (
        <div className="input-box">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Gemini anything..."
          />
          <button onClick={handleSend} className="send-button">
            <FaArrowUp />
          </button>
        </div>
      )}
    </div>
  )
}

export default Main
