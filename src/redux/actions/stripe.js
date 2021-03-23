import {
    DONATION_STAGING
} from '../types';


// Donation Complete
export const completeDonation = formData => async dispatch => {
    try {
        dispatch({
            type: DONATION_STAGING,
            payload: formData
        })
    } catch (err) {
        
    }
}