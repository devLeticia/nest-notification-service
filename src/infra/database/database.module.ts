import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/prisma-notifications-repository';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository
    }
  ],
  exports: [NotificationsRepository]
})
export class DatabaseModule {}
