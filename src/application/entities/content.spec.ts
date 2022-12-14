import { Content } from "./Content"

describe('Notification content', () => {
  it('should be able to create notification content', () => {
    const content = new Content('You have received a new message!');
 
    expect(content).toBeTruthy();
  });

  it('should not be able to create notification content with less than 5 characters', () => {
    const content = () => new Content('ok');
 
    expect(content).toThrow();
  });

  it('should not be able to create notification content with more than 240 characters', () => {
    const content = () => new Content('a'.repeat(241));
 
    expect(content).toThrow();
  });
});