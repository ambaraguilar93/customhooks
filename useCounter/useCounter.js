//se usa palabra use para identificar un hook
//un hook es una funcion pero esta tiene un return
import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

    const [ counter, setCounter] = useState( initialValue );

    const increase = () => {
        setCounter( counter + 1 );
    }

    const decrease = () => {
        if ( counter === 0 ) return;
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
 //{} => esas llaves significa que estamos regresando (return) un objeto
 //[] = esto seria un array

        counter,
        increase,
        decrease,
        reset,

    }
}