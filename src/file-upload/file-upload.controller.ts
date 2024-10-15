import { Controller, HttpCode, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadPipe } from '../pipes/image-upload/image-upload.pipe';
import { AuthGuard } from '../Auth/AuthGuard.guard';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { UploadFileDto } from './dto/upload-file.dto';

@ApiTags('FilesUpload')
@Controller('files')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService
  ) {}

  @ApiBearerAuth()
  @Post('uploadImage/:id')
  @UseGuards(AuthGuard)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @HttpCode(200)
  @ApiExtraModels(UploadFileDto)
  async uploadFileController(@Param('id') id: string, @UploadedFile(ImageUploadPipe) file: Express.Multer.File){
    return await this.fileUploadService.uploadFileAndLinkToProductService(id, file)
  }
}
