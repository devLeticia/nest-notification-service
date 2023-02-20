import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from './../../test/in-memory-notifications-repository';

describe('Send notification', () => {
  it('Should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'example-ceipient-id'
    });

    //expect(notification).toBeTruthy();
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
