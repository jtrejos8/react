import { useState } from 'react';

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = state;
    // const [{ counter1, counter2, counter3 }, setCounter] = useState({
    //     counter1: 10,
    //     counter2: 20,
    //     counter3: 30
    // });
    // const [state, setCounter] = useState({
    //     counter1: 10,
    //     counter2: 20,
    //     counter3: 30
    // });

    return (
        <>
            <h1>Counter 1: {counter1} </h1>
            <h1>Counter 2: {counter2} </h1>
            <h1>Counter 3: {counter3} </h1>

            <hr />

            <button
                className='btn'
                onClick={() => setCounter({
                   ...state,
                   counter1: counter1 + 1
                })}
                // onClick={() => setCounter({
                //     counter1: counter1 + 1,
                //     counter2, counter3
                // })}
                // onClick={() => setCounter({
                //     counter1: counter1 + 1,
                //     counter2: counter2,
                //     counter3: counter3
                // })}
                // onClick={() => setCounter({
                //     counter1: counter1 + 1,
                //     counter2: counter2 + 1,
                //     counter3: counter3 + 1
                // })}
                // onClick={() => setCounter(counter1 + 1)}
            > + 1
            </button>
            {/* <button></button> */}
        </>
    )
};
