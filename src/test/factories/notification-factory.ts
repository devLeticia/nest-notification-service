import { Content } from '@application/entitities/content';
import {
  Notification,
  INotification
} from '@application/entitities/notification';

type Override = Partial<INotification>;

export function makeNotification(override: Override = {}) {
  const notification = new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'recipient-1',
    ...override
  });
  return notification;
}
