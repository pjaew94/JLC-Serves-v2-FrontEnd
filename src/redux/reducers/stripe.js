import { DONATION_STAGING, EMPTY_DONATION } from "../types";

const initialState = {
  storeInMemory: false,
  amount: null,
  donator: null,
  message: null,
  location: null,
  comment: [],
};

export default function foo(state = initialState, actions) {
  const { payload, type } = actions;

  switch (type) {
    case DONATION_STAGING:
      return {
        storeInMemory: true,
        amount: payload.amount,
        donator: payload.donator,
        message: payload.message,
        location: payload.location,
      };
    case EMPTY_DONATION:
      return { ...state, storeInMemory: false };
    default:
      return state;
  }
}
