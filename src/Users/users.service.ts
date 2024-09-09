import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";


@Injectable()
export class UsersService{
    constructor(private usersRepository: UsersRepository){}
    getUsersService(page: number, limit: number){   
        return this.usersRepository.getUsersRepository(page, limit)
    }

    getUserByIdService(id: number){
        
        return this.usersRepository.getUserByIdRepository(id)
    }

    createUserService(user: CreateUserDto){
        
        return this.usersRepository.createUserRepository(user)
    }

    updateUserService(id: number, user: UpdateUserDto){
        return this.usersRepository.updateUserRepository(id, user)
    }

    deleteUserService(id: number){
        return this.usersRepository.deleteUserRepository(id)
    }

}