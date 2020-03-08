import React , {useState} from 'react'
import ReactDom from 'react-dom'

const Count = () => {
    const [n, setN] = useState(0)
    const click = () =>{
        setN(n + 1)
    }

    return (
        <div>
            <div>{n}</div>
            <button onClick={click}>+</button>
        </div>
    )
}

export default Count