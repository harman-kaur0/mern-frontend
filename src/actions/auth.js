import * as api from "../api/index.js"

export const signin = (form, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(form);
        dispatch({ type: 'AUTH', data })

    } catch (error) {
        console.log(error)
    }
}

export const signup = (form, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(form);

        dispatch({ type: 'AUTH', data })
    } catch (error) {
        console.log(error)
    }
}