import { ApiProperty } from "@nestjs/swagger"

export class UploadFileDto {
    @ApiProperty({
        description: 'The name of the file'
    })
    fieldname: string

    @ApiProperty({
        description: 'The original name of the file'
    })
    originalname: string

    @ApiProperty({
        description: 'The mimetype of the file'
    })
    mimetype: string

    @ApiProperty({
        description: 'The size of the file in bytes'
    })
    size: number
    
    @ApiProperty({
        description: 'The buffer of the file'
    })
    buffer: Buffer
}