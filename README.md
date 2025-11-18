# Claude Code UI

A modern, Claude Code-inspired user interface built with React, TypeScript, and Vite.

## Features

- 🎨 Dark theme with Claude Code styling
- 💬 Chat interface with message history
- 📝 Markdown support with GitHub Flavored Markdown
- 🎯 Syntax highlighting for code blocks
- 📋 Copy code functionality
- ⚡ Fast and responsive UI
- 🎭 Collapsible sidebar navigation
- ⌨️ Keyboard shortcuts (Enter to send, Shift+Enter for new line)

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code syntax highlighting
- **Remark GFM** - GitHub Flavored Markdown support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
testclaudeweb/
├── src/
│   ├── components/
│   │   ├── ChatInterface.tsx    # Main chat container
│   │   ├── Message.tsx          # Individual message component
│   │   ├── InputArea.tsx        # Message input field
│   │   └── Sidebar.tsx          # Navigation sidebar
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Features Overview

### Chat Interface
- Clean, modern design inspired by Claude Code
- Smooth animations and transitions
- Auto-scrolling to latest messages
- Responsive layout

### Message Components
- User and assistant message differentiation
- Avatar icons for each role
- Timestamp display
- Markdown rendering with full GFM support

### Code Blocks
- Syntax highlighting for multiple languages
- Language indicators
- Copy to clipboard functionality
- Dark theme optimized colors

### Input Area
- Auto-resizing textarea
- Keyboard shortcuts
- Send button with visual feedback
- Disabled state when empty

### Sidebar
- New chat functionality
- Chat history (expandable)
- User profile section
- Collapsible with smooth animation

## Customization

### Colors
Edit the CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #1a1a1a;
  --bg-secondary: #242424;
  --accent-color: #d97706;
  /* ... more variables */
}
```

### Styling
Component-specific styles are in separate CSS files next to each component.

## License

MIT