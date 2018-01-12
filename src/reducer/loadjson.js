import * as types from "../actions/ActionTypes";

const initState = {
    index : -1
}

export default function loaddata(state = initState, action){

    if(action.types === types.LOADJSON){
        return { index: action.index };
    }else{
        return state;
    }

}