export default class UsersDto {
    constructor(user) {
        this.name = `${user.first_name} ${user.last_name}`
        this.data = `${user.email} ${user.role}`

    }
}