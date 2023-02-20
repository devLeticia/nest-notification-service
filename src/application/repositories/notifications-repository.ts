import { Notification } from '../entitities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
