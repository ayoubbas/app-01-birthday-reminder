const RemainingTime = ()=>{
   const birthday = new Date("2023-09-20")
    const dateNow = new Date()
     const TimeDeference = birthday - dateNow

     const days = Math.floor(TimeDeference / (1000*60*60*24) )
     const hours = Math.floor(TimeDeference % (1000*60*60*24)/(1000*60*60) )
     const minutes = Math.floor(TimeDeference % (1000*60*60)/(1000*60) )
     const seconds = Math.floor(TimeDeference % (1000*60) /1000)
     return {
        days,hours ,minutes  ,seconds
     }

}

export default RemainingTime