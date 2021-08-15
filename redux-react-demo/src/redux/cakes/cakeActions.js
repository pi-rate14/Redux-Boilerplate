import { ADD_CAKE, BUY_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const addCake = () => {
  return {
    type: ADD_CAKE,
  };
};
