import {
    DONATION_STAGING,
    EMPTY_DONATION
} from '../types';


// Donation Complete
export const stageDonation = formData => async dispatch => {
    try {
        dispatch({
            type: DONATION_STAGING,
            payload: formData
        })
    } catch (err) {
    }
}

export const emptyDonation = () => async dispatch => {
    try {
        dispatch({
            type: EMPTY_DONATION
        })
    } catch (err) {
        
    }
}