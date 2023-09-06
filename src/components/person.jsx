import React from 'react'

const Person = ({item ,setOpenTime,openTime}) => {
  return (
    <div onClick={()=>{
      console.log(openTime);
      setOpenTime(!openTime)}}  className='person-parent extraBold'>
        <img src={item.image} alt="" className='img-person'/>
        <div className="name">
            <p className='personName'>{item.name}</p>
            <p className='years'><span>{item.age} </span> years</p>
        </div>
    </div>
  )
}

export default Person