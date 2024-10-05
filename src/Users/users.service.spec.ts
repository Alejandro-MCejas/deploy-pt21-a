import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service"



describe('UsersService', () => {
    let service: UsersService;

    beforeEach(async () => {
        const mockUsersService: Partial<UsersService> = {
          getUsersService: jest.fn(),
          getUserByIdService: jest.fn(),
          createUserService: jest.fn(),
          updateUserService: jest.fn(),
          deleteUserService: jest.fn(),
          findUserByEmailService: jest.fn(),
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

    it('getUsersService should be defined', () => {
        expect(service.getUsersService).toBeDefined()
    })

    it('getUserByIdService should be defined', () => {
        expect(service.getUserByIdService).toBeDefined()
    })

    it('createUserService should be defined', () => {
        expect(service.createUserService).toBeDefined()
    })

    it('updateUserService should be defined', () => {
        expect(service.updateUserService).toBeDefined()
    })

    it('deleteUserService should be defined', () => {
        expect(service.deleteUserService).toBeDefined()
    })

    it('findUserByEmailService should be defined', () => {
        expect(service.findUserByEmailService).toBeDefined()
    })
   
})