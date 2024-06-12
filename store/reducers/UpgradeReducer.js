import { GET_UPGRADE_PLANS, GET_UPGRADE_PLANS_FAILURE, GET_UPGRADE_PLANS_SUCCESS } from "../type";

const initialState = {
    loading: false,
    data: null,
    error: null,
    plans: {
        loading: false,
        data: null,
        error: null
    },
};

const UpgradePlansReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UPGRADE_PLANS:
            return {
                ...state,
                plans: {
                    loading: true,
                    data: null,
                    error: null
                },
            };
        case GET_UPGRADE_PLANS_SUCCESS:
            return {
                ...state,
                plans: {
                    loading: false,
                    data: action.payload,
                    error: null
                },
            };
        case GET_UPGRADE_PLANS_FAILURE:
            return {
                ...state,
                plans: {
                    loading: false,
                    data: null,
                    error: action.payload
                },
            };
        default:
            return state;
    }
}

export default UpgradePlansReducer;
