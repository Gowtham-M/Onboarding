export class User {
    username: string

    password: string

    isAdmin: boolean

    status: string

    constructor(username: string, password: string, isAdmin: boolean, status: string) {
        this.username = username,
        this.password = password,
        this.isAdmin = isAdmin,
        this.status = status
    }
}