import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";


@Injectable()
export class UsersRepository {
    private users = [
        {
            id: 1,
            email: 'carol.white@example.com',
            name: 'Carol White',
            password: 'pass1234',
            address: '202 Cedar Boulevard',
            phone: '567-890-1234',
            country: 'USA',
            city: 'New York',
        },
        {
            id: 2,
            email: 'david.clark@example.com',
            name: 'David Clark',
            password: 'pass4567',
            address: '303 Birch Street',
            phone: '678-901-2345',
            country: 'USA',
            city: 'Chicago',
        },
        {
            id: 3,
            email: 'eva.miller@example.com',
            name: 'Eva Miller',
            password: 'secure123',
            address: '404 Walnut Way',
            phone: '789-012-3456',
            country: 'Germany',
            city: 'Berlin',
        },
        {
            id: 4,
            email: 'frank.moore@example.com',
            name: 'Frank Moore',
            password: 'strongPass',
            address: '505 Spruce Street',
            phone: '890-123-4567',
            country: 'France',
            city: 'Paris',
        },
        {
            id: 5,
            email: 'george.jones@example.com',
            name: 'George Jones',
            password: 'pass1234',
            address: '606 Pine Street',
            phone: '901-234-5678',
            country: 'UK',
            city: 'London',
        },
        {
            id: 6,
            email: 'harry.brown@example.com',
            name: 'Harry Brown',
            password: 'pass1234',
            address: '707 Oak Street',
            phone: '012-345-6789',
            country: 'USA',
            city: 'New York',
        },
        {
            id: 7,
            email: 'ian.davis@example.com',
            name: 'Ian Davis',
            password: 'pass1234',
            address: '808 Cherry Avenue',
            phone: '123-456-7890',
            country: 'USA',
            city: 'New York',
        },
    ]

    async getUsersRepository(page: number, limit: number) {
        const startIndex = (page - 1) * limit
        const endIndex = startIndex + limit

        const usersWithoutPassword = this.users.map(user => {
            return {
                id: user.id,
                email: user.email,
                name: user.name,
                address: user.address,
                phone: user.phone,
                country: user.country,
                city: user.city
            }
        })



        return usersWithoutPassword.slice(startIndex, endIndex)
    }

    async getUserByIdRepository(id: number) {
        const user = this.users.find(user => user.id === id)
        const userWithoutPassword = {
            id: user.id,
            email: user.email,
            name: user.name,
            address: user.address,
            phone: user.phone,
            country: user.country,
            city: user.city
        }

        return userWithoutPassword
    }

    async createUserRepository(user: CreateUserDto) {

        const newUser = {
            id: this.users.length + 1,
            email: user.email,
            name: user.name,
            password: user.password,
            address: user.address,
            phone: user.phone,
            country: user.country,
            city: user.city
        }

        this.users.push(newUser)


        return newUser
    }

    async updateUserRepository(id: number, user: UpdateUserDto) {
        const updatedUser = this.users.find(user => user.id === id)

        if (!updatedUser) {
            return null
        }

        Object.assign(updatedUser, user)


        return updatedUser
    }

    async deleteUserRepository(id: number) {
        const deletedUser = this.users.find(user => user.id === id)
        this.users = this.users.filter(user => user.id !== id)
        return deletedUser
    }

    async findUserRepository(email: string) {
        return this.users.find(user => user.email === email) 
    }

}