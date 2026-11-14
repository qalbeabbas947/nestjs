import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';
import { LoggerService } from './dto/user.logger.js';

@Module({
  controllers: [UserController],
  providers: [UserService, LoggerService]
})
export class UserModule {}
