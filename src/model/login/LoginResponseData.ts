interface LoginResponseData {
    id: number,
    token: string
    expired: {
        timestamp: number
    }
}