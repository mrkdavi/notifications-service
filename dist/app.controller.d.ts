import { PrismaService } from './prisma.service';
import { createNotificationBody } from './create-notification-body';
export declare class AppController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    list(): import(".prisma/client").PrismaPromise<import(".prisma/client").Notification[]>;
    create(body: createNotificationBody): Promise<import(".prisma/client").Notification[]>;
}
