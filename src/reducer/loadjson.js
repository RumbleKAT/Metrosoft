import * as types from "../actions/ActionTypes";

import ceointroduce from "../database/CeoIntroduce.json";
import organization from "../database/Organization.json";
import timeline from "../database/Timeline.json";


const InitialState = {
  index: -1,
  object: []
};

const LOADDATA = index => {
//console.log("load DATA : " + index);

  var object = [];

  if (index === -1) {
    //console.log("nothing selected!");
  } else {
    switch (index) {
      case 1:
        object = ceointroduce;
        break;
      case 2:
        object = organization;
        break;
      case 3:
        object = timeline;
        break;
      default:
        break;
    }
  }

  return object;
};

export default function LOADJSON(state = InitialState , action){
  switch (action.type) {
    case types.TIMELINE:
    return { ...state, index: 3, object: LOADDATA(3) };
    default:
      return state;
  }
}
