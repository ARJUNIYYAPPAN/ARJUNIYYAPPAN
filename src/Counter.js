import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./Redux/action";
 

function Counter(){
  const count = useSelector((state)=>state.count);
  const dispatch = useDispatch();

  return(
    <div>
      <p>Count:{count}</p>

      <button onClick={()=>dispatch(increment())}>INCREMENT</button>

      <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
  )
}

export default Counter