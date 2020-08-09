export const fillLoginForm = (loginData) => {
    return {
        type: "FILL_LOGIN_FORM",
        loginData
    }

}

export const resetingLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM",
        
    }

}