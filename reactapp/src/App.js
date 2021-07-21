// In React 17 no need to import react

// shortcut to build functional component --> rafce

// for autocomplete check settings.json ("emmet.includeLanguages":{"javascript": "javascriptreact")

import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}


// how React works

// const App = () => {
//   return React.createElement("h1", {}, "hi")
// }


// Example :
/* <div>
  <h3>This is earth</h3>
</div> */

// const App = () => {
  
//   return React.createElement("div", {}, React.createElement("h3", {}, "This is earth" ) )

// }
export default App
