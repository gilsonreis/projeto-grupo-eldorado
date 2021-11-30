export default interface User {
    status: string
    email: string
    password: string
    data: {
        token: string
    }
}