import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/entities/users.entity";
import { Repository } from "typeorm";
import { usersMock } from "./users-mock";
import * as bcrypt from 'bcryptjs'


@Injectable()
export class UsersSeed {
    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) { }



    async seedUsers() {
        for (const user of usersMock) {
            const existingUser = await this.usersRepository.findOne({ where: { email: user.email } })

            if (!existingUser) {
                const hashedPassword = await bcrypt.hash(user.password, 10)

                await this.usersRepository.save({
                    ...user,
                    password: hashedPassword
                })
            }
        }
    }
}