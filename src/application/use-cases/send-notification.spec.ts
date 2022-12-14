import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";



describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'You have received a new message!',
      category: 'social',
      recipientId: 'example-recipient-id'
    })

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});