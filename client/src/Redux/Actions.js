import axios from "axios";
import { FILTER, ORDER } from "./Action_Types";

export const filter_Cards = (diets) => {
  return {
    type: FILTER,
    payload: diets,
  };
};

export const order_Cards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
