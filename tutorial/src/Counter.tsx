import React, { useReducer } from 'react';

type Action = { type: 'INCREASE'} | {type: 'DECREASE'};

function reducer(state:number, action:Action): number {
    switch (action.type) {
        case 'DECREASE':
            return state - 1;
        case 'INCREASE':
            return state + 1;
        default:
            throw new Error('Unhandled action type');
    }

}

function Counter() {
    //const [count, setCount] = useState(0);
    //const onIncrease = () => setCount(count + 1);
    //const onDecrease = () => setCount(count - 1);

    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}> +1 </button>
            <button onClick={onDecrease}> -1 </button>
        </div>
    )
}

export default Counter;