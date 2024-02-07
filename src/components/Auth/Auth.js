import { useContext, useReducer } from "react";
import { createContext } from "react";
//Story//

const initlaState ={auth:false};
const authContext = createContext(initlaState);

export function reducer(state,action){
    switch(action.type){
        case'login':
        return {auth:true};
        case'logout':
        return{auth:false}
        default:
            throw new Error()
    }
}


//Auth provider//

export function AuthProvider({children}){
   const [authed,dispatch] = useReducer(reducer,initlaState)
return <authContext.Provider value={[authed,dispatch]}>{children}</authContext.Provider>
}



////OWn auth Consumer Hook//

export default function AuthConsumer(){

    return useContext(authContext);

}