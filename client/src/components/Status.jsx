import React from 'react'

export default function Status({result}) {
    
  return (
   <>
    <div className='card'>
<h1>Created Task:</h1>
<h4>{result.createCount}</h4>
    </div>
    <div className='card'>
<h1>Deleted Task:</h1>
<h4>{result.deleteCount}</h4>
    </div>
    <div className='card'>
<h1>Updated Task:</h1>
<h4>{result.updateCount}</h4>
    </div>
   </>
  )
}
