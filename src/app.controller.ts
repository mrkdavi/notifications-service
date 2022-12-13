import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto'
import { createNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: createNotificationBody) {
    const { content, category, recipientId } = body;
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      }
    })
    return this.prismaService.notification.findMany();
  }
}
