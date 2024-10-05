import { Controller, HttpCode, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadPipe } from '../pipes/image-upload/image-upload.pipe';
import { AuthGuard } from '../Auth/AuthGuard.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('FilesUpload')
@Controller('files')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService
  ) {}

  @ApiBearerAuth()
  @Post('uploadImage/:id')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(200)
  async uploadFileController(@Param('id') id: string, @UploadedFile(ImageUploadPipe) file: Express.Multer.File){
    return await this.fileUploadService.uploadFileAndLinkToProductService(id, file)
  }
}
