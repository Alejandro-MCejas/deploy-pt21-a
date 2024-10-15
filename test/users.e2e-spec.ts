import { INestApplication } from "@nestjs/common"
import { Test } from "@nestjs/testing";
import { AppModule } from "src/app.module";

import * as request from 'supertest'

describe('UsersController (e2e)', () => {
    let app: INestApplication;
    let authToken: string;

    beforeEach(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule]
        }).compile()

        app = moduleFixture.createNestApplication()
        await app.init()

        const loginResponse = await request(app.getHttpServer())
            .post('/auth/signin')
            .send({
                email: 'admin@gmail.com',
                password: 'Admin123@'
            })

        

        authToken = loginResponse.body.token;  
        
    })

    afterEach(async () => {
        await app.close()
    })

    it('/users (GET)', async () => {
        const req = await request(app.getHttpServer())
            .get('/users')
            .set('Authorization', `Bearer ${authToken}`)


        expect(req.status).toBe(200)
        expect(req.body).toBeInstanceOf(Array)
    }, 10000)

})