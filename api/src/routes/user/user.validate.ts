const EMAIL_TEST_EXPRESSION = new RegExp('.+\@.+\..+')

export const USER_VALIDATION_ERRORS = Object.freeze({
    INVALID_USERNAME: 'Username must be between 3 and 15 characters.',
    INVALID_EMAIL: 'Email is invalid.',
    INVALID_CREDENTIALS: 'Email or password is invalid, please try again',
    INVALID_PASSWORD: 'Password must be between 8 and 50 characters',
    NOT_MATCHING_PASSWORDS: 'Passwords do not match'
})

export const register = (username: string, email: string, password: string, confirmPassword: string): string | null => {
    if (!isValidEmail(email)) return USER_VALIDATION_ERRORS.INVALID_EMAIL
    if (!username || username.length < 3 || username.length > 15) return USER_VALIDATION_ERRORS.INVALID_USERNAME
    if (!password || password.length < 8 || password.length > 50) return USER_VALIDATION_ERRORS.INVALID_PASSWORD
    if (password !== confirmPassword) return USER_VALIDATION_ERRORS.NOT_MATCHING_PASSWORDS
    return null
}

export const login = (email: string): string | null => {
    if (!isValidEmail(email)) return USER_VALIDATION_ERRORS.INVALID_EMAIL
    return null    
}




const isValidEmail = (email?: string) => email.length < 100 && email && EMAIL_TEST_EXPRESSION.test(email)

