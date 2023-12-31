import {  useState } from "react";

interface Props {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({initialValue =5 }:Props) => {
// const [counterState, setCounterState] = useState <CounterState>({
    const [{counter, clicks}, setCounterState] = useState <CounterState>({
    counter:initialValue,
    clicks: 0
});

// const {counter, clicks} = counterState;

const handleClick = (countNumber: number) => {
    setCounterState( ({clicks, counter}) => ({
        counter: counter + countNumber,
        clicks: clicks + 1
    }));
}  


return (
    <>
    <h1>Counter By: { counter } </h1>
    <h1>Clicks: {clicks } </h1>

    <button onClick={() => handleClick(1) }>+1</button>
    <button onClick={ ()=> handleClick(5) }>+5</button>
    </>
  )
}
