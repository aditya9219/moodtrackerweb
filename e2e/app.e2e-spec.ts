import { MoodtrackerPage } from './app.po';

describe('moodtracker App', function() {
  let page: MoodtrackerPage;

  beforeEach(() => {
    page = new MoodtrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
