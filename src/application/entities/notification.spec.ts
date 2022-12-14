import { Content } from "./Content"
import { Notification } from "./Notification";

describe('Notification', () => {
  it('should be able to create notification', () => {
    const notification = new Notification({
      content: new Content('You have received a new message!'),
      category: 'social',
      recipientId: 'example-recipient-id',
      createdAt: new Date(),
    });
 
    expect(notification).toBeTruthy();
  });

});