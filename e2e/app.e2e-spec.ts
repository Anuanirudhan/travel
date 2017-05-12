import { Travel1Page } from './app.po';

describe('travel1 App', () => {
  let page: Travel1Page;

  beforeEach(() => {
    page = new Travel1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
