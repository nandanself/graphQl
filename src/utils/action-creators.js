import forEach from "lodash/forEach";

export const actionCreator = (type,...argkeys) => 
    (...args) => {
        const action = { type };
        forEach(argkeys, (key,index) =>{
            action[key] = args[index];
        });
        return action;
    }