export default (message: string, type: 'error' | 'warning' | 'info' = 'error', context?: Record<string, unknown>) => {
    console.log(
        `
        type: ${type}, \n
        message: ${message}, \n
        context: ${context ?? 'N/A'} \n
        `
    )
}