export const checkResponseStatus = (response) => {
    return response.status === 200 && !response.body.errorMessage
}