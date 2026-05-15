import { Module } from '@nestjs/common';
import { __ModuleClassName__Service } from './__moduleName__.service';
import { __ModuleClassName__Controller } from './__moduleName__.controller';

@Module({
  controllers: [__ModuleClassName__Controller],
  providers: [__ModuleClassName__Service],
  exports: [__ModuleClassName__Service],
})
export class __ModuleClassName__Module {}
