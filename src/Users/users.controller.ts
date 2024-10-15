import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Put, Query, Res, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Response } from "express";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { AuthGuard } from "src/Auth/AuthGuard.guard";
import { RoleGuard } from "./RoleGuard.guard";
import { Roles } from "src/decorators/roles.decorator";
import { UserRole } from "./enum/role.enum";
import { ApiBearerAuth, ApiExtraModels, ApiTags } from "@nestjs/swagger";
import { Users } from "src/entities/users.entity";


@ApiTags('Users')
@ApiExtraModels(Users)
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @ApiBearerAuth()
    @Get()
    @UseGuards(AuthGuard, RoleGuard)
    @Roles(UserRole.ADMIN)
    async getUsersController(@Query('page') page: number = 1, @Query('limit') limit: number = 5, @Res() res: Response) {
        
        const users = await this.usersService.getUsersService(page, limit)
        return res.status(200).json(users)
    }

    @ApiBearerAuth()
    @Get(':id')
    @UseGuards(AuthGuard)
    async getUserByIdController(@Param('id', new ParseUUIDPipe()) id: string, @Res() res: Response) {
        const user = await this.usersService.getUserByIdService(id)
        return res.status(200).json(user)
    }

    // @Post()
    // async createUserController(@Body() user: CreateUserDto, @Res() res: Response) {
    //     const newUser = await this.usersService.createUserService(user)
    //     return res.status(201).json({ id: newUser.id })
    // }

    @ApiBearerAuth()
    @Put(':id')
    @UseGuards(AuthGuard)
    async updateUserController(@Param('id', new ParseUUIDPipe()) id: string, @Body() user: UpdateUserDto, @Res() res: Response) {
        const updatedUser = await this.usersService.updateUserService(id, user)
        return res.status(200).json({ id: updatedUser.id })
    }

    @ApiBearerAuth()
    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteUserController(@Param('id', new ParseUUIDPipe()) id: string, @Res() res: Response) {
        const deletedUser = await this.usersService.deleteUserService(id)
        return res.status(200).json({ message: `El usuario con el id ${deletedUser.id} ha sido eliminado` })
    }
}