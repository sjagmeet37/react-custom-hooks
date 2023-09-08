import { useEffect, useState } from "react";


const useCounter = (forwards = true) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let counter = 1
        if(!forwards) {
            counter = -1;
        }

      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + counter);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);

    return counter;
}

export default useCounter;