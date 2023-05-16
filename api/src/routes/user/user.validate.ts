const EMAIL_TEST_EXPRESSION = new RegExp('.+\@.+\..+')

export const USER_VALIDATION_ERRORS = Object.freeze({
    INVALID_EMAIL: 'Email is invalid',
    INVALID_CREDENTIALS: 'Email or password is invalid, please try again'
})

export const register = (email: string): string | null => {
    if (!isValidEmail(email)) return USER_VALIDATION_ERRORS.INVALID_EMAIL
    return null
}

export const login = (email: string): string | null => {
    if (!isValidEmail(email)) return USER_VALIDATION_ERRORS.INVALID_EMAIL
    return null    
}




const isValidEmail = (email: string) => EMAIL_TEST_EXPRESSION.test(email)

