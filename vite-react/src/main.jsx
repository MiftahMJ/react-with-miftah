import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherUser="chai aur react"
const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit</a>
)
const reactElement=React.createElement(
    'a', //tag
    {href: 'https://google.com', target:'_blank'},
    'click me to google visit' ,//attribute
    anotherUser
) 

ReactDOM.createRoot(document.getElementById('root')).render(

<App/>
  
    
  
)
