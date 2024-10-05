import { UserRole } from "src/Users/enum/role.enum";

export const usersMock = [
    {
        "name": "Alejandro Cejas",
        "email": "ale@gmail.com",
        "password": "Alejandro123@",
        "phone": "89437934",
        "country": "Argentina",
        "address": "Cordoba 530",
        "city": "Cordoba",
        "admin": UserRole.USER
    },


    {
        "name": "Alejandro Admin",
        "email": "admin@gmail.com",
        "password": "Admin123@",
        "phone": "328472389",
        "country": "Argentina",
        "address": "Cordoba 530",
        "city": "Cordoba",
        "admin": UserRole.ADMIN
    }
]