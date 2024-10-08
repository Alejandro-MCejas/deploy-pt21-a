import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service"
import { Users } from "src/entities/users.entity";
import { UserRole } from "./enum/role.enum";



describe('UsersService', () => {
    let service: UsersService;

    const mockUser: Users = {
        id: 'asvf-asdf-asdf-asdf',
        name: 'Alejandro',
        email: 'hVJ9S@example.com',
        password: 'Alejandro123@',
        phone: '9832892',
        country: 'Argentina',
        address: 'Cordoba 530',
        city: 'Cordoba',
        orders: [],
        admin: UserRole.USER
    }

    beforeEach(async () => {
        const mockUsersService: Partial<UsersService> = {
          getUsersService: () => Promise.resolve([]),
          createUserService: () => Promise.resolve(mockUser),
        }

        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersService, {
                provide: UsersService,
                useValue: mockUsersService
            }]
        }).compile();

        service = module.get<UsersService>(UsersService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    it('should be defined and return an array', async () => {
        expect(service.getUsersService).toBeDefined()
        expect(await service.getUsersService(1, 10)).toEqual([])
    })

    it('should be defined and return an object', async () => {
        expect(service.createUserService).toBeDefined()
        expect(await service.createUserService(mockUser)).toEqual(mockUser)
    })
   
})