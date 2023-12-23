import React, { useState } from 'react'

const Editor = () => {

    const[words,setWords] = useState(" "); 

    const[display, setDisplay] = useState("");

    const clicker = function(){

            setDisplay(words)
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
        {setDisplay && <p>The text entered: {display} </p>}
    </div>
  )
}

export default Editor
