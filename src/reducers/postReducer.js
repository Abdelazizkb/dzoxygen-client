import {POST_CREATE_SUCCESS,POST_DELETE_FAIL,
    POST_DELETE_SUCCESS,POST_CREATE_FAIL,POST_LOADED_SUCCESS,POST_LOADED_FAIL,POST_DELETED_FAIL
    ,    POST_FILTER_SUCCESS,POST_FILTER_FAIL
} from '../actions/types'


const initialState={
    "posts":[],
}

export default function authReducer(state=initialState,action){
 const{type,payload}=action

 switch(type){
 
    case POST_CREATE_SUCCESS:
       return {
          ...state,
          posts: payload,
        }
    case POST_FILTER_SUCCESS:     
    case POST_LOADED_SUCCESS:
        return {
         ...state,
         posts:payload,
        }
    case POST_FILTER_FAIL:     
    case POST_CREATE_FAIL:
    case POST_LOADED_FAIL:
    case POST_DELETED_FAIL:
        return state
            
    default:
        return state
    } 


 }

