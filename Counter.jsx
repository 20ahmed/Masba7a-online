// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decAction, incAction, incBy } from "./Redux/actions/CounterAction";

export default function Counter() {
  // console.log(initCounters);
  // const [count, setCount] = useState(0);
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const handleInc = () => {
    incAction(dispatch);
  };
  const handleDec = () => {
    decAction(dispatch);
  };
  // const handleIncBy = (vl) => {
  //   incBy(dispatch, vl);
  // };

  return (
    <>
      <div
        class="d-flex justify-content-md-center align-items-center vh-100 "
        dir="ltr"
      >
        <div>
          <h1 className="text-center px-3 mb-4 "> مسبحه الكترونيه</h1>

          <h2 className="text-center">{count} </h2>
          <div className="mt-3">
            <button className="btn btn-dark mx-2" onClick={handleInc}>
              سبحان الله
            </button>
            <button className="btn btn-dark mx-2" onClick={handleInc}>
              الله اكبر
            </button>
            <button className="btn btn-dark mx-2" onClick={handleInc}>
              الحمدلله
            </button>
            <button className="btn btn-light around mx-2" onClick={handleDec}>
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
