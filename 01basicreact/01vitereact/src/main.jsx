import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp()
{
    return(
        <div>
            <h1>custom App !</h1>
        </div>
    )
}


// const reactElement ={
//     type: 'a',
//     props:{
//          href:'https://google.com',
//          target:'_blank'
//     },
//     children: 'Click me to visit google'
// }

const AnotherElement =(
    <a href='https://google.com' target='_blank'> vist google</a>
)


const anotherElement="chai and code"
const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank',},
      'click in the visit google',
      anotherElement
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // <MyApp />
     reactElement
    // AnotherElement

 
)
