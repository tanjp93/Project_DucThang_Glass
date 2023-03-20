import {SHOW_LIST_PRODUCT} from './constants';

export const showListProduct=(state=[],action)=>{
    switch (action.type) {
        case SHOW_LIST_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}