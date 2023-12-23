import React, { useState } from 'react'

const Editor = () => {

    const[words,setWords] = useState(" "); 

    const[display, setDisplay] = useState([]);
    

    const remove = ()=>{

        setWords('')
        setDisplay('')

    }

    
    const clicker = function(){

        if (words.trim() !== '') {
            setDisplay([...display, words]);
            setWords('');
          }
            
    }

    

    const change = (e)=>{

        setWords(e.target.value)
    }
    return (
    <div>
     <input type="text"
     value={words}
     onChange={change} />
    
        <button onClick={clicker}>Click to see change</button>
        <ul>
          {display.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      
 
        <button onClick={remove}>Click to empty text </button>
    </div>
  )
}

export default Editor
