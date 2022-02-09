import React, { useRef } from 'react'

const Shuhru = ({setGuest}) => {
    const btnRef=useRef()
  return (
    <div className='str'>

        <input ref={btnRef} placeholder='enter name' className='nam'/>
        <button  onClick={()=>{btnRef.current.value && setGuest(btnRef.current.value)}} className='strBtn'>Start</button>
    </div>
  )
}

export default Shuhru