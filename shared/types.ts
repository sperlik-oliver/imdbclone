export const HTTP_STATUS_CODES = Object.freeze({
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    INTERNAL_SERVER_ERROR: 500
})

export const ERRORS = Object.freeze({
    INTERNAL_SERVER_ERROR: 'Internal server error'
})

export interface ResponseEnvelope<T> {
    data: T | null
    error: string | null
}