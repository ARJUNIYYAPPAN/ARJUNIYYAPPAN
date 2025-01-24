import React,{useState} from 'react'
import SimpleSlider from './Common/SimpleSlider'
import './InDe.scss'




function InDe() {

  const [count,setCount]=useState(0)

  const handleIncrement = ()=>{
    setCount(count+1)
  }
  const handleDecrement = ()=>{
    setCount(count-1)
  }
    return (
    <div className='main'>
      
      <h1>Updates</h1>
      <label>Count:{count}</label>
      <button onClick={handleDecrement}> Decrement</button>
      <button onClick={handleIncrement}> Increment </button>

      <SimpleSlider></SimpleSlider>

    </div>
  )
}

export default InDe