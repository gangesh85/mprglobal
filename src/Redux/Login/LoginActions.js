import { BUY_CAKE, LOGIN } from "./LoginTypes"

export const loginAction = (number = 1) => {
    return {
        type: LOGIN,
        payload: number
    }
}