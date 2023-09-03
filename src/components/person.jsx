import React from 'react'

const Person = ({item}) => {
  return (
    <div className='person-parent'>
        <img src={item.image} alt="" className='img-person'/>
        <div className="name">
            <p>{item.name}</p>
            <p className='years'><span>{item.age}</span>years</p>
        </div>
    </div>
  )
}

export default Person