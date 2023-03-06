import { DEC, INC, INC_BY } from "./Types";

export const incAction = async (dispatch) => {
  return dispatch({ type: INC });
};

export const decAction = async (dispatch) => {
  return dispatch({ type: DEC });
};

export const incBy = async (dispatch, vl) => {
  return dispatch({ type: INC_BY, value: vl });
};
