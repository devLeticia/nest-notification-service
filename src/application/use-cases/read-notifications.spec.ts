import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/in-memory-notifications-repository';
import { ReadNotification } from './read-notification';
import { NotificationNotFound } from './errors/notification-not-found-error';

describe('Read notification', () => {
  it('Should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id
    });

    //expect(notification).toBeTruthy();
    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date)
    );
  });

  it('Should not be able to cancel a  non existing notification ', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id'
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
