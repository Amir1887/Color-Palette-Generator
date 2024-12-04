import { useEffect, useState } from "react"


const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(() => {
          setDebouncedValue(value);  //update with the new value after specified time
        }, delay);

        return () => {
            clearTimeout(handler);
        }

    }, [value, delay]);


    return debouncedValue;
}

export default useDebounce;