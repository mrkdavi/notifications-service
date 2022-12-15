import { Content } from '@application/entities/Content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/Notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('You have received a new message!'),
    category: 'social',
    recipientId: 'recipient-1',
    ...override,
  });
}
