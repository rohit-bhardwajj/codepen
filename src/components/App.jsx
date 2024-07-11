import { useState } from 'react'
import Editor from './Editor'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='pane top-pane'>
      <Editor/>
      <Editor/>
      <Editor/>
      </div>
      <div className='pane'>
        <iframe 
        title='output'
        sandbox='allow-scripts'
        style={{ border: 'none' }}
        width='100%'
        height='100%'

        ></iframe>
      </div>
    </>
  )
}

export default App
