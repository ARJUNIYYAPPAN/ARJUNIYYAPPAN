import React from "react"
import {Link} from 'react-router-dom'

function Dashboard(props){

    return(
       <div>
        <h1>Hello {props.name},</h1>
        <h1>your Age is  {props.age}</h1>
       </div>
    )
}
export default Dashboard     