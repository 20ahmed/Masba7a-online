import { DEC, INC, INC_BY } from "../actions/Types";

const CounterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INC:
      console.log(state);
      return { ...state, count: state.count + 1 };

    case DEC:
      return { ...state, count: 0 };

    // case INC_BY:
    //   return { ...state, count: state.count + action.value };
    default:
      return state;
  }
};

export default CounterReducer;
