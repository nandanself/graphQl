import { STATE_KEY } from "../home-config";

export default state => {
    const { homeReducer } = state[STATE_KEY];
    return (homeReducer['isLoading']); 
}