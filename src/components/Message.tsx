import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import { Message as MessageType } from '../App'
import './Message.css'

interface MessageProps {
  message: MessageType
}

function Message({ message }: MessageProps) {
  return (
    <div className={`message ${message.role}`}>
      <div className="message-header">
        <div className="message-avatar">
          {message.role === 'user' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          )}
        </div>
        <div className="message-meta">
          <span className="message-role">
            {message.role === 'user' ? 'You' : 'Claude'}
          </span>
          <span className="message-time">
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
      <div className="message-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              const language = match ? match[1] : ''

              return !inline && language ? (
                <div className="code-block">
                  <div className="code-block-header">
                    <span className="code-language">{language}</span>
                    <button
                      className="btn-copy"
                      onClick={() => {
                        const code = String(children).replace(/\n$/, '')
                        navigator.clipboard.writeText(code)
                      }}
                      title="Copy code"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    </button>
                  </div>
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={language}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      borderRadius: '0 0 6px 6px',
                      fontSize: '14px',
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className="inline-code" {...props}>
                  {children}
                </code>
              )
            },
            p: ({ children }) => <p className="markdown-paragraph">{children}</p>,
            ul: ({ children }) => <ul className="markdown-list">{children}</ul>,
            ol: ({ children }) => <ol className="markdown-list">{children}</ol>,
            li: ({ children }) => <li className="markdown-list-item">{children}</li>,
            h1: ({ children }) => <h1 className="markdown-heading">{children}</h1>,
            h2: ({ children }) => <h2 className="markdown-heading">{children}</h2>,
            h3: ({ children }) => <h3 className="markdown-heading">{children}</h3>,
            blockquote: ({ children }) => <blockquote className="markdown-blockquote">{children}</blockquote>,
            a: ({ href, children }) => (
              <a href={href} className="markdown-link" target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

function formatTime(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  if (seconds < 60) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`

  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export default Message
