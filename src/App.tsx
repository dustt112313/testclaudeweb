import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatInterface from './components/ChatInterface'
import './App.css'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m Claude Code, your AI programming assistant. I can help you write, debug, and understand code. What would you like to work on today?',
      timestamp: new Date()
    }
  ])
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateResponse(content),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    }, 500)
  }

  const generateResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase()

    if (lower.includes('hello') || lower.includes('hi')) {
      return 'Hello! How can I help you with your coding project today?'
    }

    if (lower.includes('code') || lower.includes('function')) {
      return `I'd be happy to help you with that! Here's an example:\n\n\`\`\`typescript\nfunction example() {\n  console.log("Hello from Claude Code!");\n  return true;\n}\n\nexample();\n\`\`\`\n\nThis is a simple TypeScript function. Would you like me to explain it or help you modify it?`
    }

    if (lower.includes('react') || lower.includes('component')) {
      return `Here's a React component example:\n\n\`\`\`tsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}\n\nexport default Counter;\n\`\`\`\n\nThis is a basic counter component using React hooks. Need help with anything else?`
    }

    return `I understand you're asking about: "${userInput}"\n\nI can help you with:\n- Writing and debugging code\n- Explaining programming concepts\n- Creating components and functions\n- Reviewing and improving code\n- Setting up projects\n\nWhat specifically would you like assistance with?`
  }

  const handleNewChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'New conversation started. How can I help you?',
        timestamp: new Date()
      }
    ])
  }

  return (
    <div className="app">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onNewChat={handleNewChat}
      />
      <ChatInterface
        messages={messages}
        onSendMessage={handleSendMessage}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  )
}

export default App
