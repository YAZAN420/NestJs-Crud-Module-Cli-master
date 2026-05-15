import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { __ModuleClassName__Service } from './__moduleName__.service';
import { Create__ClassName__Dto } from './dto/create-__singularName__.dto';
import { Update__ClassName__Dto } from './dto/update-__singularName__.dto';
import {
  CursorPageOptionsDto,
  PageOptionsDto,
} from 'src/common/dtos/pagination';
import { WithRealtionsDto } from 'src/common/dtos/with-realtions.dto';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { __ClassName__ResponseDto } from './dto/__singularName__.response.dto';

@UseInterceptors(new TransformInterceptor(__ClassName__ResponseDto))
@Controller('__moduleName__')
export class __ModuleClassName__Controller {
  constructor(
    private readonly __moduleName__Service: __ModuleClassName__Service,
  ) {}

  @Post()
  create(@Body() create__ClassName__Dto: Create__ClassName__Dto) {
    return this.__moduleName__Service.create(create__ClassName__Dto);
  }

  @Get()
  async findAll(@Query() pageOptionsDto: PageOptionsDto) {
    const result = await this.__moduleName__Service.findAll(pageOptionsDto);
    return {
      message: '__ModuleClassName__ retrieved successfully',
      data: result.data,
      meta: result.meta,
    };
  }

  @Get('cursor')
  async findAllCursor(@Query() cursorOptionsDto: CursorPageOptionsDto) {
    const result =
      await this.__moduleName__Service.findAllCursor(cursorOptionsDto);
    return {
      message: '__ModuleClassName__ retrieved successfully',
      data: result.data,
      meta: result.meta,
    };
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() withRelations?: WithRealtionsDto,
  ) {
    const result = await this.__moduleName__Service.findOne(id, withRelations);
    return {
      message: '__ClassName__ retrieved successfully',
      data: result,
    };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() update__ClassName__Dto: Update__ClassName__Dto,
  ) {
    const result = await this.__moduleName__Service.update(
      id,
      update__ClassName__Dto,
    );
    return {
      message: '__ClassName__ updated successfully',
      data: result,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.__moduleName__Service.remove(id);
    return {
      message: '__ClassName__ removed successfully',
      data: result,
    };
  }
}
