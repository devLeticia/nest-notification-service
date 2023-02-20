import { Injectable } from '@nestjs/common';
import { Notification } from '../entitities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Content } from './../entitities/content';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: ISendNotificationRequest
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category
    });

    // persistir essa notificação no banco de dados
    await this.notificationRepository.create(notification);

    return { notification };
  }
}
