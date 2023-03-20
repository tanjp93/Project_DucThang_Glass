import {SHOW_LIST_PRODUCT} from './constants';

export const act_showListProduct=(data)=>{
    console.log("Data->> " , data);
    return {
        type: SHOW_LIST_PRODUCT,
        payload:data
    } 
}