import React from 'react'

interface propsTyoe {
    title:string;
}

const Heading:React.FC<propsTyoe> = ({title}) => {
  return (
    <div className='text-center text-4xl pb-8'>
      <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  )
}

export default Heading
