import { combineReducers } from 'redux'
import IceCreamReducer from './IceCream/IceCreamReducer'
import cakeReducer from './cake/cakeReducer'
import userReducer from './users/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer,
    user: userReducer
})

export default rootReducer