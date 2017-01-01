import { FamousEmojiPage } from './app.po';

describe('famous-emoji App', function() {
  let page: FamousEmojiPage;

  beforeEach(() => {
    page = new FamousEmojiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
