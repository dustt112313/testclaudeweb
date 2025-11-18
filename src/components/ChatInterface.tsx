import { useEffect, useRef } from 'react'
import { Message as MessageType } from '../App'
import Message from './Message'
import InputArea from './InputArea'
import './ChatInterface.css'

interface ChatInterfaceProps {
  messages: MessageType[]
  onSendMessage: (content: string) => void
  isSidebarOpen: boolean
}

function ChatInterface({ messages, onSendMessage, isSidebarOpen }: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className={`chat-interface ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="chat-header">
        <div className="header-content">
          <h1>Claude Code</h1>
          <div className="header-actions">
            <button className="btn-icon" title="Settings">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="messages-container">
        <div className="messages-wrapper">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <InputArea onSend={onSendMessage} />
    </div>
  )
}

export default ChatInterface
