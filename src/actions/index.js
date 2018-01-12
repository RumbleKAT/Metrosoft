import * as types from "./ActionTypes";

export function LOADJSON (index){
    return {
        type: types.LOADJSON,
        index
    }
} 

export function TRANSLATE (lang){
    return {
        type: types.TRANSLATE,
        lang
    }
} 