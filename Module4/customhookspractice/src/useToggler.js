import {useState} from "react"


function useToggler(){ 
  const [on, setOn] =  useState(useToggler.defaultOnValue)

  function toggleOn(){ 
      setOn(prevOn => !prevOn)
      
  }

  useToggler.defaultProps = { 
    defaultOnValue: false
}
    return(
        [on, toggleOn]
    )
        
    
}


export default useToggler