import React, { useState } from 'react'

function Valid() {

    const [inputValue , setInputValue]= useState('')

    const[errormessage , setErrorMessage]= useState('')

    const[Password , setInputPassword]= useState('')

    const[error , setError]= useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()

        if (inputValue.trim() === ''){
            setErrorMessage('This field Cannot be empty')
        }
        else if(Password.length === 8){
            setError('')
             window.location.href = '/login'

        }

        else{
            setError('Invalid')
            setErrorMessage('')
        
            
        }
    }

    
  return (
    <div>
        <h1>Valid</h1>
        <form onSubmit={handleSubmit}>

            <label>Username :</label>

            <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/><br></br>

            <label>Password :</label>

            <input type='password'
             value={Password}
              onChange={(e)=> setInputPassword(e.target.value)}/><br></br>

              {error}

            <button type='submit'>Submit</button>

            {errormessage && <p className='error'>{errormessage}</p>}

        </form>
    </div>
  )
  
  }


export default Valid