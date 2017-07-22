import { Urok2HomeworkPage } from './app.po';

describe('urok2-homework App', () => {
  let page: Urok2HomeworkPage;

  beforeEach(() => {
    page = new Urok2HomeworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
