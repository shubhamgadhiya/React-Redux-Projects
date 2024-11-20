import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementvalue } from '../Reducer/counter';

function Counter() {

    const count = useSelector((state) => state.counter.count);
        
    const dispatch = useDispatch();

    const [incrementdata, setIncrementdata] = useState(0);

    const add = Number(incrementdata) || 0;


  return (
    <div className="counter-container">
      <h1>Counter Using Redux </h1>
    <p>{count}</p>
    <div>
        <button className='m-2 increment' onClick={() => dispatch(decrement())}>-</button>
        <button className='m-2 decrement' onClick={()=> dispatch(increment())}>+</button>
    </div>
    <div>
        <button  className='m-2 decrement'
        onClick={() => {
            dispatch(reset());
            setIncrementdata(0)
        }}>Reset</button>
    </div>
    <div>
        <input type="number" value={incrementdata} onChange={(e) => setIncrementdata(e.target.value)} />
        <button className='m-2 increment' onClick={() => dispatch(incrementvalue(add))}>Add</button>
    </div>
</div>

  )
}

export default Counter
