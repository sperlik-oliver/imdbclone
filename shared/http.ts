export const HTTP_STATUS_CODES = Object.freeze({
    OK: 200,
    UNAUTHORIZED: 401,
    INTERNAL_SERVER_ERROR: 500
})

export interface ResponseEnvelope<T> {
    data: T | null
    error: string | null
}