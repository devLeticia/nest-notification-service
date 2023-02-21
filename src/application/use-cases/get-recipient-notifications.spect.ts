import { InMemoryNotificationsRepository } from '@test/in-memory-notifications-repository';
import { makeNotification } from './../../test/factories/notification-factory';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notification', () => {
  it('Should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' })
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' })
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' })
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-1'
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 'notification-1' }),
        expect.objectContaining({ id: 'notification-1' })
      ])
    );
  });
});
