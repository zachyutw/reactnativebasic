import {INCRE,DECRE,RESET} from '../actions/_template';

const initState = {
    count: 0 
};

export default function reducer( state = initState, action ) {
    switch (action.type) {
        case INCRE:
            return {
                count: state.count +1
            }
        case DECRE:
            return {
                count: state.count -1
            }
        case RESET:
            return {
                count: 0
            }
        default:
            return state
    }
}