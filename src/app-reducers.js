import { combineReducers } from "redux";

import { 
    HomeReducers,
    config as homeConfig
} from "./containers/Home";

export default combineReducers({
  [homeConfig.STATE_KEY]: HomeReducers
});
