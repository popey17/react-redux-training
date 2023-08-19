import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, restet, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {

  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount ] =useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = ()=>{
    setIncrementAmount(0);
    dispatch(restet());
  }

  const addOne = () => {
    dispatch(increment());
  }

  return (
    <section>
      <p>
        { count }
      </p>
      <div>
        <button onClick={addOne}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <input type="text"value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)} />
        <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add amount</button>
        <button onClick={resetAll}>reset</button>
      </div>
    </section>
  )
}

export default Counter