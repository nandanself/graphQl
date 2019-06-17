import { STATE_KEY } from "../home-config";
import * as utils from "../utils";

export default state => {
    const { homeReducer } = state[STATE_KEY];
    return utils.jsonParsing(homeReducer); 
}