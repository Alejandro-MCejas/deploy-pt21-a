import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Response } from "express";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { AuthGuard } from "src/Auth/AuthGuard.guard";



@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    @UseGuards(AuthGuard)
    async getUsersController(@Query('page') page: string = '1', @Query('limit') limit: string = '5', @Res() res: Response) {
        const pageNumber = parseInt(page)
        const limitNumber = parseInt(limit)
        
        const users = await this.usersService.getUsersService(pageNumber, limitNumber)
        return res.status(200).json(users)
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    async getUserByIdController(@Param('id') id: string, @Res() res: Response) {
        const user = await this.usersService.getUserByIdService(Number(id))
        return res.status(200).json(user)
    }

    @Post()
    async createUserController(@Body() user: CreateUserDto, @Res() res: Response) {
        const newUser = await this.usersService.createUserService(user)
        return res.status(201).json({ id: newUser.id })
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateUserController(@Param('id') id: string, @Body() user: UpdateUserDto, @Res() res: Response) {
        const updatedUser = await this.usersService.updateUserService(Number(id), user)
        return res.status(200).json({ id: updatedUser.id })
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteUserController(@Param('id') id: string, @Res() res: Response) {
        const deletedUser = await this.usersService.deleteUserService(Number(id))
        return res.status(200).json({ message: `El usuario con el id ${deletedUser.id} ha sido eliminado` })

    }


}