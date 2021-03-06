import {
  GET_DONATIONS,
  ADD_COMMENT,
  DONATION_ERROR,
} from "../types";

const initialState = {
  donations: [],
  loading: true,
  error: {},
};

export default function foo(state = initialState, actions) {
  const { type, payload, id, updatedDonations } = actions;

  switch (type) {
    case GET_DONATIONS:
      return {
        ...state,
        donations: payload,
        loading: false,
      };
    case ADD_COMMENT: {
      state.donations.map((donation) => {
        if (donation._id === id) {
          return { ...state.donation, comments: payload };
        }
      });
      return {
        ...state,
        donations: updatedDonations,
        loading: false,
      };
    }
    case DONATION_ERROR: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }

    default:
      return state;
  }
}
