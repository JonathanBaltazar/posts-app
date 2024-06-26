import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './output.css' 
import PostsProvider from './context/PostsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>,
)
