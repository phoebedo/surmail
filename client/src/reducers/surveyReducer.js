import { FETCH_SURVEY } from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SURVEY:
            return action.payload ||false;
        default:
            return state;
    }
}