import React, { Children } from 'react'

function Home2({b=20,obj,Children}) {
  return (
    <div>
        This is home 2
        <br/>
        {b}
        <h2 className='bg-blue-400 text-2xl'>this is home 2 heading</h2>
        <br/>
        {obj.name}
        <br />
        {Children}
    </div>
  )
}

export default Home2